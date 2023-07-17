import {BASE_API_URL} from "../consts";
import {Link, useLoaderData, useRevalidator} from "react-router-dom";
import Quote from "../components/Quote";
import Author from "../components/Author";
import ReloadButton from "../components/ReloadButton";
import {Grommet, Grid, Box, Button} from 'grommet';
import {Update} from "grommet-icons";

export function dataLoader() {
    const endpoint = `${BASE_API_URL}/random`;
    return fetch(endpoint);
}

export default function Home () {
    const revalidator = useRevalidator();
    const response = useLoaderData();
    const {quoteText: quote, quoteAuthor: author, quoteGenre: genre} = response.data[0];

    return (
        <Grommet full>
            <Grid
                rows={[
                    'xxsmall',
                    ['xsmall', 'flex'],
                    'xsmall',
                ]}
                columns={[
                    ['xxsmall', 'large'],
                    ['medium', 'flex'],
                    ['xxsmall', 'large'],
                ]}
                gap="small"
                areas={[
                    {name: 'button', start: [1, 0], end: [1, 0]},
                    {name: 'quote', start: [1, 1], end: [1, 1]},
                    {name: 'author', start: [1, 2], end: [1, 2]},
                ]}
            >
                <Box gridArea="button" pad={'large'} direction={'row'} justify={'center'}>
                    <ReloadButton onClickHandler={revalidator.revalidate}/>
                </Box>
                <Box gridArea="quote" pad={'large'} direction={'row'} justify={'center'}>
                    <Quote {...{quote, genre}}/>
                </Box>
                <Box gridArea="author" pad={'large'} direction={'row'} justify={'center'}>
                    <Link to={`/author/${author}`} style={{ textDecoration: 'none' }}>
                        <Author {...{author}}/>
                    </Link>
                </Box>
            </Grid>
        </Grommet>
    );
}
