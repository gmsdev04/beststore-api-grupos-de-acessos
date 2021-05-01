
interface ILojasRepository {
    findById(_id : String): Promise<any>;
    create(novaLoja : any): Promise<any>;
    findByIdAndDelete(_id : String) : Promise<any>;
    findByIdAndUpdate(_id : String, lojaAtualizacao : any) : Promise<any>;
}


export default ILojasRepository;