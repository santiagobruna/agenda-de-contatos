import FiltroCard from '../../components/FiltroCard';
import * as S from './styles'
const BarraLateral = () => {
    return (
    <>
        <S.Aside>
            <S.Campo type="text" placeholder="Procurar" />
            <S.Filtros>
                <FiltroCard contador={1} legenda={'Favoritos'}/>
                <FiltroCard contador={3} legenda={'Todas'}/>
            </S.Filtros>
        </S.Aside>
    </>
    )
}

export default BarraLateral;