import { useFormStatus } from "react-dom";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
    
    const navigate = useNavigate();
    const { pending } = useFormStatus();

    const create = async (formData) => {
        const {  } = Object.fromEntries(formData.entries());
        
        alert(`Create game post successfully`);
        navigate("/catalog");
    }

    return (
        <main>
            <h2 className="form-header">Create Game Post</h2>

            <form className="entryForm" action={create}>

                <Link className="exit" to="/"><i className="fa-solid fa-x"></i></Link>

                <input className="input" type="title" id="title" name="title" placeholder="Title" />

                <input className="input" type="cover" id="cover" name="cover" placeholder="Img Url - optional"/>

                <select className="input" name="platform" id="platform">
                    <option hidden>Platform</option>
                    <option>PC</option>
                    <option>PLAY STATION</option>
                    <option>XBOX</option>
                    <option>NINTENDO</option>
                    <option>OTHER</option>
                </select>

                <textarea className="input" type="text" id="description" name="description" placeholder="Write your problem here" />
                
                <button className="button" type="submit" disabled={pending}>Submit</button>

            </form>
        </main>
        
    )
}

export default Create;
