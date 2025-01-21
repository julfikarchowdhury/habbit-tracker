import Dashboard from "./components/Dashboard";
import "./assets/style.css";
import { HabitProvider } from "./context/HabbitContext";
function App() {
  return (
    <>
      <HabitProvider>
        <Dashboard />
      </HabitProvider>
    </>
  );
}

export default App;
