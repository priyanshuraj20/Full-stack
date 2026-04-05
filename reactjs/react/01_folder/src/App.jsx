import Card from "./components/Card";

const App = () => {
  return (
    <>
      <div className="parent">
        <Card user="aman" age={18} />
        <Card user="Priyanshu" age={20} />
        <Card />
      </div>
    </>
  );
};

export default App;
