import React from "react";
import {Grommet, Paragraph} from "grommet";
import { deepMerge } from 'grommet/utils';
import { grommet } from 'grommet/themes';

const customTheme = deepMerge(grommet, {
    paragraph: {
        font: {
            family: "Raleway-Medium",
        },
    },
});


export default function QuoteText ({quoteText}) {
    return (
        <Grommet theme={customTheme}>
            <Paragraph size={'xlarge'}>
                "{quoteText}"
            </Paragraph>
        </Grommet>
    );
};
