import "./LoginModal.css";
import { useState } from "react";

function LoginModal({ isOpen, onClose, onLogin, onRegisterClick }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(form);
  };

  return (
    <div className="modal modal_is-opened" onClick={onClose}>
      <div
        className="modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal__close"
          onClick={onClose}
        />

        <h2 className="modal__title">Log In</h2>

        <form className="modal__form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="modal__input"
            required
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="modal__input"
            required
            value={form.password}
            onChange={handleChange}
          />

          <button type="submit" className="modal__submit">
            Log In
          </button>
        </form>

        <p className="modal__switch">
          Not a member?{" "}
          <button
            className="modal__link"
            onClick={onRegisterClick}
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}

export default LoginModal;