import React, { useEffect, useRef } from "react";

const UseRefComp = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <>
      <div>UseRef</div>
      <input type="text" ref={inputRef} />
    </>
  );
};

export default UseRefComp;
