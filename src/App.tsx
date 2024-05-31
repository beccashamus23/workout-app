//import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase";
import Goals from "./components/Goals/Goals";
import AddGoal from "./components/Goals/AddGoal";

function App() {
  //const [authUser] = useAuthState(auth);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/Goals" element={<Goals />} />
        <Route path="/AddGoal" element={<AddGoal />} />
      </Routes>
    </div>
  );
}

export default App;

/*
TS: 40:00
import PageLayout from "./Layouts/PageLayout/PageLayout";

<PageLayout>
			<Routes>
				<Route path='/' element={authUser ? <HomePage /> : <Navigate to='/auth' />} />
				<Route path='/auth' element={!authUser ? <AuthPage /> : <Navigate to='/' />} />
				<Route path='/:username' element={<ProfilePage />} />
			</Routes>
		</PageLayout>*/
