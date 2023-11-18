import styled from "styled-components";

export const Container = styled.div`
    text-align: center;
`;

export const Title = styled.h1`
    margin-top: 50px;
    color: #fff;
    font-size: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Board = styled.div`
    display: flex;
    height: 600px;
    width: 564px;
    margin: auto;
`;

export const Row1 = styled.div`

`;

export const Row2 = styled.div`

`;

export const Row3 = styled.div`

`;

export const Boxes = styled.div`
    height: 180px;
    width: 180px;
    display: flex;
    background-color: #1f3540;
    border-bottom: 2px solid #11212a;
    margin: 5px;
    border-radius: 12px;
    cursor: pointer;
`;

export const Reset = styled.button`
    width: 250px;
    height: 100px;
    border: none;
    outline: none;
    font-size: 25px;
    border-radius: 50px;
    background-color: #a8bec9;
    color:  #263c47;
    cursor: pointer;
`;