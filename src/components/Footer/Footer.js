import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { MdCall, MdEmail } from 'react-icons/md';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
        <MdCall size="3rem" />
       
        <LinkItem href="tel:254722260625">Call Magpiny</LinkItem>
      
        </LinkColumn>

        <LinkColumn>
        <MdEmail size="3rem" />
        
        
        <LinkItem href="mailto:magpinybo@gmail.com">Email Magpiny</LinkItem>
      
        </LinkColumn>

      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Small wins over time makes a huge win in the long run. One win at a time</Slogan>
        </CompanyContainer>

        <SocialIcons href="https://github.com/Magpiny">
			    <AiFillGithub size="3rem" />
		    </SocialIcons>

        <SocialIcons href="https://www.linkedin.com/in/samuel-wanjare-179922ba/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>

        <SocialIcons href="https://www.instagram.com/samuelwanjare/">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
      </SocialIconsContainer>

      <div style={{ display:"flex", justifyContent:"center", backgroundColor:"white", color:"black",
                    padding:"1.25rem", marginTop:"20px", marginBottom:0,
                    borderStartEndRadius:"1.2rem",
                    borderStartStartRadius:"1.2rem"
                     }}>
        <p style={{ fontSize:"3.25rem", fontWeight:"bolder" }}>
          Magpiny BO &copy; { year }
        </p>
      </div>

    </FooterWrapper>
  );
};

export default Footer;
