export function validateEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2}$/;
    return emailRegex.test(email);
}

export function validatePhoneNumber(phoneNumber: string): boolean {
    const phoneRegex = /^\\(?([0-9]{3})\\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phoneRegex.test(phoneNumber);
}

export function validateZipCode(zipCode: string): boolean {
    const zipRegex = /^[0-9]{5}(-[0-9]{4})?$/;
    return zipRegex.test(zipCode);
}