import Dice from "./components/Dice/Dice";
import Roller from "./components/Roller/Roller";

function App() {
  return (
    <div className="flex h-screen w-full justify-center gap-10 bg-stone-300">
      <Roller />
    </div>
  );
}

export default App;
