import { OpenAI } from 'openai'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!,
    baseURL: 'https://openrouter.ai/api/v1', // ✅ Important for OpenRouter
})

export async function POST() {
    const prompt = `Write a short and interesting blog post on web development with a catchy title.`

    const completion = await openai.chat.completions.create({
        model: 'mistralai/mistral-7b-instruct', // ✅ Free model on OpenRouter
        messages: [{ role: 'user', content: prompt }],
    })

    return Response.json(completion.choices[0].message)
}
