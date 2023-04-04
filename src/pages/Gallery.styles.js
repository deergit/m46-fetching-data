import styled from "styled-components";

export const Wrapper = styled.div`
    user-select: none;

    filter: blur(${(props) => props.blur}px);
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
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);

    img {
        width: 100%;
        height: 100%;

        object-fit: cover;
        object-position: 50% 50%;
    }

    .info {
        margin: 20px;

        position: absolute;
        top: 45%;
        left: 40%;
    }
`

export const ModalContainer = styled.div`
    z-index: 5;

    text-align: center;

    width: 80%;
    height: 80%;

    position: fixed;

    top: 10%;
    left: 10%;
    margin-top: auto;

    border-radius: 10px;
    background-color: hsl(${(props) => props.piece.color.h}, ${(props) => Math.min((props.piece.color.s * 0.1), 100)}%, ${(props) => Math.min((props.piece.color.l * 1.75), 90)}%);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

    #topbar {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-end;
    }

    #topbar button {
        font-size: 20px;

        padding: 2px 10px 6px 10px;
        margin-top: 10px;
        margin-right: 20px;

        border-radius: 50%;
        border: none;
        outline: none;
    }

    img {
        margin: 10px;

        border: 6px solid white;
        box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.2);

        height: 70%;
        max-width: 90%;
    }
`