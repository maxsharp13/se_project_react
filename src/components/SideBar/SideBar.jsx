import "./SideBar.css";

function SideBar({ user, onEditProfile, onSignOut }) {

  const userInitial = user?.name
    ? user.name[0].toUpperCase()
    : "U";

  return (
    <aside className="sidebar">
      {user?.avatar ? (
        <img
          src={user.avatar}
          alt="User avatar"
          className="sidebar__avatar"
        />
      ) : (
        <div className="sidebar__avatar-placeholder">
          {userInitial}
        </div>
      )}

      <p className="sidebar__username">
        {user?.name || "User"}
      </p>

      <button
        className="sidebar__edit-button"
        onClick={onEditProfile}
      >
        Edit Profile
      </button>

      <button
        className="sidebar__logout-button"
        onClick={onSignOut}
      >
        Sign Out
      </button>
    </aside>
  );
}

export default SideBar;