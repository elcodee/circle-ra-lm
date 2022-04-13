import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Home";
import Members from "./pages/Members";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="home" element={<Dashboard />} />
          <Route path="member" element={<Members />} />

          {/* OWNER */}
          {/* <PrivateRoute exact path="/transactions" component={Dashboard} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
