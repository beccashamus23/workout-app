//import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Layout from "./Layout";
import Workouts from "./components/Workouts/Workouts";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
