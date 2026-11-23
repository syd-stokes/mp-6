import styled from "styled-components";

// "Sign in with GitHub" link, styled like StyledButton in mp-5
// (<a> and not <button> b/c signing in goes to another page (GitHub)):
const StyledButtonLink = styled.a`
    display: block;
    padding: 12px;
    width: 50%;
    margin: 0 auto;    
    border-radius: 8px;
    background: #cf74a3;
    color: #ffffff;
    font-size: calc(2px + 0.93vw);
    font-weight: 700;
    text-align: center;
    text-decoration: none;

    &:hover {
        background: #b85a8a;
    }
`;

export default StyledButtonLink;