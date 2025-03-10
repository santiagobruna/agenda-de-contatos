import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type FiltroState = {
    valor: string
    criterio: 'todos' ;
}
const initialState: FiltroState = {
    valor: '',
    criterio: 'todos',
}

const filtroSlice = createSlice({
    name: 'filtroContatos',
    initialState,
    reducers: {
        filtrar: (state, action: PayloadAction<string>) => {
            state.valor = action.payload  // Atualiza o valor da pesquisa
        }
    }
})

export const { filtrar } = filtroSlice.actions
export default filtroSlice.reducer