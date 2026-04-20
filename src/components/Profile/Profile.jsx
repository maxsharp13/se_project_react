import "./Profile.css";
import { useContext } from "react";

import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Profile({
  clothingItems,
  onAddClick,
  onCardClick,
  onCardLike,
  isLoggedIn,
  onEditProfile,
  onSignOut,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <section className="profile">
      <SideBar
        user={currentUser}
        onEditProfile={onEditProfile}
        onSignOut={onSignOut}
      />

      <ClothesSection
        clothingItems={clothingItems}
        onAddClick={onAddClick}
        onCardClick={onCardClick}
        onCardLike={onCardLike}
        isLoggedIn={isLoggedIn}
      />
    </section>
  );
}

export default Profile;
