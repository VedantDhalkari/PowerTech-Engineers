// ============================================
// POWERTECH ENGINEERS - Main JavaScript
// Pure Vanilla JS (ES6+) - No Framework Dependencies
// ============================================

// Service Data Structure
const serviceData = {
    'electrical-connections': {
        title: 'Electrical Connections & Construction',
        subtitle: 'Professional Infrastructure Setup',
        icon: 'fa-bolt',
        description: 'Complete electrical wiring, distribution boards, and power management systems with KSEI/KSEB compliance. We handle everything from residential setups to large industrial installations.',
        process: [
            'Site Assessment & Load Calculation',
            'Design & Planning with Approvals',
            'Professional Installation',
            'Testing & Commissioning',
            'Documentation & Handover'
        ]
    },
    'solar-power': {
        title: 'Solar Power Plant Services',
        subtitle: 'Renewable Energy Solutions',
        icon: 'fa-solar-panel',
        description: 'Design, installation, and maintenance of solar photovoltaic systems from 1kW to 1MW+. Complete support for government subsidies and net metering applications.',
        process: [
            'Solar Assessment & Feasibility Study',
            'System Design & Engineering',
            'Installation & Grid Connection',
            'MSEDCL/KSEB Net Metering Setup',
            'Monitoring & Maintenance'
        ]
    },
    'earthing': {
        title: 'Earthing Solutions',
        subtitle: 'Safety & Protection Systems',
        icon: 'fa-shield-alt',
        description: 'Chemical earthing, pipe earthing, and lightning arrestor installation per IS standards. Complete soil resistivity testing and certification.',
        process: [
            'Soil Resistivity Testing',
            'Earthing System Design',
            'Installation per IS 3043',
            'Resistance Testing & Verification',
            'Safety Certification'
        ]
    },
    'panels': {
        title: 'Electrical Panels & Switchgears',
        subtitle: 'Custom Control Solutions',
        icon: 'fa-th',
        description: 'Custom-engineered electrical panels with advanced protection and automation. Supply and installation of LT/HT panels, MCC, PCC, APFC systems.',
        process: [
            'Requirement Analysis',
            'Panel Design & Engineering',
            'Manufacturing & Quality Check',
            'Site Installation',
            'Testing & Commissioning'
        ]
    },
    'metering': {
        title: 'Electric Meter Fitting',
        subtitle: 'Board Liaison Services',
        icon: 'fa-tachometer-alt',
        description: 'Single & three-phase meter installation with complete documentation and board approval. Full support for MSEDCL/KSEB liaison work.',
        process: [
            'Application Processing',
            'Board Liaison & Approvals',
            'Meter Installation',
            'Connection Activation',
            'Post-Installation Support'
        ]
    },
    'transformers': {
        title: 'Transformers & Substations',
        subtitle: 'Power Distribution Systems',
        icon: 'fa-plug',
        description: 'Complete transformer solutions from procurement to commissioning and AMC. Expertise in distribution transformers, power transformers, and substation setup.',
        process: [
            'Load Assessment & Planning',
            'Transformer Procurement',
            'Installation & Commissioning',
            'Protection System Setup',
            'AMC & Maintenance'
        ]
    }
};

// ============================================
// DOM ELEMENTS
// ============================================

const navbar = document.getElementById('navbar');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.getElementById('navLinks');
const serviceCards = document.querySelectorAll('.service-card');
const sideDrawer = document.getElementById('sideDrawer');
const drawerOverlay = document.getElementById('drawerOverlay');
const drawerPanel = document.getElementById('drawerPanel');
const drawerClose = document.getElementById('drawerClose');
const drawerTitle = document.getElementById('drawerTitle');
const drawerSubtitle = document.getElementById('drawerSubtitle');
const drawerDescription = document.getElementById('drawerDescription');
const drawerProcess = document.getElementById('drawerProcess');
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotWindow = document.getElementById('chatbotWindow');
const chatbotClose = document.getElementById('chatbotClose');
const chatOptions = document.querySelectorAll('.chat-option');

// ============================================
// NAVIGATION FUNCTIONALITY
// ============================================

// Sticky Navbar on Scroll
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add scrolled class for styling
    if (scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
});

