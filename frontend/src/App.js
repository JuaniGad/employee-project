import "./App.css";
import Home from "./Home";
import EmployeeViews from "./components/employee/EmployeeViews";

function App() {
  return (
    <main className="container mt-5">
      <Home />

      <EmployeeViews />
    </main>
  );
}

export default App;
