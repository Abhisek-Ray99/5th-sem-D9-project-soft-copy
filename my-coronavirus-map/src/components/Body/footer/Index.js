import React from 'react'
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { IconContext } from 'react-icons';
import Img from "gatsby-image"

import { Div, DivBox, Feature, Content, Links, Products, Services, Linkf, Icon } from './footerelements';
import logo from '../../../assets/images/favicon.jpg'

const Footer = () => {
    return (
        <Div>
            <DivBox>
                <Feature>
                    <Img src={logo} />
                    <p>Let's Gtok , geek to geeks and a enrolment of packages</p>
                    <Icon>
                        <IconContext.Provider value={{ className: "icon1" }}>
                            <FaFacebookF />
                        </IconContext.Provider>
                        <IconContext.Provider value={{ className: "icon2" }}>
                            <FaYoutube />
                        </IconContext.Provider>
                        <IconContext.Provider value={{ className: "icon3" }}>
                            <FaInstagram />
                        </IconContext.Provider>

                    </Icon>
                </Feature>
                <Content>
                    <Links>
                        <h1>Links Products</h1>
                        <Linkf to="/">Link 1</Linkf>
                        <Linkf to="/">Link 2</Linkf>
                        <Linkf to="/">Link 3</Linkf>
                        <Linkf to="/">Link 4</Linkf>
                    </Links>
                    <Products>
                        <h1>Name of Product</h1>
                        <Linkf to="/">Product 1</Linkf>
                        <Linkf to="/">Product 2</Linkf>
                        <Linkf to="/">Product 3</Linkf>
                        <Linkf to="/">Product 4</Linkf>
                    </Products>
                    <Services>
                        <h1>Link of Services</h1>
                        <Linkf to="/">Link 1</Linkf>
                        <Linkf to="/">Link 2</Linkf>
                        <Linkf to="/">Link 3</Linkf>
                        <Linkf to="/">Link 4</Linkf>
                    </Services>
                </Content>
            </DivBox>
        </Div>
    )
}

export default Footer
