'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Icon, IconName } from '@/components/icons.svgs'
import { cn } from '@/lib/utils'

type SocialLink = {
  name: string
  href: string
  icon: IconName
}

const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Email', href: 'mailto:utsavjoshi602@gmail.com', icon: 'mail' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/joshi-utsav/', icon: 'brand-linkedin' },
  { name: 'Instagram', href: 'https://instagram.com/joshi___utsav/', icon: 'brand-instagram' },
  { name: 'Twitch', href: 'https://twitch.tv/1xki11er/', icon: 'brand-twitch' },
]

const ANIMATION_DELAY = 0.8
const ANIMATION_DURATION = 0.6

interface SocialLinkProps extends SocialLink {
  className?: string
}

const SocialLink: React.FC<SocialLinkProps> = ({ name, href, icon, className }) => (
  <li className={cn(
    'flex items-center justify-center p-3 border rounded-lg',
    'hover:bg-gray-100 dark:hover:bg-gray-700 transition',
    'group-hover:opacity-50 hover:!opacity-100 dark:border-gray-600',
    className
  )}>
    <Link href={href} className="flex items-center" aria-label={name}>
      <Icon name={icon} className="mr-2" aria-hidden="true" />
      <span>{name}</span>
    </Link>
  </li>
)

export default function ConnectSection() {
  return (
    <motion.section
      className="w-full text-black dark:text-[#E0E0E0]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: ANIMATION_DURATION, ease: 'easeInOut', delay: ANIMATION_DELAY }}
    >
      <h2 className="text-xl font-semibold mb-4 text-left">Connect</h2>
      <p className="mb-6 text-left">
        Have a question or just want to chat? Feel free to{' '}
        <Link
          href="mailto:utsavjoshi602@gmail.com"
          className="underline text-blue-500 dark:text-blue-400"
        >
          text me
        </Link>
        . Try finding me anywhere else at @joshiUtsav.
      </p>
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 group">
        {SOCIAL_LINKS.map((link) => (
          <SocialLink key={link.name} {...link} />
        ))}
      </ul>
    </motion.section>
  )
}