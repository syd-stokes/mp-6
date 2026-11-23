// function builds GitHub sign-in link w/ client_id, redirect_uri, and scopes
// (step 2 of OAuth diagram); user clicks it to go to GitHub (step 3), signs in and
// clicks "Authorize" (step 4), and GitHub sends them back with a code (step 5)
// (source: https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps#1-request-a-users-github-identity):
export default function getSignInUrl(): string {
    /// build the "?client_id=...&redirect_uri=...&scope=..." part of the link
    // (source: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams):
    const params = new URLSearchParams({
        client_id: process.env.GITHUB_CLIENT_ID as string,
        redirect_uri: process.env.GITHUB_REDIRECT_URI as string,

        // only ask for read-only permissions (source: 
        // https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps):
        scope: "read:user user:email",
    });

    // return the full link to GitHub's sign-in page:
    return "https://github.com/login/oauth/authorize?" + params.toString();
}