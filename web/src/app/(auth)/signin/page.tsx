import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Sign In</h1>
      <div>Email/password fields placeholder</div>
      <div>Social sign-in placeholder</div>
      <Link href="/forgot-password">Forgot Password</Link>
      <Link href="/signup">Sign Up</Link>
      <Link href="/social-signin">Social Sign In</Link>
    </div>
  );
}
