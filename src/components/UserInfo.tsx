import Avatar from "react-avatar";
import { userType } from "../reducer/employee.reducer";
import {
  AtSymbolIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  PhoneIcon,
  UserIcon
} from "@heroicons/react/24/outline";

export const UserInfo = ({ user }: { user: userType }) => {
  return (
    <div className="search-result__content-item" key={user.id}>
      <div className="avatar-container">
        <Avatar name={user.name} size="50" round={true} />
      </div>
      <div className="search-result__info-container">
        <div className="info">
          <UserIcon className="user-icon" /> {user.name}
        </div>
        <div className="info">
          <AtSymbolIcon className="user-icon" />
          {user.email}
        </div>
        <div className="info">
          <PhoneIcon className="user-icon" /> {user.phone}
        </div>
        <div className="info">
          <GlobeAltIcon className="user-icon" /> {user.website}
        </div>
        <div className="info">
          <BuildingOfficeIcon className="user-icon" /> {user.company.name}
        </div>
      </div>
    </div>
  );
};
