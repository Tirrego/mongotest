import { NextResponse } from 'next/server'

import connectToDatabase from '@/lib/mongoose';
import Todo from '@/models/todo';

export  async function GET(req, res) {
    await connectToDatabase();
    const todos = await Todo.find();
    return NextResponse.json(todos)
}

export  async function POST(req, res) {
    await connectToDatabase();
    const todo = await req.json();
    new Todo(todo).save();
    return NextResponse.json(todo)
}

export  async function DELETE(req, res) {
    await connectToDatabase();
    const id = await req.json();
    const deletetdTodo = await Todo.findByIdAndDelete(id);
    return NextResponse.json(deletetdTodo)
}


