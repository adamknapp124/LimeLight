import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Events from '@/app/events/page';

export default function Home() {
	return (
		<main className='min-h-screen w-full flex flex-col items-center'>
			<Navbar />
			<Hero />
			<Events />
		</main>
	);
}
