import readline from "readline-sync";

let opcao = 0;

let idProduto = ["Batom", "Base", "Rímel","iluminador"];
let precoProduto = [20.00, 45.00, 30.00, 18.00];
let carrinho: number[] = [];


while (opcao !== 4) {
  console.log("\n=== Beauty Store ===");
  console.log("1 - Listar produtos");
  console.log("2 - Comprar produto");
  console.log("3 - Visualizar Carrinho e Pagar "); 
  console.log("4 - Sair");                         
  
  opcao = Number(readline.question("Escolha uma opção: "));

  switch (opcao) {
    case 1:
      console.log("\n--- Catálogo de Produtos ---");
      for(let i = 0; i < idProduto.length; i++) {
        console.log(`${i + 1} - ${idProduto[i]} - R$ ${precoProduto[i].toFixed(2)}`);
      }
      console.log("--------------------");
      break;

    case 2:
      console.log("\n--- Comprar Produto ---");
      
      // Ajuste de sintaxe: Garantir que a variável 'produtoEscolhido' seja do tipo 'number'
      let produtoEscolhido: number = Number(readline.question("Digite o número do produto que deseja comprar: ")) -1;
      
      // Laço Condicional (IF/ELSE)
      if(produtoEscolhido >= 0 && produtoEscolhido < idProduto.length){
        console.log(`Adicionando ${idProduto[produtoEscolhido]} ao carrinho.`);
        carrinho.push(produtoEscolhido);
      } else {
        // Raciocínio corrigido para ID Inválido
        console.log("Código de produto inválido. Por favor, escolha um número da lista.");
      }
      break;

    case 3: // NOVO CASE 3: VISUALIZAR CARRINHO
      // Laço Condicional (IF/ELSE) para checar se está vazio
      if(carrinho.length === 0){
        console.log("\n🛒 Carrinho vazio! Adicione produtos na Opção 2.");
      } else {
        let totalCompra: number = 0;

        console.log("\n--- Seu Carrinho ---");

        // Laço de Repetição (FOR) para somar e exibir os itens
        for(let i = 0; i < carrinho.length; i++){
          let codigo: number = carrinho[i];

          // Asserção '!' para acalmar o TypeScript (raciocínio que discutimos)
          const nomeProduto = idProduto[codigo]!;
          const precoItem = precoProduto[codigo]!;

          totalCompra += precoItem;

          // O operador '?' no toFixed() não é necessário aqui
          console.log(`- ${nomeProduto} (R$ ${precoItem.toFixed(2)})`);
        }
        
        console.log(`\n---------------------`);
        console.log(`TOTAL A PAGAR: R$ ${totalCompra.toFixed(2)}`);
        console.log(`---------------------------`)
      }
      break;

    case 4: // NOVO CASE 4: SAIR (FINALIZA O LAÇO WHILE)
      console.log("Obrigada por garantir sua beleza com a Beauty Store! Até logo..");
      break;

    default:
      console.log("Opção inválida!");
  }
}