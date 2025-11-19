import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Landing Page</h1>
      <div>Hero</div>
      <div>Featured missions</div>
      <div>Adventure categories</div>
      <div>Testimonials</div>
      <div>Footer</div>
      <Link href="/about">About</Link>
      <Link href="/privacy">Privacy</Link>
      <Link href="/signup">Sign Up</Link>
      <Link href="/signin">Sign In</Link>
    </div>
  );
}
