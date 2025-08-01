"use client";

import { useSession } from "next-auth/react";
import SignInOutButton from "./signInOutButton";
import Link from "next/link";

export default function Header() {
  const { data: session, status } = useSession();

  return (
    <header>
      <nav className="flex justify-between items-center p-4 bg-gray-100 text-sky-900">
        <div className="logo">
          <h1>Job Portal</h1>
        </div>
        <div className="nav-links">
          <ul className="flex space-x-4">
            <li className="py-1"><Link href="/">Home</Link></li>
            <li><SignInOutButton isSignedIn={!!session?.user} /></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
