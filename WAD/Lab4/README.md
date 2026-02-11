# Client-Side Form Validation using JavaScript

A comprehensive form validation system with real-time feedback and inline error messages.

## Features

### ✅ Required Field Validation
- All fields marked with asterisk (*) are required
- Displays error message if left empty
- Validates on input and form submission

### ✅ Email Format Validation
- Validates proper email format (user@domain.com)
- Real-time validation as user types
- Displays specific error message for invalid format

### ✅ Password Rules Validation
The password must contain:
- Minimum 8 characters
- At least one uppercase letter (A-Z)
- At least one lowercase letter (a-z)
- At least one number (0-9)
- At least one special character (!@#$%^&*)

**Visual Feedback:** Password requirements checklist updates in real-time with ✓ and ✗ indicators

### ✅ Additional Validations
- **Phone Number:** Validates 10-digit phone numbers
- **Age Verification:** Must be 18 or older
- **Password Confirmation:** Ensures passwords match
- **Terms & Conditions:** Must be accepted before submission

### ✅ Dynamic Error Messages
- Inline error messages appear below each field
- Error messages are field-specific and helpful
- Messages update in real-time as user types
- Visual feedback with color-coded borders (red for error, green for valid)

### ✅ Form Submission Prevention
- Form cannot be submitted until all validations pass
- Automatically scrolls to first error on submission attempt
- Shows success message only when all fields are valid
- Form resets after successful submission

## How to Use

1. Open `index.html` in your web browser
2. Fill out the registration form
3. Watch as validation happens in real-time
4. Try submitting with errors to see prevention in action
5. Complete all fields correctly to see success message

## Files Structure

- **index.html** - HTML form structure
- **style.css** - Styling and visual feedback
- **validation.js** - All validation logic

## Validation Triggers

- **Real-time validation:** Triggers on every input change
- **Submit validation:** Comprehensive check on form submission
- **Visual feedback:** Border colors change based on validation state
- **Error prevention:** Form submission blocked until all validations pass

## Testing the Form

### Test Cases to Try:
1. Leave fields empty and try to submit
2. Enter invalid email formats (missing @, no domain, etc.)
3. Create weak passwords and watch the checklist
4. Enter mismatched passwords
5. Enter age below 18
6. Try submitting without accepting terms

## Browser Compatibility

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

---

**Lab 4 - Web Application Development**  
*Semester VI*
