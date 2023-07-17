import {BASE_API_URL} from "../consts";
import {Link, useLoaderData, useParams} from "react-router-dom";
import Quote from "../components/Quote";
import Author from "../components/Author";
import {Box, Grid, Grommet} from "grommet";

export function dataLoader(params) {
    const endpoint = `${BASE_API_URL}?author=${params.params.author}`;
    return fetch(endpoint);
}

export default function AuthorQuotes () {
    const {author} = useParams();
    const response = useLoaderData();

    return (
        <Grommet full>
            <Grid
                rows={[
                    'xxsmall',
                    ['xsmall', 'flex'],
                ]}
                columns={[
                    ['xxsmall', 'large'],
                    ['medium', 'flex'],
                    ['xxsmall', 'large'],
                ]}
                gap="small"
                areas={[
                    {name: 'author', start: [1, 0], end: [1, 0]},
                    {name: 'quote', start: [1, 1], end: [1, 1]},
                ]}
            >
                <Box gridArea="author" pad={'large'} direction={'row'} justify={'center'}>
                    <Author {...{author}}/>
                </Box>
                <Box gridArea="quote" pad={'large'} direction={'column'} justify={'center'}>
                    {response.data.map(({quoteText: quote, quoteGenre: genre}, index) => (
                        <div key={index}>
                            <Quote {...{quote, genre}}/>
                        </div>
                    ))}
                </Box>
            </Grid>
        </Grommet>
    );
}
