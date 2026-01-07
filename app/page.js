"use client";

import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div style={styles.page}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>NextAuth App</div>
        <nav style={styles.nav}>
          <Link href="#features" style={styles.navLink}>Features</Link>
          <Link href="#about" style={styles.navLink}>About</Link>
          <Link href="#contact" style={styles.navLink}>Contact</Link>
          <Link href="/login" style={styles.navButton}>Login</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Secure, Simple, and Fast Authentication</h1>
          <p style={styles.heroSubtitle}>
            Manage your account and notes seamlessly. Sign up and start today!
          </p>
          <div style={styles.heroButtons}>
            <Link href="/register" style={{ ...styles.button, ...styles.register }}>Get Started</Link>
            <Link href="/login" style={{ ...styles.button, ...styles.login }}>Login</Link>
          </div>
        </div>
        <div style={styles.heroImage}>
          <Image src="/OIP (1).webp" alt="Authentication App" fill style={{ objectFit: "contain" }} />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={styles.features}>
        <h2 style={styles.sectionTitle}>Features</h2>
        <div style={styles.featureGrid}>
          <div style={styles.featureCard}>
            <Image src="/download.webp" alt="Secure" width={60} height={60} />
            <h3>Secure Authentication</h3>
            <p>JWT-based authentication ensures your data is safe and secure.</p>
          </div>
          <div style={styles.featureCard}>
            <Image src="/images (5).jpeg" alt="Notes" width={60} height={60} />
            <h3>Personal Notes</h3>
            <p>Organize and manage your notes easily with your private account.</p>
          </div>
          <div style={styles.featureCard}>
            <Image src="/download (1).webp" alt="Responsive" width={60} height={60} />
            <h3>Responsive Design</h3>
            <p>Access your dashboard from any device seamlessly.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={styles.about}>
        <h2 style={styles.sectionTitle}>About NextAuth App</h2>
        <p style={styles.aboutText}>
          NextAuth App is a full-stack application built with Next.js, NextAuth.js, and MongoDB. 
          It provides secure user authentication, personalized dashboards, and note management features.
        </p>
        <Image src="/OIP.webp" alt="About" width={500} height={300} />
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.contact}>
        <h2 style={styles.sectionTitle}>Contact Us</h2>
        <p>Email us at: support@nextauthapp.com</p>
        <p>Phone: +254 700 000 000</p>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>&copy; 2026 NextAuth App. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Internal CSS
const styles = {
  page: { fontFamily: "Arial, sans-serif", color: "#333", lineHeight: 1.6 },
  
  /* Header */
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    background: "#21ba45",
    color: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logo: { fontWeight: "bold", fontSize: "1.5rem" },
  nav: { display: "flex", alignItems: "center", gap: "20px" },
  navLink: { color: "#fff", textDecoration: "none", fontWeight: "bold" },
  navButton: {
    padding: "8px 16px",
    background: "#fff",
    color: "#21ba45",
    borderRadius: "6px",
    fontWeight: "bold",
    textDecoration: "none",
  },

  /* Hero */
  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "80px 40px",
    background: "#e0f7e9",
    gap: "20px",
  },
  heroContent: { flex: 1 },
  heroTitle: { fontSize: "2.5rem", marginBottom: "20px" },
  heroSubtitle: { fontSize: "1.2rem", marginBottom: "30px" },
  heroButtons: { display: "flex", gap: "15px" },
  button: {
    padding: "12px 24px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
    color: "#fff",
    transition: "background 0.3s",
  },
  login: { background: "#0070f3" },
  register: { background: "#21ba45" },
  heroImage: { flex: 1, position: "relative", minHeight: "300px" },

  /* Features */
  features: { padding: "80px 40px", background: "#fff", textAlign: "center" },
  sectionTitle: { fontSize: "2rem", marginBottom: "40px" },
  featureGrid: { display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap" },
  featureCard: {
    background: "#e0f7e9",
    padding: "20px",
    borderRadius: "12px",
    width: "250px",
    textAlign: "center",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  },

  /* About */
  about: { padding: "80px 40px", background: "#f5f5f5", textAlign: "center" },
  aboutText: { maxWidth: "600px", margin: "0 auto 30px" },

  /* Contact */
  contact: { padding: "60px 40px", background: "#21ba45", color: "#fff", textAlign: "center" },

  /* Footer */
  footer: {
    padding: "20px 40px",
    textAlign: "center",
    background: "#333",
    color: "#fff",
  },
};
