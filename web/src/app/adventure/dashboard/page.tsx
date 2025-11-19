import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Adventure Dashboard</h1>
      <div>Mission feed placeholder</div>
      <div>Recommended adventures placeholder</div>
      <div>Search/filter placeholder</div>
      <div>Mission progress bar placeholder</div>
      <Link href="/adventure/profile">Profile</Link>
      <Link href="/adventure/details">Mission Details</Link>
      <Link href="/adventure/log">Adventure Log</Link>
      <Link href="/adventure/active">Active Adventure</Link>
    </div>
  );
}
