import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap; 
    gap: 65px; 
    justify-content: flex-start; 
    overflow-y: auto;  /* Permite rolagem vertical */
    max-height: calc(100vh - 40px); /* Garante que a altura seja limitada à altura da tela, descontando o padding */
    padding-right: 10px; /* Espaço para a rolagem não colidir com os cards */
`