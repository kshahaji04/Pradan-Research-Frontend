import ResearchLayout from '@/app/components/research/ResearchLayout'
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
      <ResearchLayout navItems={navItems} />
      {children}
    </>
  )
}

export default layout