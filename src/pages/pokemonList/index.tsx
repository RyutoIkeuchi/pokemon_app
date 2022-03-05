import { useState } from 'react';
import { Layout } from '../../components/template/Layout';
import PokemonCard from '../../components/template/PokemonCard';

const PokemonList = () => {
	const [pokemonNumber, setPokemonNumber] = useState<number>(41);
  const pokemonCardList = [];

	for (let i = 1; i < pokemonNumber; i++) {
    pokemonCardList.push(<PokemonCard key={i} count={i} />)
  }

	const onNextPage = () => {
		const newNumber = pokemonNumber + 40;
		setPokemonNumber(newNumber);
	};

	return (
		<Layout>
			<div className="grid grid-cols-4 gap-8 mb-10">
				{pokemonCardList}
			</div>
			<div className="text-center mb-6">
				<div className="inline-flex">
					<button
						onClick={onNextPage}
						className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
					>
						次のページ
					</button>
				</div>
			</div>
		</Layout>
	);
};

export default PokemonList;
