import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Contato from "../../models/Contato";
type agendaState = {
    itens: Contato[],
}

const initialState: agendaState = {
    itens: [
        {
            id: 1,
            nome: 'Juliana Silva',
            email: 'juliana@gmail.com',
            celular: '(21) 99999-999',
            imagem: './assets/tutor2.png',
        },
        {
            id: 2,
            nome: 'Rafaela Souza',
            email: 'rafa@gmail.com',
            celular: '(21) 99999-999',
            imagem: './assets/tutor2.png',
        },
        {
            id: 3,
            nome: 'Joilton Santos',
            email: 'joilton@gmail.com',
            celular: '(21) 99999-999',
            imagem: './assets/tutor1.png',
        }
    ]
}
const agendaSlice = createSlice({
    name: 'agendaContatos',
    initialState,
    reducers: {
        removerContato: (state, action: PayloadAction<number>) => {
           state.itens = state.itens.filter((contato) => contato.id !== action.payload) //  mantém todos os contatos cujo id seja diferente do id que queremos remover.
        },
        editarContato: (state, action: PayloadAction<Contato>) => {
            state.itens = state.itens.map((contato) => contato.id === action.payload.id ? action.payload : contato)
        },
        cadastrarContato: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
            const contatoExiste = state.itens.find((contato) => contato.nome.toLowerCase() === action.payload.nome.toLowerCase());
            if(contatoExiste) {
                alert('Este contato já na sua lista de contatos');
            }else {
                const ultimoContato = state.itens[state.itens.length - 1];

                const novoContato = {
                    ...action.payload,
                    id: ultimoContato ? ultimoContato.id + 1 : 1
                }
                state.itens.push(novoContato)
            }
        }
    }
})

export const { removerContato, editarContato, cadastrarContato } = agendaSlice.actions
export default agendaSlice.reducer