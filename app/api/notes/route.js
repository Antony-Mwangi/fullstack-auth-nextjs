import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/nextAuthOptions"; // correct
import { connectDB } from "@/lib/mongodb";          // correct
import { Note } from "@/models/Note";              // correct if named export

// GET notes for logged-in user
export async function GET(req) {
  await connectDB();
  const session = await getServerSession(authOptions);

  if (!session) return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });

  const notes = await Note.find({ user: session.user.id }).sort({ createdAt: -1 });
  return new Response(JSON.stringify(notes));
}

// POST new note
export async function POST(req) {
  await connectDB();
  const session = await getServerSession(authOptions);

  if (!session) return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });

  const { title, content } = await req.json();
  if (!title || !content) return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });

  const newNote = await Note.create({ user: session.user.id, title, content });
  return new Response(JSON.stringify({ message: "Note created", note: newNote }));
}


