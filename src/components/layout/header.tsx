import Link from "next/link";
import { Button } from "../ui/button";

const navLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/rules", label: "Rules" },
  { href: "/cheat-sheet", label: "Cheat Sheet" },
];

export function Header() {
  return (
    <nav className="flex justify-between items-center mb-16 dark-nav">
      <Link href="/" className="text-[#00DDB3] font-semibold text-xl">
        .windsurf<span className="text-gray-900 dark:text-white">rules</span>
      </Link>

      <div className="flex gap-4">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-gray-600 dark:text-gray-300 hover:text-[#00DDB3]"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex gap-4">
        <Button variant="secondary">Search Rules</Button>
        <Button variant="primary">Sign In</Button>
      </div>
    </nav>
  );
}
