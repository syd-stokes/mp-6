// Slide 3 in Lecture 13 (10/27) gives us that: "the `use client` 
// directive must also be added when a React Hook is used in a component."
// So, we need it here to use styled-components.
"use client";

import Card from "@/components/Card";
import { GitHubUserProps } from "@/type";
import styled from "styled-components";

// center everything inside the card into one column:
const StyledProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    text-align: center;
    margin-bottom: 16px;
`;

// round profile picture:
const StyledProfilePicture = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 2px solid #dddddd;
`;

const StyledName = styled.h2`
    font-size: calc(6px + 1.4vw);
    font-weight: 700;
    margin: 0;
`;

// gray text used for username/email
const StyledText = styled.p`
    font-size: calc(2px + 0.97vw);
    color: #666666;
    margin: 0;
`;

// displays number of followers &
// public repos a profile has:
const StyledStats = styled.p`
    font-size: calc(2px + 0.93vw);
    margin: 0;
`;

// single-tasking principle: display the signed-in user's GitHub info
export default function UserProfile({ user }: { user: GitHubUserProps }) {
    return (
        <Card heading="Your GitHub Profile:">
            <StyledProfile>
                <StyledProfilePicture src={user.profilePicUrl} alt={user.displayName + "'s profile picture"}/>
                <StyledName>{user.displayName}</StyledName>
                <StyledText>@{user.username}</StyledText>

                {/* show email if GitHub provides one: */}
                {user.email && <StyledText>{user.email}</StyledText>}

                <StyledStats>{user.publicReposNum} public repos | {user.followersNum} followers</StyledStats>
            </StyledProfile>
        </Card>
    );
}