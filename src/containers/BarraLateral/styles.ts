import styled from "styled-components";

export const Aside = styled.aside`
    height: auto;
    padding: 16px 20px;
    background-color: #EEEEEE;
    width: 224px; // Largura fixa em telas grandes
    @media (max-width: 768px) {
        width: 100%;  // Oculpa 100% da largura em telas menores
        padding: 16px 10px;
    }
`
export const Filtros = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    margin-top: 16px;
`
export const Campo = styled.input`
    width: 100%;
    border: 1px solid #666666;
    border-radius: 8px;
    padding: 8px;
    background-color: #fff;
    font-weight: bold;
    color: #666666;
`
export const Button = styled.button`
    background-color: #2F3640;
    margin-right: 8px;
    font-weight: bold;
    font-size: 12px;
    color: #fff;
    padding: 8px 12px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
`