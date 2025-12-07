import { useFormStatus } from "react-dom";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const { pending } = useFormStatus();

    const login = async (formData) => {
        const { email, pass } = Object.fromEntries(formData.entries());
        
        alert(`Welcome ${email}`);
        navigate("/catalog");
    }

    return (
        <main>
            <h2 className="form-header">Login</h2>

            <form className="entryForm" action={login}>

                <Link className="exit" to="/"><i className="fa-solid fa-x"></i></Link>

                <input className="input" type="email" id="email" name="email" placeholder="Email" />

                <input className="input" type="password" id="pass" name="pass" placeholder="Password"/>

                <p className="form-message">Don't have an account? <Link to="/register">Register</Link></p>

                <button className="button" type="submit" disabled={pending}>Login</button>

            </form>
        </main>
        
    )
};

export default Login;
