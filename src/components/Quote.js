import QuoteText from "./QuoteText";
import Genre from "./Genre";

export default function Quote ({quote, genre}) {
    return (
        <div>
            <QuoteText quoteText={quote}/>
            <Genre genre={genre}/>
        </div>
    );
}
