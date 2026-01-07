"use client";

import Link from "next/link";

export default function LandingPage() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Welcome to NextAuth App</h1>
        <p style={styles.subtitle}>
          Manage your account securely and easily.
        </p>

        <div style={styles.buttonContainer}>
          <Link href="/login" style={styles.button}>
            Login
          </Link>
          <Link href="/register" style={{ ...styles.button, ...styles.register }}>
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

// Internal CSS styles
const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f5f5",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    padding: "40px",
    borderRadius: "12px",
    background: "#fff",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    textAlign: "center",
    maxWidth: "400px",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1rem",
    marginBottom: "30px",
    color: "#555",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
  },
  button: {
    flex: 1,
    padding: "12px 0",
    borderRadius: "8px",
    textDecoration: "none",
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
    background: "#0070f3",
    transition: "background 0.3s",
  },
  register: {
    background: "#21ba45",
  },
};
