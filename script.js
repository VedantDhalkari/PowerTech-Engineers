// ===== POWERTECH ENGINEERS - Main JavaScript =====

// Service Data
const services = [
    {
        id: 'solar',
        title: 'Solar Power Plants',
        icon: 'fa-solar-panel',
        description: 'Complete solar energy solutions for industrial, commercial, and residential applications with net metering.',
        features: [
            'Rooftop Solar Installation',
            'Ground Mounted Systems',
            'Net Metering Setup',
            'MNRE Subsidy Assistance',
            'Maintenance & AMC'
        ],
        specifications: {
            capacity: 'Up to 1MW',
            warranty: '25 years panel warranty',
            roi: '3-4 years',
            compliance: 'MNRE, IEC 61727'
        }
    },
    {
        id: 'industrial',
        title: 'Industrial Electrical Wiring',
        icon: 'fa-bolt',
        description: 'High-voltage electrical wiring and distribution systems for manufacturing plants and industrial units.',
        features: [
            'HT & LT Panel Installation',
            'Cable Tray & Trunking',
            'Motor Control Centers',
            'Power Factor Correction',
            'Lightning Protection'
        ],
        specifications: {
            voltage: 'Up to 33kV',
            compliance: 'IEC, KSEB Standards',
            safety: 'IP65 Rated Panels',
            testing: 'Megger & IR Testing'
        }
    },
    {
        id: 'liaisoning',
        title: 'KSEB/KSEI Liaisoning',
        icon: 'fa-file-contract',
        description: 'Complete documentation, approval, and coordination services for electrical connections and compliance.',
        features: [
            'New Connection Applications',
            'Load Enhancement',
            'Meter Testing & Calibration',
            'Compliance Documentation',
            'Utility Coordination'
        ],
        specifications: {
            timeline: '15-30 days',
            success: '98% approval rate',
            coverage: 'All Maharashtra',
            support: 'End-to-end assistance'
        }
    },
    {
        id: 'substation',
        title: 'Substation & Transformer Setup',
        icon: 'fa-trailer',
        description: 'Design, installation, and commissioning of substations and transformers for industrial power supply.',
        features: [
            '11kV/33kV Substations',
            'Transformer Installation',
            'Switchgear Setup',
            'Protection Systems',
            'SCADA Integration'
        ],
        specifications: {
            capacity: 'Up to 10MVA',
            voltage: '11kV/33kV',
            compliance: 'IEC 61850',
            automation: 'Digital Substation Ready'
        }
    },
    {
        id: 'earthing',
        title: 'Earthing & Lightning Protection',
        icon: 'fa-shield-alt',
        description: 'Advanced earthing systems and lightning protection for industrial safety and equipment protection.',
        features: [
            'Chemical Earthing',
            'Lightning Arrestors',
            'Surge Protection',
            'Earth Resistance Testing',
            'Ground Grid Design'
        ],
        specifications: {
            resistance: '< 1 ohm',
            standards: 'IEEE 80, IEC 62305',
            warranty: '10 years',
            testing: '3-point method'
        }
    },
    {
        id: 'maintenance',
        title: 'Electrical Maintenance',
        icon: 'fa-tools',
        description: 'Preventive and breakdown maintenance services for uninterrupted power supply and safety.',
        features: [
            'Preventive Maintenance',
            'Breakdown Services',
            'Thermal Imaging',
            'Load Analysis',
            'Energy Audits'
        ],
        specifications: {
            response: '2-4 hours',
            coverage: '24/7 Support',
            team: 'Certified Engineers',
            tools: 'Advanced Diagnostic'
        }
    }
];

