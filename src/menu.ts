import readline from "readline-sync";


let opcao = 0;

let idProduto = ["Batom", "Base", "Rímel","iluminador"];
let precoProduto = [20.00, 45.00, 30.00, 18.00];
let carrinho: number[] = [];

import { Cosmetico } from "../model/cosmetico";


while (opcao !== 9) {
  console.log("\n=== Beauty Store: Gerenciamento e Vendas ===");
  console.log("1- Cadastrar Novo Produto")
  console.log("2- Listar Produtos")
  console.log("3- Buscar produto por ID")
  console.log("4- Atualizar Produto")
  console.log("5- Deletar Produto")
  console.log("============================================")
  console.log("6- Comprar Produto")
  console.log("7- Visualizar Carrinho e Pagar")
  console.log("8- Outro")
  console.log("2 - Comprar produto");
  console.log("4 - Sair");                         
  
  opcao = Number(readline.question("Escolha uma opção: "));

  switch (opcao) {
    case 1:
      console.log("\n--- Catálogo de Produtos ---");
      for(let i = 0; i < idProduto.length; i++) {
        
      console.log(`${i + 1} - ${idProduto[i]!} - R$ ${precoProduto[i]!.toFixed(2)}`);
      }
      console.log("--------------------");
      break;

    case 2:
      console.log("\n--- Comprar Produto ---");
      
      
      let produtoEscolhido: number = Number(readline.question("Digite o número do produto que deseja comprar: ")) -1;
      
     
      if(produtoEscolhido >= 0 && produtoEscolhido < idProduto.length){
        console.log(`Adicionando ${idProduto[produtoEscolhido]} ao carrinho.`);
        carrinho.push(produtoEscolhido);
      } else {
       
        console.log("Código de produto inválido. Por favor, escolha um número da lista.");
      }
      break;

    case 3: 
      if(carrinho.length === 0){
        console.log("\n Carrinho vazio! Adicione produtos na Opção 2.");
      } else {
        let totalCompra: number = 0;

        console.log("\n--- Seu Carrinho ---");

        
        for(let i = 0; i < carrinho.length; i++){
          let codigo: number = carrinho[i]!;

          const nomeProduto = idProduto[codigo]!;
          const precoItem = precoProduto[codigo]!;

          totalCompra += precoItem;

          
          console.log(`- ${nomeProduto} (R$ ${precoItem.toFixed(2)})`);
        }
        
        console.log(`\n---------------------`);
        console.log(`TOTAL A PAGAR: R$ ${totalCompra.toFixed(2)}`);
        console.log(`---------------------------`)
      }
      break;

    case 4: 
      console.log("Obrigada por garantir sua beleza com a Beauty Store! Até logo..");
      break;

    default:
      console.log("Opção inválida!");
  }
}