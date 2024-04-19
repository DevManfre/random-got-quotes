import { useEffect, useState } from "react"
import '../static/css/Quotes.css'

function Quotes() {
    const [quote, setQuote] = useState("");

    function newQuote(){
        fetch('https://api.gameofthronesquotes.xyz/v1/random')
            .then(response => response.json())
            .then(data => setQuote(data.sentence))
            .catch(error => console.error(error));
    }

    useEffect(() => {
        newQuote();
    }, []);

    return (
        <div id="quote-container">
            <div id="quote-box">
                <div className="row">
                    <p id="text">
                        {quote}
                    </p>
                </div>
                <div className="row">
                    <p id="author">Alessio Manfredini</p>
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
            <p>by DevManfre</p>
        </div>
    );
}

export default Quotes;
