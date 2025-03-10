import { useSelector } from "react-redux";
import * as S from "./styles";
import { RootReducer } from "../../store";

// Definindo os tipos das props
type FiltroCardProps = {
    legenda: string;
};

const FiltroCard = ({ legenda }: FiltroCardProps) => {
    // Pegando o número do contato filtrado do Redux
    const numeroContato = useSelector((state: RootReducer) => state.filtroContatos.valor);
    const contatos = useSelector((state: RootReducer) => state.agendaContatos.itens)  ?? [];
    // Filtra os contatos com base no número armazenado no filtro
    const contatosFiltrados = numeroContato
    ? contatos.filter((contato: any) => contato.numero?.includes(numeroContato))
    : contatos;
    return (
        <S.Card>
            <S.Contador>{contatosFiltrados.length}</S.Contador>
            <S.Label>{legenda}</S.Label>
        </S.Card>
    );
};

export default FiltroCard;
