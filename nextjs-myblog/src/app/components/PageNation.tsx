import Link from 'next/link'
import React from 'react'

const PageNation = () => {
  return (
    <section className='mb-8 lg:w-1/2 mx-auto rounded-md p-5'>
      <ul className='flex items-center justify-center gap-4'>
         <li className='bg-sky-900 rounded-lg w-6 h-8 relative'>
            <Link href='allposts/1' className=' text-xs absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-gray-100'>1</Link>
         </li>
         <li className='bg-sky-900 rounded-lg w-6 h-8 relative'>
            <Link href='allposts/2' className=' text-xs absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-gray-100'>2</Link>
         </li>
         <li className='bg-sky-900 rounded-lg w-6 h-8 relative'>
            <Link href='allposts/3' className=' text-xs absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-gray-100'>3</Link>
         </li>
      </ul>
    </section>
  )
}

export default PageNation