import { useEffect } from 'react';
import { useState } from 'react';
import { Layout } from '../../components/template/Layout';
import PokemonCard from '../../components/template/PokemonCard';

const PokemonListLayout = (props: Props) => {
	const { startPokeNumber, endPokeNumber, generation } = props;
	const [pokemonNumber, setPokemonNumber] = useState<number>(41);
	const pokemonCardList = [];

	for (let i = startPokeNumber; i < pokemonNumber; i++) {
		pokemonCardList.push(<PokemonCard key={i} count={i} />);
	}

	useEffect(() => {
		const newNumber = startPokeNumber + 40;
		setPokemonNumber(newNumber);
	},[generation, startPokeNumber]);

	const onNextPage = () => {
		let newNumber = pokemonNumber + 40;
		if (newNumber > endPokeNumber - 1) {
			newNumber = endPokeNumber;
		}
		setPokemonNumber(newNumber);
	};

	return (
		<Layout>
			<div className="grid grid-cols-4 gap-8 mb-10">{pokemonCardList}</div>
			<div className="text-center w-full mb-6">
				{pokemonNumber !== endPokeNumber ? (
					<button
						onClick={onNextPage}
						className="bg-gray-300 hover:bg-gray-400 text-gray-800 w-full font-bold py-2 px-4 rounded-r"
					>
						もっと読み込む
					</button>
				) : null}
			</div>
		</Layout>
	);
};

type Props = {
	startPokeNumber: number;
	endPokeNumber: number;
	generation: string | undefined | string[];
};

export default PokemonListLayout;
