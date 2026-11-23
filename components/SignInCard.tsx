// different format, similar functionality to `app/sign-in/page.tsx` 
// file from: https://github.com/tazmanianDeviloper/cs-391-oauth-main/tree/main

// Slide 3 in Lecture 13 (10/27) gives us that: "the `use client` 
// directive must also be added when a React Hook is used in a component."
// So, we need it here to use styled-components.
"use client";

import Card from "@/components/Card";
import StyledButtonLink from "@/components/StyledButtonLink";

// single-tasking principle: show the "Sign in with GitHub" button (signInUrl passed in as a prop)
export default function SignInCard({ signInUrl }: { signInUrl: string }) {
    return (
        <Card heading="Sign in" description="Sign in with GitHub below to see your profile info:">
            <StyledButtonLink href={signInUrl}>Sign in with GitHub</StyledButtonLink>
        </Card>
    );
}