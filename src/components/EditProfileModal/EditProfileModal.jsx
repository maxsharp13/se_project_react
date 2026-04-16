import "./EditProfileModal.css";
import { useState, useEffect, useContext } from "react";

import CurrentUserContext from "../../contexts/CurrentUserContext";

function EditProfileModal({ isOpen, onClose, onUpdateProfile }) {
  const currentUser = useContext(CurrentUserContext);

  const [form, setForm] = useState({
    name: "",
    avatar: "",
  });

  useEffect(() => {
    if (currentUser) {
      setForm({
        name: currentUser.name || "",
        avatar: currentUser.avatar || "",
      });
    }
  }, [currentUser, isOpen]);

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
    onUpdateProfile(form);
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

        <h2 className="modal__title">Edit Profile</h2>

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

          <button type="submit" className="modal__submit">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProfileModal;