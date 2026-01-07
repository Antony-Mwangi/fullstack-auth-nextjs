"use client";

import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <main style={styles.page}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroText}>
          <h1 style={styles.heroTitle}>
            Organize Your Notes <br /> Securely & Effortlessly
          </h1>
          <p style={styles.heroSubtitle}>
            A modern notes app built with Next.js, NextAuth, and MongoDB.
            Your notes are private, secure, and always available.
          </p>

          <div style={styles.heroButtons}>
            <Link href="/register" style={styles.primaryBtn}>
              Get Started
            </Link>
            <Link href="/login" style={styles.secondaryBtn}>
              Login
            </Link>
          </div>
        </div>

        <div style={styles.heroImage}>
          <Image
            src="/OIP (1).webp"
            alt="Notes illustration"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
      </section>

      {/* Features */}
      <section style={styles.features}>
        <h2 style={styles.sectionTitle}>Why Choose Next Notes?</h2>

        <div style={styles.featureGrid}>
          <div style={styles.card}>
            <Image src="/download.webp" width={50} height={50} alt="Security" />
            <h3>Secure Authentication</h3>
            <p>Protected login using industry-standard authentication.</p>
          </div>

          <div style={styles.card}>
            <Image src="/images (5).jpeg" width={50} height={50} alt="Notes" />
            <h3>Personalized Notes</h3>
            <p>Your notes belong only to you — fully private.</p>
          </div>

          <div style={styles.card}>
            <Image
              src="/download (1).webp"
              width={50}
              height={50}
              alt="Responsive"
            />
            <h3>Works Everywhere</h3>
            <p>Access your notes from desktop, tablet, or mobile.</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section style={styles.about}>
        <div style={styles.aboutContent}>
          <div>
            <h2 style={styles.sectionTitle}>Built for Simplicity</h2>
            <p style={styles.aboutText}>
              Next Notes is designed to stay out of your way.
              No clutter. No distractions. Just clean note-taking
              with strong security and fast performance.
            </p>
          </div>

          <Image
            src="/OIP.webp"
            alt="About illustration"
            width={420}
            height={260}
            style={{ borderRadius: "12px" }}
          />
        </div>
      </section>

      {/* Contact */}
      <section style={styles.contact}>
        <div style={styles.contactCard}>
          <h2 style={styles.contactTitle}>Need Help?</h2>
          <p style={styles.contactText}>
            Reach out to us anytime — we’re happy to help.
          </p>

          <div style={styles.contactDetails}>
            <p>
              📧 <strong>Email:</strong>{" "}
              <a
                href="mailto:antonymwangiw85@gmail.com"
                style={styles.contactLink}
              >
                antonymwangiw85@gmail.com
              </a>
            </p>
            <p>
              📞 <strong>Phone:</strong>{" "}
              <a
                href="tel:+254700000000"
                style={styles.contactLink}
              >
                +254 700 000 000
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

/* =======================
   Styles
======================= */

const styles = {
  page: {
    fontFamily: "system-ui, -apple-system, sans-serif",
    color: "#1f2937",
  },

  /* Hero */
  hero: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    padding: "100px 60px",
    background: "linear-gradient(135deg, #e0f7e9, #f0fdf4)",
  },
  heroText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  heroTitle: {
    fontSize: "3rem",
    fontWeight: "800",
    marginBottom: "20px",
  },
  heroSubtitle: {
    fontSize: "1.15rem",
    lineHeight: 1.7,
    color: "#374151",
    marginBottom: "32px",
    maxWidth: "520px",
  },
  heroButtons: {
    display: "flex",
    gap: "16px",
  },
  primaryBtn: {
    background: "#22c55e",
    color: "#fff",
    padding: "14px 28px",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "600",
  },
  secondaryBtn: {
    background: "#2563eb",
    color: "#fff",
    padding: "14px 28px",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "600",
  },
  heroImage: {
    position: "relative",
    minHeight: "320px",
  },

  /* Features */
  features: {
    padding: "90px 60px",
    background: "#ffffff",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "2.2rem",
    fontWeight: "700",
    marginBottom: "50px",
  },
  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "30px",
  },
  card: {
    background: "#f9fafb",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
  },

  /* About */
  about: {
    padding: "90px 60px",
    background: "#f3f4f6",
  },
  aboutContent: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    alignItems: "center",
  },
  aboutText: {
    fontSize: "1.1rem",
    lineHeight: 1.7,
    maxWidth: "500px",
  },

  /* Contact (PROFESSIONAL) */
  contact: {
    padding: "80px 40px",
    background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
    display: "flex",
    justifyContent: "center",
  },
  contactCard: {
    background: "#ffffff",
    padding: "40px",
    borderRadius: "18px",
    maxWidth: "520px",
    width: "100%",
    textAlign: "center",
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
  },
  contactTitle: {
    fontSize: "2rem",
    fontWeight: "700",
    marginBottom: "10px",
    color: "#1f2937",
  },
  contactText: {
    color: "#4b5563",
    marginBottom: "25px",
    fontSize: "1.05rem",
  },
  contactDetails: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    fontSize: "1.05rem",
    color: "#1f2937",
  },
  contactLink: {
    color: "#2563eb",
    textDecoration: "none",
    fontWeight: "600",
  },
};
