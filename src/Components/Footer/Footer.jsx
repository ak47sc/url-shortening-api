import './Footer.css'
function Footer() {
    return (
        <footer>
            <h1>Shorty</h1>
            <div className="footer-nav-links">
                <ul>
                    <h2>Features</h2>
                    <li>
                        Link Shortening
                    </li>
                    <li>
                        Branded Links
                    </li>
                    <li>
                        Analytics
                    </li>
                </ul>

                <ul>
                    <h2>Resources</h2>
                    <li>
                        Blog
                    </li>
                    <li>
                        Developers
                    </li>
                    <li>
                        Support
                    </li>
                </ul>

                <ul>
                    <h2>Company</h2>
                    <li>
                        About
                    </li>
                    <li>
                        Our Team
                    </li>
                    <li>
                        Careers
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
            </div>

            <div className="footer-socials">
                <i className="fa-brands fa-facebook-f fa-2xl"></i>
                <i className="fa-brands fa-twitter fa-2xl" ></i>
                <i className="fa-brands fa-pinterest fa-2xl"></i>
                <i className="fa-brands fa-instagram fa-2xl"></i>
            </div>
        </footer>
    );
}

export default Footer;