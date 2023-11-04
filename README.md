# Trabalho-ReactJs-Serratec-2023.2
Trabalho SerraTec de React Js 

Desenvolvimento WEB
SERRATEC

## Participantes
- ADILSON FERNANDO NEVES ORNELLAS
- DAYANE MAFORT THULLER
- FILIPI CARDOSO DA ROCHA
- ISAQUE PEREZ RODRIGUES
- TAYNARA AGUIAR REBELLO


Visão geral

    ● Como projeto final da Disciplina WEB do SERRATEC, o desafio proposto é a criação de uma aplicação “e-commerce”.
  
Objetivos

      ● Criar uma aplicação React que disponibilize produtos para que um usuário possa,
      conforme navega pelo site, incluir os produtos desejados no Carrinho e no
      momento que quiser, realizar a compra dos produtos selecionados.
      
Especificações

      ● Para a execução do projeto é necessário deixar as seguintes considerações e regras do que
      tem que ser feito:

        ● Tela de Login, solicitando: ✔️
          ○ Email - ok
          ○ Senha -ok
          
        ● Tela de Listagem de Produtos:
          ○ Nesta tela deverá ser possível filtrar um produto pelo nome do mesmo.✔️
          ○ Não deverão ser exibidos os produtos sem quantidade em estoque. - Falta ainda fazer essa verificação
          
        ● Tela de informação sobre um produto específico:✔️
          ○ Nesta tela, o produto será descrito por completo. - ok 
          
        ● Tela ou Modal para Carrinho: - criado Tela
          ○ Qualquer produto poderá ser adicionado no carrinho.✔️
          ○ O usuário escolherá a quantidade e incluirá no carrinho.
          ○ Opção para esvaziar o carrinho.
          
        ● Caso o usuário queira comprar, o mesmo poderá acessar o carrinho onde irá
        finalizar a compra: ✔️
          ○ Por termos a limitação da API, ao finalizar a compra, deverá ser realizada
          requisição para diminuir a quantidade de produtos logo após a finalização da
          compra. - falta ainda fazer 
          ○ Após os passos acima redirecionar para a tela de Pedidos realizados, onde
          conterá uma listagem de todos os pedidos feitos por aquele usuário. ✔️      
Extras

    ● Tela de Cadastro de Usuário, com os campos:✔️
        ○ Nome completo - ok
        ○ Email - ok
        ○ Senha - ok
    ● Permitir ver os produtos por categoria, utilizando rotas dinâmicas.
    ● Dentro da tela de um produto específico será possível avaliar o produto
    como gostei ou não gostei. Qualquer usuário que logar na aplicação, irá ver a
    nota dada por outros usuários.
    ● Ao finalizar a compra a mesma deverá ser registrada via API na rota de
    pedidos.
    
Regras

    ● Não será permitido utilizar Tailwindcss e Bootstrap.
    ● Qualquer biblioteca de componentes pode ser utilizada.
    ● Para gerenciamento de estados, apenas o Context API poderá ser utilizado. Libs
    como Redux, Recoil, Zustand e etc. não podem.
    ● TODOS os integrantes do grupo devem participar.
    ● Não poderá ser utilizado Next nem outro framework parecido e as rotas devem ser
    feitas utilizando React Router Dom conforme versão 6.
    ● A entidade “Users”, deve conter no mínimo os seguintes campos:
        ○ nome
        ○ email
        ○ senha
    ● A entidade “Produto”, deve conter no mínimo os seguintes campos:
        ○ nome
        ○ preco
        ○ quantidade
        ○ descrição
        ○ imgurl
        ○ favoritos
    ● A entidade “Pedidos”, deve conter no mínimo os seguintes campos:
        ○ valortotal
        ○ iduser
        ○ itens
