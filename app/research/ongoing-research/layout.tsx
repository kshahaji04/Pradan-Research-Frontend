import ResearchLayout from '@/app/components/research/ResearchLayout'
import ResearchLayoutSkeleton from '@/app/skeletons/Research/ResearchLayoutSkeleton';
import React from 'react'

function layout({ children }: any) {
  const navItems = [
    { label: 'About the Research', href: '/research/ongoing-research/about-the-research', type: 'link' },
    { label: 'Publications', href: '/research/ongoing-research/publications', type: 'link' },
    { label: 'Partners', href: '/research/ongoing-research/partners', type: 'link' },
    { label: 'Queries', href: '/research', type: 'link' },
  ];

  return (
    <>
    {/* <ResearchLayoutSkeleton navItems={navItems} /> */}
      {/* <ResearchLayout navItems={navItems} /> */}
      <div style={{paddingTop:'0px'}}>{children}</div>
    </>
  )
}

export default layout