import {BASE_API_URL} from "../consts";
import {Link, useLoaderData, useRevalidator} from "react-router-dom";
import Quote from "../components/Quote";
import Author from "../components/Author";

export function dataLoader() {
    const endpoint = `${BASE_API_URL}/random`;
    return fetch(endpoint);
}

export default function Home () {
    const revalidator = useRevalidator();
    const response = useLoaderData();
    const {quoteText: quote, quoteAuthor: author, quoteGenre: genre} = response.data[0];

    return (
        <div>
            <button onClick={revalidator.revalidate}>Random</button>
            <Quote {...{quote, genre}}/>
            <Link to={`${__BASE_PATH__}author/${author}`}><Author {...{author}}/></Link>
        </div>
    );
}
