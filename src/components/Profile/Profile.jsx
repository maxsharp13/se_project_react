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

  
  const userItems = clothingItems.filter(
    (item) =>
      item.owner === currentUser?._id ||
      item.owner?._id === currentUser?._id
  );

  return (
    <section className="profile">
      <SideBar
        user={currentUser}
        onEditProfile={onEditProfile}
        onSignOut={onSignOut}
      />

      <ClothesSection
        clothingItems={userItems} 
        onAddClick={onAddClick}  
        onCardClick={onCardClick}
        onCardLike={onCardLike}
        isLoggedIn={isLoggedIn}
      />
    </section>
  );
}

export default Profile;