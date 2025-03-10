import { useDispatch, useSelector } from 'react-redux';
import FiltroCard from '../../components/FiltroCard';
import * as S from './styles'
import { RootReducer } from '../../store';
import { filtrar } from '../../store/reducers/filtro';
import { useNavigate } from "react-router-dom"
type Props = {
    mostrarFiltros: boolean
}
const BarraLateral = ({mostrarFiltros} : Props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const filtro = useSelector((state: RootReducer) => state.filtroContatos.valor);
    const handleFiltroChange = (e: React.ChangeEvent<HTMLInputElement >) => {
        dispatch(filtrar(e.target.value))
    }
    return (
    <>
        <S.Aside>
        {mostrarFiltros ? (
            <>
                <S.Campo type="text" placeholder="Procurar" value={filtro} onChange={handleFiltroChange}/>
                <S.Filtros>
                    <FiltroCard legenda={'Todas'}/>
                </S.Filtros>
            </>
        ): (
                <S.Button onClick={() => navigate('/')} type="button">Voltar a lista de contatos</S.Button>
                ) }
        </S.Aside>
    </>
    )
}

export default BarraLateral;