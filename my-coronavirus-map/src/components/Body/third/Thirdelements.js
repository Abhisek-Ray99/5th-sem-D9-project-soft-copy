import styled from 'styled-components';
import {motion} from 'framer-motion';
import Img from "gatsby-image"


export const Section = styled.section`
    position: relative;
    height: 160vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #CAE1D4;
    font-family: 'Karla', sans-serif;
`

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    margin-top: -20rem;
    padding: 3rem calc((100vw - 1300px)/2);
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
`

export const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 5rem 2rem;
    h1{
        margin-bottom: 0.5rem;
        font-size: 4rem;
    }
    p{
        margin: 2rem 0;
        font-size: 2rem;
        line-height: 1.1;
    }
`

export const Imgmain = styled(motion.div)`
    position: absolute;
    max-width: 250px;
    max-height: 250px;
`

export const ColumnRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    position: relative;
    ${Img}:nth-child(1){
        width: 30%;
        height: 200px;
        top: 10px;
        left: 10px;
    }
    ${Img}:nth-child(2){
        width: 34%;
        height: 200px;
        top: 170px;
        left: 160px;
    }
    ${Img}:nth-child(3){
        top: 350px;
        left: 100px;
    }
    ${Img}:nth-child(4){
        bottom: 100px;
        left: 375px;
    }
    ${Img}:nth-child(5){
        width: 100%;
        height: 300px;
        top: 60px;
        left: 400px;
    }
    ${Img}:nth-child(6){
        width: 100%;
        height: 300px;
        top: 5px;
        left: 180px;
    }
`



export const Button = styled(motion.button)`
    cursor: pointer;
    padding: 1rem 3rem;
    font-size: 1rem;
    border: 2px solid #fff;
    border-radius: 4px;
    outline: none;
    background: #fff;
    color: #000;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`