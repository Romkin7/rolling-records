/** Validate Signup form fields */
function validateUsername(username: string): boolean {
    return !/^[a-zA-Z0-9]{2,12}$/.test(username);
}

function validateName(name: string): boolean {
    return !/^[A-Za-zÀ-ž\u0370-\u03FF\u0400-\u04FF\- ]{2,30}$/.test(name);
}

function validateMobileNumber(mobileNumber: string): boolean {
    return (
        mobileNumber.length < 6 ||
        !/^[\s()+-]*([0-9][\s()+-]*){6,20}$/.test(mobileNumber)
    );
}

function validateAddress(address: string): boolean {
    return !/^[0-9A-Za-zÀ-ž\u0370-\u03FF\u0400-\u04FF\-,. ]{2,50}$/.test(
        address,
    );
}

function validateZipcode(zipcode: string): boolean {
    return !/^[0-9A-Za-zÀ-ž\u0370-\u03FF\u0400-\u04FF\- ]{5,10}$/.test(zipcode);
}

function validateCity(city: string): boolean {
    return !/^[A-Za-zÀ-ž\u0370-\u03FF\u0400-\u04FF\-,. ]{2,30}$/.test(city);
}

function validateEmail(email: string): boolean {
    return !/^[a-zA-Z0-9\_\-\.]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,4}$/.test(email);
}

function validateConfirmEmail(confirmEmail: string, email: string): boolean {
    return email !== confirmEmail;
}

function validatePassword(password: string): boolean {
    return !/^[a-zA-Z0-9\-\_\(\)\;\:]+$/.test(password);
}

function validateConfirmPassword(
    confirmPassword: string,
    password: string,
): boolean {
    return confirmPassword !== password;
}

export const validate = {
    username: validateUsername,
    firstname: validateName,
    lastname: validateName,
    mobileNumber: validateMobileNumber,
    address: validateAddress,
    zipcode: validateZipcode,
    city: validateCity,
    email: validateEmail,
    confirmEmail: validateConfirmEmail,
    password: validatePassword,
    confirmPassword: validateConfirmPassword,
};
