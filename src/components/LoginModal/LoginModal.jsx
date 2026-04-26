import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

function LoginModal({ isOpen, onClose, onLogin, onRegisterClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onLogin({
      email,
      password,
    });
  };

  return (
    <ModalWithForm
      title="Log In"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Log In"
    >
      <label className="modal__label">
        Email
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="modal__input"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label className="modal__label">
        Password
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="modal__input"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

  
      <div className="modal__actions">
        <span>or</span>
        <button
          type="button"
          className="modal__switch"
          onClick={() => {
            onClose();
            onRegisterClick();
          }}
        >
          Sign Up
        </button>
      </div>
    </ModalWithForm>
  );
}

export default LoginModal;