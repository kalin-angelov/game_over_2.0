import { Link } from "react-router-dom";

const Home = () => {
    return (
        <main className="home">
            <img className="main-page-img" src="/images/bartender.png" width={500} alt="Medieval bartender" />

            <div className="container">
                <p className="name">Bartender</p>
                <p className="message">Don't give up friend the GAME is never OVER. How can i help you ?</p>
                <i className="fa-solid fa-caret-down"></i>
            </div>

            <div className="btn-container">
                <Link to="/catalog" className="request-btn">CHECK REQUEST</Link>
                <Link to="/create" className="request-btn">CREATE REQUEST</Link>
            </div>
        </main>
    );
};

export default Home;
