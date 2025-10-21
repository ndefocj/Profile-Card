document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('contact-form');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    
    const errorName = document.getElementById('error-name');
    const errorEmail = document.getElementById('error-email');
    const errorSubject = document.getElementById('error-subject');
    const errorMessage = document.getElementById('error-message');

    const successMessage = document.querySelector('[data-testid="test-contact-success"]');

    if (!form) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        let isValid = true;
        

        if (name.value.trim() === '') {
            errorName.textContent = 'Full name is required.';
            name.setAttribute('aria-invalid', 'true');
            isValid = false;
        } else {
            errorName.textContent = '';
            name.removeAttribute('aria-invalid');
        }

        if (email.value.trim() === '') {
            errorEmail.textContent = 'Email is required.';
            email.setAttribute('aria-invalid', 'true');
            isValid = false;
        } else if (!emailRegex.test(email.value.trim())) {
            errorEmail.textContent = 'Please enter a valid email address (e.g., name@example.com).';
            email.setAttribute('aria-invalid', 'true');
            isValid = false;
        } else {
            errorEmail.textContent = '';
            email.removeAttribute('aria-invalid');
        }

        if (subject.value.trim() === '') {
            errorSubject.textContent = 'Subject is required.';
            subject.setAttribute('aria-invalid', 'true');
            isValid = false;
        } else {
            errorSubject.textContent = '';
            subject.removeAttribute('aria-invalid');
        }

        if (message.value.trim() === '') {
            errorMessage.textContent = 'Message is required.';
            message.setAttribute('aria-invalid', 'true');
            isValid = false;
        } else if (message.value.trim().length < 10) {
            errorMessage.textContent = 'Message must be at least 10 characters long.';
            message.setAttribute('aria-invalid', 'true');
            isValid = false;
        } else {
            errorMessage.textContent = '';
            message.removeAttribute('aria-invalid');
        }

        
        if (isValid) {
            errorName.textContent = '';
            errorEmail.textContent = '';
            errorSubject.textContent = '';
            errorMessage.textContent = '';

            successMessage.style.display = 'block';
            
            form.reset();

            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
            
        } else {
            if (successMessage) successMessage.style.display = 'none';

            const firstInvalid = form.querySelector('[aria-invalid="true"]');
            if (firstInvalid && typeof firstInvalid.focus === 'function') {
                firstInvalid.focus();
            }
        }
    });
});