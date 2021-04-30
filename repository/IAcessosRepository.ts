
interface IAcessosRepository {
    create(novoAcesso : any): Promise<any>;
    getAcessoById(id : String): Promise<any>;
    getAcessoByAtivo(ativo : Boolean): Promise<any>;
    getAll(): Promise<any>;
}


export default IAcessosRepository;