import * as  mongoose from 'mongoose'

class Database{
    private DB_URL = 'mongodb+srv://beststore_mongo:PtN0QrR0M42WJRP6@cluster0.lzdos.mongodb.net/beststore?retryWrites=true&w=majority'

    createConnection(){
        mongoose.connect(this.DB_URL, 
            {useNewUrlParser: true, 
            useUnifiedTopology: true,
            useFindAndModify: false
        });
    }
}

export default Database;