# Protocolo HTTP e APIs

Existem dois métodos para passar parâmetros para APIS. uma pelo próprio path, e outra pela Carry string.

a Carry string começa após o ponto de interrogação do path (que é opcional) e segue a estrutura chave=valor.
exemplo:

pokemon?type=grass&name=i

Com isso passamos argumentos para buscas.

## Headers

Ali conseguimos transmitir e receber dados que complementam nossa requisição.

Exemplos: quais linguagens o browser aceita, configurações necessárias, autenticação.

## Body e status code

o método get não tem body para pedidos. ele apenas entrega dados.
p POST já faz sentido ter body.

body é o corpo da requisição. o Get de response já tem body.

## Status code

Significa se o pedido foi realizado ou não.
Response headers e response body.