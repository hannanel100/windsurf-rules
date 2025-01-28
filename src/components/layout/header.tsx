"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { useSession, signOut } from "next-auth/react";
import { UserRole } from "@prisma/client";

const navLinks = [
  { href: "/rules", label: "Rules" },
  { href: "/cheat-sheet", label: "Cheat Sheet" },
];

export function Header() {
  const { data: session, status } = useSession();

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

      <div className="flex gap-4 items-center">
        <Button variant="secondary">
          <Link href="/rules/search">Search Rules</Link>
        </Button>

        {status === "loading" ? (
          <div className="h-10 w-20 bg-gray-200 animate-pulse rounded-md" />
        ) : session ? (
          <div className="flex gap-4 items-center">
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {session.user?.name || session.user?.email}
            </span>
            {session.user?.role === UserRole.ADMIN && (
              <Button variant="secondary">
                <Link href="/admin">Admin</Link>
              </Button>
            )}
            <Button
              variant="primary"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              Sign Out
            </Button>
          </div>
        ) : (
          <div className="flex gap-2">
            <Button variant="secondary">
              <Link href="/register">Register</Link>
            </Button>
            <Button variant="primary">
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
