import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => (
    <Container>
        <Div1>
            <Link
                href="/"
                style={{ display: "flex", alignItems: "center", color: "whitesmoke", marginBottom: "1.25rem" }}>

                <DiCssdeck size="3rem" />	<Span>Portfolio</Span>

            </Link>
        </Div1>
        <Div2>
            <li>
                <Link href="#projects" legacyBehavior>
                    <NavLink>Projects</NavLink>
                </Link>
            </li>
            <li>
                <Link href="#tech" legacyBehavior>
                    <NavLink>Technologies</NavLink>
                </Link>
            </li>
            <li>
                <Link href="#about" legacyBehavior>
                    <NavLink>About</NavLink>
                </Link>
            </li>
        </Div2>

        <Div3>
            <SocialIcons href="https://github.com/Magpiny">
                <AiFillGithub size="3rem" />
            </SocialIcons>

            <SocialIcons href="https://www.linkedin.com/in/samuel-wanjare-179922ba/">
                <AiFillLinkedin size="3rem" />
            </SocialIcons>

            <SocialIcons href="https://twitter.com/SamuelWanjare">
                <AiFillTwitterCircle size="3rem" />
            </SocialIcons>

        </Div3>
    </Container>
);

export default Header;
