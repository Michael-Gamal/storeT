'use client';

import {
  SignInButton,
  SignUpButton,
} from '@clerk/nextjs';

function AuthButtons() {
  return (
    <>
      <SignInButton mode="modal">
        <button
          className="text-start cursor-pointer block w-full px-4 py-2
          hover:bg-secondary hover:text-secondary-foreground"
        >
          Login
        </button>
      </SignInButton>

      <div className="border-t border-border" />

      <SignUpButton mode="modal">
        <button
          className="text-start cursor-pointer block w-full px-4 py-2
          hover:bg-secondary hover:text-secondary-foreground"
        >
          Register
        </button>
      </SignUpButton>
    </>
  );
}

export default AuthButtons;

