import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <div className='max-w-6xl mx-auto p-4 h-20 flex justify-between items-center'>
        <Link href={'/'} className='flex gap-2 items-center'>
            <Image
            src='/icon.png'
            width={48}
            height={48}
            />
            <h1 className='text-2xl font-black text-base-content/90'>GeoExplorer</h1>
        </Link>
        <div className='flex gap-2'>
            social media links...
        </div>
    </div>
  )
}

export default Header