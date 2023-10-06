export class Produto{

  public  _id :Number;
  public  _nome: String;
  public  _categoria:String;

    constructor(id:Number=0,nome:String="",categoria:String=""){
        this._id=id;
        this._nome=nome;
        this._categoria=categoria;
    }
}