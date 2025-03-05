import styled from "styled-components";
import variaveis from "../../styles/variaveis";
export const Container = styled.div`
    margin-top: 19px;
    @media (max-width: 768px) {
        margin: 0 auto;
    }
`

export const Card = styled.div`
    max-width: 230px;
    height: 247px;
    padding: 20px;
    border-radius: 20px;
    background-color: #EEEEEE ;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 768px) {
        max-width: 100%;  // Faz o card ocupar toda a largura da tela
        height: auto;     // Ajusta a altura automaticamente
    }

`
export const FirstItens = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    position: relative;
    @media (max-width: 768px) {
        align-items: flex-start; // Ajusta o alinhamento dos itens no card
    }
`
export const TutorImage = styled.img`
    max-width: 71px;
    width: 100%;
    border-radius: 100%;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }
`
export const FavoritosImage = styled.img`
    width: 30px;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
`
export const TextName = styled.span`
    font-size: 16px;
    font-weight: bold;
    font-family: "Raleway", sans-serif;
`
// Fim First Itens

export const SecondItens = styled.div`
    font-size: 14px;
    line-height: 1.6;
    p {
        font-weight: bold;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
`
export const Buttons = styled.button<{ $variant?: "editar" | "remover" | "salvar" | "cancelar" }>`

    padding: 6px 20px;
    border: none;
    border-radius: 20px;
    color: #ffff;
    font-weight: bold;
    cursor: pointer;
    background: ${({ $variant }) =>
        $variant === "editar" ? variaveis.verde :
        $variant === "remover" ? variaveis.vermelho :
        $variant === "salvar" ? variaveis.verdeSalvar :
        $variant === "cancelar" ? variaveis.vermelhoCancelar :
        "gray"};    
`