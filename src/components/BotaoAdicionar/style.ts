import { Link } from "react-router-dom";
import styled from "styled-components";


export const AdicionarContato = styled(Link)`
    position: fixed;
  bottom: 20px; /* Distância do fundo da tela */
  right: 20px;  /* Distância da lateral direita */
  padding: 10px 20px; /* Tamanho do botão */
  background-color: #0056b3; /* Cor de fundo */
  color: white; /* Cor do texto */
  border: none;
  text-decoration: none;
  border-radius: 5px; /* Arredondamento das bordas */
    font-size: 16px;
    cursor: pointer;
    z-index: 1000; 
    transition: 0.3s ease-in-out;

    &:hover {
        background-color: #007bff ;
    }
`