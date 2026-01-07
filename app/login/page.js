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
      setError(res.error); // Invalid password or user not found
    } else {
      router.push("/dashboard"); // Login success
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
  error: {
    color: "#d32f2f",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  registerText: {
    marginTop: "20px",
    fontSize: "0.9rem",
    color: "#555",
  },
  registerLink: {
    color: "#2e7d32",
    fontWeight: "bold",
    textDecoration: "none",
  },
};
