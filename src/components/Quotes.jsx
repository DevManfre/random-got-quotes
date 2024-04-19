import { useEffect, useState } from "react"
import '../static/css/Quotes.css'

function Quotes() {
    const [quote, setQuote] = useState("");

    function newQuote() {
        fetch('https://api.gameofthronesquotes.xyz/v1/random')
            .then(response => response.json())
            .then(data => setQuote(data))
            .catch(error => console.error(error));
    }

    useEffect(() => {
        newQuote();
    }, []);

    return (
        <div id="quote-container">
            <div id="quote-box">
                <div className="text">
                    <div className="row">
                        <span id="text">
                            <i class="bi bi-quote"></i>
                            {quote.sentence}
                        </span>
                    </div>
                    <div className="row">
                        <p id="author">- {quote.character.name}</p>
                    </div>
                </div>
                <div className="row button-container">
                    <a className="btn" title="Copy the quote!" onClick={() => { navigator.clipboard.writeText(quote.sentence) }}>
                        <i class="bi bi-copy"></i>
                    </a>
                    <a className="btn" id='tweet-quote' title="Tweet the quote!" href="twitter.com/intent/tweet">
                        <i class="bi bi-twitter-x"></i>
                    </a>
                    <a className="btn" id='new-quote' onClick={newQuote} title="Get a new quote!">
                        <i class="bi bi-arrow-counterclockwise"></i>
                    </a>
                </div>
            </div>
            <a href="https://github.com/DevManfre">by DevManfre</a>
        </div>
    );
}

export default Quotes;
