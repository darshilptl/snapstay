import Link from "next/link";
import { Button } from "../components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-950 dark:text-white mb-4">
          404
        </h1>
        <p className="text-xl text-gray-950 dark:text-white mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Button asChild>
          <Link href="/" className="text-gray-950 dark:text-white">Go back home</Link>
        </Button>
      </div>
    </div>
  );
}
