import * as S from './styles'

// Definindo os tipos das props
type FiltroCardProps = {
    contador: number;
    legenda: string;
}
const FiltroCard  = ({ contador, legenda } : FiltroCardProps) => {
    return (
        <S.Card>
            <S.Contador>{contador}</S.Contador> 
            <S.Label>{legenda}</S.Label>
        </S.Card>
    )
}
export default FiltroCard