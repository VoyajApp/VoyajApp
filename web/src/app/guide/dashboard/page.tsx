import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Guide Dashboard</h1>
      <div>Upcoming tours placeholder</div>
      <div>Stats placeholder</div>
      <div>Add new adventure placeholder</div>
      <Link href="/guide/profile">Profile</Link>
      <Link href="/guide/local">Local Tours</Link>
      <Link href="/guide/earnings">Earnings</Link>
      <Link href="/marketplace">Marketplace</Link>
    </div>
  );
}
