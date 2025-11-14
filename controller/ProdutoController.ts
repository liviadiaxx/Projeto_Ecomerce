

import { Cosmetico } from "../model/cosmetico";
import { ProdutoRepository } from "../repository/produtoRepository";

export class ProdutoController implements ProdutoRepository {
    private listaProdutos: Array<Cosmetico> = []; 
    private idContador: number = 0; 
    
    public gerarId(): number {
        return ++this.idContador;
    }

    
    public cadastrar(cosmetico: Cosmetico): void {
        this.listaProdutos.push(cosmetico);
        console.log(`\nO produto '${cosmetico.nome}' (ID: ${cosmetico.id}) foi cadastrado com sucesso!`);
    }

    
    public listarTodos(): void {
        if (this.listaProdutos.length === 0) {
             console.log("\n Não há produtos cadastrados no estoque.");
             return;
        }
        for (let produto of this.listaProdutos) {
            produto.visualizar();
        }
    }

    public buscarPorId(id: number): Cosmetico | null {
        return this.listaProdutos.find(p => p.id === id) || null;
    }

    
    public atualizar(cosmetico: Cosmetico): void {
        let buscaProduto = this.buscarPorId(cosmetico.id);

        if (buscaProduto) {
            buscaProduto.preco = cosmetico.preco; 
            buscaProduto.marca = cosmetico.marca;
            console.log(`\nProduto ID ${cosmetico.id} atualizado com sucesso!`);
        } else {
            
            throw new Error("ProdutoNotFoundException: Produto não encontrado para atualização."); 
        }
    }

    public deletar(id: number): void {
        let index = this.listaProdutos.findIndex(p => p.id === id);

        if (index !== -1) {
            this.listaProdutos.splice(index, 1);
            console.log(`\n Produto ID ${id} excluído com sucesso!`);
        } else {
            
            throw new Error("ProdutoNotFoundException: Produto não encontrado para exclusão.");
        }
    }
}