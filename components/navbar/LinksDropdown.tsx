import { LuAlignLeft } from 'react-icons/lu';
import Link from 'next/link';
import { links } from '../../app/utils/links';

function LinksDropdown() {
  return (
    <div className=" relative group ">
      <button className="cursor-pointer w-9 h-9 rounded-sm shadow-sm border border-[#e2e8f0] flex items-center justify-center">
        <LuAlignLeft />
      </button>
      <div className=" shadow-sm border border-border bg-card text-card-foreground transition-all rounded-sm w-30 sm:w-50 
      text-sm overflow-hidden hidden group-focus-within:block absolute top-12 right-0">
          {links.map((link) => (
            <Link 
              key={link.href}
              href={link.href}
              className=" text-start cursor-pointer block w-full px-4 py-2 hover:bg-secondary hover:text-secondary-foreground"
            >  
              {link.label}
          </ Link>
          ))}
      </div>
    </div>
  )
}

export default LinksDropdown