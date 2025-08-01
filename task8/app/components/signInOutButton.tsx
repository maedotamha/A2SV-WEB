'use client';

import { signIn, signOut } from "next-auth/react";

type Props = {
  isSignedIn: boolean;
};

export default function SignInOutButton({ isSignedIn }: Props) {
  return isSignedIn ? (
    <button
      className="bg-red-500 text-white px-2 py-1 rounded-lg "
      onClick={() => signOut()}
    >
      Sign Out
    </button>
  ) : (
    <button
      className="bg-blue-500 text-white px-2 py-1 rounded-lg "
      onClick={() => signIn()}
    >
      Sign In
    </button>
  );
}