// Mobile Menu Toggle
mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        
        // Update active state
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// SERVICE CARDS & SIDE DRAWER
// ============================================

// Open Side Drawer with Service Details
function openServiceDrawer(serviceId) {
    const service = serviceData[serviceId];
    
    if (!service) return;
    
    // Update drawer content
    drawerTitle.textContent = service.title;
    drawerSubtitle.textContent = service.subtitle;
    drawerDescription.textContent = service.description;
    
    // Update icon
    const drawerIcon = document.querySelector('.drawer-icon i');
    drawerIcon.className = `fas ${service.icon}`;
    
    // Build process steps
    drawerProcess.innerHTML = service.process.map((step, index) => `
        <div class="process-step">
            <div class="process-step-number">${index + 1}</div>
            <span>${step}</span>
        </div>
    `).join('');
    
    // Show drawer
    sideDrawer.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Track event (if analytics available)
    trackEvent('service_view', { service: serviceId });
}

// Close Side Drawer
function closeServiceDrawer() {
    sideDrawer.classList.remove('active');
    document.body.style.overflow = '';
}

// Event listeners for service cards
serviceCards.forEach(card => {
    card.addEventListener('click', () => {
        const serviceId = card.getAttribute('data-service');
        openServiceDrawer(serviceId);
    });
    
    // Keyboard accessibility
    card.setAttribute('tabindex', '0');
    card.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const serviceId = card.getAttribute('data-service');
            openServiceDrawer(serviceId);
        }
    });
});

// Close drawer on overlay click
drawerOverlay.addEventListener('click', closeServiceDrawer);

// Close drawer on close button click
drawerClose.addEventListener('click', closeServiceDrawer);

// Close drawer on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sideDrawer.classList.contains('active')) {
        closeServiceDrawer();
    }
});

// ============================================
// CHATBOT FUNCTIONALITY
// ============================================

// Toggle Chatbot Window
function toggleChatbot() {
    chatbotWindow.classList.toggle('active');
    
    if (chatbotWindow.classList.contains('active')) {
        trackEvent('chatbot_opened');
    }
}

chatbotToggle.addEventListener('click', toggleChatbot);
chatbotClose.addEventListener('click', toggleChatbot);

// Handle Chat Options
chatOptions.forEach(option => {
    option.addEventListener('click', () => {
        const action = option.getAttribute('data-action');
        handleChatAction(action);
    });
});

function handleChatAction(action) {
    const messagesContainer = document.getElementById('chatbotMessages');
    
    switch(action) {
        case 'service':
            addBotMessage('Great! Which service are you interested in?');
            showServiceOptions();
            trackEvent('chat_service_inquiry');
            break;
            
        case 'solar':
            addBotMessage('Excellent choice! Solar power is a smart investment. Let me connect you with our solar expert.');
            addBotMessage('Please call us at <a href="tel:+919876543210" style="color: var(--brand-blue); font-weight: 600;">+91 98765 43210</a> or we can call you back. Would you like us to call you?');
            showCallbackOption();
            trackEvent('chat_solar_inquiry');
            break;
            
        case 'visit':
            addBotMessage('We\'d be happy to visit your site! Please provide your location and preferred date.');
            addBotMessage('For immediate scheduling, call us at <a href="tel:+919876543210" style="color: var(--brand-blue); font-weight: 600;">+91 98765 43210</a>');
            trackEvent('chat_site_visit');
            break;
            
        case 'emergency':
            showEmergencyContact();
            trackEvent('chat_emergency');
            break;
    }
}

