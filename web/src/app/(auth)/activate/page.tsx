import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Account Activation</h1>
      <div>Verification code input placeholder</div>
      <Link href="/adventure/dashboard">Adventure Dashboard</Link>
      <Link href="/guide/dashboard">Guide Dashboard</Link>
    </div>
  );
}
