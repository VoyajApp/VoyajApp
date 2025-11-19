import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Adventure Details</h1>
      <div>Mission description placeholder</div>
      <div>Difficulty placeholder</div>
      <div>Start button placeholder</div>
      <Link href="/adventure/active">Active Adventure</Link>
      <Link href="/adventure/dashboard">Dashboard</Link>
    </div>
  );
}
