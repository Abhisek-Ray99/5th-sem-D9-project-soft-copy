import styled from 'styled-components';
import Img from "gatsby-image"


export const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 120vh;
    background: #fff;
    font-family: 'Karla', sans-serif;
    &::after {
        content: " ";
        width: 25%;
        height: 60%;
        background: #DDEAE1;
        margin-left: 42em;
        margin-bottom: 16em;
        border-radius: 90% 65% 79% 63% / 92% 86% 70% 71%;
    }
    &::before {
        content: " ";
        width: 30%;
        height: 80%;
        background: #FAF3EE;
        position: absolute;
        top: 5%;
        left: 5%;
        border-radius: 70% 20% 30% 70% /
        50% 30% 50% 50%;
        margin-top: 4em;
    }
`;

export const Img2 = styled(Img)`
    z-index: 5;
    width: 40em;
    height: 40em;
    margin-bottom: 4em;
`;


export const Share = styled.h1`
    position: absolute;
    z-index: 1;
    max-width: 48em;
    display: flex;
    flex-direction: column;
    /* background-color: red; */
    padding: 12px;
    left: 2em;
    right: 0;
    margin: 20px;
    bottom: 2em;
`

export const Div_1 = styled.div`
    display: flex;
    flex-direction: column;
    /* background-color:blue; */
`

export const Head = styled.h1`
    font-size: 40px;
    font-family: sans-serif;
    padding: 10px;
`

export const Head_p = styled.p`
    padding: 10px;
    font-size: 20px;
    line-height: 30px;
    font-family: monospace;
    /* background-color: #F5F5F5; */
`

export const Div_2 = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-between;
    padding: 10px;
    margin-top: 20px;
`

export const Btn1 = styled.a`
    display: flex;
    border-radius: 7px;
    text-decoration: none;
    padding: 18px 60px;
    font-size: 22px;
    font-weight: 700;
    border:solid 1.5px #000;
    background: #000;
    color: #fff;
    cursor: pointer;
    img{
        width: 30px;
        height: 27px;
        margin-left: -40px;
    }
    span{
        margin-left: 10px;
    }
    &:hover{
        border:solid 1.5px #3A3837;
        background: #3A3837;
        color: #fff;
    }
`

export const Btn2 = styled.a`
    border-radius: 7px;
    text-decoration: none;
    padding: 18px 60px;
    font-size: 22px;
    font-weight: 700;
    border:solid 1.5px #1f1f1f;
    background: transparent;
    color: #1f1f1f;
    cursor: pointer;
    &:hover{
        border:solid 1.5px #1f1f1f;
        background: #000;
        color: #fff;
    }
`

export const Quote = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    width: 900px;
    top: 48em;
    left: 2.8em;
    font-family: monospace;
    /* background-color: red; */
    .first-div{
        padding: 10px 20px;
        h1{
            padding-left: 20px;
            padding-right: 20px;
            margin: 0rem 0rem 1.5rem;
            border-left: 6px solid #FAF3EE;
            font-size: 28px;
            font-weight: 500;
            max-width: 350px;
        }
        p{
            font-weight: 400;
            font-size: 20px;
            line-height: 10px;
        }
    }
    .second-div{
        padding: 10px 20px;
        /* background-color: blue; */
        h1{
            padding-left: 20px;
            /* padding-right: 20px; */
            margin: 0rem 0rem 1.5rem;
            border-left: 6px solid #DDEAE1;
            font-size: 28px;
            font-weight: 500;
            max-width: 330px;
        }
        p{
            font-weight: 400;
            font-size: 20px;
            line-height: 10px;
        }
    }
`


export const Wrap = styled.div`
  position: absolute;
  left: 34%;
  margin-bottom: 4em;
`;