import React from "react";
import {Card, CardBody} from "grommet";

export default function Author ({author}) {
    return (
        <Card direction={'row'} background={'dark-1'} pad={'medium'}>
            <CardBody>{author}</CardBody>
        </Card>
    );
};
