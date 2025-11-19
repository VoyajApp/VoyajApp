import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Active Adventure</h1>
      <div>Map placeholder</div>
      <div>Upload photo placeholder</div>
      <div>Navigation instructions placeholder</div>
      <Link href="/adventure/dashboard">Dashboard</Link>
    </div>
  );
}
