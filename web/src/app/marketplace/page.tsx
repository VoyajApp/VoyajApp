import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Marketplace</h1>
      <div>List of adventures placeholder</div>
      <div>Filters placeholder</div>
      <Link href="/adventure/details">Adventure Details</Link>
      <Link href="/guide/dashboard">Guide Dashboard</Link>
      <Link href="/adventure/dashboard">Adventure Dashboard</Link>
    </div>
  );
}
