import { ReactNode } from "react";

// defines the user info that's shown after sign-in
// (vals come from https://docs.github.com/en/rest/users/users#get-the-authenticated-user):
export type GitHubUserProps = {
    username: string;       
    displayName: string;    // name on profile
    profilePicUrl: string;     
    email: string;          // primary email address (empty string if none found)
    publicReposNum: number;   
    followersNum: number;     
};

// defines props passed to app/profile/page.tsx:
export type ProfilePageProps = {
    // GitHub returns `?code=...` if user clicks "Authorize" on permission
    // screen, or `?error=...` if they click "Cancel"; both are optional
    // (source: https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional):
    searchParams: Promise<{ code?: string; error?: string }>;
};

// defines the props for components/Card.tsx (the shared bordered box):
export type CardProps = {
    heading: string;          // title
    description?: string;     // optional subtitle/description line
    children: ReactNode;      // what's between <Card> and </Card> (source: https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children)
};