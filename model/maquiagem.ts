

import { Cosmetico } from "./cosmetico"; 

export class Maquiagem extends Cosmetico { 
    private _cor: string;
    
    constructor(id: number, nome: string, preco: number, marca: string, cor: string) {
        super(id, nome, preco, marca); 
        this._cor = cor;
    }
    
    
    public get cor(): string { return this._cor; }


    public visualizar(): void {
        console.log(`\n===========================================`);
        console.log(`Dados do Produto (ID: ${this.id})`); // Usa o getter da classe pai
        console.log(`Tipo: Maquiagem`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Marca: ${this.marca}`);
        console.log(`Preço: R$ ${this.preco.toFixed(2)}`);
        console.log(`Cor/Tonalidade: ${this._cor}`);
        console.log(`===========================================`);
    }
}