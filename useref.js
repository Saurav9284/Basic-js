import React, { useRef, useEffect } from "react";

const MyComponent = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} type="text" />;
};

export default MyComponent;
