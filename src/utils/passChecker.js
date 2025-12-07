export const passChecker = (pass, rePass) => {

    if (!pass || !rePass) {
        throw new Error("All fields are required.");
    }

    if (/^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/gm.test(pass)) {
        throw new Error("Invalid password.")
    }
//Password must be at least 8 chars long and must contain at least one Capital letter, one Special symbol and one digit.
    if (pass !== rePass) {
        throw new Error("Passwords don't match.")
    }

    return true;
}