import React from 'react';
import { Helmet } from 'react-helmet';
import Container from '../components/Container';
import Layout from '../components/layouts/default/Layout';

export default () => (
    <Layout goBackHome>
        <Helmet>
            <title>Blog - Donovan Orhan</title>
            <meta name="description" content="The blog" />
        </Helmet>
        <section className="article">
            <Container>
                <h1 className="h1">Bienvenue sur mon blog !</h1>
                <p>
                    Le but de ce blog est avant tout de parler de mes projets en cours de développement afin d’en garder une trace. C'est aussi pour moi une façon de rester motivé sur mes projets tout en vous les présentant. Ce blog parlera principalement de mon jeu en cours de développement : Echo.
                </p>
            </Container>
        </section>
        <section className="grey article">
            <Container>
                <h2 className="h2">Echo ? C'est quoi ?</h2>
                <p>
                    Echo est un jeu de aventure/action/exploration dans l'espace, rien que ça ! <br /><br />
                    L'idée est d'avoir un jeu dans lequel le joueur peut explorer à sa guise l'univers tout en améliorant son vaisseau et son équipage afin d'aller toujours plus loin dans l'espace. Évidemment ça serait trop simple comme ça, de nombreux obstacles seront présents tout au long du voyage.
                </p>
            </Container>
        </section>
        <section className="article">
            <Container>
                <h2 className="h2">Ça ressemble à quoi ?</h2>
                <p>
                    Pour le moment pas grand chose, un POC (proof of concept) existe et … voilà 😅.<br /><br />

                    Heureusement, mon ami Mehdi a fait d'incroyable dessins qui donne tout de suite une idée du style, je vous invite d'ailleurs à visiter son site : <a href="#">http://meudeu.ultra-book.com</a>
                </p>
            </Container>
        </section>
        <section className="article grey">
            <Container>
                <h2 className="h2">La suite</h2>
                <p>
                    Maintenant que vous avez une idée plus claire du jeu et que vous mourez d'envie d'en savoir plus, il va être important de moi de mettre à jour ce blog régulièrement !

                    On se retrouve très rapidement pour un prochain article concernant la mise en place des bases du jeu :)
                </p>
            </Container>
        </section>
    </Layout>
);
