import React from "react";

export default function DemoOutput(props) {
  console.log("DemoOutPut Running");
  return <p>{props.show ? "This is New!" : ""}</p>;
}
