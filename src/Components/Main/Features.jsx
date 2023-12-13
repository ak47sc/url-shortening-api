import './Features.css'
import ShortenTab from './ShortenTab';
import brandReg from '../../assets/images/icon-brand-recognition.svg'
import recordsImg from '../../assets/images/icon-detailed-records.svg'
import customizableImg from '../../assets/images/icon-fully-customizable.svg'
function Features() {
    return (
        <section className="features">
            <ShortenTab />
            <div className="features-wrapper">
                <div className="features-headings">
                    <h1>Advanced Statistics</h1>
                    <p>
                        Track how your links are performing across the web with our
                        advanced statistics dashboard.
                    </p>
                </div>


                <div className="card-wrapper">
                    <div className='line'></div>
                    <div className='card'>
                        <div className="img-circle">
                            <img src={brandReg} alt="" />
                        </div>
                        <h2>Brand Recognition</h2>
                        <p>
                            Boost your brand recognition with each click. Generic links don’t
                            mean a thing. Branded links help instil confidence in your content.
                        </p>
                    </div>
                    <div className='card'>
                        <div className="img-circle">
                            <img src={recordsImg} alt="" />
                        </div>
                        <h2>Detailed Records</h2>
                        <p>
                            Gain insights into who is clicking your links. Knowing when and where
                            people engage with your content helps inform better decisions.
                        </p>
                    </div>
                    <div className='card'>
                        <div className="img-circle">
                            <img src={customizableImg} alt="" />
                        </div>
                        <h2>Fully Customizable</h2>
                        <p>
                            Improve brand awareness and content discoverability through customizable
                            links, supercharging audience engagement.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;