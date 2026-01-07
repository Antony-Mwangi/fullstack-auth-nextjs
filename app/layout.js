import Providers from "./providers";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={styles.body}>
        <Providers>
          {/* HEADER */}
          <header style={styles.header}>
            <div style={styles.logo}>NotesApp</div>
            <nav style={styles.nav}>
              <Link href="/" style={styles.navLink}>Home</Link>
              <Link href="/login" style={styles.navLink}>Login</Link>
              <Link href="/register" style={styles.navButton}>Register</Link>
            </nav>
          </header>

          {/* MAIN CONTENT */}
          <main style={styles.main}>{children}</main>

          {/* FOOTER */}
          <footer style={styles.footer}>
            <p>© 2026 NotesApp. All rights reserved.</p>
          </footer>
        </Providers>
      </body>
    </html>
  );
}

const styles = {
  body: {
    margin: 0,
    fontFamily: "Arial, sans-serif",
    background: "#f5f5f5",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    background: "#21ba45",
    color: "#fff",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  nav: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
  },
  navButton: {
    padding: "8px 16px",
    background: "#fff",
    color: "#21ba45",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold",
  },
  main: {
    minHeight: "calc(100vh - 160px)",
    padding: "40px",
  },
  footer: {
    background: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "20px",
  },
};
