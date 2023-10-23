import db from "@/lib/db";
import Task from "@/models/Task";

export async function GET(req){
    await db.connect()
    try {
        const tasks = await Task.find({});
        return new Response(JSON.stringify(tasks), {status: 201})
    } catch (error) {
        return new Response(JSON.stringify(null), {status: 500})
    }
}

export async function POST(req){
    await db.connect()
    try {
        const body = await req.json()
        const newTask = await Task.create(body)
        return new Response(JSON.stringify(newTask), {status: 201})
    } catch (error) {
        return new Response(JSON.stringify(null), {status: 500})
    }
}