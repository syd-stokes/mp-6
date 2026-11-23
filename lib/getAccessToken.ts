// function sends the authorization_code + client_id + client_secret to GitHub and gets back an access_token for this user.
// (source: https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps#2-users-are-redirected-back-to-your-site-by-github):
export default async function getAccessToken(code: string): Promise<string> {
    // send the code + app credentials to GitHub (step 7 of OAuth diagram):
    const response = await fetch("https://github.com/login/oauth/access_token", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",     // sending JSON to GitHub
            Accept: "application/json",             // expect JSON in return
        },
        // data to give GitHub as JSON text (source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify):
        body: JSON.stringify({
            client_id: process.env.GITHUB_CLIENT_ID,
            client_secret: process.env.GITHUB_CLIENT_SECRET,
            code: code,
            redirect_uri: process.env.GITHUB_REDIRECT_URI,
        }),
    });

    // read response from GitHub:
    const data = await response.json();

    // if invalid/expired code, 
    // GitHub sends an error:
    if (data.access_token === undefined) {
        return "";
    }

    // return the access token:
    return data.access_token;
}