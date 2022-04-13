import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Home";
import Members from "./pages/Members";
import Rules from "./pages/Rules";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="home" element={<Dashboard />} />
          <Route path="member" element={<Members />} />
          <Route path="rules" element={<Rules />} />

          {/* OWNER */}
          {/* <PrivateRoute exact path="/transactions" component={Dashboard} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
