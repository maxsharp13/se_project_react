import "./SideBar.css";

function SideBar({ user, onEditProfile, onSignOut }) {
  return (
    <div className="sidebar">
      <div className="sidebar__user">
        {user?.avatar ? (
          <img
            src={user.avatar}
            alt="User avatar"
            className="sidebar__avatar"
          />
        ) : (
          <div className="sidebar__avatar-placeholder">
            {user?.name?.[0] || "U"}
          </div>
        )}

        <p className="sidebar__username">
          {user?.name || "User"}
        </p>
      </div>

      <button
        className="sidebar__edit-button"
        onClick={onEditProfile}
      >
        Change profile data
      </button>

      <button
        className="sidebar__logout-button"
        onClick={onSignOut}
      >
        Log out
      </button>
    </div>
  );
}

export default SideBar;