# 🎹 Teclado Surpresa

Um projeto interativo que combina um teclado musical virtual com uma surpresa desbloqueável. Toque a sequência correta de notas para desbloquear um mural personalizado com fotos e música!

## 📋 Descrição

**Teclado Surpresa** é uma aplicação web desenvolvida em React que oferece uma experiência divertida e personalizável. O projeto funciona em duas fases:

1. **Fase 1 - Teclado**: Uma interface interativa similar a um piano real, onde o usuário pode tocar diferentes notas musicais em tempo real.

2. **Fase 2 - Surpresa**: Ao tocar a sequência correta de notas, o usuário desbloqueia uma tela especial com um mural de fotos (estilo polaroid), música de fundo e mensagens personalizadas.

## 🎯 Objetivo

Criar uma experiência interativa e personalizável que combina música, memórias visuais e diversão. Ideal para presentes especiais, convites ou simplesmente um projeto criativo e inovador.

## 🎨 Características

- **Teclado Virtual**: 12 teclas musicais (do C até B) com visual realista de piano
- **Síntese de Áudio**: Sons sintetizados em tempo real usando Web Audio API
- **Sequência Desbloqueável**: 3 sequências válidas para desbloquear a surpresa
  - `CDEFG`
  - `CCDE`
  - `CBCG`
- **Mural Personalizado**: Galeria de fotos em estilo polaroid
- **Trilha Sonora**: Música de fundo que pode ser pausada/reproduzida
- **Design Responsivo**: Interface intuitiva e visualmente agradável

## 🛠️ Tecnologias Utilizadas

- **React**: Framework JavaScript para construção da interface
- **Vite**: Ferramenta de build rápida e moderna
- **Web Audio API**: Para síntese e reprodução de áudio
- **CSS3**: Estilização e animações

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Key.jsx           # Componente individual de uma tecla do teclado
│   ├── Keyboard.jsx      # Componente que renderiza o teclado completo
│   └── Surpresa.jsx      # Componente da tela desbloqueada com fotos e música
├── assets/
│   ├── audio/
│   │   └── musica.m4a    # Trilha sonora de fundo
│   └── img/
│       ├── 1.jfif        # Fotos personalizadas para o mural
│       ├── 2.jfif
│       ├── 3.jfif
│       └── 4.jfif
├── App.jsx               # Componente principal que gerencia lógica e estado
├── App.css               # Estilos gerais da aplicação
└── main.jsx              # Ponto de entrada da aplicação
```

## 🚀 Como Usar

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

A aplicação será aberta em seu navegador padrão.

### Build para Produção

```bash
npm run build
```

## 🎹 Como Funciona

1. **Tocando o Teclado**: Clique em qualquer tecla do teclado para ouvir a nota musical correspondente
2. **Formando Sequências**: Cada clique registra a nota e avalia se ela faz parte de uma sequência desejada
3. **Desbloqueando**: Quando uma das sequências válidas for completada, a tela muda para o mural de surpresa
4. **Explorando a Surpresa**: Veja as fotos, leia as mensagens personalizadas e controle a música de fundo

## 🎵 Notas Musicais

O teclado oferece as seguintes notas:
- **Brancas**: C, D, E, F, G, A, B
- **Pretas**: C#, D#, F#, G#, A#

As frequências correspondem à escala cromática ocidental padrão.

## 🔧 Personalização

Para adaptar o projeto com suas próprias surpresas:

1. **Fotos**: Substitua os arquivos em `src/assets/img/` com suas próprias fotos
2. **Mensagens**: Edite os textos nos polaroids em `Surpresa.jsx`
3. **Música**: Substitua `src/assets/audio/musica.m4a` com sua trilha sonora
4. **Sequências**: Modifique o array `senhasValidas` em `App.jsx` com suas próprias sequências

## 📦 Dependências

- react
- react-dom
- vite

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build para produção
- `npm run preview` - Visualiza o build de produção localmente
- `npm run lint` - Executa análise de código

## 💡 Ideias de Uso

- 🎁 Presente especial para alguém querido
- 💍 Proposta de namoro interativa
- 🎉 Convite criativo para eventos
- 💬 Forma lúdica de compartilhar memórias
- 🎓 Projeto educativo sobre Web Audio API

## 📄 Licença

Projeto pessoal e customizável para uso livre.

---
