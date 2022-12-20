import React from "react";

export default function Form() {
  return (
    <>
      <form className="form-group">
        <br></br>
        <div class="container col-lg-6">
          <label for="fname">
            <b>Full Name</b>
          </label>
          <input
            className="fname"
            type="text"
            placeholder="Enter Full Name"
            name="fname"
          />
          <br></br>
          <br></br>
          <label for="uname">
            <b>Username</b>
          </label>
          <input type="text" placeholder="Enter Username" name="uname" />
          <br></br>
          <br></br>

          <label for="ps">
            <b>Password</b>
          </label>
          <input
            className="ps"
            type="password"
            placeholder="Enter Password"
            name="ps"
          />
          <br></br>
          <br></br>
          <label for="cpsw">
            <b> CPassword</b>
          </label>
          <input type="password" placeholder="Confirm Password" name="cpsw" />
          <br></br>
          <br></br>
          <label for="cn">
            <b>Contat No.</b>
          </label>
          <input type="number" placeholder="Contact Number" name="cn" />
          <br></br>

          <button classname="btn btn-danger" type="submit">
            Login
          </button>
          <label>
            <br></br>
            <br></br>
            <input type="checkbox" checked="checked" name="remember" /> Remember
            me
          </label>
        </div>
      </form>
    </>
  );
}
