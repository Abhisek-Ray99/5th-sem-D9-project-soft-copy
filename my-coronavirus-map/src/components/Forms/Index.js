import React, { useState} from 'react'
import styled from 'styled-components'

import { BoxContainer, TopContainer, BackDrop, HeaderContainer, HeaderText, SmallText } from './Formstyle'
import Loginform from './login/Loginform';
import Signupform from './singup/Signupform';
import { AccountContext } from './accountContext';

const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 1.8em;
`

const backdropVariants = {
    expanded: {
        width: '233%',
        height: '1050px',
        borderRadius: '20%',
        transform: 'rotate(60deg)',
    },
    collapsed: {
        width: '160%',
        height: '550px',
        borderRadius: '50%',
        transform: 'rotate(60deg)',
    }
}

const expandingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 30,
}

const Form = () => {

    const [isExpanded, setIsExpanded] = useState(false);
    const [active, setActive] = useState("signin")

    const playExpandingAnimation = () => {
        setIsExpanded(true);
        setTimeout(() => {
            setIsExpanded(false);
        }, expandingTransition.duration * 1000 - 1500);
    }

    const switchToSignup = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive('signup')
        }, 400);
    }

    const switchToSignin = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive('signin')
        }, 400);
    }

    const contextValue = {
        switchToSignup, switchToSignin
    }

    return (
        <AccountContext.Provider value={contextValue}>
            <BoxContainer>
                <TopContainer>
                    <BackDrop
                        initial={false}
                        animate={isExpanded ? 'expanded' : 'collapsed'}
                        variants={backdropVariants}
                        transition={expandingTransition}
                    />
                    {active === 'signin' && (<HeaderContainer>
                        <HeaderText>Welcome</HeaderText>
                        <HeaderText>Back</HeaderText>
                        <SmallText>Please Login Here to continue towards your destiny</SmallText>
                    </HeaderContainer>)}
                    {active === 'signup' && (<HeaderContainer>
                        <HeaderText>Create</HeaderText>
                        <HeaderText>An Account</HeaderText>
                        <SmallText>Please Signup Here to continue towards your destiny</SmallText>
                    </HeaderContainer>)}
                </TopContainer>
                <InnerContainer>
                    {active === "signin" && <Loginform/>}
                    {active === "signup" && <Signupform/>}
                </InnerContainer>
            </BoxContainer>
        </AccountContext.Provider>

    )
}

export default Form
