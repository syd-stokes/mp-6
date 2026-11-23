// Slide 3 in Lecture 13 (10/27) gives us that: "the `use client` 
// directive must also be added when a React Hook is used in a component."
// So, we need it here to use styled-components.
"use client";

import styled from "styled-components";
import { CardProps } from "@/type";

// bordered box, same look as StyledFormBox in mp-5
const StyledBox = styled.div`
    width: 24%;
    text-align: center;
    min-width: 300px;
    margin: 0 auto;
    padding: 24px;
    padding-top: 0.5%;
    padding-bottom: 2.5%;
    border: 2px solid #dddddd;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;

const StyledHeading = styled.h2`
    font-size: calc(6px + 1.4vw);
    font-weight: 700;
    margin-bottom: 25px;
`;

const StyledDescription = styled.p`
    margin-top: -14px;
    font-size: calc(2px + 0.93vw);
    color: #666666;
    margin-bottom: 25px;
`;

// single-tasking principle: display bordered box w/ heading and description.
// Used by `SignInCard.tsx` and `UserProfile.tsx`, so only write it once (DRY)
// (source: https://react.dev/learn/passing-props-to-a-component#step-2-read-props-inside-the-child-component):
export default function Card({heading, description, children}: CardProps) {
    return (
        <StyledBox>
            <StyledHeading>{heading}</StyledHeading>

            {/* only show description if one was passed in: */}
            {description && <StyledDescription>{description}</StyledDescription>}

            {/* whatever's between <Card> and </Card> on a given page (sign in button or profile info): */}
            {children}
        </StyledBox>
    );
}