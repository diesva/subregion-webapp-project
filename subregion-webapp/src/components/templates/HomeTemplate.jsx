import styled from "styled-components";

export function HomeTemplate() {
    return (
        <Container>
            <h1>UPLOAD SERVER - SUB REGION ILO</h1>
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
