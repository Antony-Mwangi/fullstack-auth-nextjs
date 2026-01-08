"use client";

import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <main className="page">
      {/* Hero Section */}
      <section className="hero container">
        <div className="heroText">
          <h1 className="heroTitle">
            Organize Your Notes <br /> <span>Securely & Effortlessly</span>
          </h1>
          <p className="heroSubtitle">
            A modern notes app built with Next.js, NextAuth, and MongoDB.
            Your notes are private, secure, and always available.
          </p>

          <div className="heroButtons">
            <Link href="/register" className="primaryBtn">
              Get Started
            </Link>
            <Link href="/login" className="secondaryBtn">
              Login
            </Link>
          </div>
        </div>

        <div className="heroImage">
          <Image
            src="/images (5).jpeg"
            alt="Notes illustration"
            fill
            className="img-contain"
            priority
          />
        </div>
      </section>

      {/* Features */}
      <section className="features container">
        <h2 className="sectionTitle">Why Choose Next Notes?</h2>

        <div className="featureGrid">
          <div className="card">
            <div className="icon-box">
               <Image src="/download.webp" width={50} height={50} alt="Security" />
            </div>
            <h3>Secure Authentication</h3>
            <p>Protected login using industry-standard authentication.</p>
          </div>

          <div className="card">
             <div className="icon-box">
               <Image src="/images (5).jpeg" width={50} height={50} alt="Notes" />
            </div>
            <h3>Personalized Notes</h3>
            <p>Your notes belong only to you — fully private.</p>
          </div>

          <div className="card">
             <div className="icon-box">
               <Image src="/download (1).webp" width={50} height={50} alt="Responsive" />
            </div>
            <h3>Works Everywhere</h3>
            <p>Access your notes from desktop, tablet, or mobile.</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about">
        <div className="aboutContent container">
          <div className="aboutText-wrapper">
            <h2 className="sectionTitle">Built for Simplicity</h2>
            <p className="aboutText">
              Next Notes is designed to stay out of your way.
              No clutter. No distractions. Just clean note-taking
              with strong security and fast performance.
            </p>
          </div>

          <div className="aboutImage">
            <Image
                src="/OIP.webp"
                alt="About illustration"
                width={420}
                height={260}
                className="rounded-img"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact">
        <div className="contactCard">
          <h2 className="contactTitle">Need Help?</h2>
          <p className="contactText">
            Reach out to us anytime — we’re happy to help.
          </p>

          <div className="contactDetails">
            <div className="contactRow">
              <span>📧</span>
              <a href="mailto:antonymwangiw85@gmail.com">antonymwangiw85@gmail.com</a>
            </div>
            <div className="contactRow">
              <span>📞</span>
              <a href="tel:+254700000000">+254 700 000 000</a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .page {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          color: #1f2937;
          overflow-x: hidden;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Hero Section */
        .hero {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 40px;
          padding: 100px 0;
          min-height: 80vh;
          align-items: center;
          background: linear-gradient(135deg, #e0f7e9 0%, #f0fdf4 100%); /* Apply gradient directly */
          border-radius: 32px;
        }

        .heroTitle {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 24px;
          color: #111827;
        }
        .heroTitle span { color: #22c55e; }

        .heroSubtitle {
          font-size: 1.15rem;
          line-height: 1.7;
          color: #4b5563;
          margin-bottom: 32px;
          max-width: 520px;
        }

        .heroButtons { display: flex; gap: 16px; flex-wrap: wrap; }

        .primaryBtn, .secondaryBtn {
          padding: 14px 32px;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 700;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .primaryBtn { background: #22c55e; color: white; box-shadow: 0 4px 14px rgba(34, 197, 94, 0.3); }
        .secondaryBtn { background: #2563eb; color: white; box-shadow: 0 4px 14px rgba(37, 99, 235, 0.3); }
        .primaryBtn:hover, .secondaryBtn:hover { transform: translateY(-2px); opacity: 0.9; }

        .heroImage { position: relative; width: 100%; height: 400px; }
        .img-contain { object-fit: contain; }

        /* Features Section */
        .features { padding: 100px 20px; text-align: center; }
        .sectionTitle { font-size: 2.25rem; font-weight: 800; margin-bottom: 60px; color: #111827; }

        .featureGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
        }

        .card {
          background: #ffffff;
          padding: 40px 30px;
          border-radius: 24px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          transition: transform 0.3s;
          border: 1px solid #f3f4f6;
        }
        .card:hover { transform: translateY(-10px); }
        .icon-box { margin-bottom: 20px; }
        .card h3 { font-size: 1.25rem; margin-bottom: 12px; color: #111827; }
        .card p { color: #6b7280; font-size: 0.95rem; }

        /* About Section */
        .about { padding: 100px 0; background: #f9fafb; }
        .aboutContent { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .aboutText { font-size: 1.125rem; line-height: 1.8; color: #4b5563; }
        .rounded-img { border-radius: 24px; width: 100%; height: auto; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }

        /* Contact Section */
        .contact {
          padding: 100px 20px;
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
        }
        .contactCard {
          background: #ffffff;
          padding: 50px;
          border-radius: 32px;
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
          box-shadow: 0 30px 60px rgba(0,0,0,0.2);
        }
        .contactTitle { font-size: 2.5rem; margin-bottom: 12px; }
        .contactRow {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            margin-bottom: 12px;
            font-size: 1.1rem;
        }
        .contactRow a { color: #2563eb; text-decoration: none; font-weight: 600; }

        /* Responsive Breakpoints */
        @media (max-width: 968px) {
          .hero, .aboutContent { grid-template-columns: 1fr; text-align: center; }
          .heroText { order: 2; }
          .heroImage { order: 1; height: 300px; }
          .heroSubtitle, .aboutText { margin-left: auto; margin-right: auto; }
          .heroButtons { justify-content: center; }
          .aboutImage { margin-top: 40px; }
        }

        @media (max-width: 480px) {
          .heroTitle { font-size: 2rem; }
          .primaryBtn, .secondaryBtn { width: 100%; text-align: center; }
          .contactCard { padding: 30px 20px; }
          .sectionTitle { font-size: 1.75rem; }
        }
      `}</style>
    </main>
  );
}
