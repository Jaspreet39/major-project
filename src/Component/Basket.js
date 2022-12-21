import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import BannerContainer from "./BannerContainer";
import BottomBar from "./BottomBar";
import Header from "./Header";

function Basket() {
  const [check, setCheck] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (auth.currentUser.email) {
      db.collection("basket")
        .doc(auth.currentUser.email)
        .collection("cart")
        .onSnapshot((products) => {
          setCheck(
            products.docs.map((item) => ({
              data: item.data(),
              id: item.id,
            }))
          );
        });
    }
  }, [auth.currentUser.email]);

  const getSearchBook = () => {
    if (search) {
      const newData = check.filter((item) => {
        const textData = search.toLowerCase();
        if (item.data.Devicename.toLowerCase().startsWith(textData)) {
          return item;
        } else if (item.data.IPhone.toLowerCase().startsWith(textData)) {
          return item;
        } else if (item.data?.detail?.type.toLowerCase().startsWith(textData)) {
          return item;
        } else {
          return null;
        }
      });
      setSearchData(newData);
      console.log(newData);
    } else {
      setSearchData([]);
      console.log("no data");
    }
  };

  console.log(check);

  //sixth step
  useEffect(() => {
    getSearchBook();
  }, [search]);

  const removeFromBasket = (e) => {
    if (!auth.currentUser) return;
    db.collection("basket")
      .doc(auth.currentUser.email)
      .collection("cart")
      .doc(e.id)
      .delete();
  };

  return (
    <div>
      <Header />
      <BannerContainer />
      <div className="border max-w-3xl mx-auto border-black rounded-xl my-4">
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="outline-none bg-transparent px-2 py-4 "
          type="text"
          placeholder="search your product..."
        />
      </div>
      <div className="xl:max-w-[90%] md:max-w-[90%] max-w-full mx-auto grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1  space-x-2">
        {search
          ? searchData.map((item) => (
              <div className="xl:w-[350px] md:w-[300px] w-full ">
                <div className="w-full h-[200px] ">
                  <img
                    className="h-full w-full object-contain"
                    src={item.data?.detail?.image}
                    alt=""
                  />
                </div>
                <h1 className="text-4xl text-gray-500">
                  {item.data.Devicename} {item.data.IPhone}{" "}
                  {item.data?.detail?.type}
                </h1>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  quidem similique perferendis nulla sunt earum fugit. Minima
                  eius modi, provident distinctio ducimus dolorem. Incidunt amet
                  quasi odit et, nesciunt dicta.
                </p>
                <p className="text-3xl text-gray-600">1200 $</p>
                <button
                  onClick={() => removeFromBasket(item)}
                  className="text-white bg-gradient-to-r from-gray-700 to-gray-800 px-4 py-2 rounded-xl shadow-md active:scale-90  transition duration-150   hover:shadow-xl text-3xl"
                >
                  Remove from cart
                </button>
              </div>
            ))
          : check.map((item) => (
              <div className="xl:w-[350px] md:w-[300px] w-full ">
                <div className="w-full h-[200px] ">
                  <img
                    className="h-full w-full object-contain"
                    src={item.data?.detail?.image}
                    alt=""
                  />
                </div>
                <h1 className="text-4xl text-gray-500">
                  {item.data.Devicename} {item.data.IPhone}{" "}
                  {item.data?.detail?.type}
                </h1>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  quidem similique perferendis nulla sunt earum fugit. Minima
                  eius modi, provident distinctio ducimus dolorem. Incidunt amet
                  quasi odit et, nesciunt dicta.
                </p>
                <p className="text-3xl text-gray-600">1200 $</p>
                <button
                  onClick={() => removeFromBasket(item)}
                  className="text-white bg-gradient-to-r from-gray-700 to-gray-800 px-4 py-2 rounded-xl shadow-md active:scale-90  transition duration-150   hover:shadow-xl text-3xl"
                >
                  Remove from cart
                </button>
              </div>
            ))}
      </div>
      <BottomBar />
    </div>
  );
}

export default Basket;
