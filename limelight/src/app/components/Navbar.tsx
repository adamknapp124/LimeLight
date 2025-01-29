'use client';

import React from 'react';

import { Button } from '../../components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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

export default function Navbar() {
	return (
		<>
			<div className='hidden lg:block absolute top-5 left-1/2 transform -translate-x-1/2 z-50 blurry-background rounded-3xl w-full xl:w-[70vw] max-w-[1600px]'>
				<div className='bg-transparent text-white text-center'>
					<ul className='flex items-center justify-between py-4 px-12'>
						<div>
							<Image
								src={logo}
								alt='logo'
								width={250}
								className='min-w-[200px]'
							/>
						</div>
						<div className='flex gap-10'>
							<li>Navbar</li>
							<li>Navbar</li>
							<li>Navbar</li>
							<li>Navbar</li>
							<li>Navbar</li>
						</div>
					</ul>
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
								variant='outline'
								className='text-white hover:bg-black bg-transparent'>
								Open
							</Button>
						</SheetTrigger>
						<SheetContent
							side='left'
							className='bg-black'>
							<SheetHeader>
								<SheetTitle>Edit profile</SheetTitle>
								<SheetDescription className='text-white'>
									Make changes to your profile here. Click save when
									you're done.
								</SheetDescription>
							</SheetHeader>

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
