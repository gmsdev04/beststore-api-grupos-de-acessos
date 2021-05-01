import GrupoDeAcessosService from '../services/grupoDeAcessosService'
import { BaseHttpController, controller, httpDelete, httpGet, httpPatch, httpPost, httpPut, queryParam, requestBody, requestParam } from 'inversify-express-utils';
import { inject } from 'inversify';

@controller('/api/v1/lojas/:idLoja/grupos-de-acessos')
class GruposDeAcessosController extends BaseHttpController{

    constructor(@inject('GruposDeAcessosServices') private grupoDeAcessosService : GrupoDeAcessosService){
        super();
    }

    @httpPost('')
    async post( @requestBody() novoGrupoDeAcesso : any,
                @requestParam('idLoja') idLoja : String){
                    
        return await this.grupoDeAcessosService.criar(idLoja,novoGrupoDeAcesso)
        .then(grupoDeAcessoCriado => this.created(`/api/v1/lojas/${idLoja}/grupos-de-acessos/${grupoDeAcessoCriado._id}`,{data : grupoDeAcessoCriado}))
        .catch(error => 
            {
                switch(error){
                    case 'LojaNaoEncontrada' : return this.json({mensagem:'Não foi possível encontrar a loja inforamda,'},404);
                    case 'ExisteGrupoDeAcessosComEsteNome' : return this.json({mensagem:'Já existe um grupo com este nome.'},400)
                    default : return this.internalServerError(error);
                }
            }
        );
    }
    @httpPut('/:idGrupoDeAcesso/acessos')
    async putAcessos(   @requestBody() body : any,
                        @requestParam('idLoja') idLoja : String,
                        @requestParam('idGrupoDeAcesso') idGrupoDeAcesso : String){

        if(Array.isArray(body.acessos))
        {
            return await this.grupoDeAcessosService.putAcessos(idLoja,idGrupoDeAcesso,body.acessos)
                .then(result =>  this.ok({data : result}))
                .catch(error => 
                    {
                        switch(error){
                            case 'LojaNaoEncontrada' : return this.json({mensagem:'Não foi possível encontrar a loja inforamda,'},404);
                            case 'GrupoDeAcessoNaoEncontrado' : return this.json({mensagem:'Grupo de acesso não encontrado'},404)
                            default : return this.internalServerError(error);
                        }
                    }
                );
        }
        return this.json({mensagem:'o campo acessos deve ser um array'},400);
    }

   

}

export default  GruposDeAcessosController;