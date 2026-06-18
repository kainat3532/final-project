/* ═══════════════════════════════════════════════════
   Sabrina.DEV — Main Application JS
   Covers: DOM manipulation, events, scroll effects,
   animations, filtering, form validation, localStorage
═══════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ─── 1. NAVBAR — scroll effect + mobile menu ─────────────────

  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  // Add shadow when page is scrolled
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
    updateActiveNav();
  }, { passive: true });

  // Toggle mobile menu
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', navLinks.classList.contains('open'));
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  // ─── 2. ACTIVE NAV — highlight current section ───────────────

  function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY  = window.scrollY + 100;

    sections.forEach(section => {
      const top    = section.offsetTop;
      const bottom = top + section.offsetHeight;
      const id     = section.getAttribute('id');
      const link   = document.querySelector(`.nav-link[href="#${id}"]`);

      if (link) {
        link.classList.toggle('active', scrollY >= top && scrollY < bottom);
      }
    });
  }

  // ─── 3. SCROLL REVEAL ────────────────────────────────────────

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.section, .card, .proj-card, .blog-card, .about-grid, .contact-wrapper')
    .forEach(el => {
      el.classList.add('reveal');
      revealObserver.observe(el);
    });

  // ─── 4. SKILL BARS — animate on reveal ───────────────────────

  const skillsPanel = document.querySelector('.skills-panel');
  let skillsAnimated = false;

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !skillsAnimated) {
        skillsAnimated = true;
        animateSkillBars();
      }
    });
  }, { threshold: 0.3 });

  if (skillsPanel) skillObserver.observe(skillsPanel);

  function animateSkillBars() {
    document.querySelectorAll('.skill-fill').forEach(bar => {
      const target = bar.getAttribute('data-width') + '%';
      // Small delay so transition is visible
      requestAnimationFrame(() => {
        setTimeout(() => { bar.style.width = target; }, 100);
      });
    });
  }

  // ─── 5. PROJECTS — render + filter ───────────────────────────

  const projectsGrid = document.getElementById('projectsGrid');
  const filterTabs   = document.getElementById('filterTabs');
  let   activeFilter = 'all';

  function renderProjects(filter = 'all') {
    const filtered = filter === 'all'
      ? PROJECTS
      : PROJECTS.filter(p => p.tags.includes(filter));

    projectsGrid.innerHTML = filtered.map(p => `
      <article class="proj-card reveal">
        <div class="proj-thumb" style="background: ${p.bg}">
          ${p.emoji}
        </div>
        <div class="proj-body">
          <h4>${p.title}</h4>
          <p>${p.desc}</p>
          <div class="proj-tags">
            ${p.tags.map(t => `<span class="proj-tag">${t}</span>`).join('')}
          </div>
          <div class="proj-links">
            <a href="${p.github}" class="proj-link" target="_blank" rel="noopener">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              GitHub
            </a>
            <a href="${p.live}" class="proj-link" target="_blank" rel="noopener">
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              Live demo
            </a>
          </div>
        </div>
      </article>
    `).join('');

    // Re-observe new cards for scroll reveal
    projectsGrid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  }

  // Filter button events
  filterTabs.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    filterTabs.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    renderProjects(activeFilter);
  });

  renderProjects(); // initial render

  // ─── 6. BLOG — render ────────────────────────────────────────

  const blogGrid = document.getElementById('blogGrid');

  function renderBlogs() {
    blogGrid.innerHTML = BLOGS.map(b => `
      <article class="blog-card reveal">
        <span class="blog-cat" style="color: ${b.catColor}; background: ${b.catBg}">
          ${b.category}
        </span>
        <h4>${b.title}</h4>
        <p>${b.preview}</p>
        <div class="blog-meta">
          <span>
            <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            ${b.date}
          </span>
          <span>·</span>
          <span>
            <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            ${b.readTime}
          </span>
        </div>
      </article>
    `).join('');

    blogGrid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  }

  renderBlogs();

  // ─── 7. CONTACT FORM — validation + localStorage ─────────────

  const form       = document.getElementById('contactForm');
  const submitBtn  = document.getElementById('submitBtn');
  const successMsg = document.getElementById('formSuccess');

  // Inputs
  const fname    = document.getElementById('fname');
  const femail   = document.getElementById('femail');
  const fsubject = document.getElementById('fsubject');
  const fmsg     = document.getElementById('fmsg');

  // Error spans
  const nameErr    = document.getElementById('nameErr');
  const emailErr   = document.getElementById('emailErr');
  const subjectErr = document.getElementById('subjectErr');
  const msgErr     = document.getElementById('msgErr');

  // Restore saved draft from localStorage
  function loadDraft() {
    const draft = JSON.parse(localStorage.getItem('contactDraft') || '{}');
    if (draft.name)    fname.value    = draft.name;
    if (draft.email)   femail.value   = draft.email;
    if (draft.subject) fsubject.value = draft.subject;
    if (draft.message) fmsg.value     = draft.message;
  }

  // Save draft to localStorage on input
  function saveDraft() {
    localStorage.setItem('contactDraft', JSON.stringify({
      name:    fname.value,
      email:   femail.value,
      subject: fsubject.value,
      message: fmsg.value
    }));
  }

  [fname, femail, fsubject, fmsg].forEach(field => {
    field.addEventListener('input', saveDraft);
  });

  loadDraft();

  // Validation helpers
  function showError(input, errEl, msg) {
    input.classList.add('error');
    errEl.textContent = msg;
    errEl.classList.add('show');
    return false;
  }

  function clearError(input, errEl) {
    input.classList.remove('error');
    errEl.classList.remove('show');
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validateForm() {
    let valid = true;

    // Name
    clearError(fname, nameErr);
    if (fname.value.trim().length < 2) {
      showError(fname, nameErr, 'Please enter your name (at least 2 characters)');
      valid = false;
    }

    // Email
    clearError(femail, emailErr);
    if (!isValidEmail(femail.value.trim())) {
      showError(femail, emailErr, 'Please enter a valid email address');
      valid = false;
    }

    // Subject
    clearError(fsubject, subjectErr);
    if (fsubject.value.trim().length < 3) {
      showError(fsubject, subjectErr, 'Please enter a subject');
      valid = false;
    }

    // Message
    clearError(fmsg, msgErr);
    if (fmsg.value.trim().length < 10) {
      showError(fmsg, msgErr, 'Message must be at least 10 characters');
      valid = false;
    }

    return valid;
  }

  // Clear errors on input
  fname.addEventListener('input',    () => clearError(fname,    nameErr));
  femail.addEventListener('input',   () => clearError(femail,   emailErr));
  fsubject.addEventListener('input', () => clearError(fsubject, subjectErr));
  fmsg.addEventListener('input',     () => clearError(fmsg,     msgErr));

  // Submit handler
  form.addEventListener('submit', e => {
    e.preventDefault();
    successMsg.classList.remove('show');

    if (!validateForm()) return;

    // Simulate sending
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.textContent = 'Send message';
      submitBtn.disabled = false;
      successMsg.classList.add('show');

      // Clear form & draft
      form.reset();
      localStorage.removeItem('contactDraft');

      // Scroll to success message
      successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 1200);
  });

  // ─── 8. SMOOTH SCROLL for all anchor links ───────────────────

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = parseInt(getComputedStyle(document.documentElement)
          .getPropertyValue('--nav-h')) || 64;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

}); // end DOMContentLoaded
