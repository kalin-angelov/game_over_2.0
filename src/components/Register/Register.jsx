import { useFormStatus } from "react-dom";
import { Link } from "react-router-dom";

import { emailChecker } from "../../utils/emailChecker";

const Register = () => {
 
    const { pending } = useFormStatus();

    const register = async (formData) => {
        const { email, pass, rePass } = Object.fromEntries(formData.entries());
        
        try {

            const validEmail = emailChecker(email);
            const validPassword = passChecker(pass, rePass);

            if (validEmail && validPassword) {
                alert("Welcome!")
            }

        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <main>
            <h2 className="form-header">Register</h2>

            <form className="entryForm" action={register}>

                <Link className="exit" to="/"><i className="fa-solid fa-x"></i></Link>

                <input className="input" type="email" id="email" name="email" placeholder="Email" />

                <input className="input" type="password" id="pass" name="pass" placeholder="Password"/>

                <input className="input" type="password" name="rePass" id="rePass" placeholder="Confirm password"/>

                <p className="form-message">Already have an account? <Link to="/">Login</Link></p>

                <button className="button" type="submit" disabled={pending}>Register</button>

            </form>
        </main>
        
    )
};

export default Register;
