import * as mongoose from 'mongoose'
import ILojasRepository from '../ILojasRepository'
import lojasSchema from '../../model/lojasSchema'
import {Model, Document, Query} from 'mongoose'
import { injectable } from 'inversify';

@injectable()
class LojasRepositoryMongoDb implements ILojasRepository{
    private _model : Model<Document<any>>;

    constructor(){
        this._model = mongoose.model('lojas',lojasSchema);
    }
    
    async findByIdAndUpdate(_id: String, lojaAtualizacao: any) : Promise<any> {
        return await this._model.findByIdAndUpdate(_id,lojaAtualizacao, {new: true});
    }
    
    async findByIdAndDelete(_id: String): Promise<any> {
       return await this._model.findByIdAndDelete(_id);
    }

    async findById(_id: String): Promise<any> {
        return await this._model.findById(_id);
    }

    async create(novaLoja : any) : Promise<any>{
        return await this._model.create(novaLoja);
    }

    
}

export default LojasRepositoryMongoDb;

