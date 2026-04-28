import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useForm from "../../hooks/useForm";
import { useEffect } from "react";

function EditProfileModal({ isOpen, onClose, onUpdateUser, currentUser }) {
  const { values, handleChange, resetForm } = useForm({
    name: "",
    avatar: "",
  });

  useEffect(() => {
    if (currentUser && isOpen) {
      handleChange({ target: { name: "name", value: currentUser.name } });
      handleChange({ target: { name: "avatar", value: currentUser.avatar } });
    }
  }, [currentUser, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser(values);
  };

  return (
    <ModalWithForm
      title="Edit Profile"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Save"
    >
      <label className="modal__label">
        Name
        <input
          type="text"
          name="name"
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
          className="modal__input"
          required
          value={values.avatar}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
}

export default EditProfileModal;