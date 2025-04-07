import styled from "styled-components";
import {Btnsave} from "../moleculas/Btnsave";
import {useAuthStore} from "../../store/AuthStore"
export function HomeTemplate() {
    const {signOut} = useAuthStore();
    return (
        <Container>
            <h1>UPLOAD SERVER - SUB REGION ILO</h1>
            <Btnsave titulo="Cerrar sesion" bgcolor="fff" funcion={signOut}/>
        </Container>
    );
}

// 🔹 Define el Container aquí
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
    background-color:${(props)=>props.theme.bgtotal};
    color: ${({theme})=>theme.text};
    width: 100%;
`;
