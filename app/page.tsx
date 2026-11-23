import SignInCard from "@/components/SignInCard";
import getSignInUrl from "@/lib/getSignInUrl";

export default function Home() {
  // build sign-in link on the server (only the server 
  // can read .env.local), then pass it to SignInCard
  // (source: https://nextjs.org/docs/app/guides/environment-variables):
  const signInUrl = getSignInUrl();

  return <SignInCard signInUrl={signInUrl}/>;
}