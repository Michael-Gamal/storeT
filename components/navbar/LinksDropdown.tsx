import { LuAlignLeft } from 'react-icons/lu';
import Link from 'next/link';
import { links } from '../../app/utils/links';
import UserIcon from './UserIcon';
import SignOutLink from './SignOutLink';
import AuthButtons from './AuthButtons';

import { auth } from '@clerk/nextjs/server';

async function LinksDropdown() {
  const { userId } = await auth();

  return (
    <div className="relative group">
      <button
        className="cursor-pointer w-9 h-9 rounded-sm shadow-sm border
        border-[#e2e8f0] flex items-center justify-center gap-1"
      >
        <LuAlignLeft />
        <UserIcon />
      </button>

      <div
        className="shadow-sm border border-border bg-card text-card-foreground
        transition-all rounded-sm w-40 sm:w-50 text-sm overflow-hidden
        hidden group-focus-within:block absolute top-12 right-0 z-10"
      >
        {!userId ? (
          <AuthButtons />
        ) : (
          <>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-start cursor-pointer block w-full px-4 py-2
                hover:bg-secondary hover:text-secondary-foreground"
              >
                {link.label}
              </Link>
            ))}

            <div className="border-t border-border" />

            <div className="px-4 py-2">
              <SignOutLink />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LinksDropdown;

