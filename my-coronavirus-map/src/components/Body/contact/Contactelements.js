import styled from 'styled-components';


export const Div = styled.div`
    position: relative;
    width: auto;
    height: 80vh;
    font-family: 'Karla', sans-serif;
    background-color: #fff;
    @media only screen and (max-width: 496px) {
        height: 90vh;
    }
`

export const FormContainer = styled.div`
    position: absolute;
    width: 90%;
    min-height: 100vh;
    height: 145%;
    background-color: #F9F3EE;
    left: 0;
    right: 0;
    margin: -18rem auto;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
    form{
        width: 75%;
        left: 0;
        right: 0;
        margin: 2em auto;
        @media only screen and (max-width: 756px) {
            font-size: 2.2rem;
            width: 93%;
        }
    }
    @media only screen and (max-width: 496px) {
        font-size: 1.75rem;
    }
`
export const ThreeColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    right: 3em;
    .form-title{
        margin: 0.2em 0 0 0;
        font-size: 3.4rem;
        font-weight: 800;
        text-align: center;
    }
    .form-description{
        margin: 0 0 1em 0;
        color: #9e9d9b;
        font-weight: 300;
        text-align: center;
    }
`
export const Column1 = styled.div`
    margin: 1.5em 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1.5em;
    @media only screen and (max-width: 576px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        grid-column-gap: 0;
        grid-row-gap: 0em;
        margin: -1em 0;
    }
`

export const Column2 = styled.div`
    @media only screen and (max-width: 576px) {
        margin: 1em 0;
    }
`

export const Column3 = styled.div`

`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

`
export const Label = styled.label`
    margin: 1em 0 .75em 2.2em;
    font-weight: 300;
    @media only screen and (max-width: 576px) {
        font-size: 0.6em;
        margin-left: 1em;
    }
`
export const Input = styled.input`
        width: 100%;
        padding: 1.2em 1.2em 1.2em 3.6em;
        font-size: 1.22rem;
        border-radius: 5em;
        box-shadow: 0 5px 20px 0 rgba(237, 232, 228, .8);
        background-color: #ede8e4;
        border: 2px solid #ede8e4;
        transition: border .15s ease-in-out;
        &:focus {
            outline: none;
            border: 2px solid rgb(161, 166, 252);
        }
        :hover {
            border: 2px solid rgb(161, 166, 252);
        }
`
export const TextArea = styled.textarea`
    min-height: 10em;
    transition: opacity .15s ease-in-out;
    resize: none;
    border-radius: 2.25em;
    width: 100%;
    padding: 1.2em 1.2em 1.2em 3.6em;
    font-size: 1.22rem;
    border-radius: 2em;
    box-shadow: 0 5px 20px 0 rgba(237, 232, 228, .8);
    background-color: #ede8e4;
    border: 2px solid #ede8e4;
    transition: border .15s ease-in-out;
    &::-webkit-scrollbar-track {
        background-color: transparent;
    }
    &:focus {
    outline: none;
    border: 2px solid rgb(161, 166, 252);
}
`
export const SubmitButton = styled.button`
    margin: 2em 0 1em 0;
    background-color: #f6e58d;
    width: 200px;
    height: 60px;
    cursor: pointer;
    border-radius: 35.5px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    transition: all .5s ease 0s; 
    box-shadow: 0 10px #f9ca24;
    span{
        font-size: 30px;
        margin: 10px;
    }
    
`

export const Field = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .icon-input{
        position: absolute;   
    }
`

export const style = {
    position: 'absolute',
    left: "1em"
}



