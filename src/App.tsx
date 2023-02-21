import Card from "./components/Card";
import top from "./assets/bg-pattern-top.svg";
import bottom from "./assets/bg-pattern-bottom.svg";
function App() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen overflow-hidden relative">
      <div className="w-full h-screen">
        <img src={top} alt="" className="absolute right-[51.4%] bottom-[39.06%]" />
        <img src={bottom} alt="" className="absolute left-[48.55%] top-[51.5%]" />
      </div>
      <Card />
    </main>
  );
}

export default App;
