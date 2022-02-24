import React, { useState } from "react";
type Tlogin = {
  name: string;
  email: string;
};

type LoginProps={
  Component:React.ComponentType
}

const Login = ({Component}:LoginProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<null | Tlogin>(null);
  const handleLogout = () => {
    setIsLoggedIn(null);
  };
  const handleLogIn = () => {
    setIsLoggedIn({
      name: "Murad",
      email: "m@gmail.com",
    });
  };
  return (
    <>
      <div>
        {" "}
        user {isLoggedIn?.name} is {isLoggedIn ? <Component/> : "logout"}
      </div>
      <button onClick={handleLogIn}>Login</button>
      <button onClick={handleLogout}>logout</button>
    </>
  );
};

export default Login;
