"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      router.push("/login");
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>Register</h2>
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
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: "300px",
    padding: "30px",
    border: "1px solid #ccc",
    borderRadius: "8px",
  },
  input: {
    width: "100%",
    marginBottom: "15px",
    padding: "10px",
  },
  button: {
    width: "100%",
    padding: "10px",
    cursor: "pointer",
  },
};
