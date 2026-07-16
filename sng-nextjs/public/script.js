let animationTime = 0;

    // --- 1. Init Lenis Smooth Scroll ---
    window.lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      infinite: false
    });

    function raf(time) {
      window.lenis.raf(time);
      animationTime = time * 0.001;
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync scroll reveals and navigation bar active state
    window.lenis.on('scroll', () => {
      handleScrollReveals();
      handleHeaderScroll();
      syncDotNavigation();
      handleParallax();
      
    });

    
    
    // --- SMART Cards Scroll Animation ---
    const smartCards = document.querySelectorAll('.smart-card');
    const smartCardObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          // Only remove if it scrolled out of view at the bottom
          if (entry.boundingClientRect.top > 0) {
            entry.target.classList.remove('is-visible');
          }
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -100px 0px" });
    smartCards.forEach(card => smartCardObserver.observe(card));

    // --- Parallax Effect ---
    const parallaxElements = document.querySelectorAll('[data-speed]');
    function handleParallax() {
      const scrollY = window.scrollY;
      parallaxElements.forEach(el => {
        const speed = parseFloat(el.getAttribute('data-speed'));
        const yPos = -(scrollY * speed);
        el.style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
    }

    // --- 2. Headroom-style Nav & Scroll Spy Reveals ---
    const nav = document.getElementById('main-nav');
    let lastScrollTop = 0;

    function handleHeaderScroll() {
      const currentScroll = window.scrollY;
      if (currentScroll > 80) {
        nav.classList.add('nav-solid');
      } else {
        nav.classList.remove('nav-solid');
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }

    const revealElements = document.querySelectorAll('.reveal');
    function handleScrollReveals() {
      const triggerBottom = window.innerHeight * 0.88;
      revealElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < triggerBottom) {
          el.classList.add('active');
        }
      });
    }
    // Trigger on load
    handleScrollReveals();

    // Sync dot navigation state on scroll
    const dotItems = document.querySelectorAll('.dot-nav-item');
    const sections = document.querySelectorAll('section, .hero');

    function syncDotNavigation() {
      let currentSection = 'home';
      sections.forEach(sec => {
        const top = sec.offsetTop - 120;
        const height = sec.offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
          currentSection = sec.getAttribute('id');
        }
      });

      dotItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-section') === currentSection) {
          item.classList.add('active');
        }
      });
    }

    // --- 3. Video Modal & Mobile Menu Drawer interactions ---
    const videoModal = document.getElementById('videoModal');
    function openVideoModal() {
      videoModal.classList.add('active');
      window.lenis.stop();
    }
    function closeVideoModal() {
      videoModal.classList.remove('active');
      window.lenis.start();
    }

    // Close video modal when clicking on the background backdrop
    if (videoModal) {
      videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
          closeVideoModal();
        }
      });
    }

    const mobileDrawer = document.getElementById('mobileDrawer');
    function toggleMenu() {
      mobileDrawer.classList.toggle('active');
      const toggle = document.querySelector('.menu-toggle');
      toggle.classList.toggle('active');
    }
    
    // --- 4. FAQ Accordion interaction ---
    function toggleAccordion(button) {
      const item = button.closest('.accordion-item');
      const content = item.querySelector('.accordion-content');
      const isActive = item.classList.contains('active');
      
      // Close all accordion items
      document.querySelectorAll('.accordion-item').forEach(el => {
        el.classList.remove('active');
        el.querySelector('.accordion-content').style.maxHeight = '0';
      });
      
      if (!isActive) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    }

    // --- 5. WebGL Hero Scene (Three.js light colonnade reflecting pool) ---
    const heroCanvas = document.getElementById('hero-canvas');
    let heroRenderer, heroScene, heroCamera;
    let columns = [];
    let lights = {};

    function initHero3D() {
      if (!heroCanvas) return;

      heroScene = new THREE.Scene();
      heroScene.background = new THREE.Color(0xF8F6F2); // Primary light background
      heroScene.fog = new THREE.FogExp2(0xF8F6F2, 0.05);

      heroCamera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
      heroCamera.position.set(0, 1.8, 12);

      heroRenderer = new THREE.WebGLRenderer({ canvas: heroCanvas, antialias: true, alpha: false });
      heroRenderer.setSize(window.innerWidth, window.innerHeight);
      heroRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      heroRenderer.toneMapping = THREE.ACESFilmicToneMapping;
      heroRenderer.toneMappingExposure = 1.0;

      // Colonnade Pillars
      const colGeo = new THREE.BoxGeometry(0.7, 8, 0.7);
      const stoneMat = new THREE.MeshStandardMaterial({
        color: 0xEFE7DB, // Warm Travertine tone
        roughness: 0.65,
        metalness: 0.1
      });

      // Spawn parallel colonnade
      for (let i = -3; i <= 3; i++) {
        const colLeft = new THREE.Mesh(colGeo, stoneMat);
        colLeft.position.set(-2.8, 4, i * 4);
        heroScene.add(colLeft);
        columns.push(colLeft);

        const colRight = new THREE.Mesh(colGeo, stoneMat);
        colRight.position.set(2.8, 4, i * 4);
        heroScene.add(colRight);
        columns.push(colRight);
      }

      // Reflective water basin (light serene water)
      const waterGeo = new THREE.PlaneGeometry(40, 50);
      const waterMat = new THREE.MeshStandardMaterial({
        color: 0xEEFAF6, // Soft aqua tint reflecting light
        roughness: 0.15,
        metalness: 0.8
      });
      const waterBasin = new THREE.Mesh(waterGeo, waterMat);
      waterBasin.rotation.x = -Math.PI / 2;
      waterBasin.position.set(0, 0, 0);
      heroScene.add(waterBasin);

      // Light setup - Warm Gold accents and bright ambient sunlight
      lights.ambient = new THREE.AmbientLight(0xffffff, 0.7);
      heroScene.add(lights.ambient);

      lights.dir = new THREE.DirectionalLight(0xc6a15b, 1.5);
      lights.dir.position.set(5, 8, 3);
      heroScene.add(lights.dir);

      lights.point = new THREE.PointLight(0xc6a15b, 1.0, 15);
      lights.point.position.set(0, 1.5, 0);
      heroScene.add(lights.point);

      window.addEventListener('resize', onHeroResize);
      animateHero();
    }

    function onHeroResize() {
      heroCamera.aspect = window.innerWidth / window.innerHeight;
      heroCamera.updateProjectionMatrix();
      heroRenderer.setSize(window.innerWidth, window.innerHeight);
    }

    // Performance visibility states for Three.js render loops
    let heroVisible = true;
    let inquireVisible = false;

    if ('IntersectionObserver' in window) {
      const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          heroVisible = entry.isIntersecting;
        });
      }, { threshold: 0.01 });
      const heroSection = document.getElementById('home');
      if (heroSection) heroObserver.observe(heroSection);

      const inquireObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          inquireVisible = entry.isIntersecting;
        });
      }, { threshold: 0.01 });
      const inquireSection = document.getElementById('contact');
      if (inquireSection) inquireObserver.observe(inquireSection);
    }

    function animateHero() {
      requestAnimationFrame(animateHero);
      if (!heroVisible) return;

      // Camera parallax orbit
      heroCamera.position.x = Math.sin(animationTime * 0.12) * 0.25;
      heroCamera.position.y = 1.8 + Math.cos(animationTime * 0.08) * 0.06;
      
      const scrollOffset = window.scrollY * 0.0015;
      heroCamera.position.z = 12 - scrollOffset * 5;

      // Soft light intensity variations
      const pulse = (Math.sin(animationTime * 0.2) + 1) / 2;
      lights.dir.intensity = THREE.MathUtils.lerp(1.2, 1.8, pulse);
      
      heroRenderer.render(heroScene, heroCamera);
    }

    // --- 6. Map Tooltip/Detail Interaction ---
    function showMapTooltip(title, subtitle, desc, corridor, distance, status, badgeText) {
      const panelTitle = document.getElementById('map-detail-title');
      const panelDesc = document.getElementById('map-detail-desc');
      const panelBadge = document.getElementById('map-detail-badge');
      const panelCorridor = document.getElementById('map-detail-corridor');
      const panelDistance = document.getElementById('map-detail-distance');
      const panelStatus = document.getElementById('map-detail-status');
      const panel = document.getElementById('map-details-panel');
      
      if (!panel) return;

      panel.style.opacity = 0;
      panel.style.transform = 'translateY(10px)';

      setTimeout(() => {
        if (panelTitle) panelTitle.innerText = title;
        if (panelDesc) panelDesc.innerText = desc;
        if (panelBadge) panelBadge.innerText = badgeText || "Completed Project";
        if (panelCorridor) panelCorridor.innerText = corridor || "N/A";
        if (panelDistance) panelDistance.innerText = distance || "N/A";
        if (panelStatus) panelStatus.innerText = status || "Completed";
        
        panel.style.opacity = 1;
        panel.style.transform = 'translateY(0)';
      }, 150);
    }

    // --- 7. WebGL Contact Form Wave (Three.js fluid grid representation) ---
    const inquireCanvas = document.getElementById('inquire-bg-canvas');
    let inquireRenderer, inquireScene, inquireCamera, waveMesh;

    function initInquire3D() {
      if (!inquireCanvas) return;

      inquireScene = new THREE.Scene();
      inquireCamera = new THREE.PerspectiveCamera(60, inquireCanvas.clientWidth / inquireCanvas.clientHeight, 0.1, 100);
      inquireCamera.position.z = 6;

      inquireRenderer = new THREE.WebGLRenderer({ canvas: inquireCanvas, antialias: true, alpha: true });
      inquireRenderer.setSize(inquireCanvas.clientWidth, inquireCanvas.clientHeight);

      // Create sand grid wireframe using gold color
      const geo = new THREE.PlaneGeometry(12, 12, 28, 28);
      const mat = new THREE.MeshBasicMaterial({
        color: 0xc8a96a,
        wireframe: true,
        transparent: true,
        opacity: 0.15
      });

      waveMesh = new THREE.Mesh(geo, mat);
      waveMesh.rotation.x = -Math.PI / 2.5;
      waveMesh.position.y = -1.2;
      inquireScene.add(waveMesh);

      window.addEventListener('resize', onInquireResize);
      animateInquire();
    }

    function onInquireResize() {
      inquireCamera.aspect = inquireCanvas.clientWidth / inquireCanvas.clientHeight;
      inquireCamera.updateProjectionMatrix();
      inquireRenderer.setSize(inquireCanvas.clientWidth, inquireCanvas.clientHeight);
    }

    function animateInquire() {
      requestAnimationFrame(animateInquire);
      if (!inquireVisible) return;
      
      if (waveMesh) {
        const position = waveMesh.geometry.attributes.position;
        for (let i = 0; i < position.count; i++) {
          const u = position.getX(i);
          const v = position.getY(i);
          const z = Math.sin(u * 0.4 + animationTime * 0.6) * 0.25 + 
                    Math.cos(v * 0.4 + animationTime * 0.4) * 0.2;
          position.setZ(i, z);
        }
        position.needsUpdate = true;
        waveMesh.rotation.z += 0.0003;
      }

      inquireRenderer.render(inquireScene, inquireCamera);
    }

    // --- 8. Inquiry Form Handler ---
    function handleInquiry(e) {
      e.preventDefault();
      const btn = document.querySelector('.form-submit-btn');
      btn.innerText = "Transmitting registry info...";
      btn.disabled = true;

      setTimeout(() => {
        btn.innerText = "Registry info received successfully";
        btn.style.backgroundColor = "var(--success, #5fa36a)"; // Success green matching design system token
        btn.style.color = "#ffffff";
        document.getElementById('inquiryForm').reset();
      }, 1500);
    }

    // --- 8.5 Project slider navigation ---
    let projectSliderIndex = 0;
    const projectSliderContainer = document.querySelector('.project-cards-container');
    const projectCards = document.querySelectorAll('.project-card');
    const projectPrevBtn = document.querySelector('.project-slider-btn.prev-btn');
    const projectNextBtn = document.querySelector('.project-slider-btn.next-btn');

    function updateProjectSlider() {
      if (!projectSliderContainer || projectCards.length === 0) return;
      
      const visibleCards = window.innerWidth <= 768 ? 1 : (window.innerWidth <= 1024 ? 2 : 3);
      const maxIndex = Math.max(0, projectCards.length - visibleCards);
      
      if (projectSliderIndex > maxIndex) {
        projectSliderIndex = maxIndex;
      }
      if (projectSliderIndex < 0) {
        projectSliderIndex = 0;
      }

      // Calculate translation offset
      const cardWidth = projectCards[0].offsetWidth;
      const gap = 24; // 24px gap matches var(--space-6)
      const offset = projectSliderIndex * (cardWidth + gap);
      
      projectSliderContainer.style.transform = `translateX(-${offset}px)`;

      // Disable buttons accordingly
      if (projectPrevBtn) projectPrevBtn.disabled = projectSliderIndex === 0;
      if (projectNextBtn) projectNextBtn.disabled = projectSliderIndex === maxIndex;

      // Update progress indicators
      const currentIndicator = document.getElementById('project-slider-current');
      const totalIndicator = document.getElementById('project-slider-total');
      if (currentIndicator) {
        currentIndicator.textContent = String(projectSliderIndex + 1).padStart(2, '0');
      }
      if (totalIndicator) {
        totalIndicator.textContent = String(projectCards.length).padStart(2, '0');
      }
    }

    window.slideProjects = function(direction) {
      projectSliderIndex += direction;
      updateProjectSlider();
    };

    window.addEventListener('resize', updateProjectSlider);

    // --- 9. Initialize everything on load ---
    function runInit() {
      if (typeof THREE !== 'undefined') {
        initHero3D();
        initInquire3D();
        setTimeout(updateProjectSlider, 200);
        
      } else {
        setTimeout(runInit, 100);
      }
    }
    
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      runInit();
    } else {
      window.addEventListener('DOMContentLoaded', runInit);
      window.addEventListener('load', runInit);
    }