function addBotMessage(message) {
    const messagesContainer = document.getElementById('chatbotMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'bot-message';
    messageDiv.innerHTML = `<p>${message}</p>`;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function showServiceOptions() {
    const optionsContainer = document.getElementById('chatbotOptions');
    optionsContainer.innerHTML = `
        <button class="chat-option" onclick="window.location.href='#services'">
            <i class="fas fa-list"></i> View All Services
        </button>
        <button class="chat-option" onclick="openServiceDrawer('solar-power')">
            <i class="fas fa-solar-panel"></i> Solar Power
        </button>
        <button class="chat-option" onclick="openServiceDrawer('electrical-connections')">
            <i class="fas fa-bolt"></i> Electrical Work
        </button>
        <button class="chat-option" onclick="resetChatbot()">
            <i class="fas fa-arrow-left"></i> Back to Main Menu
        </button>
    `;
}

function showCallbackOption() {
    const optionsContainer = document.getElementById('chatbotOptions');
    optionsContainer.innerHTML = `
        <button class="chat-option" onclick="requestCallback()">
            <i class="fas fa-phone"></i> Yes, Call Me Back
        </button>
        <button class="chat-option" onclick="window.location.href='tel:+919876543210'">
            <i class="fas fa-phone-alt"></i> I'll Call Now
        </button>
        <button class="chat-option" onclick="resetChatbot()">
            <i class="fas fa-arrow-left"></i> Back to Main Menu
        </button>
    `;
}

function showEmergencyContact() {
    const messagesContainer = document.getElementById('chatbotMessages');
    messagesContainer.innerHTML = `
        <div class="bot-message" style="background: #fee2e2; border-color: #fca5a5;">
            <p style="color: #991b1b; font-weight: 600;">🚨 Emergency Support</p>
            <p style="color: #991b1b;">Call us immediately for emergency electrical support:</p>
            <a href="tel:+919876543210" style="display: block; margin: 1rem 0; padding: 1rem; background: #dc2626; color: white; text-align: center; border-radius: 0.5rem; font-weight: 700; text-decoration: none;">
                📞 +91 98765 43210
            </a>
            <p style="color: #991b1b; font-size: 0.875rem;">Available 24/7 for emergencies</p>
        </div>
    `;
    
    const optionsContainer = document.getElementById('chatbotOptions');
    optionsContainer.innerHTML = `
        <button class="chat-option" onclick="window.open('https://wa.me/919876543210', '_blank')">
            <i class="fab fa-whatsapp"></i> WhatsApp Support
        </button>
        <button class="chat-option" onclick="resetChatbot()">
            <i class="fas fa-arrow-left"></i> Back to Main Menu
        </button>
    `;
}

function resetChatbot() {
    const messagesContainer = document.getElementById('chatbotMessages');
    messagesContainer.innerHTML = `
        <div class="bot-message">
            <p>Welcome to <strong>POWERTECH ENGINEERS</strong></p>
            <p>How can we assist you today?</p>
        </div>
    `;
    
    const optionsContainer = document.getElementById('chatbotOptions');
    optionsContainer.innerHTML = `
        <button class="chat-option" data-action="service">
            <i class="fas fa-wrench"></i> Service Inquiry
        </button>
        <button class="chat-option" data-action="solar">
            <i class="fas fa-solar-panel"></i> Solar Consultation
        </button>
        <button class="chat-option" data-action="visit">
            <i class="fas fa-calendar-alt"></i> Request Site Visit
        </button>
        <button class="chat-option" data-action="emergency">
            <i class="fas fa-exclamation-triangle"></i> Emergency Support
        </button>
    `;
    
    // Re-attach event listeners
    document.querySelectorAll('.chat-option').forEach(option => {
        option.addEventListener('click', () => {
            const action = option.getAttribute('data-action');
            handleChatAction(action);
        });
    });
}

function requestCallback() {
    addBotMessage('Thank you! Our team will call you within 2 hours during business hours (9 AM - 7 PM).');
    addBotMessage('For immediate assistance, please call <a href="tel:+919876543210" style="color: var(--brand-blue); font-weight: 600;">+91 98765 43210</a>');
    
    const optionsContainer = document.getElementById('chatbotOptions');
    optionsContainer.innerHTML = `
        <button class="chat-option" onclick="resetChatbot()">
            <i class="fas fa-arrow-left"></i> Back to Main Menu
        </button>
    `;
    
    // Simulate form submission
    trackEvent('callback_requested');
    alert('Callback request received! We will contact you within 2 hours.');
}

// ============================================
// CONTACT FORM MODAL
// ============================================

function openContactModal() {
    // Create modal dynamically
    const modal = document.createElement('div');
    modal.className = 'side-drawer active';
    modal.id = 'contactModal';
    modal.innerHTML = `
        <div class="drawer-overlay" onclick="closeContactModal()"></div>
        <div class="drawer-panel">
            <div class="drawer-header">
                <div class="drawer-icon">
                    <i class="fas fa-calendar-check"></i>
                </div>
                <div class="drawer-title-wrap">
                    <h2>Request Site Visit</h2>
                    <p>We'll get back to you within 2 hours</p>
                </div>
                <button class="drawer-close" onclick="closeContactModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="drawer-content">
                <form id="contactForm" onsubmit="handleContactSubmit(event)" style="display: flex; flex-direction: column; gap: 1rem;">
                    <div>
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: var(--brand-navy);">Full Name *</label>
                        <input type="text" required placeholder="Your name" style="width: 100%; padding: 0.875rem; border: 2px solid #e2e8f0; border-radius: 0.75rem; font-family: inherit; font-size: 1rem;">
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: var(--brand-navy);">Phone Number *</label>
                        <input type="tel" required placeholder="+91 98765 43210" pattern="[0-9]{10}" style="width: 100%; padding: 0.875rem; border: 2px solid #e2e8f0; border-radius: 0.75rem; font-family: inherit; font-size: 1rem;">
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: var(--brand-navy);">Service Required *</label>
                        <select required style="width: 100%; padding: 0.875rem; border: 2px solid #e2e8f0; border-radius: 0.75rem; font-family: inherit; font-size: 1rem;">
                            <option value="">Select a service</option>
                            <option value="electrical">Electrical Connections</option>
                            <option value="solar">Solar Power Plant</option>
                            <option value="earthing">Earthing Solutions</option>
                            <option value="panels">Electrical Panels</option>
                            <option value="metering">Meter Fitting</option>
                            <option value="transformers">Transformers</option>
                        </select>
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: var(--brand-navy);">Location</label>
                        <input type="text" placeholder="Site address" style="width: 100%; padding: 0.875rem; border: 2px solid #e2e8f0; border-radius: 0.75rem; font-family: inherit; font-size: 1rem;">
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: var(--brand-navy);">Project Details</label>
                        <textarea rows="4" placeholder="Brief description of your requirements" style="width: 100%; padding: 0.875rem; border: 2px solid #e2e8f0; border-radius: 0.75rem; font-family: inherit; font-size: 1rem; resize: vertical;"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block" style="margin-top: 1rem;">
                        <i class="fas fa-paper-plane"></i>
                        Submit Request
                    </button>
                </form>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
}

function closeContactModal() {
    const modal = document.getElementById('contactModal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = '';
    }
}

function handleContactSubmit(event) {
    event.preventDefault();
    
    // Simulate form submission
    alert('Thank you for your inquiry! Our team will contact you within 2 hours to schedule the site visit.');
    
    // Track event
    trackEvent('site_visit_requested');
    
    // Close modal
    closeContactModal();
    
    // Reset form would happen here in production
}

// ============================================
// ANALYTICS TRACKING
// ============================================

function trackEvent(eventName, properties = {}) {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, properties);
    }
    
    // Console log for development
    console.log('Event tracked:', eventName, properties);
}

// ============================================
// INTERSECTION OBSERVER (Scroll Animations)
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card, .why-card').forEach(card => {
    observer.observe(card);
});

// ============================================
// AUTO-OPEN CHATBOT (First Visit)
// ============================================

function checkFirstVisit() {
    const hasVisited = localStorage.getItem('powertech_visited');
    
    if (!hasVisited) {
        // Open chatbot after 15 seconds on first visit
        setTimeout(() => {
            if (!chatbotWindow.classList.contains('active')) {
                toggleChatbot();
            }
        }, 15000);
        
        // Mark as visited
        localStorage.setItem('powertech_visited', 'true');
    }
}

// Run on page load
window.addEventListener('load', checkFirstVisit);

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Lazy load images (if you add images later)
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ============================================
// INITIALIZATION
// ============================================

console.log('%c⚡ POWERTECH ENGINEERS', 'color: #2563eb; font-size: 24px; font-weight: bold;');
console.log('%cWebsite loaded successfully!', 'color: #10b981; font-size: 14px;');
console.log('For support: +91 98765 43210');

// Track page view
trackEvent('page_view', { page: window.location.pathname });