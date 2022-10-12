/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

export default function Blogitem({blog}) {
  return (
    <div className='w-80 m-8 p-8 bg-white rounded-md h-96 flex flex-col'>
        <Link href={`/blog/${blog.slug}`}>
            <a>
                <img
                src = {blog.image}
                alt = {blog.name}
                className = "rounded shadow"
                />
            </a>
            
        </Link>
        <div>
            <Link href={`/blog/${blog.slug}`}>
            <a>
                <h2 className='font-bold text-2xl'>
                    {blog.title} 
                </h2>
            </a>
            </Link>
        </div>

    </div>
  )
}
