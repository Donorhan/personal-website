import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import email from '../utils/email';
import CardContainer from '../components/CardContainer';
import Container from '../components/Container';
import Layout from '../components/layouts/default/Layout';
import Skill from '../components/Skill';
import SkillContainer from '../components/SkillContainer';

export default () => (
    <Layout>
        <section className="text-centered">
            <Container>
                <img src="img/avatar.png" alt="My avatar" width="102" height="102" />
                <h1 className="h1">Hi there, I'm Dono</h1>
                <p>
                    I’m a passionate freelance developer from <a href="https://www.google.com/maps/place/Nantes/@46.9943774,1.4667914,6.8z/data=!4m5!3m4!1s0x4805ee81f0a8aead:0x40d37521e0ded30!8m2!3d47.218371!4d-1.553621">Nantes</a> working with various technologies for mobile, websites and video games.
                    <br />
                    If you’d like to discuss about your future project, or just say hello, feel free to&nbsp;
                    <a href={`mailto:${email}`} title="Contact me">
                        contact me
                    </a>.
                </p>
            </Container>
        </section>
        <section id="work" className="grey">
            <Container>
                <h2 className="h2">My work</h2>
                <StaticQuery
                    query={graphql`
                        query ProjectsQuery {
                            allProjectsJson {
                                edges {
                                    node {
                                        name,
                                        thumbnail,
                                        website,
                                    }
                                }
                            }
                        }
                    `}
                    render={({ allProjectsJson }) => <CardContainer cards={allProjectsJson.edges} />}
                />
            </Container>
        </section>
        <section id="tools" className="text-centered">
            <Container>
                <h2 className="h2">Tools & skills</h2>
                <p>
                    I've worked on many projects with many tools, here are my favorites.<br />
                    If you want to know more about me take a look at my <a href="https://www.doyoubuzz.com/donovan-orhan" target="_blank" rel="noopener noreferrer">resume</a>. Of course I like to learn new stuff too!
                </p>
                <SkillContainer>
                    <Skill name="Unity" url="https://unity.com" image="img/unity3D.png" />
                    <Skill name="NodeJS" url="https://nodejs.org" image="img/nodejs.png" />
                    <Skill name="React" url="https://reactjs.org" image="img/react.png" />
                    <Skill name="Laravel" url="https://laravel.com" image="img/laravel.png" />
                    <Skill name="Vue" url="https://vuejs.org" image="img/vue.png" />
                    <Skill name="Figma" url="https://www.figma.com" image="img/figma.png" />
                </SkillContainer>
            </Container>
        </section>
    </Layout>
);
