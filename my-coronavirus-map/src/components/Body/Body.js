import React from 'react'

import { Div } from './bodyelements';
import Contact from './contact/Index';
import First from './first/Index';
import Footer from './footer';
import Second from './second/Index';
import Third from './third/Index';
import Nav from '../Nav/Nav'

const Body = () => {
    return (
        <Div>
            <Nav />
            <First/>
            <Second/>
            <Third/>
            <Contact/>
            <Footer/>
        </Div>
    )
}

export default Body;
