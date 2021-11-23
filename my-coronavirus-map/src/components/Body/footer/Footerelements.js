import styled from 'styled-components';
import { Link } from "gatsby"


export const Div = styled.div`
    width: auto;
    height: 50vh;
    background-color: #fff;
    border-top: 2px solid rgba(0, 0, 0, 0.08);
`

export const DivBox = styled.div`
    position: absolute;
    width: 98%;
    height: 56%;
    left: 0;
    right: 0;
    margin: 20px auto;
    background-color: #EDF2F7;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    border-radius: 18px;
    font-size: 20px;
    font-family: 'Karla', sans-serif;
`
export const Feature = styled.div`
    position: relative;
    width: 32%;
    display: flex;
    flex-direction: column;
    align-items: center;
    left: 4em;
    top: 4.6em;
    padding-right: 100px;
    img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
    p{
        text-align: center;
        padding: 16px;
    }
`
export const Content = styled.div`
    display: flex;
    position: relative;
    top: -5em;
    justify-content: space-around;
`
export const Links = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 30em;
    line-height: 35px;
    h1{
        padding: 10px;
        font-size: 20px;
        text-align: center;
    }
`
export const Products = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 35px;
    h1{
        padding: 10px;
        font-size: 20px;
        text-align: center;
    }
`
export const Services = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 35px;
    h1{
        padding: 10px;
        font-size: 20px;
        text-align: center;
    }
`

export const Linkf = styled(Link)`
    text-decoration: none;
    color: black;
    font-weight: 700;
`

export const Icon = styled.div`
    position: relative;
    width: 150px;
    display: flex;
    justify-content: space-between;
    font-size: 1.5em;
    .icon1{
        background-color: #000;
        color: #fff;
        border-radius: 18px;
        padding: 4px;
    }
    .icon2{
        background-color: #000;
        color: #fff;
        border-radius: 7px;
        padding: 4px;
    }
    .icon3{
        background-color: #000;
        color: #fff;
        border-radius: 7px;
        padding: 4px;
    }
`