import fetchGitHubApi from "@/lib/fetchGitHubApi";
import getGitHubEmail from "@/lib/getGitHubEmail";
import { GitHubUserProps } from "@/type";

// function sends the access_token to GitHub and gets back the user's profile info (steps 9-10 of OAuth diagram)
// (source: https://docs.github.com/en/rest/users/users#get-the-authenticated-user):
export default async function getGitHubUser(accessToken: string): Promise<GitHubUserProps> {
    // get the user's profile info and primary email from GitHub (steps 9-10 of OAuth diagram):
    const data = await fetchGitHubApi("/user", accessToken);
    const email = await getGitHubEmail(accessToken);

    // if user has no display 
    // name, use their username:
    let displayName = data.login;
    if (data.name !== null) {
        displayName = data.name;
    }

    // map GitHub's field names into GitHubUserProps type
    // (same idea as `getAllPosts` in week 9 lab "Next.js: Persistence with MongoDB"):
    const user: GitHubUserProps = {
        username: data.login,
        displayName: displayName,
        profilePicUrl: data.avatar_url,
        email: email,
        publicReposNum: data.public_repos,
        followersNum: data.followers,
    };

    // return the user's info:
    return user;
}