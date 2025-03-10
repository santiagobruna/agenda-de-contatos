import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './style'
import { removerContato, editarContato } from '../../store/reducers/agenda'

type ContatoProps = {
    id: number
    nome: string
    email: string
    celular: string
    imagem: string
}

const ContatosCard = ({ id, nome, email, celular, imagem} : ContatoProps) => {
    const [estaEditando, setEstaEditando] = useState(false);
    const [novoNome, setNovoNome] = useState(nome);
    const [novoEmail, setNovoEmail] = useState(email);
    const [novoCelular, setNovoCelular] = useState(celular);

    const dispatch = useDispatch();

    // Alterna entre o modo de edição e o modo de visualização
    const toggleEdit = () => {
        setEstaEditando(!estaEditando);
    };
      // Salva as alterações
    const handleSave = () => {
        const novoContato = 
        { id, nome: novoNome, email: novoEmail, celular: novoCelular, imagem};
        dispatch(editarContato(novoContato)); // Dispara a ação de editar
        setEstaEditando(false); // Sai do modo de edição
    }
    // Função para cancelar a edição e restaurar os valores originais
    const handleCancel = () => {
        setNovoNome(nome);
        setNovoEmail(email);
        setNovoCelular(celular);
        setEstaEditando(false);
        setEstaEditando(false);
    };
    const handleRemove = () => {
        dispatch(removerContato(id))
    }
    return(
            <S.Container>
                <S.Card>
                    <S.FirstItens>
                        <S.TutorImage src={imagem} alt="Foto de perfil contato" />
                        <S.FavoritosImage src="/assets/favoritos.svg" alt="Ícone Favoritos" />
                        <S.TextName>{nome}</S.TextName>
                    </S.FirstItens>
                    <S.SecondItens>
                        {estaEditando ? (
                            <>
                            {/* Inputs para edição */}
                                <input
                                    type="text"
                                    value={novoNome}
                                    onChange={(e) => setNovoNome(e.target.value)} // Atualiza o nome
                                />
                                <input
                                    type="email"
                                    value={novoEmail}
                                    onChange={(e) => setNovoEmail(e.target.value)} // Atualiza o email
                                />
                                <input
                                    type="text"
                                    value={novoCelular}
                                    onChange={(e) => setNovoCelular(e.target.value)} // Atualiza o celular
                                />
                            </>
                        ): (

                            <>
                                {/* Texto simples quando não estiver editando */}
                                <p>Email: {email}</p>
                                <p>Celular: {celular}</p>
                            </>
                        )}
                    </S.SecondItens>
                    <S.ButtonContainer>
                        {!estaEditando && (
                            <>
                                <S.Buttons $variant='editar' onClick={toggleEdit}>Editar</S.Buttons>
                                <S.Buttons $variant='remover' onClick={handleRemove}>Remover</S.Buttons>
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