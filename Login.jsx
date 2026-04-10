import { useState } from "react";
import FormInput from "../components/common/FormInput.jsx";
import PrimaryButton from "../components/common/PrimaryButton.jsx";
import { useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (data.token) {
  localStorage.setItem("token", data.token);
  alert("Login Successful 🎉");
navigate("/dashboard");
window.location.reload(); // 🔥 THIS IS KEY
} else {
        alert(data.msg || "Login failed");
      }

    } catch (error) {
      console.log(error);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-container">

      <div className="login-card">

        <h1 className="login-title" style={{ color: "blue" }}>Welcome Back 👋</h1>
        <p className="login-subtitle">Login to continue Skill Swap</p>

        <form onSubmit={handleLogin}>

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

          <PrimaryButton text={loading ? "Logging in..." : "Login"} />

        </form>

      </div>

      {/* Internal CSS */}
      <style>{`
        .login-container {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #4facfe, #00f2fe);
        }

        .login-card {
          background: white;
          padding: 40px;
          border-radius: 16px;
          width: 350px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          animation: fadeIn 0.6s ease;
        }

        .login-title {
          text-align: center;
          margin-bottom: 5px;
        }

        .login-subtitle {
          text-align: center;
          color: gray;
          margin-bottom: 20px;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        button {
          margin-top: 10px;
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
          .login-card {
            width: 90%;
            padding: 25px;
          }
        }
      `}</style>

    </div>
  );
}

export default Login;