// controller/ProdutoController.ts

import { Cosmetico } from "../model/cosmetico";
import { ProdutoRepository } from "../repository/produtoRepository";

export class ProdutoController implements ProdutoRepository {
    private listaProdutos: Array<Cosmetico> = []; // Collection
    private idContador: number = 0; 
    
    public gerarId(): number {
        return ++this.idContador;
    }

    // C - Create
    public cadastrar(cosmetico: Cosmetico): void {
        this.listaProdutos.push(cosmetico);
        console.log(`\n✅O produto '${cosmetico.nome}' (ID: ${cosmetico.id}) foi cadastrado com sucesso!`);
    }

    // R - Read (Listar Todos)
    public listarTodos(): void {
        if (this.listaProdutos.length === 0) {
             console.log("\n Não há produtos cadastrados no estoque.");
             return;
        }
        for (let produto of this.listaProdutos) {
            produto.visualizar(); // Polimorfismo!
        }
    }

    // R - Read (Buscar por ID)
    public buscarPorId(id: number): Cosmetico | null {
        return this.listaProdutos.find(p => p.id === id) || null;
    }

    // U - Update (com Exceptions)
    public atualizar(cosmetico: Cosmetico): void {
        let buscaProduto = this.buscarPorId(cosmetico.id);

        if (buscaProduto) {
            buscaProduto.preco = cosmetico.preco; 
            buscaProduto.marca = cosmetico.marca;
            console.log(`\n✅ Produto ID ${cosmetico.id} atualizado com sucesso!`);
        } else {
            // Lançando a Exception
            throw new Error("ProdutoNotFoundException: Produto não encontrado para atualização."); 
        }
    }

    // D - Delete (com Exceptions)
    public deletar(id: number): void {
        let index = this.listaProdutos.findIndex(p => p.id === id);

        if (index !== -1) {
            this.listaProdutos.splice(index, 1);
            console.log(`\n Produto ID ${id} excluído com sucesso!`);
        } else {
            // Lançando a Exception
            throw new Error("ProdutoNotFoundException: Produto não encontrado para exclusão.");
        }
    }
}