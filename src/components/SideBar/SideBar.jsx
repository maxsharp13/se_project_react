import "./SideBar.css";

function SideBar() {
  return (
    <aside className="sidebar">
      <img
        src="src/assets/Ellipse 18.svg"
        alt="User avatar"
        className="sidebar__avatar"
      />

      <p className="sidebar__username">Jacques Cousteau</p>
    </aside>
  );
}

export default SideBar;
