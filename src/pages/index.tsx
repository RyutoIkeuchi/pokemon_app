import type { NextPage } from 'next';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faXmark,
	faArrowRightToBracket,
} from '@fortawesome/free-solid-svg-icons';

const Home: NextPage = () => {
	return (
			<div className="flex flex-col items-center justify-center text-center min-h-screen">
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
				<Link href="pokemonList">
					<a className="text-2xl underline font-bold">
						ポケモン図鑑へGo
						<FontAwesomeIcon icon={faArrowRightToBracket} className="ml-2" />
					</a>
				</Link>
			</div>
	);
};

export default Home;
