import React from 'react';

import { RainbowButton } from '@/components/ui/rainbow-button';

import Image from 'next/image';

import show3 from '../../../public/images/card-image-3.webp';

export default function page() {
	return (
		<section className='py-20 px-5'>
			<div className='flex flex-col gap-10'>
				<h1 className='text-white tracking-widest text-3xl uppercase'>
					Upcoming Events
				</h1>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 w-full text-white text-center tracking-widest'>
					<div className='flex flex-col gap-5 items-center p-4 hover:border-white border border-transparent rounded-lg'>
						<Image
							src={show3}
							alt='show3'
							className='w-full object-cover h-auto rounded-t-lg'
						/>
						<h2 className=' text-2xl'>Event Number One</h2>
						<p className='text-md'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Culpa iure accusantium repellendus cum, veniam maiores
							similique laboriosam debitis eius commodi.
						</p>
						<RainbowButton className='w-[50%]'>Get Tickets</RainbowButton>
					</div>
					<div className='flex flex-col gap-5 items-center p-4 hover:border rounded-lg hover:border-white border border-transparent '>
						<Image
							src={show3}
							alt='show3'
							className='w-full object-cover h-auto rounded-t-lg'
						/>
						<h2 className=' text-2xl'>Event Number Two</h2>
						<p className='text-md'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Culpa iure accusantium repellendus cum, veniam maiores
							similique laboriosam debitis eius commodi.
						</p>
						<RainbowButton className='w-[50%]'>Get Tickets</RainbowButton>
					</div>
					<div className='flex flex-col gap-5 items-center p-4 hover:border rounded-lg hover:border-white border border-transparent '>
						<Image
							src={show3}
							alt='show3'
							className='w-full object-cover h-auto rounded-t-lg'
						/>
						<h2 className=' text-2xl'>Event Number Three</h2>
						<p className='text-md'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Culpa iure accusantium repellendus cum, veniam maiores
							similique laboriosam debitis eius commodi.
						</p>
						<RainbowButton className='w-[50%]'>Get Tickets</RainbowButton>
					</div>
					<div className='flex flex-col gap-5 items-center p-4 hover:border rounded-lg hover:border-white border border-transparent '>
						<Image
							src={show3}
							alt='show3'
							className='w-full object-cover h-auto rounded-t-lg'
						/>
						<h2 className=' text-2xl'>Event Number Four</h2>
						<p className='text-md'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Culpa iure accusantium repellendus cum, veniam maiores
							similique laboriosam debitis eius commodi.
						</p>
						<RainbowButton className='w-[50%]'>Get Tickets</RainbowButton>
					</div>
				</div>
			</div>
		</section>
	);
}
