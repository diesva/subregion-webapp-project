import styled from "styled-components";
import { v } from "../../styles/variables";
import { CardDatosEmpresa } from "../moleculas/CardDatosEmpresa";
export function BannerEmpresa(){
return (<Container>
    <div className="content-wrapper-context">
    <span className="titulo">
        {
            <v.iconoempresa/>
        }
        Nombre de empresa o Almacen
    </span>
    <div className="content-text">Alamcen Ilo - Información de datos</div>
    <ContentCards>
        <CardDatosEmpresa titulo="Moneda" valor="S/."/>
        
        <CardDatosEmpresa titulo="Usuarios" valor="100"/>
    </ContentCards>
    </div>
</Container>);
}
const Container = styled.div`

`;
const ContentCards=styled.div`
display: flex;
gap: 10px;
padding-top: 15px;
cursor: pointer;

`;