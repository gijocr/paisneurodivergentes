/* =========================================
   PaisNeurodivergentes - Scripts Globais
   ========================================= */

// Estado simulado do aplicativo
const AppState = {
  currentUser: null,
  currentPersona: null,
  currentPhase: null,

  personas: {
    pais: {
      name: 'Maria Silva',
      role: 'Mãe do Pedro (7 anos)',
      avatar: '👩',
      badge: 'Pais e Familiares'
    },
    profissional: {
      name: 'Dra. Ana Beatriz',
      role: 'Psicóloga Infantil • CRP 06/12345',
      avatar: '👩‍⚕️',
      badge: 'Profissional de Saúde'
    },
    admin: {
      name: 'Carlos Mendes',
      role: 'Administrador da Plataforma',
      avatar: '🛡️',
      badge: 'Admins'
    }
  },

  // Dados simulados
  services: [
    { id: 1, name: 'Clínica Neurodesenvolver', type: 'Clínica Multidisciplinar', city: 'São Paulo - SP', rating: 4.8, verified: true, distance: '2.3 km' },
    { id: 2, name: 'Espaço Incluir', type: 'Escola Especializada', city: 'São Paulo - SP', rating: 4.9, verified: true, distance: '5.1 km' },
    { id: 3, name: 'Dra. Lucia Tanaka', type: 'Neurologista Pediátrica', city: 'São Paulo - SP', rating: 4.7, verified: true, distance: '3.7 km' },
    { id: 4, name: 'Fonoaudiologia Acolher', type: 'Fonoaudiólogo', city: 'São Paulo - SP', rating: 4.6, verified: false, distance: '1.2 km' },
    { id: 5, name: 'Centro TEA Brasil', type: 'ABA e Terapia', city: 'Rio de Janeiro - RJ', rating: 4.9, verified: true, distance: '360 km' },
    { id: 6, name: 'Instituto Caminhar', type: 'Psicopedagogia', city: 'Belo Horizonte - MG', rating: 4.5, verified: true, distance: '590 km' }
  ],

  forumPosts: [
    { author: 'Juliana R.', avatar: 'J', time: 'Há 2 horas', title: 'Como vocês lidam com seletividade alimentar?', content: 'Meu filho de 5 anos recusa quase todos os vegetais. Já tentei várias abordagens...', tag: 'Rotina', replies: 12, support: 24 },
    { author: 'Roberto M.', avatar: 'R', time: 'Há 5 horas', title: 'Escola particular recusou matrícula por causa do laudo. O que fazer?', content: 'Recebemos a negativa essa semana. Já procurei advogado, mas queria saber se alguém passou por isso...', tag: 'Direitos', replies: 28, support: 45, urgent: true },
    { author: 'Patrícia L.', avatar: 'P', time: 'Há 1 dia', title: 'Medicação para TDAH -分享一下 experiências', content: 'Meu filho começou com ritalina há 3 semanas. Os efeitos foram surpreendentes na escola...', tag: 'Tratamento', replies: 19, support: 31 },
    { author: 'Fernando S.', avatar: 'F', time: 'Há 2 dias', title: 'Pai de primeira viagem - o que eu deveria saber?', content: 'Filho diagnosticado há 1 mês. Estou perdido. Por onde começo?', tag: 'Acolhimento', replies: 42, support: 78 },
    { author: 'Camila T.', avatar: 'C', time: 'Há 3 dias', title: 'Grupo de pais em SP - encontro presencial', content: 'Pessoal, organizei um café para trocarmos experiências. Será dia 15 às 15h...', tag: 'Encontros', replies: 8, support: 22 }
  ],

  // Estado de monitoria
  monitoringEntries: [
    { date: '2026-06-28', mood: 'Calmo', sleep: '8h', medication: 'Tomou', crisis: false, notes: 'Dia produtivo na escola' },
    { date: '2026-06-27', mood: 'Agitado', sleep: '6h', medication: 'Tomou', crisis: true, notes: 'Crise sensorial após exposição a barulho' },
    { date: '2026-06-26', mood: 'Feliz', sleep: '9h', medication: 'Tomou', crisis: false, notes: 'Brincou com colega novo' }
  ]
};

// Menu Mobile
function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }
}

// Tabs
function initTabs() {
  document.querySelectorAll('[data-tab-group]').forEach(group => {
    const tabs = group.querySelectorAll('.tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const target = tab.dataset.tab;
        group.querySelectorAll('.tab-panel').forEach(panel => {
          panel.classList.toggle('active', panel.dataset.tabPanel === target);
        });
      });
    });
  });
}

// Chips (filtros)
function initChips() {
  document.querySelectorAll('[data-chip-group]').forEach(group => {
    const chips = group.querySelectorAll('.chip');
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
      });
    });
  });
}

// Cards interativos: ir para a página correspondente
function setupMomentNavigation() {
  document.querySelectorAll('[data-moment]').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const moment = card.dataset.moment;
      AppState.currentPhase = moment;
      const map = {
        'descoberta': 'pages/fase-descoberta.html',
        'navegacao': 'pages/fase-navegacao.html',
        'gestao': 'pages/fase-gestao.html',
        'desenvolvimento': 'pages/fase-desenvolvimento.html'
      };
      window.location.href = map[moment];
    });
  });
}

