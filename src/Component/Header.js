import React, { useEffect, useState } from "react";
import { year, city } from "../Constant/Constant";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function Header() {
  const [user, setUser] = useState(false);
  const [detail, setDetail] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      console.log(userAuth);
      if (userAuth) {
        setUser(true);
        setDetail(userAuth.email);
      } else {
        setUser(false);
        console.log(user);
      }
    });
  }, []);

  const navigate = useNavigate();
  return (
    <div
      className={`w-[100%] h-fit fixed top-0 shadow-m z-10 transition-all duration-1000 ease-in-out shadow-md bg-white`}
    >
      <div className="max-w-[80%] mx-auto flex item-center justify-between">
        <div>
          <h1 onClick={() => navigate("/")} className="text-4xl cursor-pointer">
            My Store
          </h1>
        </div>
        <div className="flex items-center space-x-6">
          {user && (
            <select className="max-h-[30px] py-2 px-4 border border-black">
              <option>Modal Year</option>
              {year.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
          )}
          <h1
            onClick={() => navigate("/page1")}
            className="text-3xl cursor-pointer"
          >
            Buy/Sell
          </h1>
          {user && (
            <select className="max-h-[30px] py-2 px-4 border border-black">
              <option>Location</option>
              {city.map((item) => (
                <option value={item}>{item.city}</option>
              ))}
            </select>
          )}
          <h1
            onClick={() => navigate("/basket")}
            className="text-3xl cursor-pointer"
          >
            Basket
          </h1>
          <h1 className="text-3xl cursor-pointer">About-us</h1>
        </div>
        {!user ? (
          <h1
            className="text-4xl cursor-pointer"
            onClick={() => navigate("/login")}
          >
            SignIn
          </h1>
        ) : (
          <div
            onClick={() => auth.signOut().then(() => navigate("/login"))}
            className="flex items-end space-x-4  cursor-pointer"
          >
            <h1 className="text-4xl">Logout</h1>
            <p className="text-4xl font-bold text-white px-4 py-2 rounded-full bg-black">
              {detail[0].toUpperCase()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
