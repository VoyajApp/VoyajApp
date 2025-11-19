import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Forgot Password</h1>
      <div>Email input placeholder</div>
      <Link href="/reset-password">Reset Password</Link>
    </div>
  );
}
