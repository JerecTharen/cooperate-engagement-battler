import { useEffect } from "react";
import ClickListener from "./click-listener";
import { constants } from "./constants";

export default function App() {
  useEffect(() => {
    console.log("content view loaded");
  }, []);

  return <div className="content-view">
    <ClickListener {...constants} />
  </div>;
}
