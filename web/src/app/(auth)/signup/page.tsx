import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Sign Up</h1>
      <div>User information placeholder</div>
      <div>Terms & Privacy checkbox</div>
      <div>Social signup placeholder</div>
      <Link href="/social-signup">Social Sign Up</Link>
      <Link href="/signin">Sign In</Link>
      <Link href="/activate">Activate Account</Link>
    </div>
  );
}
