import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
const EstiloGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
        font-weight: 400;
    }

`
export default EstiloGlobal

export const Container = styled.div`
    display: grid;
    grid-template-columns: 224px auto;
    grid-gap: 107px;
    height: 100vh; /* Garante que o Container ocupe toda a altura da tela */
    overflow: hidden; /* Impede o conteúdo de ultrapassar o tamanho total */
    
    @media(max-width: 768px){
        grid-template-columns: 1fr;
        grid-gap: 20px;
    }
`
export const MainContainer = styled.main`
    padding: 0 40px;
    height: 100vh;
    overflow-y: scroll;
`