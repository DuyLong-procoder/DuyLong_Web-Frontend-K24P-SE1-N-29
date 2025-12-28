import { NextRequest, NextResponse } from 'next/server';
import { getTodos, addTodo } from '../../../../lib/todos';

export async function GET() {
  return NextResponse.json(getTodos());
}

export async function POST(request: NextRequest) {
  const { text } = await request.json();
  const newTodo = addTodo(text);
  return NextResponse.json(newTodo);
}