import * as mongoose from 'mongoose'

const lojasSchema  = new mongoose.Schema({

    nome: String,
    gruposDeAcessos: [
        {
            nome: String,
            acessos: [
                {
                    cockpitPath: String,
                    chave: String,
                    nome: String,
                    descricao : String,
                    ativo: Boolean
                }
            ] 
        }
    ]
    
},{ collection: 'lojas', versionKey: false });

export default lojasSchema;