import IAcessosRepository from '../repository/IAcessosRepository'
import { v4 as uuidv4 } from 'uuid';
import { inject, injectable } from 'inversify';

@injectable()
class AcessosServices {
    constructor( @inject("IAcessosRepository") private repository: IAcessosRepository ) {}
    
    async create(novoAcesso : any){
        return await this.repository.create(novoAcesso);
    }

    async getAcessoById(id : String){
        return await this.repository.getAcessoById(id);
    }

    async getAcessoByAtivo(ativo : Boolean){
        return await this.repository.getAcessoByAtivo(ativo);
    }

    async getAll(){
        return await this.repository.getAll();
    }

   
}

export default  AcessosServices;