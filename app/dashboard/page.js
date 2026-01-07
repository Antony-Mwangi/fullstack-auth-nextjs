"use client";

import { signOut, useSession } from "next-auth/react";

export default function DashboardPage() {
  const { data: session } = useSession();

  return (
    <div style={styles.container}>
      <h1>Dashboard</h1>
      <p>Welcome, {session?.user?.email}</p>
      <button onClick={() => signOut({ callbackUrl: "/login" })}>
        Logout
      </button>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
  },
};