// ===== DOM ELEMENTS =====
const navbar = document.getElementById('navbar');
const mobileMenuToggle = document.getElementById('mobileMenuToggle'); // Updated ID
const navLinksList = document.getElementById('navLinks'); // Updated ID (ul element)
const navLinks = document.querySelectorAll('.nav-link'); // Keep existing selector for links
const servicesGrid = document.getElementById('servicesGrid');
const sideDrawer = document.getElementById('sideDrawer');
const drawerOverlay = document.getElementById('drawerOverlay');
const drawerClose = document.getElementById('drawerClose');
const drawerTitle = document.getElementById('drawerTitle');
const drawerBody = document.getElementById('drawerBody');
const drawerQuoteBtn = document.getElementById('drawerQuoteBtn');
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotWindow = document.getElementById('chatbotWindow');
const chatbotClose = document.getElementById('chatbotClose');
const chatbotBody = document.getElementById('chatbotBody');
const chatOptions = document.querySelectorAll('.chat-option');
const emergencyFab = document.getElementById('emergencyFab');
// const quoteBtn = document.getElementById('quoteBtn'); // Removed as it might not be in new nav
const contactForm = document.getElementById('contactForm');
const statNumbers = document.querySelectorAll('.stat-number');

// ===== UTILITY FUNCTIONS =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function createElement(tag, classes = [], attributes = {}) {
    const element = document.createElement(tag);
    if (classes.length) element.classList.add(...classes);
    Object.keys(attributes).forEach(key => {
        element.setAttribute(key, attributes[key]);
    });
    return element;
}

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', debounce(() => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}, 10));

// ===== MOBILE MENU TOGGLE =====
if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        if (navLinksList) navLinksList.classList.toggle('active');
    });
}

// Close mobile menu when clicking on links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinksList) navLinksList.classList.remove('active');
        if (mobileMenuToggle) mobileMenuToggle.classList.remove('active');
    });
});

// ===== SERVICE CARDS GENERATION =====
function renderServiceCards() {
    servicesGrid.innerHTML = '';

    services.forEach(service => {
        const card = createElement('div', ['service-card']);

        card.innerHTML = `
            <div class="service-icon">
                <i class="fas ${service.icon}"></i>
            </div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <ul class="service-features">
                ${service.features.map(feature => `
                    <li><i class="fas fa-check"></i>${feature}</li>
                `).join('')}
            </ul>
            <button class="btn btn-secondary service-details-btn" data-service="${service.id}">
                <i class="fas fa-info-circle"></i> View Details
            </button>
        `;

        servicesGrid.appendChild(card);
    });

    // Add event listeners to service detail buttons
    document.querySelectorAll('.service-details-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const serviceId = e.currentTarget.getAttribute('data-service');
            openServiceDrawer(serviceId);
        });
    });
}

// ===== SIDE DRAWER FUNCTIONS =====
function openServiceDrawer(serviceId) {
    const service = services.find(s => s.id === serviceId);
    if (!service) return;

    drawerTitle.textContent = service.title;

    drawerBody.innerHTML = `
        <div class="drawer-service-info">
            <div class="service-summary">
                <p>${service.description}</p>
            </div>
            
            <div class="service-specs">
                <h4>Specifications</h4>
                <div class="specs-grid">
                    ${Object.entries(service.specifications).map(([key, value]) => `
                        <div class="spec-item">
                            <span class="spec-key">${key.replace(/([A-Z])/g, ' $1').toUpperCase()}:</span>
                            <span class="spec-value">${value}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="service-process">
                <h4>Our Process</h4>
                <div class="process-steps">
                    <div class="process-step">
                        <div class="step-number">1</div>
                        <div class="step-content">
                            <h5>Site Survey & Assessment</h5>
                            <p>Technical team visits site for detailed analysis</p>
                        </div>
                    </div>
                    <div class="process-step">
                        <div class="step-number">2</div>
                        <div class="step-content">
                            <h5>Design & Proposal</h5>
                            <p>Customized solution with technical specifications</p>
                        </div>
                    </div>
                    <div class="process-step">
                        <div class="step-number">3</div>
                        <div class="step-content">
                            <h5>Installation & Commissioning</h5>
                            <p>Professional installation with safety protocols</p>
                        </div>
                    </div>
                    <div class="process-step">
                        <div class="step-number">4</div>
                        <div class="step-content">
                            <h5>Support & Maintenance</h5>
                            <p>Ongoing support and maintenance services</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Update quote button
    drawerQuoteBtn.innerHTML = `<i class="fas fa-bolt"></i> Request Quote for ${service.title}`;
    drawerQuoteBtn.onclick = () => {
        closeSideDrawer();
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        document.getElementById('service').value = service.title;
    };

    sideDrawer.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSideDrawer() {
    sideDrawer.classList.remove('active');
    document.body.style.overflow = '';
}

// Drawer event listeners
drawerOverlay.addEventListener('click', closeSideDrawer);
drawerClose.addEventListener('click', closeSideDrawer);

// Close drawer with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sideDrawer.classList.contains('active')) {
        closeSideDrawer();
    }
});

