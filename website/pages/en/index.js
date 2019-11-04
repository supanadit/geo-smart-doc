/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
    render() {
        const {siteConfig, language = ''} = this.props;
        const {baseUrl, docsUrl} = siteConfig;
        const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
        const langPart = `${language ? `${language}/` : ''}`;
        const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

        const SplashContainer = props => (
            <div className="homeContainer">
                <div className="homeSplashFade">
                    <div className="wrapper homeWrapper">{props.children}</div>
                </div>
            </div>
        );

        const Logo = props => (
            <div className="projectLogo">
                <img src={props.img_src} alt="Project Logo"/>
            </div>
        );

        const ProjectTitle = () => (
            <h2 className="projectTitle">
                {siteConfig.title}
                <small>{siteConfig.tagline}</small>
            </h2>
        );

        const PromoSection = props => (
            <div className="section promoSection">
                <div className="promoRow">
                    <div className="pluginRowBlock">{props.children}</div>
                </div>
            </div>
        );

        const Button = props => (
            <div className="pluginWrapper buttonWrapper">
                <a className="button" href={props.href} target={props.target}>
                    {props.children}
                </a>
            </div>
        );

        return (
            <SplashContainer>
                <Logo img_src={`${baseUrl}img/undraw_map_dark.svg`}/>
                <div className="inner">
                    <ProjectTitle siteConfig={siteConfig}/>
                    <PromoSection>
                        <Button href={docUrl('doc1.html')}>Getting Started</Button>
                    </PromoSection>
                </div>
            </SplashContainer>
        );
    }
}

class Index extends React.Component {
    render() {
        const {config: siteConfig, language = ''} = this.props;
        const {baseUrl} = siteConfig;

        const Block = props => (
            <Container
                padding={['bottom', 'top']}
                id={props.id}
                background={props.background}>
                <GridBlock
                    align="center"
                    contents={props.children}
                    layout={props.layout}
                />
            </Container>
        );

        const TryOut = () => (
            <Block id="try">
                {[
                    {
                        content:
                            'GEO Smart built for Open Source but also for anyone who come to learning ' +
                            'and wondering how tracking system work, this is the very basic illustration for tracking system, ' +
                            'because it\'s very basic meaning it\s customizable for anyone who really want to develop more ' +
                            'complex tracking system, it\s developed using Golang ( Gin ), Dart ( Flutter ) and Typescript ( Angular )',
                        image: `${baseUrl}img/undraw_knowledge.svg`,
                        imageAlign: 'left',
                        title: 'Come to learning',
                    },
                ]}
            </Block>
        );

        const Description = () => (
            <Block background="dark">
                {[
                    {
                        content:
                            'Still wondering what is this for ? GEO Smart is the solution for who really want to make ' +
                            'realtime tracking system, eg. Tracking Taxi, Tracking Logistic, Tracking Your Family, ' +
                            'Tracking Your Child, Tracking Your Own Car',
                        image: `${baseUrl}img/undraw_functions.svg`,
                        imageAlign: 'right',
                        title: 'What is this ?',
                    },
                ]}
            </Block>
        );

        const LearnHow = () => (
            <Block background="light">
                {[
                    {
                        content: '**Lightweight**, **Less Memmory Usage**, and **Ultra Fast** Tracking System ' +
                            'powered by [Golang](https://golang.org/) also thanks to [Tile38](https://tile38.com/) ' +
                            'for help this project and become most important thing as Geospatial Database',
                        image: `${baseUrl}img/undraw_server.svg`,
                        imageAlign: 'right',
                        title: 'Low End Specification',
                    },
                ]}
            </Block>
        );

        const Showcase = () => {
            if ((siteConfig.users || []).length === 0) {
                return null;
            }

            const showcase = siteConfig.users
                .filter(user => user.pinned)
                .map(user => (
                    <a href={user.infoLink} key={user.infoLink}>
                        <img src={user.image} alt={user.caption} title={user.caption}/>
                    </a>
                ));

            const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

            return (
                <div className="productShowcaseSection paddingBottom">
                    <h2>Who is Using This?</h2>
                    <p>This project is used by all these people</p>
                    <div className="logos">{showcase}</div>
                    <div className="more-users">
                        <a className="button" href={pageUrl('users.html')}>
                            More {siteConfig.title} Users
                        </a>
                    </div>
                </div>
            );
        };

        return (
            <div>
                <HomeSplash siteConfig={siteConfig} language={language}/>
                <div className="mainContainer">
                    <LearnHow/>
                    <TryOut/>
                    <Description/>
                    <Showcase/>
                </div>
            </div>
        );
    }
}

module.exports = Index;
