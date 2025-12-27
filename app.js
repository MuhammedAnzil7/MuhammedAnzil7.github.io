function toggleMobileMenu() {
      const nav = document.getElementById('mobileNav');
      nav.classList.toggle('active');
    }

    function closeMobileMenu() {
      const nav = document.getElementById('mobileNav');
      nav.classList.remove('active');
    }

    function smoothScroll(target) {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    function toggleTheme() {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    }

    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode');
    }

    function handleSubmit(event) {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon at ${email}.`);
      
      event.target.reset();
    }

    const observerOptions = {
      threshold: 0.5
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'fillBar 1.5s ease-out forwards';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.skill-fill').forEach(el => observer.observe(el));