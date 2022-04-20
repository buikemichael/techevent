import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventsPage from "./pages/EventsPage";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<EventsPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
