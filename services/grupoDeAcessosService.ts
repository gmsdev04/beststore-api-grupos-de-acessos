import { inject, injectable } from 'inversify';
import ILojasRepository from '../repository/ILojasRepository';

@injectable()
class GruposDeAcessosServices {

    constructor( @inject("ILojasRepository") private repository: ILojasRepository) {}
    
    async criar(idLoja : String,novoAcesso : any){
        
        let loja = await this.repository.findById(idLoja);

        //EXISTENCIA DA LOJA
        if(loja != null){

            let gruposDeAcessos = loja.gruposDeAcessos || [];

            //REGRA DUPLICIDADE DE NOME
            if(gruposDeAcessos.find(i => i.nome === novoAcesso.nome) == null){
                gruposDeAcessos.push(novoAcesso);

                loja.gruposDeAcessos = gruposDeAcessos;

                this.repository.findByIdAndUpdate(idLoja,loja);
                
                return loja;
            }
            throw 'ExisteGrupoDeAcessosComEsteNome';
        }

        throw 'LojaNaoEncontrada';
    }

    async putAcessos(idLoja : String, idGrupoDeAcesso : String, acessos : []){
        let loja = await this.repository.findById(idLoja);

        //EXISTENCIA DA LOJA
        if(loja != null){

            let gruposDeAcessos = loja.gruposDeAcessos || [];
            

            let grupoDaAtualizacao = gruposDeAcessos.find(item => item._id == idGrupoDeAcesso);

            if(grupoDaAtualizacao != null ){
                grupoDaAtualizacao.acessos = acessos;
                return await this.repository.findByIdAndUpdate(idLoja,loja);
            }
            throw 'GrupoDeAcessoNaoEncontrado';
        }

        throw 'LojaNaoEncontrada';
    }


   
}

export default  GruposDeAcessosServices;