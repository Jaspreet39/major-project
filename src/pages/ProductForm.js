import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import firebase from "firebase";
import { Storage } from "../firebase";

function ProductForm() {
  const [name, setName] = useState("");
  const [iphone, setiphone] = useState("");
  const [health, sethealth] = useState("");
  const [bill, setbill] = useState("");
  const [box, setbox] = useState("");
  const [charger, setcharger] = useState("");
  const [heasphone, setheasphone] = useState("");
  const [internalmemory, setinternalmemory] = useState("");
  const [ram, setram] = useState("");
  const [sealed, setsealed] = useState("");
  const [swapkit, setswapkit] = useState("");
  const [refurbished, setrefurbished] = useState("");
  const [sr, setsr] = useState("");
  const [image, setimage] = useState("");
  const [type, settype] = useState("");

  const submit = (e) => {
    var stref = Storage.ref("/Documents/" + image.name).put(image);
    stref.then(function (succ) {
      stref.snapshot.ref.getDownloadURL().then(function (suc) {
        db.collection("MobileDevices")
          .add({
            Devicename: name,
            IPhone: iphone,
            TimeStamp: firebase.firestore.FieldValue.serverTimestamp(),
            detail: {
              BatteryHealth: health,
              Bill: bill,
              Box: box,
              Charger: charger,
              Headphones: heasphone,
              InternalMemory: internalmemory,
              RAM: ram,
              Refurbished: refurbished,
              ScreenReplacement: sr,
              sealed: sealed,
              SwapKit: swapkit,
              image: suc,
              type: type,
            },
          })
          .then(function (sic) {
            alert("Product Added");
            e.target.reset();
          });
      });
    });
  };

  return (
    <div className="h-[100vh] flex flex-col justify-center space-y-4 items-center">
      <h1>add your product</h1>
      <div className="bg-gradient-to-b from-sky-200 to-white w-[40%] mx-auto flex flex-col items-start justify-center space-y-4 px-3 py-4">
        <div className="w-full ">
          <input
            className="min-w-[100%] outline-none px-2 py-2 rounded-md"
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="w-full ">
          <input
            className="min-w-[100%] outline-none px-2 py-2 rounded-md"
            onChange={(e) => setiphone(e.target.value)}
            type="text"
            placeholder="Iphone"
          />
        </div>
        <div className="w-full ">
          <input
            className="min-w-[100%] outline-none px-2 py-2 rounded-md"
            onChange={(e) => sethealth(e.target.value)}
            type="text"
            placeholder="health"
          />
        </div>
        <div className="w-full ">
          <select
            className="min-w-[100%] outline-none px-2 py-2 rounded-md"
            onChange={(e) => setbill(e.target.value)}
          >
            <option value="Yes">Bill</option>
            <option value="Yes">Yes</option>
            <option value="Yes">No</option>
          </select>
        </div>
        <div className="w-full ">
          <input
            className="min-w-[100%] outline-none px-2 py-2 rounded-md"
            onChange={(e) => setbox(e.target.value)}
            type="text"
            placeholder="Box"
          />
        </div>
        <div className="w-full ">
          <select
            className="min-w-[100%] outline-none px-2 py-2 rounded-md"
            onChange={(e) => setcharger(e.target.value)}
          >
            <option value="Yes">Charger</option>
            <option value="Yes">Yes</option>
            <option value="Yes">No</option>
          </select>
        </div>
        <div className="w-full ">
          <select
            className="min-w-[100%] outline-none px-2 py-2 rounded-md"
            onChange={(e) => setheasphone(e.target.value)}
          >
            <option value="Yes">Headphone</option>
            <option value="Yes">Yes</option>
            <option value="Yes">No</option>
          </select>
        </div>
        <div className="w-full ">
          <input
            className="min-w-[100%] outline-none px-2 py-2 rounded-md"
            onChange={(e) => setinternalmemory(e.target.value)}
            type="text"
            placeholder="Internal memory"
          />
        </div>
        <div className="w-full ">
          <input
            className="min-w-[100%] outline-none px-2 py-2 rounded-md"
            onChange={(e) => setram(e.target.value)}
            type="text"
            placeholder="RAM"
          />
        </div>
        <div className="w-full ">
          <select
            className="min-w-[100%] outline-none px-2 py-2 rounded-md"
            onChange={(e) => setsealed(e.target.value)}
          >
            <option value="Yes">Sealed</option>
            <option value="Yes">Yes</option>
            <option value="Yes">No</option>
          </select>
        </div>
        <div className="w-full ">
          <select
            className="min-w-[100%] outline-none px-2 py-2 rounded-md"
            onChange={(e) => setswapkit(e.target.value)}
          >
            <option value="Yes">Swap kit</option>
            <option value="Yes">Yes</option>
            <option value="Yes">No</option>
          </select>
        </div>
        <div className="w-full ">
          <select
            className="min-w-[100%] outline-none px-2 py-2 rounded-md"
            onChange={(e) => setrefurbished(e.target.value)}
          >
            <option value="Yes">Refurbished</option>
            <option value="Yes">Yes</option>
            <option value="Yes">No</option>
          </select>
        </div>
        <div className="w-full ">
          <select
            className="min-w-[100%] outline-none px-2 py-2 rounded-md"
            onChange={(e) => setsr(e.target.value)}
          >
            <option value="Yes">S.R</option>
            <option value="Yes">Yes</option>
            <option value="Yes">No</option>
          </select>
        </div>
        <div className="w-full ">
          <input
            className="min-w-[100%] outline-none px-2 py-2 rounded-md"
            onChange={(e) => setimage(e.target.files[0])}
            type="file"
            placeholder="Name"
          />
        </div>
        <div className="w-full ">
          <input
            className="min-w-[100%] outline-none px-2 py-2 rounded-md"
            onChange={(e) => settype(e.target.value)}
            type="text"
            placeholder="type"
          />
        </div>
        <button
          className="bg-blue-400 px-2 py-4 rounded-md min-w-[250px]"
          onClick={submit}
        >
          submit
        </button>
      </div>
    </div>
  );
}

export default ProductForm;
