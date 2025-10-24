# Visualizador de Perfil GitHub

Um pequeno projeto front-end que consulta a API pública do GitHub para exibir informações públicas de um usuário (perfil, avatar, bio, estatísticas e repositórios). Foi criado como exercícios de HTML, CSS e JavaScript, com foco em consumo de API, manipulação do DOM e boas práticas de acessibilidade e responsividade.

Funcionalidades
--

- Buscar perfil por nome de usuário do GitHub
- Exibir cartão de perfil com avatar, nome, localização, bio e estatísticas (seguidores, seguindo, repositórios)
- Listar repositórios públicos com link, descrição e linguagem principal
- Tratamento de erros (usuário não encontrado, erros de rede, limites da API)
- Layout responsivo e acessível (teclado / leitores de tela)

Stack / Tecnologias
--

- HTML5 semântico
- CSS3 (organizado em arquivos de estilo)
- JavaScript (fetch API, módulos ou script simples)

Como executar localmente
--

Opção rápida:

1. Abra `index.html` no navegador (duplo clique). Isto funciona para visualização estática.

Opção recomendada (usar servidor local):

Com Node (serve):

```bash
npm install -g serve
serve -s . -l 5000
# abra http://localhost:5000
```

Com Python (simples):

```cmd
:: no Windows (cmd.exe)
python -m http.server 5000
# abra http://localhost:5000
```

Uso
--

1. Digite um nome de usuário do GitHub no campo de busca.
2. Pressione Enter ou clique no botão de busca.
3. O aplicativo exibirá o cartão de perfil e a lista de repositórios (quando disponíveis).

Estrutura do projeto (exemplo)
--

```
visualizador-perfil-github/
├─ index.html
├─ css/
│  ├─ reset.css
│  └─ styles.css
├─ js/
│  └─ main.js
├─ images/
└─ README.md
```

Boas práticas e notas de desenvolvimento
--

- Considere tratar o cache local (localStorage) para reduzir chamadas repetidas à API durante o desenvolvimento.
- Atente para limites da API do GitHub (rate limits); para testes intensivos use um token pessoal em ambiente de desenvolvimento.
- Separe responsabilidades: mantenha funções de requisição à API separadas das funções que manipulam o DOM para facilitar testes.
- Escreva mensagens claras para o usuário em casos de erro (ex.: "Usuário não encontrado" ou "Erro de conexão").

Acessibilidade (a11y)
--

- Forneça labels visíveis ou `aria-label` em campos de busca e botões.
- Garanta foco lógico ao navegar via teclado (tabindex natural e skip-link se aplicável).
- Use texto alternativo (`alt`) em imagens relevantes (avatar) e marque ícones decorativos com `aria-hidden="true"`.
- Respeite preferência de redução de movimento com `prefers-reduced-motion`.

Testes rápidos
--

- Teste com usuários reais do GitHub conhecidos (ex.: `torvalds`, `gaearon`) para verificar exibição de múltiplos repositórios.
- Teste fluxo de erro: procure por um usuário inexistente para verificar mensagens de erro.

Contribuições
--

Contribuições são bem-vindas. Sugestão de fluxo:

1. Abra uma issue descrevendo a sugestão ou bug.
2. Faça um fork, crie um branch com um nome claro (`feature/nome-da-feature`).
3. Envie um Pull Request com descrição das mudanças e screenshots quando apropriado.

Licença
--

Este projeto pode ser usado livremente para aprendizado e experimentação. Se for publicar este repositório publicamente, considere adicionar uma licença (por exemplo MIT) para esclarecer os termos.

Contato
--

Se quiser discutir melhorias ou contribuir, abra uma issue neste repositório.

-----

Arquivo atualizado com informações importantes sobre o projeto.

