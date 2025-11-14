

import { Cosmetico } from "../model/cosmetico";

export interface ProdutoRepository {
    
    cadastrar(cosmetico: Cosmetico): void;
    listarTodos(): void;
    buscarPorId(id: number): Cosmetico | null;
    atualizar(cosmetico: Cosmetico): void;
    deletar(id: number): void;
    
   
}