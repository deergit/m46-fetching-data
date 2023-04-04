import styled from "styled-components";

export const Wrapper = styled.div`
    user-select: none;
`

export const Container = styled.div`
    display: flex;
    flex-flow: row wrap;
`

export const ArtPiece = styled.div`
    height: 300px;

    margin: 40px;

    position: relative;
    display: flex;
    flex-flow: row nowrap;

    flex: 1 0 calc(50% - 80px);

    justify-content: flex-start;
    align-items: center;

    color: white;
    text-shadow: 0px 0px 5px black;

    img {
        width: 100%;
        height: 100%;

        object-fit: cover;
        object-position: 50% 50%;
    }

    .info {
        margin: 20px;
    
        position: absolute;
        top: 33%;
        left: 40%;
    }
`

export const Modal = styled.div`

`