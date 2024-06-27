import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Homework from "./pages/Homework.jsx";
import Materials from "./pages/Materials.jsx";
import Calendar from "./pages/Calendar.jsx";
import Exams from "./pages/Exams.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/homework" element={<Homework />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/exams" element={<Exams />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
