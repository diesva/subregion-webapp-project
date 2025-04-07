import styled from "styled-components";
import {Btnsave} from "../moleculas/Btnsave";
import {useUsuariosStore} from "../../store/UsuarioStore";
import {useMutation} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export function LoginTemplate() {
    const navigate = useNavigate();
    const {insertarUsuarioAdmin} = useUsuariosStore(); 
    const mutationInserUser = useMutation({
        mutationKey:["Insertar usuario Admin"], mutationFn:async()=>{
            const p={
                correo:"pruebas1@gmail.com",
                pass:"ABC123"
            }
            const dt = await insertarUsuarioAdmin(p)
            if (dt){
                navigate("/")
            }
        }
    })

    return (<Container> 
    <Btnsave titulo="Crear cuenta" bgcolor="#fff" funcion = {mutationInserUser.mutateAsync} 
    />
    </Container>);
    
}

const Container =styled.div`
    height: 100vh;

`