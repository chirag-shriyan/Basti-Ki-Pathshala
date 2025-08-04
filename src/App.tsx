import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Volunteer from "./pages/Volunteer";
import About from "./pages/About";

function App() {
    return (
        <>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/volunteer" element={<Volunteer />} />
            </Routes>
        </>
    );
}

export default App;
