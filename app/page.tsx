'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Link
        href="/about"
        className="cursor-pointer rounded-md bg-black p-2 px-6 text-white active:scale-95"
      >
        Go to About
      </Link>
    </div>
  )
}
