## Notas básicas sobre desenvolvimento web

Algumas páginas apresentam problemas de compatibilidade de CSS. Como resolver?

#### Normalize CSS

Este é um tipo de css que padroniza o estilo inicial, para resolver conflitos de padrões entre browsers (user-agent).

###### Como usar o normalize CSS?
Você pode adicionar a tag de estilo, ou instalar o pacote. 

<code>
    npm install normalize.css
</code>

## Próximo passo: *Organização*

A Organização é um passo fundamental para a boa prática de programação. 
Recomenda-se distribuir em pastas cada parte do seu site. 

##### Alterando a fonte

Usa-se Google fonts.
Existem os métodos link e import para fontes.
Usando link, o trafego para carregar a fonte irá para o servidor onde ela está, mas quando importamos localmente e baixamos a fonte, o tráfego será em nosso próprio servidor.

## ~Mobile-first~

Desenvolvemos primeiro a parte de CSS relacionada a dispositivos móveis para depois partir para as telas posteriores.
Por quê?

Se pensarmos nas páginas grandes primeiro, teríamos que reduzir espaços e reescrever muito código. É mais fácil começar pelo mais simples.

#### como testar a parte mobile?

No devtools, podemos simular telas diferentes.

## Medidas

usaremos REM, que é uma medida mais maleável.

## Grid style