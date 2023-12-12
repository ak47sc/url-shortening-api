import { useRef } from 'react';
import './Header.css'
function Header() {
    const toggleRef = useRef();
    function handleToggle(){
        toggleRef.current.classList.toggle("hidden")
    }
    return (
        <header>
            <h1>Shortly</h1>
            <div className='nav-toggle-btn' onClick={handleToggle}>
                <i className="fa-solid fa-bars fa-xl"></i>
            </div>
            <div className='nav-bar' ref={toggleRef}>
                <ul className="nav-links">
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Resources</a></li>
                </ul>
                <div className="nav-login">
                    <a href="#">Login</a>
                    <button className='sign-up'>Sign Up</button>
                </div>
            </div>
        </header>
    );
}

export default Header;