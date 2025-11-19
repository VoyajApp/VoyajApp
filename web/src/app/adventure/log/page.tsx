import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Adventure Log</h1>
      <div>List of past adventures placeholder</div>
      <Link href="/adventure/dashboard">Dashboard</Link>
    </div>
  );
}
