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
    <div className="">
      <div>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
        />
      </div>
      <div>
        <input
          onChange={(e) => setiphone(e.target.value)}
          type="text"
          placeholder="Iphone"
        />
      </div>
      <div>
        <input
          onChange={(e) => sethealth(e.target.value)}
          type="text"
          placeholder="health"
        />
      </div>
      <div>
        <select onChange={(e) => setbill(e.target.value)}>
          <option value="Yes">Bill</option>
          <option value="Yes">Yes</option>
          <option value="Yes">No</option>
        </select>
      </div>
      <div>
        <input
          onChange={(e) => setbox(e.target.value)}
          type="text"
          placeholder="Box"
        />
      </div>
      <div>
        <select onChange={(e) => setcharger(e.target.value)}>
          <option value="Yes">Charger</option>
          <option value="Yes">Yes</option>
          <option value="Yes">No</option>
        </select>
      </div>
      <div>
        <select onChange={(e) => setheasphone(e.target.value)}>
          <option value="Yes">Headphone</option>
          <option value="Yes">Yes</option>
          <option value="Yes">No</option>
        </select>
      </div>
      <div>
        <input
          onChange={(e) => setinternalmemory(e.target.value)}
          type="text"
          placeholder="Internal memory"
        />
      </div>
      <div>
        <input
          onChange={(e) => setram(e.target.value)}
          type="text"
          placeholder="RAM"
        />
      </div>
      <div>
        <select onChange={(e) => setsealed(e.target.value)}>
          <option value="Yes">Sealed</option>
          <option value="Yes">Yes</option>
          <option value="Yes">No</option>
        </select>
      </div>
      <div>
        <select onChange={(e) => setswapkit(e.target.value)}>
          <option value="Yes">Swap kit</option>
          <option value="Yes">Yes</option>
          <option value="Yes">No</option>
        </select>
      </div>
      <div>
        <select onChange={(e) => setrefurbished(e.target.value)}>
          <option value="Yes">Refurbished</option>
          <option value="Yes">Yes</option>
          <option value="Yes">No</option>
        </select>
      </div>
      <div>
        <select onChange={(e) => setsr(e.target.value)}>
          <option value="Yes">S.R</option>
          <option value="Yes">Yes</option>
          <option value="Yes">No</option>
        </select>
      </div>
      <div>
        <input
          onChange={(e) => setimage(e.target.files[0])}
          type="file"
          placeholder="Name"
        />
      </div>
      <div>
        <input
          onChange={(e) => settype(e.target.value)}
          type="text"
          placeholder="type"
        />
      </div>
      <button onClick={submit}>submit</button>
    </div>
  );
}

export default ProductForm;
