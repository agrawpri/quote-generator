import {BASE_API_URL} from "../consts";
import {Link, useLoaderData, useRevalidator} from "react-router-dom";
import Quote from "../components/Quote";
import Author from "../components/Author";
import ReloadButton from "../components/ReloadButton";
import {Grommet, Grid, Box, Button} from 'grommet';
import {Update} from "grommet-icons";
import Layout from "../components/Layout";

export function dataLoader() {
    const endpoint = `${BASE_API_URL}/random`;
    return fetch(endpoint);
}

export default function Home () {
    const revalidator = useRevalidator();
    const response = useLoaderData();
    const {quoteText: quote, quoteAuthor: author, quoteGenre: genre} = response.data[0];

    return (
        <Layout>
            <Grid
                rows={[
                    'xxsmall',
                    ['xsmall', 'flex'],
                    'xsmall',
                ]}
                columns={['flex']}
                gap="small"
                areas={[
                    {name: 'button', start: [0, 0], end: [0, 0]},
                    {name: 'quote', start: [0, 1], end: [0, 1]},
                    {name: 'author', start: [0, 2], end: [0, 2]},
                ]}
                justify={'center'}
            >
                <Box gridArea="button" pad={'large'}>
                    <ReloadButton onClickHandler={revalidator.revalidate}/>
                </Box>
                <Box gridArea="quote" pad={'large'}>
                    <Quote {...{quote, genre}}/>
                </Box>
                <Box gridArea="author" pad={'large'}>
                    <Author {...{author}}/>
                </Box>
            </Grid>
        </Layout>
    );
}
