import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import email from '../utils/email';
import CardContainer from '../components/CardContainer';
import Container from '../components/Container';
import Layout from '../components/layouts/default/Layout';
import Skill from '../components/Skill';
import SkillContainer from '../components/SkillContainer';

export default ({ data }) => (
    <Layout>
        <section className="text-centered">
            <Container>
                <Img fixed={data.avatar.childImageSharp.fixed} />
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
                <CardContainer cards={data.allProjectsJson.edges} />
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
                    <Skill name="Unity" url="https://unity.com" image={data.logoUnity.childImageSharp.fixed} />
                    <Skill name="NodeJS" url="https://nodejs.org" image={data.logoNodeJS.childImageSharp.fixed} />
                    <Skill name="React" url="https://reactjs.org" image={data.logoReact.childImageSharp.fixed} />
                    <Skill name="Laravel" url="https://laravel.com" image={data.logoLaravel.childImageSharp.fixed} />
                    <Skill name="Vue" url="https://vuejs.org" image={data.logoVue.childImageSharp.fixed} />
                    <Skill name="Figma" url="https://www.figma.com" image={data.logoFigma.childImageSharp.fixed} />
                </SkillContainer>
            </Container>
        </section>
    </Layout>
);

export const query = graphql`
fragment logoImage on File {
    childImageSharp {
        fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed_withWebp
        }
    }
}
query {
    allProjectsJson {
        edges {
            node {
                name,
                website,
                thumbnail {
                    childImageSharp {
                        fixed(width: 278, height: 200) {
                            ...GatsbyImageSharpFixed_withWebp
                        }
                    }
                }
            }
        }
    }
    avatar: file(relativePath: { eq: "avatar.png" }) {
        childImageSharp {
            fixed(width: 102, height: 102) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
    }
    logoUnity: file(relativePath: { eq: "unity3D.png" }) {
        ...logoImage
    }
    logoNodeJS: file(relativePath: { eq: "nodejs.png" }) {
        ...logoImage
    }
    logoReact: file(relativePath: { eq: "react.png" }) {
        ...logoImage
    }
    logoLaravel: file(relativePath: { eq: "laravel.png" }) {
        ...logoImage
    }
    logoVue: file(relativePath: { eq: "vue.png" }) {
        ...logoImage
    }
    logoFigma: file(relativePath: { eq: "figma.png" }) {
        ...logoImage
    }
  }
`;
