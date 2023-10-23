import db from "@/lib/db";
import Task from "@/models/Task";

export async function GET(req, ctx){
    await db.connect()
    const id = ctx.params.id
    try {
    const task = await Task.findById(id)
    return new Response(JSON.stringify(task), {status: 200})        
    } catch (error) {
    return new Response(JSON.stringify(null), {status: 500})
    }
}

export async function PUT(req, ctx){
    await db.connect()
    const id = ctx.params.id
    try {
        const body = await req.json()
        const updateTask = await Task.findByIdAndUpdate(id, {$set: {...body}}, {new: true})
        return new Response(JSON.stringify(updateTask), {status: 200})
    } catch (error) {
        return new Response(JSON.stringify(null), {status: 500})
    }
}

export async function DELETE(req, ctx){
    await db.connect()
    const id = ctx.params.id
    try {
        const task = await Task.findById(id)
        await Task.findByIdAndDelete(id)
        return new Response(JSON.stringify({msg: "Deleted"}), {status: 200})
    } catch (error) {
        return new Response(JSON.stringify(null), {status: 500})
    }
}