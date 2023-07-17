import {Anchor, Avatar, Box, Footer, Grommet, Header, Heading, Menu, Nav, Page, PageContent} from "grommet";
import React from "react";
import {Github, Home, Linkedin} from "grommet-icons";


export default function Layout ({children}) {
    return (
        <Grommet full>
            <Page background="background-front" kind="narrow">
                <PageContent>
                    <Header
                        sticky="scrollup"
                        pad={{ vertical: 'xsmall', horizontal: 'small'}}
                        background="black"
                        gap={'small'}
                        direction={'row'}
                    >
                        <Heading level={'2'} size={'medium'}>Quote Generator</Heading>
                        <Nav align="center" direction="row">
                            <Anchor label="Home" href="#" color={'white'} icon={<Home/>}/>
                        </Nav>
                    </Header>

                    <Box
                        gap={'small'}
                        pad={{ vertical: 'xsmall', horizontal: 'xsmall'}}
                    >
                        {children}
                    </Box>

                    <Footer
                        sticky="scrolldown"
                        pad={{ vertical: 'xsmall', horizontal: 'xsmall'}}
                        background="black"
                        gap={'small'}
                    >
                            <Box
                                size='small'
                                pad={'small'}
                                direction={'row'}
                                justify={'start'}
                                align={'center'}
                            >
                                <Avatar src={"https://gravatar.com/avatar/c5988d9b17b1e4a5ec9d42dddf981e7b"}/>
                                &nbsp;&nbsp;Made by Priyansh Agrawal
                            </Box>
                            <Box direction="row" gap="xxsmall" justify={'end'} size={'small'}>
                                <Anchor
                                    a11yTitle="View my GitHub profile"
                                    href="https://www.github.com/Priyansh121096"
                                    icon={<Linkedin color="brand" />}
                                />
                                <Anchor
                                    a11yTitle="Connect with me on LinkedIn"
                                    href="https://www.linkedin.com/in/priyansh-agrawal"
                                    icon={<Github color="brand" />}
                                />
                            </Box>
                    </Footer>
                </PageContent>
            </Page>
        </Grommet>
    );
}
