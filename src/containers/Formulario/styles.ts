import styled from "styled-components";

export const Form = styled.form`
    max-width: 547px;
    width: 100%;
    font-size: 14px;
    font-weight: 700;
    color: #666666;

    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 10px;
    margin-top: 1rem;

    h3 {
        font-weight: bold;
        font-size: 18px;
        color: #000;
    }
    input {
        border: 1px solid #666666;
        border-radius: 8px;
        padding: 10px;
        color: #666666;
        font-weight: bold;
    }
    button {
        border: none;
        border-radius: 8px;
        cursor: pointer;
        background-color: #44BD32;
        color: #ffff;
        font-weight: bold;
        padding: 10px;
        max-width: 100px;
    }
`