// ===== CHATBOT FUNCTIONS =====
function toggleChatbot() {
    chatbotWindow.classList.toggle('active');
}

function addChatMessage(message, isUser = false) {
    const messageDiv = createElement('div', ['chat-message', isUser ? 'user' : 'bot']);
    messageDiv.innerHTML = `<p>${message}</p>`;
    chatbotBody.appendChild(messageDiv);
    chatbotBody.scrollTop = chatbotBody.scrollHeight;
}

function handleChatOption(option) {
    switch (option) {
        case 'quote':
            addChatMessage("I need a commercial quote for electrical services.");
            setTimeout(() => {
                addChatMessage("To get a quick quote, please contact us directly via WhatsApp or Call.");
                setTimeout(() => {
                    chatbotBody.innerHTML += `
                        <div class="chat-options">
                            <a href="https://wa.me/919890169667?text=I%20need%20a%20commercial%20quote" target="_blank" class="chat-option">
                                <i class="fab fa-whatsapp"></i>
                                <span>WhatsApp Quote</span>
                            </a>
                            <a href="tel:919890169667" class="chat-option">
                                <i class="fas fa-phone-alt"></i>
                                <span>Call For Quote</span>
                            </a>
                        </div>
                    `;
                    chatbotBody.scrollTop = chatbotBody.scrollHeight;
                }, 500);
            }, 500);
            break;

        case 'emergency':
            addChatMessage("I have an electrical emergency!", true);
            setTimeout(() => {
                addChatMessage("⚡ <strong>EMERGENCY SUPPORT ACTIVATED</strong><br><br>Our team is on standby. Please contact us immediately:<br><br>1. <strong>Call Now:</strong> +91 98901 69667<br>2. <strong>WhatsApp:</strong> +91 98901 69667");
                setTimeout(() => {
                    chatbotBody.innerHTML += `
                        <div class="chat-options">
                            <a href="tel:919890169667" class="chat-option">
                                <i class="fas fa-phone-alt"></i>
                                <span>Call Emergency</span>
                            </a>
                            <a href="https://wa.me/919890169667?text=EMERGENCY" target="_blank" class="chat-option">
                                <i class="fab fa-whatsapp"></i>
                                <span>WhatsApp</span>
                            </a>
                        </div>
                    `;
                    chatbotBody.scrollTop = chatbotBody.scrollHeight;
                }, 500);
            }, 500);
            break;

        case 'solar':
            addChatMessage("I'm interested in solar consultation.");
            setTimeout(() => {
                addChatMessage("Great choice! Our solar experts can help you save up to 90% on electricity bills.<br><br>To provide accurate consultation, I need:<br>1. Monthly electricity bill amount<br>2. Available roof/land area<br>3. Location in Pune<br>4. Timeline for installation");
            }, 500);
            break;

        case 'schedule':
            addChatMessage("I'd like to schedule a site visit.");
            setTimeout(() => {
                addChatMessage("To schedule a visit, please choose a method:");
                setTimeout(() => {
                    chatbotBody.innerHTML += `
                        <div class="chat-options">
                            <a href="https://wa.me/919890169667?text=Hi,%20I%20would%20like%20to%20schedule%20a%20site%20visit" target="_blank" class="chat-option">
                                <i class="fab fa-whatsapp"></i>
                                <span>WhatsApp Us</span>
                            </a>
                            <a href="tel:919890169667" class="chat-option">
                                <i class="fas fa-phone-alt"></i>
                                <span>Call Now</span>
                            </a>
                        </div>
                    `;
                    chatbotBody.scrollTop = chatbotBody.scrollHeight;
                }, 500);
            }, 500);
            break;

        case 'callback':
            addChatMessage("Please request a callback.");
            setTimeout(() => {
                addChatMessage("Callback scheduled! Our electrical expert will call you within 30 minutes.<br><br>For immediate assistance, call: <strong>1800-123-4567</strong>");
            }, 500);
            break;
    }
}

