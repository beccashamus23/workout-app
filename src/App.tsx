//import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Layout from "./Layout";
import Workouts from "./components/Workouts/Workouts";
import Explore from "./components/Explore/Explore";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
