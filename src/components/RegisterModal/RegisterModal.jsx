import "./RegisterModal.css";
import { useState } from "react";

function RegisterModal({ isOpen, onClose, onRegister, onLoginClick }) {
  const [form, setForm] = useState({
    name: "",
    avatar: "",
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
    onRegister(form);
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

        <h2 className="modal__title">Sign Up</h2>

        <form className="modal__form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="modal__input"
            required
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="url"
            name="avatar"
            placeholder="Avatar URL"
            className="modal__input"
            required
            value={form.avatar}
            onChange={handleChange}
          />

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
            Sign Up
          </button>
        </form>

        <p className="modal__switch">
          Already have an account?{" "}
          <button
            className="modal__link"
            onClick={onLoginClick}
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
}

export default RegisterModal;