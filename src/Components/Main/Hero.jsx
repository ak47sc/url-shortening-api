import './Hero.css'
function Hero() {
    return (
        <section className='hero'>
            <div className="intro-section">
                <h1>More than just shorter links</h1>
                <p>
                    Build your brand’s recognition and get detailed insights
                    on how your links are performing.
                </p>
                <button>Get Started</button>
            </div>
            <img src="src\assets\images\illustration-working.svg" alt="HI" />
        </section>
    );
}

export default Hero;