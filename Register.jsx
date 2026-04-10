import { useState } from "react";
import FormInput from "../components/common/FormInput.jsx";
import PrimaryButton from "../components/common/PrimaryButton.jsx";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegister(e) {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
      });

      const data = await res.json();

      if (res.ok) {
        alert("Account Created Successfully 🎉");
        window.location.href = "/login";
      } else {
        alert(data.msg || "Registration failed");
      }

    } catch (error) {
      console.log(error);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="register-container">

      <div className="register-card">

        <h1>🚀 Create Account</h1>
        <p className="subtitle">Start your skill swapping journey</p>

        <form onSubmit={handleRegister}>

          <FormInput
            label="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <FormInput
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <FormInput
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <PrimaryButton text={loading ? "Creating..." : "Register"} />

        </form>

      </div>

      <style>{`

        .register-container {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #0f172a;
        }

        .register-card {
          background: #1e293b;
          padding: 40px;
          border-radius: 16px;
          width: 380px;
          border: 1px solid #334155;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          animation: fadeIn 0.6s ease;
        }

        h1 {
          text-align: center;
          color: #38bdf8;
        }

        .subtitle {
          text-align: center;
          color: #94a3b8;
          margin-bottom: 20px;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 500px) {
          .register-card {
            width: 90%;
            padding: 25px;
          }
        }

      `}</style>

    </div>
  );
}

export default Register;