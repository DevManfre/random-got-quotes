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
                    <button className="btn">
                        <i class="bi bi-copy"></i>
                    </button>
                    <button className="btn" id='new-quote'>
                        <i class="bi bi-arrow-counterclockwise"></i>
                    </button>
                </div>
            </div>
            <a href="#">by DevManfre</a>
        </div>
    );
}

export default Quotes;
