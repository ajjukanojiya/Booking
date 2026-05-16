"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const endpoint = isLogin ? "/api/auth/login" : "/api/auth/register";
    const bodyData = isLogin ? { email, password } : { name, email, password };

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData),
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.message);
        router.push("/pick-up"); // Redirect to Publish Ride start page after login
      } else {
        alert("Error: " + data.error);
      }
    } catch (error) {
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="inner-container">
        <div className="login-bg">
          <div className="title1">Please enter your email and password</div>
          <div className="login-box">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12 col-12 cust_pading_left slidetext_overflow">
                  <div className="brand-text p-0 mb-4">
                    <h4>{isLogin ? "Login" : "Sign Up"}</h4>
                  </div>

                  <form onSubmit={handleSubmit}>
                    {!isLogin && (
                      <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required={!isLogin}
                        />
                      </div>
                    )}
                    
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>

                    {isLogin && (
                      <div className="rgs-txt pt-2">
                        <input type="checkbox" /> Remember me
                      </div>
                    )}
                    
                    <button type="submit" className="quick-btn yellow-btn w-100 mt-3" disabled={loading}>
                      {loading ? "Processing..." : (isLogin ? "Login" : "Sign Up")}
                    </button>

                    <div className="rgs-txt pt-3 text-center">
                      <span 
                        style={{ cursor: "pointer", color: "#007bff", textDecoration: "underline" }}
                        onClick={() => setIsLogin(!isLogin)}
                      >
                        {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
                      </span>
                    </div>

                    {isLogin && (
                      <div className="rgs-txt pt-2 text-center">
                        <Link href="#">Forgot password?</Link>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
