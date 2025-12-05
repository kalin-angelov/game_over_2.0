export const emailChecker = (email) => {

    if (!email) {
        throw new Error("All fields are required.");
    };

    if (!/[a-zA-Z0-9]+@[a-zA-z]+\.[a-zA-Z]+/.test(email)) {
        throw new Error("Invalid email");
    };
   
    return true;
}