// ===== AUTHENTICATION PAGE JAVASCRIPT =====

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const loginFormContent = document.getElementById('loginFormContent');
    const signupFormContent = document.getElementById('signupFormContent');
    const switchToSignupLinks = document.querySelectorAll('.switch-to-signup');
    const switchToLoginLinks = document.querySelectorAll('.switch-to-login');
    
    // Password toggle functionality
    const toggleLoginPassword = document.getElementById('toggleLoginPassword');
    const toggleSignupPassword = document.getElementById('toggleSignupPassword');
    const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
    
    // Password strength elements
    const passwordStrengthFill = document.getElementById('passwordStrengthFill');
    const passwordStrengthText = document.getElementById('passwordStrengthText');
    
    // Initialize the authentication page
    initAuth();
    
    function initAuth() {
        setupEventListeners();
        setupPasswordToggles();
        setupPasswordStrength();
    }
    
    function setupEventListeners() {
        // Form switching
        switchToSignupLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                switchToSignup();
            });
        });
        
        switchToLoginLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                switchToLogin();
            });
        });
        
        // Form submissions
        loginFormContent.addEventListener('submit', handleLogin);
        signupFormContent.addEventListener('submit', handleSignup);
        
        // Social auth buttons
        const socialButtons = document.querySelectorAll('.btn-social');
        socialButtons.forEach(button => {
            button.addEventListener('click', function() {
                const provider = this.classList.contains('btn-google') ? 'google' : 'github';
                handleSocialAuth(provider);
            });
        });
    }
    
    function setupPasswordToggles() {
        // Login password toggle
        toggleLoginPassword.addEventListener('click', function() {
            const passwordInput = document.getElementById('loginPassword');
            togglePasswordVisibility(passwordInput, this);
        });
        
        // Signup password toggle
        toggleSignupPassword.addEventListener('click', function() {
            const passwordInput = document.getElementById('signupPassword');
            togglePasswordVisibility(passwordInput, this);
        });
        
        // Confirm password toggle
        toggleConfirmPassword.addEventListener('click', function() {
            const passwordInput = document.getElementById('confirmPassword');
            togglePasswordVisibility(passwordInput, this);
        });
    }
    
    function setupPasswordStrength() {
        const passwordInput = document.getElementById('signupPassword');
        
        passwordInput.addEventListener('input', function() {
            updatePasswordStrength(this.value);
        });
    }
    
    function switchToSignup() {
        loginForm.classList.remove('active');
        signupForm.classList.add('active');
        
        // Update URL without page reload
        history.pushState(null, '', '?action=signup');
    }
    
    function switchToLogin() {
        signupForm.classList.remove('active');
        loginForm.classList.add('active');
        
        // Update URL without page reload
        history.pushState(null, '', '?action=login');
    }
    
    function togglePasswordVisibility(passwordInput, toggleButton) {
        const isPassword = passwordInput.type === 'password';
        passwordInput.type = isPassword ? 'text' : 'password';
        
        const icon = toggleButton.querySelector('i');
        icon.className = isPassword ? 'fas fa-eye-slash' : 'fas fa-eye';
    }
    
    function updatePasswordStrength(password) {
        let strength = 0;
        let text = 'Very Weak';
        let color = '#ff4757';
        
        if (password.length >= 8) {
            strength += 25;
        }
        
        if (password.match(/[a-z]/) && password.match(/[A-Z]/)) {
            strength += 25;
        }
        
        if (password.match(/\d/)) {
            strength += 25;
        }
        
        if (password.match(/[^a-zA-Z\d]/)) {
            strength += 25;
        }
        
        // Update strength text and color
        if (strength >= 75) {
            text = 'Strong';
            color = '#2ed573';
        } else if (strength >= 50) {
            text = 'Medium';
            color = '#ffa502';
        } else if (strength >= 25) {
            text = 'Weak';
            color = '#ff7f50';
        }
        
        // Update UI
        passwordStrengthFill.style.width = `${strength}%`;
        passwordStrengthFill.style.background = color;
        passwordStrengthText.textContent = text;
        passwordStrengthText.style.color = color;
    }
    
    function handleLogin(e) {
        e.preventDefault();
        
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        const rememberMe = document.getElementById('rememberMe').checked;
        
        // Basic validation
        if (!email || !password) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Show loading state
        const submitButton = loginFormContent.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...';
        submitButton.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            // Reset button
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
            
            // Show success message
            showNotification('Login successful! Redirecting...', 'success');
            
            // In a real app, you would redirect to the dashboard
            // window.location.href = 'dashboard.html';
        }, 2000);
    }
    
    function handleSignup(e) {
        e.preventDefault();
        
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const agreeTerms = document.getElementById('agreeTerms').checked;
        
        // Validation
        if (!name || !email || !password || !confirmPassword) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        if (password.length < 8) {
            showNotification('Password must be at least 8 characters long', 'error');
            return;
        }
        
        if (password !== confirmPassword) {
            showNotification('Passwords do not match', 'error');
            return;
        }
        
        if (!agreeTerms) {
            showNotification('Please agree to the Terms of Service', 'error');
            return;
        }
        
        // Show loading state
        const submitButton = signupFormContent.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating account...';
        submitButton.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            // Reset button
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
            
            // Show success message
            showNotification('Account created successfully! Welcome to ChatVerse!', 'success');
            
            // In a real app, you might automatically log the user in
            // or redirect to a verification page
        }, 2000);
    }
    
    function handleSocialAuth(provider) {
        showNotification(`Connecting with ${provider.charAt(0).toUpperCase() + provider.slice(1)}...`, 'info');
        
        // In a real app, this would redirect to OAuth flow
        // For now, just simulate a delay
        setTimeout(() => {
            showNotification(`Successfully connected with ${provider.charAt(0).toUpperCase() + provider.slice(1)}!`, 'success');
        }, 1500);
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function showNotification(message, type) {
        // Remove existing notification if any
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${getNotificationIcon(type)}"></i>
                <span>${message}</span>
            </div>
        `;
        
        // Add styles for notification
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${getNotificationColor(type)};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
            max-width: 300px;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
    
    function getNotificationIcon(type) {
        switch(type) {
            case 'success': return 'check-circle';
            case 'error': return 'exclamation-circle';
            case 'info': return 'info-circle';
            default: return 'bell';
        }
    }
    
    function getNotificationColor(type) {
        switch(type) {
            case 'success': return 'var(--accent)';
            case 'error': return '#ff4757';
            case 'info': return 'var(--primary)';
            default: return 'var(--dark)';
        }
    }
    
    // Check URL parameters on load
    function checkUrlParams() {
        const urlParams = new URLSearchParams(window.location.search);
        const action = urlParams.get('action');
        
        if (action === 'signup') {
            switchToSignup();
        }
    }
    
    // Initialize URL parameter check
    checkUrlParams();
});