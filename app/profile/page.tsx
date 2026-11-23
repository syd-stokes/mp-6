// OAuth diagram steps 5-6 from the instructions: after the user clicks "Authorize" (step 4), 
// GitHub sends the browser here with an authorization_code in the URL (e.g. /profile?code=abc123)

import getAccessToken from "@/lib/getAccessToken";
import getGitHubUser from "@/lib/getGitHubUser";
import UserProfile from "@/components/UserProfile";
import { ProfilePageProps } from "@/type";
import { redirect } from "next/navigation";

// page calls GitHub on every visit; "instant = false" lets it wait for GitHub before showing the profile
// (suggested by the Next.js error message: https://nextjs.org/docs/messages/blocking-prerender-dynamic):
export const instant = false;

// function reads the code from the URL, trades it for a token,
// then shows the user's profile (OAuth diagram steps 6-11):
export default async function ProfilePage(props: ProfilePageProps) {
    // read authorization_code the browser brought from GitHub:
    const searchParams = await props.searchParams;
    const authCode = searchParams.code;

    // no code means user clicked "Cancel" on
    // GitHub, so redirect to home page:
    if (authCode === undefined) {
        redirect("/");
    }

    // send the code + client_id + client_secret 
    // to GitHub and get back an access_token:
    const accessToken = await getAccessToken(authCode);
    if (accessToken === "") {
        redirect("/");      // code was invalid or expired (e.g. the page was refreshed)
    }

    // send the access_token to GitHub, 
    // get back the user information:
    const user = await getGitHubUser(accessToken);

    // send user info to the browser:
    return <UserProfile user={user}/>;
}