import React from 'react';

import Image from 'next/image';
import lasers from '../../../public/videos/download.gif';

export default function Hero() {
	return (
		<div className='relative w-full h-[80vh] sm:h-[66vh] xl:h-[100vh] overflow-hidden text-white'>
			<Image
				src={lasers}
				alt='laser video'
				fill
				className='object-cover'
				unoptimized
			/>
			{/* overlay */}
			<div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50'></div>
			<section className='relative z-10 flex flex-col lg:gap-10 items-center sm:items-start justify-end w-full h-full text-left py-10 px-5 lg:p-24'>
				<h1 className=' text-6xl sm:text-[5rem] font-bold uppercase'>
					Slogan Here
				</h1>
				<p className='text-lg sm:text-[1.25rem] mt-4 lg:w-1/2'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
					quae nemo quia quibusdam, error perspiciatis.
				</p>
			</section>
		</div>
	);
}
