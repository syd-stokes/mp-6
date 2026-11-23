// Slide 3 in Lecture 13 (10/27) gives us that: "the `use client` 
// directive must also be added when a React Hook is used in a component."
// So, we need it here to use styled-components.
"use client";

import styled from "styled-components";

const StyledHeader = styled.header`
    text-align: center;
    margin-top: 110px;
    margin-bottom: 24px;
`;

const StyledTitle = styled.h1`
    font-size: calc(10px + 2vw);
    font-weight: 700;
    margin-bottom: 4px;
`;

const StyledSubtitle = styled.p`
    font-size: calc(2px + 0.97vw);
    color: #666666;
`;

// single-tasking principle: display the page title and subtitle
export default function Header() {
    return (
        <StyledHeader>
            <StyledTitle>CS303 OAuth</StyledTitle>
            <StyledSubtitle>Welcome to my MP-6, where you can sign in with GitHub!</StyledSubtitle>
        </StyledHeader>
    );
}