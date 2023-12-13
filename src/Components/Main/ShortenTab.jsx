import { useEffect, useRef, useState } from 'react';
import './ShortenTab.css'
function ShortenTab() {
    const urlRef = useRef();
    const [urlList, setUrlList] = useState([]);
    const [error, setError] = useState({ class: "shorten-input-field", msg: "" });


    async function shortenLink(longUrl) {
        const url = 'https://url-shortener-service.p.rapidapi.com/shorten';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Key': 'c27ab25a91msh161e971786486f1p18314bjsn23564469c9e2',
                'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
            },
            body: new URLSearchParams({
                url: longUrl
            })
        };

        try {
            if (longUrl == "" || longUrl == null) {
                throw new Error("Please add a link")
            }
            const response = await fetch(url, options);
            if (response.status >= 400 && response.status < 600) {
                throw new Error("Invalid Link")
            }
            const result = await response.json();
            return result.result_url;
        } catch (error) {
            console.error(error);
            setError({ class: "shorten-input-field shorten-input-error", msg: error.message })
        }
    }



    async function handleShorten(e) {
        e.preventDefault();
        e.target.disabled = true;
        e.target.textContent = "Loading"
        const value = await shortenLink(urlRef.current.value);
        e.target.disabled = false;
        e.target.textContent = "Shorten It!"
        if (value) {
            const newLink = 
            <div className='link-tab'>
                <div>
                    <span className='long-link-text'>{urlRef.current.value}</span>
                </div>
                <div className='link-tab-right'>
                    <span className='shorten-link-text'>{value}</span>
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
                        <button type='submit' onClick={handleShorten}>Shorten It!</button>
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