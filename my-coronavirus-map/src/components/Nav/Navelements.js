import styled from 'styled-components';
import { Link } from "gatsby"

export const Div = styled.div`
    position: fixed;
    width: 100vw;
    height: 65px;
    display: flex;
    background-color: #fff;
    background: rgba( 255, 255, 255, 0.85 );
    box-shadow: 0px 0px 10px hsl(0deg 0% 0% / 10%);
    backdrop-filter: blur( 4px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
    z-index: 99999;
    img{
        width: 50px;
        height: 50px;
        background: no-repeat;
        padding: auto;
        border-radius: 18px;
        margin-left: 10px;
    }
`

export const Ul1 = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    margin: 12px;
`

export const Link1 = styled.a`
    color: #6A30DC;
    font-weight: 700;
    font-size: 25px;
    font-family: 'Karla', sans-serif;
    margin: 10px;
    cursor: pointer;
`

export const Ul2 = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    margin: 4px 0 4px 30px;
    /* background-color: red; */
    Link{
        margin: 2px;
        text-decoration: none;
        color: #000;
        a{
            color: #6A30DC;
            font-weight: 700;
            font-size: 30px;
            font-family: 'Karla', sans-serif;
        }
    }
`
export const Ul3 = styled.ul`
    width: 55%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    list-style: none;
    /* background-color:red; */
    margin:4px;
`

export const Link2 = styled.a`
    padding: 14px;
    text-decoration: none;
    color: #000;
    font-weight: bold;
    font-size: 16px;
    font-family: 'Karla', sans-serif;
    cursor: pointer;
    margin: 4px;
`

export const LoginBtn = styled.a`
    text-decoration: none;
    font-family: 'Karla', sans-serif;
    padding: 14px;
    font-weight: bold;
    margin-left: 40px;

`
export const SignupBtn = styled.a`
    text-decoration: none;
    font-family: 'Karla', sans-serif;
    padding: 12px 20px;
    color: #fff;
    background-color: #6A30DC;
    border-radius: 35px;
    letter-spacing: 1.5px;
    font-weight: bold;
    cursor: pointer;
`

