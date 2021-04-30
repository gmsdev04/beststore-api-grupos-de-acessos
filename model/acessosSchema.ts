import * as mongoose from 'mongoose'

const acessosSchema  = new mongoose.Schema({
    cockpitPath: String,
    chave: String,
    nome: String,
    descricao : String,
    ativo: Boolean

},{ collection: 'acessos', versionKey: false });

export default acessosSchema;