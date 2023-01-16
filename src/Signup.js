import React from "react";

function Signup() {
    return (
      <div>
        <h1>Fill in to become a member!</h1>
        <form>
          <div>
            <input type="text" name="name" placeholder="First and last name" />
          </div>
          <div>
            <input type="text" name="email" placeholder="Email" />
          </div>
          <div> 
            <input type= "text" name="username" placeholder="Username" />
          </div>
          <div> 
            <input type="password" name="password" placeholder="Password" />
          </div>
          <input type="submit" value="Join" />
        </form>
      </div>
    );
  }

  export default Signup;