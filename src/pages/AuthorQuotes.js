import {BASE_API_URL} from "../consts";
import {useLoaderData, useParams} from "react-router-dom";
import Quote from "../components/Quote";
import Author from "../components/Author";

export function dataLoader(params) {
    const endpoint = `${BASE_API_URL}?author=${params.params.author}`;
    return fetch(endpoint);
}

export default function AuthorQuotes () {
    const {author} = useParams();
    const response = useLoaderData();

    return (
        <div>
            <Author {...{author}}/>
            {response.data.map(({quoteText: quote, quoteGenre: genre}) => (
                <div>
                    <Quote {...{quote, genre}}/>
                </div>
            ))}
        </div>
    );
}
