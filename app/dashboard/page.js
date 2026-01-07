"use client";

import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (session) fetchNotes();
  }, [session]);

  const fetchNotes = async () => {
    const res = await fetch("/api/notes");
    const data = await res.json();
    setNotes(data);
  };

  const handleAddNote = async (e) => {
    e.preventDefault();
    setError("");
    if (!title || !content) {
      setError("All fields are required");
      return;
    }

    const res = await fetch("/api/notes", {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    if (res.ok) {
      setTitle("");
      setContent("");
      fetchNotes();
    } else {
      setError(data.error);
    }
  };

  const handleDelete = async (id) => {
    const res = await fetch(`/api/notes/${id}`, { method: "DELETE" });
    if (res.ok) fetchNotes();
  };

  const handleEdit = async (id) => {
    const newTitle = prompt("New title");
    const newContent = prompt("New content");
    if (!newTitle || !newContent) return;
    const res = await fetch(`/api/notes/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title: newTitle, content: newContent }),
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) fetchNotes();
  };

  if (status === "loading") return <p>Loading...</p>;

  return (
    <>
      <div className="page">
        <div className="header">
          <h1>Welcome, {session?.user?.email}</h1>
          <button onClick={() => signOut({ callbackUrl: "/login" })}>Logout</button>
        </div>

        <div className="main">
          <div className="form-section">
            <h2>Add a Note</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleAddNote}>
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <button type="submit">Add Note</button>
            </form>
          </div>

          <div className="image-section">
            <Image src="/images (5).jpeg" alt="Dashboard" fill className="side-image" />
          </div>
        </div>

        <div className="notes-section">
          <h2>Your Notes</h2>
          {notes.length === 0 && <p>No notes yet</p>}
          {notes.map((note) => (
            <div key={note._id} className="note">
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <div className="note-actions">
                <button onClick={() => handleEdit(note._id)}>Edit</button>
                <button onClick={() => handleDelete(note._id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; font-family: Arial, sans-serif; }

        .page {
          padding: 40px;
          background: #e0f7e9;
          min-height: 100vh;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
        }

        .header button {
          padding: 10px 20px;
          background: #43a047;
          color: #fff;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }

        .main {
          display: flex;
          gap: 40px;
          align-items: flex-start;
          margin-bottom: 50px;
        }

        .form-section {
          background: #fff;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          flex: 1;
        }

        .form-section h2 {
          margin-bottom: 10px;
        }

        form { display: flex; flex-direction: column; gap: 10px; }
        input, textarea {
          padding: 10px;
          border-radius: 6px;
          border: 1px solid #ccc;
          font-size: 1rem;
        }
        textarea { min-height: 80px; resize: vertical; }

        form button {
          padding: 10px;
          border-radius: 6px;
          border: none;
          background: #2e7d32;
          color: #fff;
          font-weight: bold;
          cursor: pointer;
        }

        .error { color: #d32f2f; font-weight: bold; }

        .image-section {
          flex: 1;
          position: relative;
          min-height: 250px;
        }
        .side-image { object-fit: contain; }

        .notes-section h2 { margin-bottom: 15px; }
        .note {
          background: #fff;
          padding: 15px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.08);
          margin-bottom: 10px;
        }
        .note-actions { margin-top: 10px; display: flex; gap: 10px; }
        .note-actions button {
          padding: 5px 10px;
          border-radius: 5px;
          border: none;
          cursor: pointer;
          font-size: 0.85rem;
        }
        .note-actions button:first-child { background: #1976d2; color: #fff; }
        .note-actions button:last-child { background: #d32f2f; color: #fff; }

        @media (max-width: 900px) {
          .main { flex-direction: column; gap: 20px; }
          .image-section { min-height: 200px; }
        }
      `}</style>
    </>
  );
}
