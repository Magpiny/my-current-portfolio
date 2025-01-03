import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
    <Section row nopadding>
        <LeftSection>
            <SectionTitle main center>
                Hello and welcome to Magpiny Portfolio...
            </SectionTitle>

            <SectionText>
                Am a freelance web developer ready to make your dream a reality through tech
            </SectionText>
            <Button onClick={() => router.push("https://github.com/Magpiny")} >
                Learn More...
            </Button>
        </LeftSection>
    </Section>
);

export default Hero;
