import React from 'react';
import { Helmet } from "react-helmet";
import Container from '../components/Container';
import ImageGallery from '../components/ImageGallery';
import Layout from '../components/layouts/default/Layout';

export default ({ pageContext: { project } }) => {
    if (!project) {
        return (
            <Layout goBackHome>
                <Helmet>
                    <title>Project not found - Donovan Orhan</title>
                </Helmet>
                <section className="text-centered">
                    <Container>
                        <h1 className="h1">This project doesn't exist</h1>
                    </Container>
                </section>
            </Layout>);
    }

    const { description, infos, images, name, platforms, technologies, video, website } = project;

    return (
        <Layout goBackHome>
            <Helmet>
                <title>{name} - Donovan Orhan</title>
                <meta name="description" content={description} />
            </Helmet>
            <section className="text-centered">
                <Container>
                    <h1 className="h1">{name}</h1>
                    <p
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                    {website && website.length && (
                        <a
                            href={website}
                            className="button"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            See more
                    </a>
                    )}
                </Container>
            </section>
            <section className="grey">
                <Container>
                    <h2 className="h2">Assets</h2>
                    <ImageGallery images={images} />
                    {video && (
                        <div className="video-container">
                            <iframe
                                title="Video"
                                width="560"
                                height="315"
                                src={video}
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            />
                        </div>
                    )}
                </Container>
            </section>
            <section>
                <Container>
                    <h2 className="h2">Informations</h2>
                    <div className="three-columns-grid">
                        <div className="col">
                            <h3>Technologies</h3>
                            <ul>
                                {technologies.map((technology, index) => {
                                    return (<li key={index.toString()}>{technology}</li>);
                                })}
                            </ul>
                        </div>
                        <div className="col">
                            <h3>Platforms</h3>
                            <ul>
                                {platforms.map((platform, index) => {
                                    return (<li key={index.toString()}>{platform}</li>);
                                })}
                            </ul>
                        </div>
                        <div className="col">
                            <h3>Facts</h3>
                            <ul>
                                {infos.map((info, index) => {
                                    return (<li key={index.toString()}>{info}</li>);
                                })}
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>
        </Layout>
    );
};
