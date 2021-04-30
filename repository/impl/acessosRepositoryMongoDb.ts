import * as mongoose from 'mongoose'
import IAcessosRepository from '../IAcessosRepository'
import acessosSchema from '../../model/acessosSchema'
import {Model, Document, Query} from 'mongoose'
import { injectable } from 'inversify';

@injectable()
class LojasRepositoryMongoDb implements IAcessosRepository{
    private _model : Model<Document<any>>;

    constructor(){
        this._model = mongoose.model('acessos',acessosSchema);
    }
    async getAll(): Promise<any> {
        return await this._model.find({});
    }
    async getAcessoByAtivo(ativo: Boolean): Promise<any> {
        return await this._model.find({ativo:ativo})
    }

    
    async getAcessoById(id: String): Promise<any> {
        return await this._model.findById(id);
    }
    
    async create(novoAcesso : any) : Promise<any>{
        return await this._model.create(novoAcesso);
    }

    
}

export default LojasRepositoryMongoDb;

