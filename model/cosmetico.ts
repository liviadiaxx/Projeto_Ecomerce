


export abstract class Cosmetico {
    private _id: number;
    private _nome: string;
    private _preco: number;
    private _marca: string;

    constructor(id: number, nome: string, preco: number, marca: string) {
        this._id = id;
        this._nome = nome;
        this._preco = preco;
        this._marca = marca;
    }

    
    public get id(): number { return this._id; }
    public get nome(): string { return this._nome; }
    public get preco(): number { return this._preco; }
    public get marca(): string { return this._marca; }

    
    public set preco(preco: number) { this._preco = preco; }
    public set marca(marca: string) { this._marca = marca; }
    
    public abstract visualizar(): void; 
}