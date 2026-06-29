# 👨‍👩‍👧 PaisNeurodivergentes — Portal MVP

Portal digital para apoiar famílias de pessoas neurodivergentes (autismo, TDAH), estruturado como projeto integrador.

## 📂 Estrutura do projeto

```
paisneurodivergentes/
├── index.html                    ← 🏠 HOME — escolha do momento + persona
├── css/
│   └── styles.css                ← Estilos globais (acessível, responsivo)
├── js/
│   └── main.js                   ← Interatividade (tabs, modais, simulação)
└── pages/
    ├── fase-descoberta.html       ← Fase 01
    ├── fase-navegacao.html        ← Fase 02
    ├── fase-gestao.html           ← Fase 03
    ├── fase-desenvolvimento.html  ← Fase 04
    ├── diretorio.html             ← P0 — Diretório de Serviços
    ├── forum.html                 ← P0 — Fórum Pais-para-Pais
    ├── base-conhecimento.html     ← P1 — Artigos e Direitos
    ├── monitoramento.html         ← P2 — Registro de Rotina
    ├── painel-pais.html           ← 👨‍👩‍👧 Painel: Pais e Familiares
    ├── painel-profissional.html   ← 👩‍⚕️ Painel: Profissional de Saúde
    ├── painel-admin.html          ← 🛡️ Painel: Administração
    └── proposta-de-valor.html          ← 🎤 Proposta de Valor de 5-10 min
```

## 🚀 Como abrir

### Opção 1: Duplo clique
Abra o arquivo `index.html` em qualquer navegador moderno (Chrome, Firefox, Edge, Safari).

### Opção 2: Servidor local (recomendado)
```bash
cd paisneurodivergentes
python3 -m http.server 8000
# Abra http://localhost:8000 no navegador
```

## 🧭 Fluxo de navegação recomendado

1. **Home (`index.html`)** — começa aqui. A landing pergunta:
   - **"Onde você está agora?"** → 4 cards das fases da jornada
   - **"Quem é você?"** → 3 pais (Pais / Profissional / Admin)

2. **Para Pais**: clique em "Estou cuidando de alguém" → entra no **painel-pais.html**
   - Veja ações rápidas, compromissos, monitoramento, fórum

3. **Para Profissional**: clique em "Acompanho famílias" → **painel-profissional.html**
   - Veja famílias acompanhadas, moderação, curadoria

4. **Para Admin**: clique em "Gestão da plataforma" → **painel-admin.html**
   - KPIs operacionais, moderação, analytics, roadmap

5. **Proposta de Valor (`proposta-de-valor.html`)** — roteiro completo para apresentação de 5-10 min

## ✨ Funcionalidades interativas

- **🗂️ Fórum funcional** (`forum.html`) — você pode postar novas dúvidas que aparecem no feed
- **📊 Monitoramento funcional** (`monitoramento.html`) — registre humor/sono, veja o histórico
- **📍 Diretório com filtros** (`diretorio.html`) — chips de filtro por tipo de serviço
- **📚 Base de Conhecimento com tabs** (`base-conhecimento.html`) — 5 abas por tema
- **📱 100% responsivo** — funciona em celular, tablet, desktop
- **♿ Acessibilidade WCAG** — skip-link, ARIA labels, alto contraste

## 🎨 Design

- Paleta: teal acolhedor (#0d9488) + coral suave + bege quente
- Tipografia: Inter (sistema: -apple-system fallback)
- Mobile-first, breakpoints em 480px e 768px
- Animações sutis em hover, transições suaves

## 📋 Resumo do conteúdo (PRD)

**Visão**: Ponte entre a solidão do diagnóstico e o suporte que toda família merece.

**MVP (P0)**:
- ✅ Diretório de Serviços (geolocalização, curado)
- ✅ Fórum Pais-para-Pais (moderado)

**V2 (P1-P2)**:
- 📚 Base de Conhecimento
- 📊 Monitoramento de Rotina e Crises
- 🎓 Treinamento Parental
- 📹 Feedback por Vídeo

**Validação**: 5 famílias entrevistadas. 100% usariam o fórum. 80% sentem falta de suporte local.

## 📊 Pais & ações

| Pais | Ações principais |
|---|---|
| **Pais e Familiares** | Buscar serviços, conversar no fórum, registrar rotina, consumir conteúdo |
| **Profissional de Saúde** | Curar conteúdo, mediar fórum, validar credenciais, atender famílias |
| **Admins** | Moderar, gerenciar usuários, analytics, roadmap, LGPD |

## 🎤 Proposta de Valor (5-10 min)

1. **Gancho (1 min)** — Storytelling sobre o diagnóstico solitário
2. **Problema (1 min)** — Isolamento, fragmentação, navegação difícil
3. **Solução (2-3 min)** — Demonstração do protótipo
4. **Validação (1-2 min)** — Dados de 5 entrevistas + questionário
5. **Próximos passos (1 min)** — Roadmap MVP → V2 → Escala

Ver roteiro detalhado em `pages/proposta-de-valor.html`.

---

**Projeto Integrador • IFSULDEMINAS • 2026**
**Design Thinking + Brainwriting + IA para user stories**