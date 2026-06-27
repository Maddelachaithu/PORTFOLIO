/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import { resumeData } from "./src/data/resume.js"; // Note: CJS compilation with esbuild doesn't mind .js or .ts

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-loaded GoogleGenAI client to prevent crash on startup if key is missing
let aiClient: GoogleGenAI | null = null;

function getAiClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY environment variable is not configured. Please add it in the Secrets panel.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// API endpoint for chatbot
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const systemInstruction = `
You are the AI Digital Twin of Maddela Chaitanya Kumar, an elite Cyber Security Student and Future SOC Analyst / Penetration Tester. 
Your purpose is to answer questions from recruiters, hiring managers, and cybersecurity professionals interested in Chaitanya.

Provide highly professional, technically precise, and impressive responses. Be humble yet confident, like an elite professional applying to top security product companies (CrowdStrike, Palo Alto Networks, Google, Microsoft, Cloudflare).

Below is the complete, absolute truth about Chaitanya's resume. Do NOT invent projects, certifications, or experience. Use only this information:
- Full Name: ${resumeData.fullName}
- Title: ${resumeData.title}
- Email: ${resumeData.email}
- Phone: ${resumeData.phone}
- Location: ${resumeData.location}
- LinkedIn: ${resumeData.linkedin}
- GitHub: ${resumeData.github}
- Education: University is ${resumeData.education[0].university}, Degree is ${resumeData.education[0].degree}, Duration is ${resumeData.education[0].duration}, Location is ${resumeData.education[0].location}, GPA is ${resumeData.education[0].gpa || "N/A"}. Coursework and clubs: ${resumeData.education[0].details.join(", ")}.
- Experience:
  ${resumeData.experience.map(exp => `* Role: ${exp.role} at ${exp.company} (${exp.duration}). Responsibilities: ${exp.responsibilities.join("; ")}. Achievements: ${exp.achievements.join("; ")}. Technologies used: ${exp.technologies.join(", ")}.`).join("\n")}
- Key Projects:
  ${resumeData.projects.map(p => `* Project Name: ${p.title} (${p.category}). Problem Statement: ${p.problem}. Solution: ${p.solution}. Key Features: ${p.features.join("; ")}. Challenges: ${p.challenges}. Outcomes: ${p.outcomes}.`).join("\n")}
- Skills:
  ${resumeData.skills.map(cat => `* ${cat.category}: ${cat.skills.map(s => `${s.name} (${s.level}%)`).join(", ")}`).join("\n")}
- Certifications:
  ${resumeData.certifications.map(c => `* ${c.name} by ${c.issuer} (${c.date}), Credential ID: ${c.credentialId || "N/A"}`).join("\n")}
- Achievements:
  ${resumeData.achievements.map(a => `* ${a.title}: ${a.value} (${a.metric}) - ${a.description}`).join("\n")}

Guidelines:
1. Always base your replies strictly on Chaitanya's actual credentials listed above.
2. If asked about a skill or technology that is NOT listed, state honestly that Chaitanya is currently focused on mastering his core strengths but is a rapid learner who is always looking to expand his knowledge base.
3. Keep answers concise, highly structured (using bullet points where helpful), and cyber-themed but professional.
4. If a recruiter asks about setting up an interview, guide them to use the Contact form or email him directly at ${resumeData.email}.
`;

    // Attempt to call Gemini API
    try {
      const ai = getAiClient();
      
      // We map client history (role: 'user' | 'assistant') to Gemini format (role: 'user' | 'model')
      const formattedContents = [];
      if (history && Array.isArray(history)) {
        for (const turn of history) {
          formattedContents.push({
            role: turn.role === "assistant" ? "model" : "user",
            parts: [{ text: turn.content }]
          });
        }
      }
      formattedContents.push({
        role: "user",
        parts: [{ text: message }]
      });

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: formattedContents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        },
      });

      const reply = response.text || "No response generated.";
      return res.json({ reply });
    } catch (apiError: any) {
      console.error("Gemini API Error:", apiError);
      // Fallback response for development environments without key
      const fallbackReplies: { [key: string]: string } = {
        "hello": "Hello! I am Chaitanya's AI Security Twin. (Note: Gemini API is running in mock mode because the API key is not yet set in local environment). I can tell you about my skills in Penetration Testing, Python, and AWS Cloud Security. How can I assist you today?",
        "projects": "I have built several advanced cybersecurity projects, including SentinelAI (an AI-driven Intrusion Detection System using Scapy and Python), CloudGuard (a compliance scanner for AWS/Terraform), and PwnLab (a Dockerized pentesting playground). Which one would you like to hear about?",
        "skills": "My core security competencies include Vulnerability Assessment, Network Packet Forensics (using Wireshark), OWASP Top 10 vulnerabilities, and SIEM monitoring. I am also proficient in Python scripting and AWS security.",
        "certifications": "I hold the AWS Certified Cloud Practitioner certificate, Google Cyber Security Certificate, and have completed training for the Certified Ethical Hacker (CEH) certification.",
        "experience": "I have worked as a Security Research Assistant Intern, performing web security assessments and building Python log parsing automation, and as a Systems Security Trainee managing network assets."
      };
      
      let matchedReply = "I am Chaitanya's AI Security Twin. My live Gemini API engine is currently initializing. Please feel free to ask me about my cybersecurity projects, my experience as an intern, my skills, or how you can contact me directly!";
      const lowerMsg = message.toLowerCase();
      if (lowerMsg.includes("hello") || lowerMsg.includes("hi")) matchedReply = fallbackReplies["hello"];
      else if (lowerMsg.includes("project")) matchedReply = fallbackReplies["projects"];
      else if (lowerMsg.includes("skill") || lowerMsg.includes("tech")) matchedReply = fallbackReplies["skills"];
      else if (lowerMsg.includes("cert") || lowerMsg.includes("credential")) matchedReply = fallbackReplies["certifications"];
      else if (lowerMsg.includes("experience") || lowerMsg.includes("work") || lowerMsg.includes("intern")) matchedReply = fallbackReplies["experience"];

      return res.json({ 
        reply: matchedReply,
        isDemo: true,
        warning: "Gemini API key is missing. Reverting to automated response router."
      });
    }
  } catch (error: any) {
    console.error("Server Route Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Configure Vite middleware or serve static files
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[SYS_INFO] Cybersecurity Portfolio server running on port ${PORT}`);
  });
}

startServer();
