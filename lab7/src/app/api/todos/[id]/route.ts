import { NextRequest, NextResponse } from 'next/server';
import { updateTodo, deleteTodo } from '../../../../lib/todos';

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const { text } = await request.json();
  const id = parseInt(params.id);
  const todo = updateTodo(id, text);
  if (todo) {
    return NextResponse.json(todo);
  }
  return NextResponse.json({ error: 'Not found' }, { status: 404 });
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  const success = deleteTodo(id);
  if (success) {
    return NextResponse.json({ success: true });
  }
  return NextResponse.json({ error: 'Not found' }, { status: 404 });
}