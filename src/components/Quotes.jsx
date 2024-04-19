import { useEffect, useState, trans } from "react"
import '../static/css/Quotes.css'

function Quotes() {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [visible, setVisible] = useState(true);

    function newQuote() {
        fetch('https://api.gameofthronesquotes.xyz/v1/random')
            .then(response => response.json())
            .then(data => {
                setQuote(data.sentence);
                setAuthor(data.character.name);
            })
            .catch(error => console.error(error));
    }

    useEffect(() => {
        newQuote();
    }, []);

    function handleClick() {
        setVisible(false);
        setTimeout(() => {
            newQuote();
            setVisible(true);
        }, 750);
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
                        <p id="author">- {author}</p>
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
