import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema(
  {
    user: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

export const Note = mongoose.models.Note || mongoose.model("Note", NoteSchema);
