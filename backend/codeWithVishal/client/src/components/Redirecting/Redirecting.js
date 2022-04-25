import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Redirecting = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);
    if (count === 0) {
      navigate("/login");
    }
    return () => clearInterval(interval);
  }, [count, navigate]);
  return <h3 className="m-5">Redirecting you in {count} seconds</h3>;
};

export default Redirecting;
