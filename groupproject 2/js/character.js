// ===== CHARACTER PROFILE PAGE JAVASCRIPT =====

document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabLinks.forEach(link => {
        link.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all tabs and panes
            tabLinks.forEach(tab => tab.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to current tab and pane
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Start chat button
    const startChatBtn = document.querySelector('.start-chat-btn');
    if (startChatBtn) {
        startChatBtn.addEventListener('click', function() {
            // In a real app, this would redirect to the chat interface
            // For now, show a success message
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Starting Chat...';
            this.disabled = true;
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.disabled = false;
                
                // Show success notification
                showNotification('Chat started with Luna! Redirecting to chat interface...', 'success');
                
                // In a real app, you would redirect to the chat page
                // window.location.href = 'chat.html?character=luna';
            }, 1500);
        });
    }
    
    // Add to favorites functionality
    const favoriteBtn = document.querySelector('.btn-outline:nth-child(2)');
    if (favoriteBtn) {
        favoriteBtn.addEventListener('click', function() {
            const isFavorited = this.classList.contains('favorited');
            
            if (isFavorited) {
                this.classList.remove('favorited');
                this.innerHTML = '<i class="fas fa-heart"></i> Add to Favorites';
                showNotification('Removed from favorites', 'info');
            } else {
                this.classList.add('favorited');
                this.innerHTML = '<i class="fas fa-heart" style="color: #ff4757;"></i> Favorited';
                showNotification('Added to favorites!', 'success');
            }
        });
    }
    
    // Share functionality
    const shareBtn = document.querySelector('.btn-outline:nth-child(3)');
    if (shareBtn) {
        shareBtn.addEventListener('click', function() {
            if (navigator.share) {
                navigator.share({
                    title: 'Luna the Space Explorer - ChatVerse',
                    text: 'Check out this amazing AI character on ChatVerse!',
                    url: window.location.href
                })
                .then(() => showNotification('Thanks for sharing!', 'success'))
                .catch(err => showNotification('Sharing failed', 'error'));
            } else {
                // Fallback: copy to clipboard
                navigator.clipboard.writeText(window.location.href)
                    .then(() => showNotification('Link copied to clipboard!', 'success'))
                    .catch(err => showNotification('Failed to copy link', 'error'));
            }
        });
    }
    
    // Mini character cards interaction
    const miniCards = document.querySelectorAll('.mini-character-card');
    miniCards.forEach(card => {
        card.addEventListener('click', function() {
            // In a real app, this would navigate to the character's profile
            showNotification('Navigating to character profile...', 'info');
        });
    });
    
    // Similar characters interaction
    const similarCards = document.querySelectorAll('.similar-characters .character-card-explore');
    similarCards.forEach(card => {
        card.addEventListener('click', function() {
            // In a real app, this would navigate to the character's profile
            const characterName = this.querySelector('.character-name').textContent;
            showNotification(`Opening ${characterName}'s profile...`, 'info');
        });
    });
    
    // Notification function
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
    
    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.trait-card, .feature-item, .conversation-example');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animation
    const animatedElements = document.querySelectorAll('.trait-card, .feature-item, .conversation-example');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run animation on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
});