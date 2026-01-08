"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    if (!email || !password) {
      setError("All fields are required");
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Registration failed. Try again.");
        setIsSubmitting(false);
        return;
      }

      router.push("/login");
    } catch (err) {
      setError("An unexpected error occurred.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="icon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="17" y1="11" x2="23" y2="11"/></svg>
        </div>
        
        <h2 className="title">Create Account</h2>
        <p className="subtitle">Join us today to start managing your notes securely.</p>

        {error && <div className="error-banner">{error}</div>}

        <form onSubmit={handleSubmit} className="form">
          <div className="input-field">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div className="input-field">
            <label>Password</label>
            <input
              type="password"
              placeholder="Minimum 6 characters"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="reg-btn" disabled={isSubmitting}>
            {isSubmitting ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <p className="footer-text">
          Already have an account?{" "}
          <Link href="/login" className="link">
            Log in here
          </Link>
        </p>
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #e0f0ff 0%, #c0e0ff 100%); /* soft blue gradient */
          padding: 20px;
          font-family: 'Inter', -apple-system, sans-serif;
        }

        .card {
          width: 100%;
          max-width: 420px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          padding: 40px;
          border-radius: 24px;
          box-shadow: 0 15px 35px rgba(63, 81, 181, 0.15); /* subtle blue shadow */
          text-align: center;
          animation: fadeIn 0.4s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .icon-wrapper {
          width: 56px;
          height: 56px;
          background: #3f51b5; /* deep indigo */
          color: white;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          box-shadow: 0 8px 16px rgba(63, 81, 181, 0.2);
        }

        .title {
          font-size: 1.8rem;
          color: #303f9f; /* indigo */
          font-weight: 800;
          margin-bottom: 8px;
        }

        .subtitle {
          color: #555;
          font-size: 0.95rem;
          margin-bottom: 30px;
          line-height: 1.4;
        }

        .error-banner {
          background: #fff0f0; /* soft coral */
          color: #d32f2f;
          padding: 12px;
          border-radius: 10px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 20px;
          border: 1px solid #f8d7da;
        }

        .form {
          display: flex;
          flex-direction: column;
          gap: 18px;
          text-align: left;
        }

        .input-field label {
          font-size: 0.8rem;
          font-weight: 700;
          color: #444;
          margin-bottom: 6px;
          display: block;
          margin-left: 2px;
        }

        .input-field input {
          width: 100%;
          padding: 14px;
          border: 2px solid #d0d7e0; /* light gray border */
          border-radius: 12px;
          font-size: 1rem;
          transition: all 0.2s;
        }

        .input-field input:focus {
          outline: none;
          border-color: #3f51b5; /* indigo focus */
          background: #fff;
          box-shadow: 0 0 0 4px rgba(63, 81, 181, 0.08);
        }

        .reg-btn {
          background: #ff7043; /* coral button */
          color: white;
          padding: 15px;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
          margin-top: 10px;
        }

        .reg-btn:hover:not(:disabled) {
          background: #f4511e; /* darker coral on hover */
          transform: translateY(-1px);
        }

        .reg-btn:disabled {
          background: #999;
          cursor: not-allowed;
        }

        .footer-text {
          margin-top: 25px;
          font-size: 0.9rem;
          color: #555;
        }

        .link {
          color: #3f51b5; /* indigo link */
          font-weight: 700;
          text-decoration: none;
        }

        .link:hover {
          text-decoration: underline;
        }

        /* Mobile Optimization */
        @media (max-width: 480px) {
          .container { background: #fff; align-items: flex-start; }
          .card { box-shadow: none; padding: 20px; background: transparent; }
          .title { font-size: 1.5rem; }
        }
      `}</style>
    </div>
  );
}
