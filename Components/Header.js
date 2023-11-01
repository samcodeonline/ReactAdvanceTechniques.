import React, { useContext } from "react";
import Nav from "./Nav";
import { MyContext } from "@/Helper/Context";

const Header = (props) => {
  const user = useContext(MyContext);

  return <div className="headerStyle">I{user}</div>;
};

export default Header;
