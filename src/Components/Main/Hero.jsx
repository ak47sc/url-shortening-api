import './Hero.css'
import heroImg from '../../assets/images/illustration-working.svg'
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
            <img src={heroImg} alt="HI" />
        </section>
    );
}

export default Hero;