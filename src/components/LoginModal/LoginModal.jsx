import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useForm from "../../hooks/useForm";

function LoginModal({ isOpen, onClose, onLogin, onRegisterClick }) {
  const { values, handleChange, resetForm } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(values);
    resetForm();
  };

  const handleRegisterClick = () => {
    onClose();
    onRegisterClick();
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
          value={values.email}
          onChange={handleChange}
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
          value={values.password}
          onChange={handleChange}
        />
      </label>

      <button
        type="button"
        className="modal__switch"
        onClick={handleRegisterClick}
      >
        or Sign Up
      </button>
    </ModalWithForm>
  );
}

export default LoginModal;