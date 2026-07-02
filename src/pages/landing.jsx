import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"

import Card from "../components/Card";
import TodoContainer from "../components/todocontainer";
import Header from "../components/Header";

function Landing() {
  const data = useLocation();
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <Header username={data.state?.user} />
        <div className="flex justify-between gap-3 my-3 flex-wrap">
          <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
          <Card
            bgcolor={"#FD6663"}
            title={now.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            subtitle={now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}
          />
          <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"} />
        </div>
        <TodoContainer/>
      </div>
    </div>
  );
}

export default Landing;
