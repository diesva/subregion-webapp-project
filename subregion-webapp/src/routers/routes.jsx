import {Routes,Route } from "react-router-dom";
import { Home } from "../pages/Home/";
import { Login } from "../pages/Login";
import { ProtectedRoute } from "../hooks/ProtectedRoute";
import { UserAuth } from "../context/AuthContext/";
export function MyRoutes() {
    const {user} = UserAuth()
    return(
        <Routes>
            <Route path="https://subregion-webapp-project-77gu-in6o1rupc-diesvas-projects.vercel.app/login" element={<Login />} />
            <Route element={<ProtectedRoute user={user} redirectTo="https://subregion-webapp-project-77gu-in6o1rupc-diesvas-projects.vercel.app/login" />}>
            <Route path="https://subregion-webapp-project-77gu-in6o1rupc-diesvas-projects.vercel.app/" element={<Home />} />
            </Route>
        </Routes>
    )
}