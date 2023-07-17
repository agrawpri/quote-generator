import React from "react";
import {Box, Card} from "grommet";

export default function Genre({genre}) {
    return (
        <Card
            background={'light-2'}
            pad={'small'}
            width={'fit-content'}
        >
            {genre}
        </Card>
    );
}
