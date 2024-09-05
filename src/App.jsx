import "./App.css";
import EmployeePage from "./Pages/EmployeePage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="flex flex-row gap-1 justify-center mt-5 border-2 w-[60%] mx-auto p-2 border-slate-950 max-w-xl">
      <HomePage />
      <EmployeePage />
    </div>
  );
}

export default App;
