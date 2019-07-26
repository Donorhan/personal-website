import React from 'react';
import Container from '../../Container';
import IconFacebook from '../../../../static/svg/facebook.svg';
import IconTwitter from '../../../../static/svg/twitter.svg';
import IconGithub from '../../../../static/svg/github.svg';
import IconEmail from '../../../../static/svg/email.svg';
import IconFile from '../../../../static/svg/file.svg';
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
                        <a href="http://www.google.com/recaptcha/mailhide/d?k=01pxGVAFhkKvx_6r_aKbAxcw==&amp;c=h3oEQQTVYET7-FIhneirjKLeAnvBgI5qeXtR4L-S8s0="
                            onClick={() => {
                                window.open('http://www.google.com/recaptcha/mailhide/d?k\x3d01pxGVAFhkKvx_6r_aKbAxcw\x3d\x3d\x26c\x3dh3oEQQTVYET7-FIhneirjKLeAnvBgI5qeXtR4L-S8s0\x3d', '', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=500,height=300');
                                return false;
                            }}
                            title="Reveal this e-mail address">
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
