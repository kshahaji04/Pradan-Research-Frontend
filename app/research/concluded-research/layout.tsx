import ResearchLayout from '@/app/components/research/ResearchLayout'
import React from 'react'

function layout({ children }: any) {
  const navItems = [
    { label: 'About the Research', href: '/research/concluded-research/about-the-research', type: 'link' },
    { label: 'Report', href: '/research/concluded-research/report', type: 'link' },
    { label: 'Other Publications', href: '/research/concluded-research/publications', type: 'link' },
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