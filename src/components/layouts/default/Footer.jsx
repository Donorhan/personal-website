import React from 'react';
import IconEmail from '../../../../static/svg/email.svg';
import IconFacebook from '../../../../static/svg/facebook.svg';
import IconFile from '../../../../static/svg/file.svg';
import IconGithub from '../../../../static/svg/github.svg';
import IconTwitter from '../../../../static/svg/twitter.svg';
import email from '../../../utils/email';
import Container from '../../Container';
import './Footer.scss';

const Footer = () => (
    <footer>
        <Container>
            <div id="about" className="about">
                <h3>About me</h3>
                <p>I'm a fullstack developer based in Nantes (France) who can make websites and games.<br /> I enjoy working
                    in others domains like UI/UX and I got an eye on design too.
                <br /><br />
                    Feel free to use one of this links to tchat with me.</p>
            </div>
            <div className="socials">
                <h3>Socials</h3>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/donoorhan" aria-label="Show Facebook account">
                            <IconFacebook />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/dorhan_" aria-label="Show Twitter account">
                            <IconTwitter />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Donorhan" aria-label="Show Github account">
                            <IconGithub />
                        </a>
                    </li>
                    <li>
                        <a href={`mailto:${email}`} title="Contact with email">
                            <IconEmail />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.doyoubuzz.com/donovan-orhan" target="_blank" rel="noopener noreferrer"
                            title="Show resume">
                            <IconFile />
                        </a>
                    </li>
                </ul>
            </div>
        </Container>
    </footer >
);

export default Footer;
