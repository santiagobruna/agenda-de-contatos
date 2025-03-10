class Contato {
    id: number
    nome: string
    email: string
    celular: string
    imagem: string

    constructor(id: number, nome: string, email: string, celular: string, imagem: string) {
        this.id = id,
        this.nome = nome,
        this.email = email,
        this.celular = celular
        this.imagem = imagem
    }
}

export default Contato;