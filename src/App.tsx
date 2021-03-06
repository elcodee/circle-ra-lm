import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Home";
import Members from "./pages/Members";
import Rules from "./pages/Rules";
import Daftar from "./pages/Daftar";
import RaThr from "./pages/RaThr";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="home" element={<Dashboard />} />
          <Route path="member" element={<Members />} />
          <Route path="rules" element={<Rules />} />
          <Route path="daftar" element={<Daftar />} />
          <Route path="daftar/:referal/:idlm" element={<Daftar />} />
          <Route path="ra-thr" element={<RaThr />} />

          {/* OWNER */}
          {/* <PrivateRoute exact path="/transactions" component={Dashboard} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
