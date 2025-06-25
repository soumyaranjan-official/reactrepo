import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
    const posts = await prisma.post.findMany({
        include: {
            author: true,
            comments: true,
        },
    })

    return NextResponse.json(posts)
}

export async function POST(req: NextRequest) {
    const body = await req.json()

    const { title, content, authorId } = body

    const post = await prisma.post.create({
        data: {
            title,
            content,
            authorId,
        },
    })

    return NextResponse.json(post)
}
