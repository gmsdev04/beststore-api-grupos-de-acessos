import * as mongoose from 'mongoose'

const grupoDeAcessosSchema  = new mongoose.Schema({
    gruposDeAcessos:[]

},{ collection: 'lojas', versionKey: false });

export default grupoDeAcessosSchema;