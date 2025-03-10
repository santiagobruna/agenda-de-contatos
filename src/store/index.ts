import { configureStore } from "@reduxjs/toolkit";
import agendaReducer from './reducers/agenda'
import filtroReducer from './reducers/filtro'
const store = configureStore({
    reducer: {
        agendaContatos: agendaReducer,
        filtroContatos: filtroReducer,
    }
})

export type RootReducer = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store;