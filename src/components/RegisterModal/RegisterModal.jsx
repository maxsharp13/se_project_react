import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useForm from "../../hooks/useForm";

function RegisterModal({ isOpen, onClose, onRegister, onLoginClick }) {
  const { values, handleChange } = useForm({
    name: "",
    avatar: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(values);
  };

  return (
    <ModalWithForm
      title="Sign Up"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Sign Up"
    >
      <label className="modal__label">
        Name
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="modal__input"
          required
          value={values.name}
          onChange={handleChange}
        />
      </label>

      <label className="modal__label">
        Avatar URL
        <input
          type="url"
          name="avatar"
          placeholder="Avatar URL"
          className="modal__input"
          required
          value={values.avatar}
          onChange={handleChange}
        />
      </label>

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

      <div className="modal__actions">
        <button type="submit" className="modal__submit">
          Sign Up
        </button>

        <button type="button" className="modal__switch" onClick={onLoginClick}>
          or Log In
        </button>
      </div>
    </ModalWithForm>
  );
}

export default RegisterModal;
