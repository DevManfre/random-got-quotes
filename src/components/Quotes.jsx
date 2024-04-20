import { useEffect, useState } from "react"
import '../static/css/Quotes.css'

function Quotes() {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [imgURL, setImgURL] = useState("");
    const [visible, setVisible] = useState(true);

    useEffect(handleClick, []);

    function houseCheck(houseName) {
        let houseList = [
            'stark',
            'lannister',
            'targaryen',
            'tyrell',
            'baratheon',
            'greyjoy',
            'martell'
        ];

        if (houseList.includes(houseName))
            setImgURL(require('../static/img/' + houseName + '.png'));
        else
            setImgURL('');
    }

    function handleClick() {
        let time = 1000;

        setVisible(false);

        setTimeout(() => {
            fetch('https://api.gameofthronesquotes.xyz/v1/random')
                .then(response => response.json())
                .then(data => {
                    setQuote(data.sentence);
                    setAuthor(data.character.name);
                    houseCheck(data.character.house.slug);
                })
                .catch(error => console.error(error));
        }, time / 2);

        setTimeout(() => setVisible(true), time);
    }

    return (
        <div id="quote-container">
            <div id="quote-box">
                <div className="text" style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
                    <div className="row">
                        <span id="text">
                            <i class="bi bi-quote"></i>
                            {quote}
                        </span>
                    </div>
                    <div className="row">
                        <p id="author">
                            - {author}
                            <img className="house-logo" src={imgURL} alt='' />
                        </p>
                    </div>
                </div>
                <div className="row button-container">
                    <a className="btn" title="Copy the quote!" onClick={() => { navigator.clipboard.writeText(quote.sentence) }}>
                        <i class="bi bi-copy"></i>
                    </a>
                    <a className="btn" id='tweet-quote' target="_blank" title="Tweet the quote!" href="https://twitter.com/intent/tweet">
                        <i class="bi bi-twitter-x"></i>
                    </a>
                    <a className="btn" id='new-quote' onClick={handleClick} title="Get a new quote!">
                        <i class="bi bi-arrow-counterclockwise"></i>
                    </a>
                </div>
            </div>
            <a href="https://github.com/DevManfre">by DevManfre</a>
        </div>
    );
}

export default Quotes;