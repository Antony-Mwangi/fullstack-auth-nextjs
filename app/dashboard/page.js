
"use client";

import { useSession, signOut } from "next-auth/react";

export const dynamic = "force-dynamic";

export default function DashboardPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div style={styles.container}>
      <h1>Dashboard</h1>
      <p>Logged in as: <strong>{session?.user?.email}</strong></p>
      <button style={styles.button} onClick={() => signOut({ callbackUrl: "/login" })}>
        Logout
      </button>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    fontFamily: "Arial, sans-serif",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    cursor: "pointer",
    borderRadius: "6px",
    border: "none",
    background: "#0070f3",
    color: "#fff",
    fontWeight: "bold",
  },
};