function setupPersonaNavigation() {
  document.querySelectorAll('[data-persona]').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const persona = card.dataset.persona;
      AppState.currentPersona = persona;
      // Salva escolha no localStorage
      try {
        localStorage.setItem('paisneurodivergentes_persona', persona);
      } catch(e) { /* localStorage may not be available */ }

      const map = {
        'pais': 'pages/painel-pais.html',
        'profissional': 'pages/painel-profissional.html',
        'admin': 'pages/painel-admin.html'
      };
      window.location.href = map[persona];
    });
  });
}

// Renderização dinâmica
function renderServices(containerId, filterType = null) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const services = filterType
    ? AppState.services.filter(s => s.type.toLowerCase().includes(filterType.toLowerCase()))
    : AppState.services;

  container.innerHTML = services.map(service => `
    <article class="list-item">
      <div class="list-item-header">
        <div>
          <div class="list-item-title">${service.name}</div>
          <div class="list-item-meta">
            <span>📍 ${service.city} • ${service.distance}</span>
            <span>⭐ ${service.rating}</span>
          </div>
        </div>
        ${service.verified
          ? '<span class="badge badge-success">✓ Verificado</span>'
          : '<span class="badge badge-warm">Aguardando</span>'}
      </div>
      <p class="text-soft" style="margin-bottom: var(--space-4);">${service.type}</p>
      <div class="chip-group" style="margin-bottom: 0;">
        <span class="chip">${service.type}</span>
      </div>
    </article>
  `).join('');
}

function renderForum(containerId, limit = null) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const posts = limit ? AppState.forumPosts.slice(0, limit) : AppState.forumPosts;

  container.innerHTML = posts.map(post => `
    <article class="forum-post">
      <div class="forum-post-header">
        <div class="forum-avatar">${post.avatar}</div>
        <div class="forum-meta">
          <strong>${post.author}</strong>
          <time>${post.time}</time>
        </div>
        <span class="badge ${post.urgent ? 'badge-coral' : 'badge-primary'}">${post.tag}</span>
      </div>
      <h4 style="margin-bottom: var(--space-2);">${post.title}</h4>
      <p class="forum-content">${post.content}</p>
      <div class="forum-actions">
        <button type="button" aria-label="Apoiar">👨‍👩‍👧 Apoiar (${post.support})</button>
        <button type="button" aria-label="Responder">💬 Responder (${post.replies})</button>
        <button type="button" aria-label="Salvar">🔖 Salvar</button>
        <button type="button" aria-label="Compartilhar">↗ Compartilhar</button>
      </div>
    </article>
  `).join('');
}

// Form de novo post
function setupNewPostForm() {
  const form = document.getElementById('new-post-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = form.querySelector('[name="title"]').value;
    const content = form.querySelector('[name="content"]').value;
    const tag = form.querySelector('[name="tag"]').value;

    const newPost = {
      author: 'Você',
      avatar: 'V',
      time: 'Agora',
      title,
      content,
      tag,
      replies: 0,
      support: 1
    };

    AppState.forumPosts.unshift(newPost);
    renderForum('forum-list');
    form.reset();

    // Feedback visual
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = '✓ Post publicado!';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
    }, 2000);
  });
}

// Monitoramento: adicionar registro
function setupMonitoringForm() {
  const form = document.getElementById('monitoring-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const date = form.querySelector('[name="date"]').value;
    const mood = form.querySelector('[name="mood"]').value;
    const sleep = form.querySelector('[name="sleep"]').value;
    const notes = form.querySelector('[name="notes"]').value;

    const newEntry = {
      date,
      mood,
      sleep,
      medication: 'Tomou',
      crisis: false,
      notes
    };

    AppState.monitoringEntries.unshift(newEntry);
    renderMonitoring();
    form.reset();

    alert('✓ Registro adicionado com sucesso!');
  });
}

function renderMonitoring() {
  const container = document.getElementById('monitoring-list');
  if (!container) return;

  const moodEmojis = {
    'Feliz': '😊',
    'Calmo': '😌',
    'Agitado': '😟',
    'Triste': '😢',
    'Ansioso': '😰'
  };

  container.innerHTML = AppState.monitoringEntries.map(entry => `
    <article class="list-item">
      <div class="list-item-header">
        <div>
          <div class="list-item-title">${new Date(entry.date).toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })}</div>
          <div class="list-item-meta">
            <span>${moodEmojis[entry.mood] || '😐'} Humor: ${entry.mood}</span>
            <span>😴 Sono: ${entry.sleep}</span>
            <span>💊 ${entry.medication}</span>
            ${entry.crisis ? '<span class="badge badge-coral">⚠ Crise</span>' : ''}
          </div>
        </div>
      </div>
      ${entry.notes ? `<p class="text-soft" style="margin: 0;">${entry.notes}</p>` : ''}
    </article>
  `).join('');
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initTabs();
  initChips();
  setupMomentNavigation();
  setupPersonaNavigation();
  setupNewPostForm();
  setupMonitoringForm();

  // Carrega persona salva
  try {
    const saved = localStorage.getItem('paisneurodivergentes_persona');
    if (saved) AppState.currentPersona = saved;
  } catch(e) { /* localStorage may not be available */ }
});

// Exporta para uso global
window.AppState = AppState;
window.renderServices = renderServices;
window.renderForum = renderForum;
window.renderMonitoring = renderMonitoring;