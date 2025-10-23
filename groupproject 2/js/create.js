// ===== CREATE CHARACTER PAGE JAVASCRIPT =====

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('characterForm');
    const progressFill = document.getElementById('progressFill');
    const progressSteps = document.querySelectorAll('.progress-step');
    const formSteps = document.querySelectorAll('.form-step');
    const nextButtons = document.querySelectorAll('.next-step');
    const prevButtons = document.querySelectorAll('.prev-step');
    const publishButton = document.getElementById('publishCharacter');
    const addConversationBtn = document.getElementById('addConversationExample');
    
    let currentStep = 1;
    const totalSteps = 4;
    
    // Initialize the form
    initForm();
    
    function initForm() {
        updateProgress();
        setupEventListeners();
        setupAvatarSelection();
        setupColorSelection();
        setupPreviewUpdates();
    }
    
    function setupEventListeners() {
        // Next step buttons
        nextButtons.forEach(button => {
            button.addEventListener('click', function() {
                const nextStep = parseInt(this.getAttribute('data-next'));
                if (validateStep(currentStep)) {
                    navigateToStep(nextStep);
                }
            });
        });
        
        // Previous step buttons
        prevButtons.forEach(button => {
            button.addEventListener('click', function() {
                const prevStep = parseInt(this.getAttribute('data-prev'));
                navigateToStep(prevStep);
            });
        });
        
        // Add conversation example
        addConversationBtn.addEventListener('click', addConversationExample);
        
        // Form submission
        form.addEventListener('submit', handleFormSubmission);
    }
    
    function setupAvatarSelection() {
        const avatarOptions = document.querySelectorAll('.avatar-option');
        
        avatarOptions.forEach(option => {
            option.addEventListener('click', function() {
                // Remove selected class from all options
                avatarOptions.forEach(opt => opt.classList.remove('selected'));
                
                // Add selected class to clicked option
                this.classList.add('selected');
                
                // Update preview
                updateAvatarPreview(this.getAttribute('data-avatar'));
            });
        });
    }
    
    function setupColorSelection() {
        const colorOptions = document.querySelectorAll('.color-option');
        const colorInput = document.getElementById('characterColor');
        
        colorOptions.forEach(option => {
            option.addEventListener('click', function() {
                // Remove selected class from all options
                colorOptions.forEach(opt => opt.classList.remove('selected'));
                
                // Add selected class to clicked option
                this.classList.add('selected');
                
                // Update hidden input
                const selectedColor = this.getAttribute('data-color');
                colorInput.value = selectedColor;
                
                // Update preview
                updateColorPreview(selectedColor);
            });
        });
    }
    
    function setupPreviewUpdates() {
        // Update preview when form fields change
        const previewFields = [
            { input: 'characterName', preview: 'previewName' },
            { input: 'characterTagline', preview: 'previewTagline' },
            { input: 'characterCategory', preview: 'previewCategory' },
            { input: 'personalityDescription', preview: 'previewPersonality' },
            { input: 'conversationStyle', preview: 'previewStyle' }
        ];
        
        previewFields.forEach(field => {
            const inputElement = document.getElementById(field.input);
            if (inputElement) {
                inputElement.addEventListener('input', function() {
                    updatePreviewField(field.preview, this.value);
                });
                
                // Also trigger on change for select elements
                if (inputElement.tagName === 'SELECT') {
                    inputElement.addEventListener('change', function() {
                        updatePreviewField(field.preview, this.options[this.selectedIndex].text);
                    });
                }
            }
        });
        
        // Update conversation examples preview
        document.addEventListener('input', function(e) {
            if (e.target.classList.contains('user-message') || e.target.classList.contains('character-response')) {
                updateConversationsPreview();
            }
        });
    }
    
    function navigateToStep(step) {
        // Hide current step
        document.getElementById(`step${currentStep}`).classList.remove('active');
        
        // Show new step
        document.getElementById(`step${step}`).classList.add('active');
        
        // Update progress steps
        progressSteps.forEach(progressStep => {
            const stepNum = parseInt(progressStep.getAttribute('data-step'));
            if (stepNum <= step) {
                progressStep.classList.add('active');
            } else {
                progressStep.classList.remove('active');
            }
        });
        
        // Update current step and progress bar
        currentStep = step;
        updateProgress();
        
        // Scroll to top of form
        document.querySelector('.character-creation').scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }
    
    function updateProgress() {
        const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;
        progressFill.style.width = `${progressPercentage}%`;
    }
    
    function validateStep(step) {
        let isValid = true;
        const currentStepElement = document.getElementById(`step${step}`);
        
        // Get all required inputs in current step
        const requiredInputs = currentStepElement.querySelectorAll('[required]');
        
        requiredInputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                highlightInvalidField(input);
            } else {
                removeInvalidHighlight(input);
            }
        });
        
        // Additional validation for specific steps
        if (step === 1) {
            const nameInput = document.getElementById('characterName');
            if (nameInput.value.trim().length < 2) {
                isValid = false;
                highlightInvalidField(nameInput, 'Name must be at least 2 characters long');
            }
        }
        
        if (step === 2) {
            const personalityInput = document.getElementById('personalityDescription');
            if (personalityInput.value.trim().length < 50) {
                isValid = false;
                highlightInvalidField(personalityInput, 'Please provide a more detailed personality description (at least 50 characters)');
            }
        }
        
        if (!isValid) {
            showNotification('Please fill in all required fields correctly', 'error');
        }
        
        return isValid;
    }
    
    function highlightInvalidField(input, message = 'This field is required') {
        input.style.borderColor = '#ff4757';
        input.style.boxShadow = '0 0 0 3px rgba(255, 71, 87, 0.1)';
        
        // Remove existing error message
        const existingError = input.parentNode.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        // Add error message
        const errorElement = document.createElement('span');
        errorElement.className = 'error-message';
        errorElement.style.cssText = 'color: #ff4757; font-size: 0.85rem; margin-top: 0.5rem; display: block;';
        errorElement.textContent = message;
        input.parentNode.appendChild(errorElement);
    }
    
    function removeInvalidHighlight(input) {
        input.style.borderColor = '';
        input.style.boxShadow = '';
        
        // Remove error message
        const errorElement = input.parentNode.querySelector('.error-message');
        if (errorElement) {
            errorElement.remove();
        }
    }
    
    function addConversationExample() {
        const conversationExamples = document.querySelector('.conversation-examples');
        const exampleCount = conversationExamples.children.length + 1;
        
        const newExample = document.createElement('div');
        newExample.className = 'conversation-example';
        newExample.innerHTML = `
            <div class="example-header">
                <h4>Example Conversation ${exampleCount}</h4>
                <button type="button" class="btn-remove-example">Remove</button>
            </div>
            <div class="form-group">
                <label>User Message</label>
                <input type="text" class="user-message" placeholder="What would a user say to your character?">
            </div>
            <div class="form-group">
                <label>Character Response</label>
                <textarea class="character-response" rows="3" placeholder="How should your character respond?"></textarea>
            </div>
        `;
        
        conversationExamples.appendChild(newExample);
        
        // Add event listener to remove button
        const removeBtn = newExample.querySelector('.btn-remove-example');
        removeBtn.addEventListener('click', function() {
            newExample.remove();
            // Renumber remaining examples
            renumberConversationExamples();
        });
        
        // Update preview
        updateConversationsPreview();
    }
    
    function renumberConversationExamples() {
        const examples = document.querySelectorAll('.conversation-example');
        examples.forEach((example, index) => {
            const header = example.querySelector('h4');
            header.textContent = `Example Conversation ${index + 1}`;
        });
    }
    
    function updateAvatarPreview(avatarType) {
        const previewAvatar = document.querySelector('.preview-avatar i');
        const avatarIcons = {
            'robot': 'fas fa-robot',
            'user': 'fas fa-user',
            'cat': 'fas fa-cat',
            'wizard': 'fas fa-hat-wizard',
            'alien': 'fas fa-user-astronaut',
            'custom': 'fas fa-plus'
        };
        
        if (avatarIcons[avatarType]) {
            previewAvatar.className = avatarIcons[avatarType];
        }
    }
    
    function updateColorPreview(color) {
        const previewHeader = document.querySelector('.preview-header');
        previewHeader.style.background = `linear-gradient(135deg, ${color}, ${adjustColor(color, -20)})`;
    }
    
    function adjustColor(hex, percent) {
        // Simple color adjustment for gradient
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        
        const newR = Math.min(255, Math.max(0, r + percent));
        const newG = Math.min(255, Math.max(0, g + percent));
        const newB = Math.min(255, Math.max(0, b + percent));
        
        return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
    }
    
    function updatePreviewField(previewId, value) {
        const previewElement = document.getElementById(previewId);
        if (previewElement) {
            if (previewId === 'previewCategory' && value) {
                previewElement.textContent = value.charAt(0).toUpperCase() + value.slice(1);
            } else {
                previewElement.textContent = value || 'Not specified';
            }
        }
    }
    
    function updateConversationsPreview() {
        const previewElement = document.getElementById('previewConversations');
        const userMessages = document.querySelectorAll('.user-message');
        const characterResponses = document.querySelectorAll('.character-response');
        
        let previewHTML = '';
        
        for (let i = 0; i < userMessages.length; i++) {
            const userMsg = userMessages[i].value;
            const charResp = characterResponses[i].value;
            
            if (userMsg || charResp) {
                previewHTML += `
                    <div class="preview-conversation" style="margin-bottom: 1rem; padding: 1rem; background: rgba(109, 93, 252, 0.05); border-radius: 8px;">
                        <div style="margin-bottom: 0.5rem;">
                            <strong>User:</strong> ${userMsg || 'Not specified'}
                        </div>
                        <div>
                            <strong>Character:</strong> ${charResp || 'Not specified'}
                        </div>
                    </div>
                `;
            }
        }
        
        if (!previewHTML) {
            previewHTML = '<p>No example conversations provided yet</p>';
        }
        
        previewElement.innerHTML = previewHTML;
    }
    
    function handleFormSubmission(e) {
        e.preventDefault();
        
        if (!validateStep(currentStep)) {
            showNotification('Please fix the errors before publishing', 'error');
            return;
        }
        
        if (!document.getElementById('termsAgreement').checked) {
            showNotification('Please agree to the Terms of Service', 'error');
            return;
        }
        
        // Show loading state
        const originalText = publishButton.innerHTML;
        publishButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Publishing...';
        publishButton.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            // Reset button
            publishButton.innerHTML = originalText;
            publishButton.disabled = false;
            
            // Show success message
            showNotification('Character published successfully!', 'success');
            
            // In a real app, you would redirect to the character's page
            // window.location.href = 'character.html?id=new-character-id';
        }, 2000);
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
});