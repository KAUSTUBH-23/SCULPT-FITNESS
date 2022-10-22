import React from "react"
import "./home.css";
import { Link, useNavigate } from "react-router-dom";


const Home = (props) => {
    let navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate("/login");
    }
    return (
        <>
            <div className="home">
                {!(localStorage.getItem('token')) ?
                    <form className="d-flex" role="search">
                        <div className="links">
                            <Link className="btn btn-primary mx-2 link" to="/login" role="button">Login</Link>
                            <Link className="btn btn-primary mx-2 link" to="/register" role="button">Signup</Link>
                            <Link className="btn btn-primary mx-2 link" to="/care" role="button">Care</Link>
                            <Link className="btn btn-primary mx-2 link" to="/mind" role="button">Mind</Link>
                            <Link className="btn btn-primary mx-2 link" to="/store" role="button">Store</Link>
                        </div>
                    </form>
                    : <button className='btn btn-primary' onClick={handleLogout}>Logout</button>
                }
            </div>
        </>
    )
}

export default Home