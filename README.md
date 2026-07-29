# 🧠 Portfólio — Neuropsicóloga Patrícia Souza

Site de portfólio profissional (one-page) desenvolvido para a psicóloga e neuropsicóloga **Patrícia Souza**, feito em **HTML, CSS e JavaScript puro**. Apresenta os serviços, diferenciais e formas de atendimento da profissional, com design responsivo, seções interativas e **agendamento direto via WhatsApp**.

🔗 **Acesse o site:** [samuelaugustowvw.github.io/Portfolio-Patricia](https://samuelaugustowvw.github.io/Portfolio-Patricia/)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/Hospedagem-GitHub%20Pages-222?logo=github&logoColor=white)

> ℹ️ O domínio original saiu do ar; esta versão está hospedada no **GitHub Pages** para manter o site acessível.

---

## ✨ Seções da página

- **Início** — apresentação da profissional com chamada para agendamento.
- **Sobre** — "Quem sou eu?", trajetória e formação.
- **Serviços** — cartões com os atendimentos oferecidos, cada um abrindo um **modal** com mais detalhes:
  - Avaliação Neuropsicológica
  - Reabilitação Neurocognitiva
  - Psicoterapia Presencial
  - Psicoterapia para Adolescentes
  - Palestras
  - Psicoterapia Online
- **Diferenciais** — Empatia, Experiência, Conhecimento e Ética.
- **Atendimentos** — modalidades de atendimento disponíveis.
- **Dicas** — **cartões interativos (flip cards)** que revelam mensagens de saúde mental ao serem clicados.
- **Contatos** — e-mail, telefone, Instagram, QR Code e um **formulário que envia a mensagem direto pelo WhatsApp**.

---

## ⚡ Interações (JavaScript)

Toda a interatividade é feita em JavaScript puro (`script.js`), sem bibliotecas:

- **Menu responsivo** — botão hambúrguer que abre/fecha a navegação no mobile e recolhe ao rolar a página.
- **Modais dos serviços** — funções `openModal` / `closeModal` exibem os detalhes de cada serviço.
- **Flip cards de dicas** — ao clicar, o cartão gira e mostra uma mensagem de uma lista de frases motivacionais.
- **Integração com WhatsApp** — o formulário de contato monta uma mensagem com o nome e o texto do visitante e abre a conversa no WhatsApp da profissional via `wa.me`, sem precisar de back-end.

---

## 🛠️ Tecnologias

- **HTML5** — estrutura e conteúdo (`index.html`)
- **CSS3** — estilização e responsividade (`style.css`)
- **JavaScript** (vanilla) — interações (`script.js`)
- **[Font Awesome 6.7.2](https://fontawesome.com/)** — ícones (via CDN)
- **GitHub Pages** — hospedagem

---

## 📁 Estrutura

```
Portfolio-Patricia/
├── index.html     # Estrutura e conteúdo do site
├── style.css      # Estilos e responsividade
├── script.js      # Menu, modais, flip cards e integração com WhatsApp
└── Images/        # Fotos, logos, imagens das seções e QR Code
```

---

## 🚀 Como executar localmente

Por ser um site estático, não precisa de build nem servidor.

1. Clone o repositório:
   ```bash
   git clone https://github.com/samuelaugustowvw/Portfolio-Patricia.git
   cd Portfolio-Patricia
   ```

2. Abra o arquivo `index.html` no navegador.

> 💡 Para desenvolvimento com recarregamento automático, use a extensão **Live Server** do VS Code.

---

## 📄 Licença

Projeto desenvolvido sob encomenda para uso da profissional. Código disponível para fins de estudo e referência.

---

Desenvolvido por [@samuelaugustowvw](https://github.com/samuelaugustowvw)
