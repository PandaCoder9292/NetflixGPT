import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { AVATARLOGO, LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLang } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handelSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed In
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
      } else {
        // User is signed Out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGtpSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLangChange = (e) => {
    dispatch(changeLang(e.target.value));
  };

  return (
    <div className="absolute px-3 py-2 md:px-8 md:py-2 bg-gradient-to-b from-black z-30 w-full flex justify-between items-center flex-row">
      {/* Small logo on mobile, original w-44 on desktop */}
      <img
        className="w-28 md:w-44 object-contain"
        src={LOGO}
        alt="NetFlix Logo"
      />

      {user && (
        <div className="flex items-center space-x-2 md:space-x-4 p-1 md:p-2 text-white">
          {showGptSearch && (
            <select
              className="rounded-md p-1 md:p-2 bg-gray-900 text-white text-xs md:text-base"
              onChange={handleLangChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-purple-800 py-1 px-2.5 md:py-2 md:px-4 text-xs md:text-base rounded-md cursor-pointer whitespace-nowrap"
            onClick={handleGtpSearchClick}
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
          <img
            className="w-8 h-8 md:w-10 md:h-10 rounded-md cursor-pointer"
            src={AVATARLOGO}
            alt="User-logo"
          />
          <button
            onClick={handelSignOut}
            className="font-bold text-xs md:text-base whitespace-nowrap"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