function handleOptionClick(e) {
    const option = e.currentTarget.getAttribute('data-option');
    handleChatOption(option);
}

// Chatbot event listeners
chatbotToggle.addEventListener('click', toggleChatbot);
chatbotClose.addEventListener('click', toggleChatbot);

chatOptions.forEach(option => {
    option.addEventListener('click', handleOptionClick);
});

// Chat input listeners removed - Selection Only Mode

// ===== ANIMATED COUNTERS =====
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000; // 2 seconds
    const step = target / (duration / 16); // 60fps

    let current = 0;
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target + (element.getAttribute('data-count').includes('.') ? '%' : '+');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (element.getAttribute('data-count').includes('.') ? '%' : '+');
        }
    }, 16);
}

function initCounters() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const number = entry.target.querySelector('.stat-number');
                if (number && number.getAttribute('data-count')) {
                    animateCounter(number);
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.hero-stats .stat').forEach(stat => {
        observer.observe(stat);
    });
}

// ===== CONTACT FORM HANDLING =====
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // Basic validation
    if (!data.name || !data.phone || !data.service) {
        alert('Please fill in all required fields');
        return;
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(data.phone)) {
        alert('Please enter a valid 10-digit phone number');
        return;
    }

    // In production, this would be an API call
    console.log('Form submitted:', data);

    // Show success message
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = '<i class="fas fa-check"></i> Request Sent!';
    submitBtn.disabled = true;

    setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        contactForm.reset();

        // Show confirmation
        addChatMessage(`New quote request: ${data.service}`, true);
        setTimeout(() => {
            addChatMessage(`Thank you ${data.name}! Our electrical expert will contact you at ${data.phone} within 30 minutes regarding your ${data.service} requirement.`);
        }, 500);

        // Close chatbot if open
        chatbotWindow.classList.remove('active');
    }, 2000);
});

// ===== EMERGENCY FAB ANIMATION =====
function createRipple(event) {
    const fab = event.currentTarget;
    const ripple = createElement('span', ['ripple']);

    const rect = fab.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';

    fab.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
}

emergencyFab.addEventListener('click', createRipple);

// Quote button scroll to contact
quoteBtn.addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    renderServiceCards();
    initCounters();

    // Add CSS for dynamic elements
    const style = document.createElement('style');
    style.textContent = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.7);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .drawer-service-info {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }
        
        .service-specs {
            background: rgba(255, 255, 255, 0.05);
            padding: 1rem;
            border-radius: 0.5rem;
        }
        
        .specs-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 0.75rem;
            margin-top: 0.5rem;
        }
        
        .spec-item {
            display: flex;
            justify-content: space-between;
            padding: 0.5rem 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .spec-key {
            color: var(--concrete);
            font-size: 0.875rem;
        }
        
        .spec-value {
            color: var(--safety-yellow);
            font-weight: 600;
            font-size: 0.875rem;
        }
        
        .process-steps {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-top: 1rem;
        }
        
        .process-step {
            display: flex;
            gap: 1rem;
            align-items: flex-start;
        }
        
        .step-number {
            width: 32px;
            height: 32px;
            background: linear-gradient(135deg, var(--brand-red), var(--safety-yellow));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 700;
            font-size: 0.875rem;
            flex-shrink: 0;
        }
        
        .step-content h5 {
            color: var(--text-light);
            margin-bottom: 0.25rem;
            font-size: 0.9375rem;
        }
        
        .step-content p {
            color: var(--concrete);
            font-size: 0.875rem;
            line-height: 1.5;
        }
    `;
    document.head.appendChild(style);

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ===== WINDOW LOAD =====
window.addEventListener('load', () => {
    // Preload critical images
    const logo = new Image();
    logo.src = 'logo.png';

    // Initialize any additional features
    console.log('POWERTECH ENGINEERS website loaded successfully');
});