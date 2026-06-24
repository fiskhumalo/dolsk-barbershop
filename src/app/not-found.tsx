import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-primary font-serif text-6xl">404</p>
        <h1 className="mt-4 font-serif text-2xl">Page Not Found</h1>
        <p className="mt-2 text-muted">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-block mt-6 bg-primary hover:bg-primary-hover text-background font-semibold px-6 py-3 rounded text-sm uppercase tracking-wide transition-colors duration-200"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
