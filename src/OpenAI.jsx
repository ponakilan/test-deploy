const API_KEY =import.meta.env.VITE_API_KEY


import OpenAI from "openai";
const client = new OpenAI({
    apiKey:API_KEY,
    dangerouslyAllowBrowser: true
}
);

export default async function getChatResponse(usermessage) {
    try {
        const completion = await client.chat.completions.create({
            model: "gpt-4o",
            messages: [
                { role: "system", content: "You are a helpful chef assistant. Format the response as HTML with a title, an ingredients list, and step-by-step instructions.But dont include a html tag. and make the size of last sentence big enough." },
                { role: "user", content: usermessage.join(", ") }, 
            ],
        });

        return completion.choices[0].message.content; // AI returns formatted HTML
    } catch (error) {
        console.error("Error fetching AI response:", error);
        return "Error fetching AI response";
    }
}