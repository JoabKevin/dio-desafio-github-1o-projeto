// como importar uma função de outro local:

const { gets, print } = require('./funcoes-auxiliares');
// a grande maioria dos erros de importação é puxar do local errado. sempre prestar atenção ao caminho da função.

print(gets());
