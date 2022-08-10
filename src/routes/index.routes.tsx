import { Route, Routes } from "react-router-dom";
import { Pages } from "../pages";

export const RoutesProvider = () => {
    return (
        <Routes>
            <Route path="/" element={<Pages/>}/>
        </Routes>
    );
}