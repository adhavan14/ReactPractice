import styled from "styled-components";

export const SearchProfileContainer = styled.div`
    margin-top: 100px;
    width: 300px;
    margin-left:auto;
    margin-right: auto;
`;

export const SearchProfileWrapper = styled.div`
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: center;
    &:hover {
        background-color: gainsboro;
    }
    border-radius: 10px;
    margin-bottom: 5px;
`;

export const SearchProfileUsername = styled.div`
    width: 100px;
    padding: 5px;
    font-size: 20px;
    text-align: center;
`;