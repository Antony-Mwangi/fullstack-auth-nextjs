
// "use client";

// import { useSession, signOut } from "next-auth/react";
// import { useState } from "react";

// export default function DashboardPage() {
//   const { data: session, status } = useSession();
//   const [notes, setNotes] = useState([]);
//   const [noteInput, setNoteInput] = useState("");

//   if (status === "loading") return <p>Loading...</p>;

//   const addNote = () => {
//     if (noteInput.trim() === "") return;
//     setNotes([...notes, noteInput.trim()]);
//     setNoteInput("");
//   };

//   const deleteNote = (index) => {
//     setNotes(notes.filter((_, i) => i !== index));
//   };

//   return (
//     <div style={styles.container}>
//       <header style={styles.header}>
//         <h1>Notes Dashboard</h1>
//         <p>Logged in as: <strong>{session?.user?.email}</strong></p>
//         <button style={styles.logoutButton} onClick={() => signOut({ callbackUrl: "/login" })}>
//           Logout
//         </button>
//       </header>

//       <section style={styles.notesSection}>
//         <h2>Your Notes</h2>
//         <div style={styles.addNote}>
//           <input
//             type="text"
//             placeholder="Type a new note..."
//             value={noteInput}
//             onChange={(e) => setNoteInput(e.target.value)}
//             style={styles.input}
//           />
//           <button onClick={addNote} style={styles.addButton}>Add Note</button>
//         </div>

//         <ul style={styles.notesList}>
//           {notes.length === 0 && <p style={{ color: "#555" }}>No notes yet</p>}
//           {notes.map((note, i) => (
//             <li key={i} style={styles.noteItem}>
//               {note}
//               <button onClick={() => deleteNote(i)} style={styles.deleteButton}>×</button>
//             </li>
//           ))}
//         </ul>
//       </section>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     padding: "30px",
//     fontFamily: "Arial, sans-serif",
//     maxWidth: "800px",
//     margin: "0 auto",
//   },
//   header: {
//     textAlign: "center",
//     marginBottom: "30px",
//   },
//   logoutButton: {
//     marginTop: "10px",
//     padding: "8px 16px",
//     border: "none",
//     borderRadius: "6px",
//     background: "#43a047",
//     color: "#fff",
//     fontWeight: "bold",
//     cursor: "pointer",
//   },
//   notesSection: {
//     background: "#f9f9f9",
//     padding: "20px",
//     borderRadius: "12px",
//     boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
//   },
//   addNote: {
//     display: "flex",
//     marginBottom: "20px",
//     gap: "10px",
//   },
//   input: {
//     flex: 1,
//     padding: "10px",
//     borderRadius: "8px",
//     border: "1px solid #ccc",
//   },
//   addButton: {
//     padding: "10px 20px",
//     borderRadius: "8px",
//     border: "none",
//     background: "#2e7d32",
//     color: "#fff",
//     fontWeight: "bold",
//     cursor: "pointer",
//   },
//   notesList: {
//     listStyle: "none",
//     padding: 0,
//   },
//   noteItem: {
//     background: "#fff",
//     padding: "12px",
//     borderRadius: "8px",
//     marginBottom: "10px",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
//   },
//   deleteButton: {
//     border: "none",
//     background: "#e53935",
//     color: "#fff",
//     borderRadius: "6px",
//     width: "25px",
//     height: "25px",
//     cursor: "pointer",
//     fontWeight: "bold",
//   },
// };


"use client";

import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";

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

  if (status === "loading") return <p>Loading...</p>;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1>Welcome, {session?.user?.email}</h1>
        <button style={styles.logoutBtn} onClick={() => signOut({ callbackUrl: "/login" })}>
          Logout
        </button>
      </div>

      <div style={styles.formContainer}>
        <h2>Add a Note</h2>
        {error && <p style={styles.error}>{error}</p>}
        <form onSubmit={handleAddNote} style={styles.form}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            style={styles.input}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Content"
            value={content}
            style={styles.textarea}
            onChange={(e) => setContent(e.target.value)}
          />
          <button type="submit" style={styles.button}>
            Add Note
          </button>
        </form>
      </div>

      <div style={styles.notesContainer}>
        <h2>Your Notes</h2>
        {notes.length === 0 && <p>No notes yet</p>}
        {notes.map((note) => (
          <div key={note._id} style={styles.note}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    fontFamily: "Arial, sans-serif",
    background: "#e0f7e9",
    minHeight: "100vh",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "40px",
  },
  logoutBtn: {
    padding: "10px 20px",
    background: "#43a047",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  formContainer: {
    marginBottom: "40px",
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    minHeight: "80px",
  },
  button: {
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    background: "#2e7d32",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
  },
  error: {
    color: "#d32f2f",
    fontWeight: "bold",
  },
  notesContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  note: {
    background: "#fff",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
  },
};
