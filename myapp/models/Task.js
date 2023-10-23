import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: [
            'Open',
            'Closed',
            'Progress'
        ]
    }
}, {timestamps: true})

export default mongoose?.models?.Task || mongoose.model("Task", TaskSchema)