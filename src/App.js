import Products from "./Component/Products";
import Details from "./Component/Details";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/details/:id" element={<Details />} />
        </Routes>
    );
}

export default App;