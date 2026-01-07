"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Error state
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // reset error

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong");
        return;
      }

      router.push("/login");
    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Your Account</h2>
        <p style={styles.subtitle}>Sign up and start managing your account securely.</p>

        {error && <p style={styles.error}>{error}</p>}

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            placeholder="Email"
            required
            style={styles.input}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            style={styles.input}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button style={styles.button}>Register</button>
        </form>

        <p style={styles.loginText}>
          Already have an account?{" "}
          <Link href="/login" style={styles.loginLink}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #e0f7e9, #a8e6cf)",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    width: "350px",
    padding: "40px",
    borderRadius: "12px",
    background: "#ffffff",
    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
    textAlign: "center",
  },
  title: {
    fontSize: "1.8rem",
    marginBottom: "8px",
    color: "#2e7d32", // dark green
  },
  subtitle: {
    fontSize: "0.95rem",
    marginBottom: "20px",
    color: "#555",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  button: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: "#43a047", // vibrant green
    color: "#fff",
    fontWeight: "bold",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  buttonHover: {
    background: "#388e3c",
  },
  error: {
    color: "#d32f2f",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  loginText: {
    marginTop: "20px",
    fontSize: "0.9rem",
    color: "#555",
  },
  loginLink: {
    color: "#2e7d32",
    fontWeight: "bold",
    textDecoration: "none",
  },
};
