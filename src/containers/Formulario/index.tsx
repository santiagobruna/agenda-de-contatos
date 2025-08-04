import { FormEvent,useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { Form } from "./styles"
import Contato from "../../models/Contato";
import { cadastrarContato } from "../../store/reducers/agenda";
import { AppDispatch } from "../../store";
const Formulario = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');
    const [imagem, setImagem] = useState('');

    const cadastroContato = (evento: FormEvent) => {
        evento.preventDefault();
        const contatoParaAdicionar = new Contato(1, nome, email, celular, imagem)
        dispatch(cadastrarContato(contatoParaAdicionar))
        navigate('/')
    }
    return(
        <Form onSubmit={cadastroContato}>
            <h3>Novo contato</h3>
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" />
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="Email" autoComplete="off" />
            <input type="text" value={celular} onChange={(e) => setCelular(e.target.value)} 
            placeholder="Celular" />
            <input type="text" value={imagem} onChange={(e) => setImagem(e.target.value)} placeholder="URL da imagem" />

            <button type="submit">Cadastrar</button>
        </Form>
    )
}
export default Formulario