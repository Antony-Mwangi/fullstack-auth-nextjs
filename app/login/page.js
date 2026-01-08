"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    const res = await signIn("credentials", {
      redirect: false, // capture errors
      email,
      password,
    });

    if (res.error) {
      setError(res.error);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome Back</h2>
        <p style={styles.subtitle}>Login to access your dashboard</p>

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
          <button style={styles.button}>Login</button>
        </form>

        <p style={styles.registerText}>
          Don't have an account?{" "}
          <Link href="/register" style={styles.registerLink}>
            Register
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
    background: "linear-gradient(135deg, #f5f0ff, #e0e0ff)", // soft lavender gradient
    fontFamily: "Arial, sans-serif",
  },
  card: {
    width: "350px",
    padding: "40px",
    borderRadius: "16px",
    background: "#ffffff",
    boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
    textAlign: "center",
  },
  title: {
    fontSize: "1.8rem",
    marginBottom: "8px",
    color: "#6a1b9a", // deep purple
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
    borderRadius: "10px",
    border: "1.5px solid #ccc",
    fontSize: "1rem",
    transition: "border 0.3s, box-shadow 0.3s",
  },
  button: {
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    background: "#7b1fa2", // vibrant purple
    color: "#fff",
    fontWeight: "bold",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background 0.3s, transform 0.2s",
  },
  error: {
    color: "#e53935", // bright red for errors
    marginBottom: "10px",
    fontWeight: "bold",
  },
  registerText: {
    marginTop: "20px",
    fontSize: "0.9rem",
    color: "#555",
  },
  registerLink: {
    color: "#ff7043", // coral accent
    fontWeight: "bold",
    textDecoration: "none",
  },
};
