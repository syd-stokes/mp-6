// function sends GET request to GitHub's API w/ user's access token and returns the
// JSON; used by `getGitHubUser.ts` and `getGitHubEmail.ts` so only write once (DRY):
export default async function fetchGitHubApi(path: string, accessToken: string) {
    const response = await fetch("https://api.github.com" + path, {
        // headers format comes from: https://docs.github.com/en/rest/authentication/authenticating-to-the-rest-api
        headers: {
            Authorization: "Bearer " + accessToken,    
            Accept: "application/vnd.github+json",     
        },
    });

    // error handling:
    if (!response.ok) {
        throw new Error("GitHub API request failed: " + path);
    }

    // return user info as a JavaScript object:
    return response.json();
}