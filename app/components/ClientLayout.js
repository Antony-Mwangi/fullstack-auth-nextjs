"use client"; // This is the key!

import Link from "next/link";

export default function ClientLayout({ children }) {
  return (
    <div className="layout-wrapper">
      {/* HEADER */}
      <header className="header">
        <div className="container header-content">
          <Link href="/" className="logo">NotesApp</Link>
          <nav className="nav">
            <Link href="/" className="navLink">Home</Link>
            <Link href="/login" className="navLink">Login</Link>
            <Link href="/register" className="navButton">Register</Link>
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="main">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <p>© 2026 NotesApp. Secure & Private. All rights reserved.</p>
        </div>
      </footer>

      <style jsx global>{`
        * { box-sizing: border-box; }
        body {
          margin: 0;
          padding: 0;
          font-family: 'Inter', system-ui, sans-serif;
          background: #f9fafb;
        }
        .layout-wrapper { display: flex; flex-direction: column; min-height: 100vh; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .header { background: #21ba45; color: #fff; padding: 15px 0; position: sticky; top: 0; z-index: 1000; }
        .header-content { display: flex; justify-content: space-between; align-items: center; }
        .logo { font-size: 1.5rem; font-weight: 800; color: white; text-decoration: none; }
        .nav { display: flex; gap: 25px; align-items: center; }
        .navLink { color: rgba(255, 255, 255, 0.9); text-decoration: none; font-weight: 600; }
        .navButton { padding: 10px 20px; background: #fff; color: #21ba45; border-radius: 10px; text-decoration: none; font-weight: 700; }
        .main { flex-grow: 1; width: 100%; }
        .footer { background: #1f2937; color: #9ca3af; text-align: center; padding: 30px 0; margin-top: auto; }

        @media (max-width: 640px) {
          .header-content { flex-direction: column; gap: 15px; }
          .nav { gap: 15px; width: 100%; justify-content: center; }
        }
      `}</style>
    </div>
  );
}