import { useSelector } from "react-redux"
import ContatosCard from "../../components/ContatosCard"
import * as S from './style'
import { RootReducer } from "../../store"
import BotaoAdicionar from "../../components/BotaoAdicionar"
const ListaContatos = () => {
    const contatos = useSelector((state: RootReducer) => state.agendaContatos.itens);
    const filtro = useSelector((state: RootReducer) => state.filtroContatos.valor);

     // Filtrando os contatos com base no filtro
        const contatosFiltrados = contatos.filter(contato =>{
            const nomeContato = contato.nome.toLowerCase();
            const valorFiltro = filtro ? filtro.toLowerCase() : ''; // Verifica se o filtro é válido
            return nomeContato.includes(valorFiltro);
        }
        );
    return(
        <S.CardContainer>
            {contatosFiltrados.map((contato) => (
            <ContatosCard 
                key={contato.id}
                id={contato.id}
                nome={contato.nome} 
                email={contato.email} 
                celular={contato.celular}
                imagem={contato.imagem}
            />
            ))}
            <BotaoAdicionar/>
        </S.CardContainer>
    )   
}

export default ListaContatos