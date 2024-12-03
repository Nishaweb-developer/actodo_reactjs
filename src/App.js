

import Card from "./components/Card";
import TodoContainer from "./components/todocontainer";
import Manageactivity from "./components/manageactivity";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <Header />
        <div className="flex justify-between gap-3 my-3 flex-wrap">

          <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
          <Card bgcolor={"#FD6663"} title={"November 20, 2024"} subtitle={"10:48 AM"} />
          <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"} />

        </div>
        <TodoContainer/> 
       
      </div>
      
    </div>
  );
}

export default App;
