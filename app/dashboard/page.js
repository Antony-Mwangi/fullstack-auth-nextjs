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
        <header className="header">
          <h1>Welcome, {session?.user?.email.split('@')[0]}</h1>
          <button className="logout-btn" onClick={() => signOut({ callbackUrl: "/login" })}>Logout</button>
        </header>

        <main className="main">
          <section className="form-section">
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
          </section>

          <section className="image-section">
            <Image src="/images (5).jpeg" alt="Dashboard" fill className="side-image" />
          </section>
        </main>

        <section className="notes-section">
          <h2>Your Notes</h2>
          {notes.length === 0 && <p className="empty-state">No notes yet</p>}
          <div className="notes-grid">
            {notes.map((note) => (
              <div key={note._id} className="note-card">
                <h3>{note.title}</h3>
                <p>{note.content}</p>
                <div className="note-actions">
                  <button onClick={() => handleEdit(note._id)}>Edit</button>
                  <button onClick={() => handleDelete(note._id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; font-family: 'Inter', sans-serif; }

        /* Page background */
        .page {
          min-height: 100vh;
          padding: 40px 20px;
          background: linear-gradient(160deg, #f5f0ff, #e0e0ff);
        }

        /* Header */
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
        }
        .header h1 {
          font-size: 1.8rem;
          color: #5e35b1;
          font-weight: 700;
        }
        .logout-btn {
          padding: 10px 20px;
          background: #f06292;
          color: #fff;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          font-weight: 600;
          transition: background 0.2s;
        }
        .logout-btn:hover { background: #c2185b; }

        /* Main section */
        .main {
          display: flex;
          gap: 30px;
          flex-wrap: wrap;
          margin-bottom: 50px;
        }

        .form-section {
          flex: 1;
          min-width: 280px;
          background: #ffffff;
          padding: 25px;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        }
        .form-section h2 {
          margin-bottom: 15px;
          color: #6a1b9a;
        }
        .form-section form {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .form-section input,
        .form-section textarea {
          padding: 12px 14px;
          border-radius: 10px;
          border: 1.5px solid #ccc;
          font-size: 1rem;
          transition: border 0.2s, box-shadow 0.2s;
        }
        .form-section input:focus,
        .form-section textarea:focus {
          outline: none;
          border-color: #7b1fa2;
          box-shadow: 0 0 0 3px rgba(123,31,162,0.15);
        }
        .form-section button {
          padding: 12px;
          border-radius: 10px;
          border: none;
          background: #5e35b1;
          color: #fff;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
        }
        .form-section button:hover {
          background: #4527a0;
          transform: translateY(-1px);
        }
        .error {
          color: #d32f2f;
          font-weight: 600;
          margin-bottom: 8px;
        }

        /* Image section */
        .image-section {
          flex: 1;
          min-width: 250px;
          position: relative;
          min-height: 250px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        }
        .side-image { object-fit: cover; }

        /* Notes section */
        .notes-section h2 {
          margin-bottom: 20px;
          color: #6a1b9a;
        }
        .empty-state {
          background: #fff;
          padding: 20px;
          border-radius: 12px;
          color: #888;
          text-align: center;
          box-shadow: 0 6px 20px rgba(0,0,0,0.05);
        }
        .notes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
        }
        .note-card {
          background: #ffffff;
          padding: 18px;
          border-radius: 12px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.06);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .note-card h3 {
          margin-bottom: 8px;
          color: #7b1fa2;
        }
        .note-card p {
          margin-bottom: 12px;
          color: #555;
          font-size: 0.95rem;
        }
        .note-actions {
          display: flex;
          gap: 10px;
        }
        .note-actions button {
          flex: 1;
          padding: 8px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          font-weight: 500;
          font-size: 0.85rem;
        }
        .note-actions button:first-child { background: #29b6f6; color: #fff; }
        .note-actions button:last-child { background: #ef5350; color: #fff; }

        /* Responsive */
        @media (max-width: 900px) {
          .main { flex-direction: column; gap: 20px; }
          .image-section { min-height: 200px; }
        }
        @media (max-width: 480px) {
          .page { padding: 20px 10px; }
          .form-section, .image-section { min-width: 100%; }
        }
      `}</style>
    </>
  );
}
