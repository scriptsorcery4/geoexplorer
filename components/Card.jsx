import Link from 'next/link'
import React from 'react'


function Card({data}) {
  return (
    <div className='md:w-[570px] w-[350px] space-y-8'>
        <div className='flex justify-between items-start'>
            <div className='flex flex-col'>
            <h1 className='text-3xl font-black'>{data.name.common}</h1>
            <p>{data.name.official}</p>
            </div>
            <img
            src={data.flags.png}
            className='h-14'
            />
        </div>
        <div className='flex justify-between items-center'>
            <div>
                <label className='py-1 -ml-0.5'>
                    <span className='label-text'>Capital city:</span>
                </label>
                <p className='text-xl'>{data.capital}</p>
            </div>
            <div>
                <label className='py-1 -ml-0.5'>
                    <span className='label-text'>Population:</span>
                </label>
                <p className='text-xl'>{data.population}</p>
            </div>
            <div>
                <label className='py-1 -ml-0.5'>
                    <span className='label-text'>Region:</span>
                </label>
                <p className='text-xl'>{data.region}</p>
            </div>
        </div>
        <div className='space-y-1'>
            <a href={'/app'} className='btn btn-block btn-secondary'>TRY AGAIN</a>
            <Link href={'/'} className='btn btn-block btn-ghost'>BACK HOME</Link>
        </div>
    </div>
  )
}

export default Card