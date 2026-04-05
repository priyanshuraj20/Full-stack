import Button from "./componenets/button/Button";
import Header from "./componenets/header/Header";

const App = () => {
  const btnClick = () => {
    console.log("button has been clicked");
  };
  const dblClick=()=>{
    console.timeLog("Double clikced the button")
  }
  return (
    <div className="bg-red-600 h-full w-full ">
      <button onClick={btnClick} onDoubleClick={dblClick}>click me!</button>
      <button onClick={()=>{
        console.log("hello World!!")
      }}>HEllo world!</button>
      
    </div>
  );
};

export default App;
