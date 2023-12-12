import { useEffect, useRef, useState } from 'react';
import './ShortenTab.css'
function ShortenTab() {
    const urlRef = useRef();
    const [urlList, setUrlList] = useState([]);
    const [error, setError] = useState({ class: "shorten-input-field", msg: "" });
    function handleShorten(e) {
        e.preventDefault();
        const value = urlRef.current.value;
        if (value == "" || value == null) {
            setError({ class: "shorten-input-field shorten-input-error", msg: "Please add a link" })
        }
        else {
            const newLink = <div className='link-tab'>
                <p>{value}</p>
                <div className='link-tab-right'>
                    <p className='shorten-link-text'>{value}</p>
                    <button onClick={(e) => {
                        navigator.clipboard.writeText(value);
                        e.target.setAttribute("style", "cursor:auto;background-color:hsl(260, 8%, 14%)")
                        e.target.textContent = "Copied!"
                    }}>Copy</button>
                </div>
            </div>
            urlRef.current.value = "";
            setError({ class: "shorten-input-field", msg: "" })
            setUrlList((prev) => ([...prev, newLink]))
        }
    }
    return (
        <div className="shorten-wrapper">
            <div className='shorten-form'>
                <div className="shorten-bg">
                    <div className='shorten-img'></div>
                </div>
                <div className='shorten-input'>
                    <form>
                        <input type="text" placeholder='Shorten a link here...' ref={urlRef} className={error.class} />
                        <button onClick={handleShorten}>Shorten It!</button>
                    </form>
                    <i className="form-error-msg">{error.msg}</i>
                </div>
            </div>
            <div className="shorten-links">
                {urlList}
            </div>
        </div>
    );
}

export default ShortenTab;