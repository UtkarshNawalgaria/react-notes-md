import { useState } from "react";
import { useAuth } from "../hooks/auth";

const Settings = ({ functions: { signout } }) => {
  return (
    <div className="fixed bottom-16 left-0 bg-gray-100 shadow-md py-2 rounded-sm w-56 transition duration-1000">
      <ul>
        <li className="py-2 px-4 hover:bg-gray-200">Profile</li>
        <li onClick={signout} className="py-2 px-4 hover:bg-gray-200">
          Signout
        </li>
      </ul>
    </div>
  );
};

const Profile = () => {
  const { user, signout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen((prev) => !prev)}
      className="w-full text-black p-4 shadow-lg cursor-pointer relative bg-gray-200 hover:bg-gray-300 transition duration-1000">
      <div className="flex justify-between">
        {user ? <>{user.username}</> : ""}
      </div>
      {/* <button
        onClick={() => setIsOpen(false)}
        className={`fixed top-0 bottom-0 right-0 w-full h-full bg-red-500 ${
          isOpen ? "block" : "hidden"
        }`}></button> */}
      {isOpen ? <Settings functions={{ signout }} /> : ""}
    </div>
  );
};

export default Profile;
