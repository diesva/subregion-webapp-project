import {Routes,Route } from "react-router-dom";
import { Home } from "../pages/Home/";
import { Login } from "../pages/Login";
import { ProtectedRoute } from "../hooks/ProtectedRoute";
import { UserAuth } from "../context/AuthContext/";
import { useQuery } from "@tanstack/react-query";
import { useUsuariosStore } from "../store/UsuarioStore";
import { SpinnerLoader } from "../components/moleculas/SpinnerLoader";
export function MyRoutes() {
    const {user} = UserAuth();
    const {mostrarUsuarios} = useUsuariosStore();
    const {data,isLoading,error} = useQuery({queryKey:["mostrar usuarios"],queryFn:mostrarUsuarios});
    if (isLoading){
      return <SpinnerLoader />
    }
    return(
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute user={user} redirectTo="/login">
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
  
    )
}