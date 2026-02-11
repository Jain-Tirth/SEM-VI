// Get form and input elements
const form = document.getElementById('registrationForm');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const age = document.getElementById('age');
const terms = document.getElementById('terms');
const successMessage = document.getElementById('successMessage');

// Validation patterns
const patterns = {
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
    phone: /^[0-9]{10}$/,
    name: /^[a-zA-Z\s]{2,50}$/
};

// Password validation requirements
const passwordRequirements = {
    minLength: /.{8,}/,
    uppercase: /[A-Z]/,
    lowercase: /[a-z]/,
    number: /[0-9]/,
    special: /[!@#$%^&*(),.?":{}|<>]/
};

// Real-time validation on input
fullName.addEventListener('input', () => validateField(fullName, validateName));
email.addEventListener('input', () => validateField(email, validateEmail));
phone.addEventListener('input', () => validateField(phone, validatePhone));
password.addEventListener('input', () => {
    validateField(password, validatePassword);
    updatePasswordRequirements();
    if (confirmPassword.value) {
        validateField(confirmPassword, validateConfirmPassword);
    }
});
confirmPassword.addEventListener('input', () => validateField(confirmPassword, validateConfirmPassword));
age.addEventListener('input', () => validateField(age, validateAge));
terms.addEventListener('change', () => validateField(terms, validateTerms));

// Prevent form submission and validate all fields
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validate all fields
    const isNameValid = validateField(fullName, validateName);
    const isEmailValid = validateField(email, validateEmail);
    const isPhoneValid = validateField(phone, validatePhone);
    const isPasswordValid = validateField(password, validatePassword);
    const isConfirmPasswordValid = validateField(confirmPassword, validateConfirmPassword);
    const isAgeValid = validateField(age, validateAge);
    const isTermsValid = validateField(terms, validateTerms);
    
    // Check if all fields are valid
    if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid && 
        isConfirmPasswordValid && isAgeValid && isTermsValid) {
        // Show success message
        successMessage.classList.add('show');
        
        // Reset form after 2 seconds
        setTimeout(() => {
            form.reset();
            successMessage.classList.remove('show');
            clearAllValidationStates();
        }, 3000);
    } else {
        // Scroll to first error
        const firstError = document.querySelector('.error');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
});

// Generic field validation function
function validateField(field, validationFunction) {
    const isValid = validationFunction(field);
    updateFieldUI(field, isValid);
    return isValid;
}

// Update field UI based on validation
function updateFieldUI(field, isValid) {
    if (field.type === 'checkbox') return;
    
    if (isValid) {
        field.classList.remove('error');
        field.classList.add('valid');
    } else {
        field.classList.remove('valid');
        field.classList.add('error');
    }
}

// Validation functions
function validateName(field) {
    const errorElement = document.getElementById('fullNameError');
    const value = field.value.trim();
    
    if (value === '') {
        errorElement.textContent = 'Full name is required';
        return false;
    } else if (!patterns.name.test(value)) {
        errorElement.textContent = 'Please enter a valid name (2-50 characters, letters only)';
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function validateEmail(field) {
    const errorElement = document.getElementById('emailError');
    const value = field.value.trim();
    
    if (value === '') {
        errorElement.textContent = 'Email address is required';
        return false;
    } else if (!patterns.email.test(value)) {
        errorElement.textContent = 'Please enter a valid email address';
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function validatePhone(field) {
    const errorElement = document.getElementById('phoneError');
    const value = field.value.trim();
    
    if (value === '') {
        errorElement.textContent = 'Phone number is required';
        return false;
    } else if (!patterns.phone.test(value)) {
        errorElement.textContent = 'Please enter a valid 10-digit phone number';
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function validatePassword(field) {
    const errorElement = document.getElementById('passwordError');
    const value = field.value;
    
    if (value === '') {
        errorElement.textContent = 'Password is required';
        return false;
    } else if (!passwordRequirements.minLength.test(value)) {
        errorElement.textContent = 'Password must be at least 8 characters';
        return false;
    } else if (!passwordRequirements.uppercase.test(value)) {
        errorElement.textContent = 'Password must contain at least one uppercase letter';
        return false;
    } else if (!passwordRequirements.lowercase.test(value)) {
        errorElement.textContent = 'Password must contain at least one lowercase letter';
        return false;
    } else if (!passwordRequirements.number.test(value)) {
        errorElement.textContent = 'Password must contain at least one number';
        return false;
    } else if (!passwordRequirements.special.test(value)) {
        errorElement.textContent = 'Password must contain at least one special character';
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function validateConfirmPassword(field) {
    const errorElement = document.getElementById('confirmPasswordError');
    const value = field.value;
    
    if (value === '') {
        errorElement.textContent = 'Please confirm your password';
        return false;
    } else if (value !== password.value) {
        errorElement.textContent = 'Passwords do not match';
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function validateAge(field) {
    const errorElement = document.getElementById('ageError');
    const value = field.value;
    
    if (value === '') {
        errorElement.textContent = 'Age is required';
        return false;
    } else if (parseInt(value) < 18) {
        errorElement.textContent = 'You must be at least 18 years old';
        return false;
    } else if (parseInt(value) > 120) {
        errorElement.textContent = 'Please enter a valid age';
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function validateTerms(field) {
    const errorElement = document.getElementById('termsError');
    
    if (!field.checked) {
        errorElement.textContent = 'You must agree to the terms and conditions';
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

// Update password requirements checklist
function updatePasswordRequirements() {
    const value = password.value;
    
    updateRequirement('length-check', passwordRequirements.minLength.test(value));
    updateRequirement('uppercase-check', passwordRequirements.uppercase.test(value));
    updateRequirement('lowercase-check', passwordRequirements.lowercase.test(value));
    updateRequirement('number-check', passwordRequirements.number.test(value));
    updateRequirement('special-check', passwordRequirements.special.test(value));
}

function updateRequirement(elementId, isValid) {
    const element = document.getElementById(elementId);
    if (isValid) {
        element.classList.add('valid');
    } else {
        element.classList.remove('valid');
    }
}

// Clear all validation states
function clearAllValidationStates() {
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        input.classList.remove('error', 'valid');
    });
    
    const errorMessages = form.querySelectorAll('.error-message');
    errorMessages.forEach(msg => {
        msg.textContent = '';
    });
    
    // Reset password requirements
    const requirements = document.querySelectorAll('.password-requirements li');
    requirements.forEach(req => {
        req.classList.remove('valid');
    });
}
