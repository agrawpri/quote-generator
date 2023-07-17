import React from "react";
import {Card, CardBody} from "grommet";
import {Link} from "react-router-dom";

export default function Author ({author}) {
    return (
        <Card
            direction={'row'}
            background={'dark-1'}
            pad={'medium'}
            align={'center'}
        >
            <CardBody>
                <Link to={`/author/${author}`} style={{ textDecoration: 'none', color: 'white' }}>
                    {author}
                </Link>
            </CardBody>
        </Card>
    );
};
