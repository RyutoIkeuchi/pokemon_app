import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faXmark,
	faArrowRightToBracket,
} from '@fortawesome/free-solid-svg-icons';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Next.jsでポケモンAPI取得してみた</title>
				<meta
					name="description"
					content="create picture_book with pokemon_api"
				/>
			</Head>

			<main className="container mx-auto text-center min-h-screen flex flex-col items-center justify-center">
				<h1 className="flex justify-center items-center w-full mb-10">
					<div className="w-1/4">
						<a
							className="text-blue-600 font-bold text-6xl"
							href="https://nextjs.org"
						>
							Next.js&TS
						</a>
					</div>
					<FontAwesomeIcon icon={faXmark} className="mx-10" />
					<div className="w-1/4">
						<a
							className="text-red-600 font-bold text-6xl"
							href="https://pokeapi.co/docs/v2"
						>
							PokemonAPI
						</a>
					</div>
				</h1>
				<Link href="pokemon">
					<a className="text-2xl underline font-bold">
						ポケモン図鑑へGo
						<FontAwesomeIcon
							icon={faArrowRightToBracket}
							className='ml-2'
						/>
					</a>
				</Link>
			</main>

			<footer className="text-center p-6 border-t-2">
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by <span>ポケモン図鑑だよ</span>
				</a>
			</footer>
		</div>
	);
};

export default Home;
