import { HabitProvider } from "./context/HabbitContext";
import Analytics from "./pages/Analytics";
import { BrowserRouter, Routes } from "react-router";
import { Route } from "react-router";
import Home from "./pages/Home";
function App() {
  return (
    <HabitProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="analytics" element={<Analytics />} />
        </Routes>
      </BrowserRouter>
    </HabitProvider>
  );
}

export default App;
