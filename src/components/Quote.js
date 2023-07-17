import QuoteText from "./QuoteText";
import Genre from "./Genre";
import {Box} from "grommet";

export default function Quote ({quote, genre}) {
    return (
        <Box direction={'column'} pad={'small'} background={'none'}>
            <QuoteText quoteText={quote}/>
            <Genre genre={genre}/>
        </Box>
    );
}
