import { useState } from 'react'
import * as S from './style'

type ContatoProps = {
    nome: string
    email: string
    celular: string
    image: string
}

const ContatosCard = ({nome, email, celular, image} : ContatoProps) => {
    const [estaEditando, setEstaEditando] = useState(false);

    const toggleEdit = () => {
        setEstaEditando(!estaEditando);
    };
    const handleSave = () => {
        setEstaEditando(!estaEditando)
    }
     // Função para simular cancelar
    const handleCancel = () => {
        setEstaEditando(false);
    };
    return(
            <S.Container>
                <S.Card>
                    <S.FirstItens>
                        <S.TutorImage src={image} alt="Foto de perfil contato" />
                        <S.FavoritosImage src="/assets/favoritos.svg" alt="Ícone Favoritos" />
                        <S.TextName>{nome}</S.TextName>
                    </S.FirstItens>
                    <S.SecondItens>
                        <p>Email: {email}</p>
                        <p>Celular: {celular}</p>
                    </S.SecondItens>
                    <S.ButtonContainer>
                        {!estaEditando && (
                            <>
                                <S.Buttons $variant='editar' onClick={toggleEdit}>Editar</S.Buttons>
                                <S.Buttons $variant='remover'>Remover</S.Buttons>
                            </>
                        )}
                        {estaEditando && (
                            <>
                                <S.Buttons $variant='salvar' onClick={handleSave}>Salvar</S.Buttons>
                                <S.Buttons $variant='cancelar' onClick={handleCancel}>Cancelar</S.Buttons>
                            </>
                        )}
                    </S.ButtonContainer>
                </S.Card>
            </S.Container>
    )
}

export default ContatosCard