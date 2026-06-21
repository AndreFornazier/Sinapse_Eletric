/* =========================================================
   SINAPSE ELÉTRIC - SCRIPT.JS
   Arquivo responsável pelas interações do site:
   menu mobile, link ativo, animações ao rolar, formulário
   e redirecionamento para WhatsApp.
   ========================================================= */

// Número de WhatsApp usado nos botões. Troque pelo número real da empresa.
const WHATSAPP_NUMBER = '5562994189130';

// Mensagem padrão dos botões de orçamento.
const DEFAULT_MESSAGE = 'Olá! Gostaria de solicitar um orçamento com a Sinapse Elétric.';

// Seleciona elementos principais do menu.
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

// Abre e fecha o menu no celular.
if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    menuToggle.classList.toggle('active');
  });

  // Fecha o menu quando o usuário clica em algum link.
  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      menuToggle.classList.remove('active');
    });
  });
}

// Marca automaticamente o link da página atual no cabeçalho.
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-menu a').forEach((link) => {
  const href = link.getAttribute('href');
  if (href === currentPage) {
    link.classList.add('active');
  }
});

// Monta links de WhatsApp de forma padronizada.
function buildWhatsappLink(message = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Atualiza todos os links com a classe .js-whatsapp.
document.querySelectorAll('.js-whatsapp').forEach((link) => {
  const customMessage = link.dataset.message || DEFAULT_MESSAGE;
  link.setAttribute('href', buildWhatsappLink(customMessage));
  link.setAttribute('target', '_blank');
  link.setAttribute('rel', 'noopener noreferrer');
});

// Anima elementos com a classe .reveal quando entram na tela.
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((element) => revealObserver.observe(element));

// Lógica do formulário de contato.
const contactForm = document.querySelector('#contactForm');
const formStatus = document.querySelector('.form-status');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    // Impede o recarregamento da página.
    event.preventDefault();

    // Captura os dados informados pelo visitante.
    const data = new FormData(contactForm);
    const nome = data.get('nome')?.trim();
    const telefone = data.get('telefone')?.trim();
    const email = data.get('email')?.trim();
    const servico = data.get('servico')?.trim();
    const mensagem = data.get('mensagem')?.trim();

    // Validação simples para evitar envio sem dados essenciais.
    if (!nome || !telefone || !servico || !mensagem) {
      formStatus.textContent = 'Preencha nome, telefone, tipo de serviço e mensagem.';
      return;
    }

    // Cria uma mensagem organizada para ser enviada via WhatsApp.
    const whatsappMessage = `Olá! Meu nome é ${nome}.\n\n` +
      `Telefone: ${telefone}\n` +
      `E-mail: ${email || 'Não informado'}\n` +
      `Serviço: ${servico}\n\n` +
      `Mensagem: ${mensagem}`;

    formStatus.textContent = 'Abrindo WhatsApp com sua mensagem...';
    window.open(buildWhatsappLink(whatsappMessage), '_blank', 'noopener,noreferrer');
  });
}
/* =========================================================
   CARROSSEL - PROJETO RESIDENCIAL
   ========================================================= */

document.querySelectorAll('.solar-carousel').forEach((carousel) => {
  const track = carousel.querySelector('.solar-carousel-track');
  const slides = carousel.querySelectorAll('.solar-carousel-slide');
  const prevButton = carousel.querySelector('.solar-carousel-prev');
  const nextButton = carousel.querySelector('.solar-carousel-next');
  const dotsContainer = carousel.querySelector('.solar-carousel-dots');

  let currentSlide = 0;

  if (!track || slides.length === 0) return;

  // Cria as bolinhas automaticamente
  slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.classList.add('solar-carousel-dot');

    if (index === 0) {
      dot.classList.add('active');
    }

    dot.addEventListener('click', () => {
      currentSlide = index;
      updateCarousel();
    });

    dotsContainer.appendChild(dot);
  });

  const dots = carousel.querySelectorAll('.solar-carousel-dot');

  function updateCarousel() {
    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });
  }

  function nextSlide() {
    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    updateCarousel();
  }

  function prevSlide() {
    currentSlide--;

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    updateCarousel();
  }

  nextButton.addEventListener('click', nextSlide);
  prevButton.addEventListener('click', prevSlide);

  // Passa automaticamente a cada 4 segundos
  setInterval(nextSlide, 4000);
});
