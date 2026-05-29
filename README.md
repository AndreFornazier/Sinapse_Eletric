# Sinapse Elétric - Site Institucional

Site institucional moderno, responsivo e profissional para a empresa **Sinapse Elétric**. O projeto funciona como catálogo de serviços e portfólio digital, sem loja virtual, carrinho ou checkout.

## Objetivo do projeto

O site foi criado para:

- Apresentar a empresa de forma profissional;
- Organizar os serviços oferecidos;
- Destacar a área de energia solar;
- Transmitir autoridade e confiança;
- Direcionar visitantes para WhatsApp e formulário de orçamento;
- Servir como portfólio institucional da empresa.

## Estrutura de páginas

O site possui 5 páginas principais:

1. `index.html` - Página inicial com hero, apresentação, serviços, energia solar, diferenciais e CTA final.
2. `servicos.html` - Página com todos os serviços organizados em cards.
3. `energia-solar.html` - Página comercial focada em economia, sustentabilidade e processo de instalação.
4. `sobre.html` - Página institucional com quem somos, missão, visão, valores e diferenciais.
5. `contato.html` - Página com informações de contato e formulário que abre o WhatsApp.

## Organização dos arquivos

```text
sinapse-eletric/
├── index.html
├── servicos.html
├── energia-solar.html
├── sobre.html
├── contato.html
├── README.md
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── assets/
│   ├── img/
│   │   ├── hero-energia.svg
│   │   └── solar.svg
│   ├── icons/
│   │   └── favicon.svg
│   └── logo/
│       └── logo-sinapse.svg
│
└── docs/
    └── documento-detalhado-sinapse-eletric.docx
```

## Tecnologias usadas

- **HTML5**: estrutura semântica das páginas.
- **CSS3**: layout, responsividade, paleta visual, cards, animações e identidade visual.
- **JavaScript puro**: menu mobile, animações ao rolar, botão de WhatsApp e formulário de contato.
- **SVG**: logo e imagens ilustrativas leves e otimizadas.

## Explicação dos principais arquivos

### HTML

Cada arquivo `.html` representa uma página do site. As páginas seguem a mesma estrutura geral:

1. `head` com SEO básico;
2. cabeçalho com menu;
3. conteúdo principal da página;
4. botão fixo de WhatsApp;
5. rodapé;
6. chamada do arquivo `script.js`.

### CSS

O arquivo `css/style.css` concentra toda a identidade visual do projeto. Ele está dividido por blocos comentados:

- variáveis globais;
- reset;
- cabeçalho;
- botões;
- cards;
- hero;
- seções específicas;
- formulário;
- rodapé;
- responsividade.

As cores principais ficam em `:root`, facilitando a alteração da paleta futuramente.

### JavaScript

O arquivo `js/script.js` possui comentários explicando cada função. Ele cuida de:

- abrir e fechar o menu hambúrguer no celular;
- marcar o link ativo da página atual;
- criar links de WhatsApp automaticamente;
- animar elementos com a classe `.reveal`;
- capturar o formulário de contato e abrir o WhatsApp com a mensagem preenchida.

## Como alterar o WhatsApp

Abra o arquivo:

```text
js/script.js
```

Procure a linha:

```js;
```

Troque pelo número real da empresa no formato internacional, sem espaços, parênteses ou traços.

Exemplo:

```js
```

## Como trocar a logo

Substitua o arquivo:

```text
assets/logo/logo-sinapse.svg
```

por uma logo nova com o mesmo nome. Se preferir usar PNG, altere o caminho da imagem nos arquivos HTML.

## Como trocar imagens

As imagens principais estão na pasta:

```text
assets/img/
```

Você pode trocar `hero-energia.svg` e `solar.svg` por imagens reais da empresa, mantendo os mesmos nomes ou atualizando os caminhos no HTML.

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie todos os arquivos do projeto.
3. Vá em **Settings > Pages**.
4. Em **Branch**, selecione `main` ou `master`.
5. Escolha a pasta `/root`.
6. Salve e aguarde o link ser gerado.

## Observações importantes

- O site não possui sistema de loja, carrinho ou checkout.
- O formulário não salva dados em banco; ele abre uma conversa no WhatsApp.
- Para usar um formulário com envio real por e-mail, será necessário integrar com backend ou serviço externo.
- O projeto está pronto para personalização de logo, imagens, telefone, e-mail, endereço e redes sociais.
