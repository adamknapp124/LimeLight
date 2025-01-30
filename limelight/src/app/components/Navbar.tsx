'use client';

import React from 'react';
import { Menu } from 'lucide-react';

import { Button } from '../../components/ui/button';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';

import logo from '../../../public/images/Limelight-Lasers-Logo-2024-TEXT-White.png';
import Image from 'next/image';
import Link from 'next/link';
import { ShinyButton } from '@/components/ui/shiny-button';

export default function Navbar() {
	return (
		<>
			<div className='hidden lg:block absolute top-5 left-1/2 transform -translate-x-1/2 z-50 blurry-background rounded-3xl w-full xl:w-[70vw] max-w-[1600px]'>
				<div className='bg-transparent text-white text-center'>
					<div className='flex items-center justify-between py-4 px-12'>
						<div>
							<Image
								src={logo}
								alt='logo'
								width={250}
								className='min-w-[200px]'
							/>
						</div>
						<div className=''>
							<ul className='flex gap-10'>
								<li>
									<Link
										href='/duty'
										className='text-white'>
										<div className='px-4 py-4'>About</div>
									</Link>
								</li>
								<li>
									<Link
										href='/duty'
										className='text-white'>
										<div className='px-4 py-4'>Contact</div>
									</Link>
								</li>
								<li>
									<Link
										href='/duty'
										className='text-white'>
										<div className='px-4 py-4'>Gallery</div>
									</Link>
								</li>
								<li>
									<Link
										href='/duty'
										className='text-white'>
										<div className='px-4 py-4'>Form</div>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className='bg-transparent absolute top-0 z-50 w-full items-center flex lg:hidden px-3 py-4'>
				<div className='w-full text-white'>
					<Image
						src={logo}
						alt='logo'
						width={250}
						className='min-w-[200px]'
					/>
				</div>
				<div className='w-full items-center flex justify-end p-0'>
					<Sheet>
						<SheetTrigger asChild>
							<Button
								variant='ghost'
								size='icon'
								className='text-white'>
								<Menu style={{ width: '28px', height: '28px' }} />
							</Button>
						</SheetTrigger>
						<SheetContent
							side='left'
							className='blurry-background px-0 py-2 h-full flex flex-col'>
							<SheetHeader className='relative'>
								<SheetTitle className='text-white'>
									<Image
										src={logo}
										alt='logo'
										width={250}
										className='min-w-[200px]'
									/>
								</SheetTitle>
							</SheetHeader>
							<div className='flex flex-col w-full justify-between h-full overflow-y-auto px-4 py-8'>
								<ul className='text-white flex flex-col gap-4 text-lg font-semibold tracking-widest text-center'>
									<li className='border-2 border-white rounded-full hover:border-blue-600 hover:bg-black hover:bg-opacity-80'>
										<Link
											href='/duty'
											className='text-white'>
											<div className='px-4 py-4'>Link</div>
										</Link>
									</li>
									<li className='border-2 border-white rounded-full hover:border-blue-600 hover:bg-black hover:bg-opacity-80'>
										<Link
											href='/duty'
											className='text-white'>
											<div className='px-4 py-4'>Link</div>
										</Link>
									</li>
									<li className='border-2 border-white rounded-full hover:border-blue-600 hover:bg-black hover:bg-opacity-80'>
										<Link
											href='/duty'
											className='text-white'>
											<div className='px-4 py-4'>Link</div>
										</Link>
									</li>
									<li className='border-2 border-white rounded-full hover:border-blue-600 hover:bg-black hover:bg-opacity-80'>
										<Link
											href='/duty'
											className='text-white'>
											<div className='px-4 py-4'>Link</div>
										</Link>
									</li>
								</ul>
								<ShimmerButton className='shadow-2xl'>
									<span className='whitespace-pre-wrap py-2 text-center text-md font-semibold leading-none tracking-widest text-white dark:from-white dark:to-slate-900/10 lg:text-lg'>
										Let's Talk
									</span>
								</ShimmerButton>
							</div>

							<SheetFooter className='text-white'>
								<SheetClose asChild></SheetClose>
							</SheetFooter>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</>
	);
}
