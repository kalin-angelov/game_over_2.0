export const passChecker = (pass, rePass) => {

    if (!pass || !rePass) {
        throw new Error("All fields are required.");
    }

    if (pass !== rePass) {
        throw new Error("Passwords don't match.")
    }

    return true;
}