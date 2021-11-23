import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BoxContainer = styled.div`
    width: 350px;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    border-radius: 19px;
    background-color: #F9FAFB;
    box-shadow: 0 0 2px rgba(15,15,15,0.28);
    position: relative;
    overflow: hidden;
    left: 0;
    right: 0;
    margin: 50px;
`

export const TopContainer = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 2em;
    padding-bottom: 2em;
`

export const BackDrop = styled(motion.div)`
    width: 160%;
    height: 550px;
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    background-color: #6A30DC;
    top: -290px;
    left: -70px;
    transform: rotate(60deg);
    z-index:10;
`

export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    z-index: 12;
`

export const HeaderText = styled.h2`
    font-size: 38px;
    font-weight: bold;
    line-height: 1.24;
    color: #fff;
    z-index:10;
    margin: 0;
    font-family: 'Poppins', sans-serif;
`

export const SmallText = styled.h5`
    color: #fff;
    font-weight: 500;
    font-size: 11px;
    z-index:10;
    margin: 0;
    margin-top: 8px;
    font-family: 'Space Mono', monospace;
`