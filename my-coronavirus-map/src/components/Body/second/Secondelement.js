import styled from 'styled-components';


export const Div = styled.div`
    position: relative;
    width: auto;
    height: 130vh;
    background-color: #E1CACA;
    h1{
        font-size: 60px;
        font-weight: 700;
        font-family: 'Karla', sans-serif;
        text-align: center;
        padding: 20px;
    }
    .main{
        width: 100%;
        max-width: 1200px;
        height: 84%;
        margin: 0 auto;
        position: relative;
        padding: 0 2rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(520px, 1fr));
        grid-gap: 4rem 3rem;
        div{
            width: 544px;
            height: 335px;
            background-color: #fff;
            border: 2px solid #95918E;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
            border-radius: 7px;
        }
    }
`

export const Status = styled.p`
    display: flex;
    justify-content: space-between;
    span{
        margin: 12px;
        width: 150px;
        height: 30px;
        text-align: center;
        padding: 6px;
        border-radius: 30px;
        background-color: #F3EFFD;
        font-family: 'Karla', sans-serif;
    }
    .more{
        font-size: 30px;
        padding: 2px;
        margin: 10px 10px;
    }
    
`

export const Sub = styled.p`
    font-size: 30px;
    font-weight: 400;
    font-family: 'Karla', sans-serif;
    padding: 12px;
`

export const User = styled.p`
    font-size: 25px;
    font-weight: 700;
    font-family: 'Karla', sans-serif;
    padding: 12px;
`

export const Time = styled.p`
    font-size: 18px;
    font-weight: 400;
    font-family: 'Karla', sans-serif;
    padding: 12px;
    margin-top: -20px; 
`

export const Icon = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    .icon1{
        font-size: 40px;
        padding: 2px;
        
    }
    .icon2{
        color: #53504D;
        padding: 8px;
        border-radius: 50%;
        overflow: hidden;
        border: 1px solid #53504D;
        font-size: 3rem;
        width: 40px;
        height: 40px;
        &:hover{
            border: 1px solid #1f1f1f;
            color: #000;
            padding: 6px;
        }
    }
`