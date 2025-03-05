import ContatosCard from "../../components/ContatosCard"
import * as S from './style'
const ListaContatos = () => {
    return(
        <S.CardContainer>
            <ContatosCard 
                nome="Juliana silva" 
                email={"juliana@gmail.com"} 
                celular={'(21) 99994-444'}
                image="./assets/tutor2.png"
            />
            <ContatosCard 
                nome="Rafaela Oliveira" 
                email={"rafa@gmail.com"} 
                celular={'(21) 99994-444'}
                image="./assets/tutor2.png"
            />
            <ContatosCard 
                nome="Joilton Santos" 
                email={"joilton@gmail.com"} 
                celular={'(21) 99994-444'}
                image="./assets/tutor1.png"
            />
            <ContatosCard 
                nome="Rodrigo Paulo" 
                email={"juliana@gmail.com"} 
                celular={'(21) 99994-444'}
                image="./assets/tutor1.png"
            />
            <ContatosCard 
                nome="Juliana silva" 
                email={"juliana@gmail.com"} 
                celular={'(21) 99994-444'}
                image="./assets/tutor2.png"
            />
            <ContatosCard 
                nome="Jean Ribeiro" 
                email={"jean@gmail.com"} 
                celular={'(21) 99994-444'}
                image="./assets/tutor1.png"
            />
            <ContatosCard 
                nome="Lucio  silva" 
                email={"lucio@gmail.com"} 
                celular={'(21) 99994-444'}
                image="./assets/tutor1.png"
            />
            <ContatosCard 
                nome="Juliana silva" 
                email={"juliana@gmail.com"} 
                celular={'(21) 99994-444'}
                image="./assets/tutor2.png"
            />
        </S.CardContainer>
    )   
}

export default ListaContatos