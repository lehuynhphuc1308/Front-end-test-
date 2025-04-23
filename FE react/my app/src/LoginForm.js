import React, { useState } from 'react';
import './login_styles.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Xử lý sự kiện submit của form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5127/Login/CheckLogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });

      const result = await response.json();
      console.log("Kết quả trả về:", result);

      if (result.statusCode === 200) {
        alert("✅ Đăng nhập thành công!");
        // Bạn có thể chuyển hướng trang hoặc lưu token vào localStorage ở đây
      } else {
        alert("❌ Đăng nhập thất bại: Sai tài khoản hoặc mật khẩu");
      }
    } catch (error) {
      console.error("❌ Lỗi kết nối:", error);
      alert("🚫 Không thể kết nối tới server.");
    }
  };

  return (
    <div className="container">
      <div className="left-panel">
        <h1>Seven Cloud</h1>
        <p>
          Giải pháp quản lý khách sạn<br /> hàng đầu Việt Nam
        </p>
        <a href="register.html">
          <button className="sign-up-btn">SIGN UP</button>
        </a>
        <p className="signup-text">
          Don't you have an account? Click <span>SIGN UP</span>
        </p>
      </div>

      <div className="right-panel">
        <h2>Login</h2>
        <form id="loginForm" onSubmit={handleSubmit}>
          <div className="input-box">
            <i className="fas fa-envelope"></i>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-box">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="sign-in-btn">
            SIGN IN
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
