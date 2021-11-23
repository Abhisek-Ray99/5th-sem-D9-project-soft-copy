import styled from 'styled-components';

export const MDiv = styled.div`
    .modal-backdrop{
        position: fixed;
        height: 100vh;
        width: 100vw;
        top: 0;
        left: 0;
        background: rgba(0,0,0,0.6);
    }
    .modal-content-wrapper{
        position: fixed;
        width: 600px;
        height: 400px;
        background: white;
        margin: auto;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 50px;
        border-radius: 18px;
        border: 10px solid #e5e5e5;
    }
`

