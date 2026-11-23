// different format, similar functionality to `providers/github/getGithubUser.ts` 
// file from: https://github.com/tazmanianDeviloper/cs-391-oauth-main/tree/main
// (functionality is split up into different files to adhere to single-tasking principle)

import fetchGitHubApi from "@/lib/fetchGitHubApi";

// function gets the user's primary email address (source: 
// https://docs.github.com/en/rest/users/emails#list-email-addresses-for-the-authenticated-user)
export default async function getGitHubEmail(accessToken: string): Promise<string> {
    // get a list like [{ email: "...", primary: true }, 
    // { email: "...", primary: false }] for all user's emails
    const emails = await fetchGitHubApi("/user/emails", accessToken);

    // find the user's primary email from the list of all user's emails:
    for (let i = 0; i < emails.length; i++) {
        if (emails[i].primary) {
            return emails[i].email;     // return the primary email if one is found
        }
    }

    return "";      // no primary email found
}