import styled from "styled-components";
import {Btnsave} from "../moleculas/Btnsave";
import {useUsuariosStore} from "../../store/UsuarioStore";
import {useMutation} from "@tanstack/react-query";

export function LoginTemplate() {
    const mutation = useMutation({
        mutationKey:["Insertar usuario Admin"], mutationFn:async()=>{
            await insertarUsuarioAdmin()
        }
    })

    return (<Container> 
    <Btnsave titulo="Crear cuenta" bgcolor="#fff"/>
    </Container>);
    
}

const Container =styled.div`
    height: 100vh;

`