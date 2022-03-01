import { useState } from 'react';
import { Layout } from '../../components/template/Layout';
import PokemonCard from '../../components/template/PokemonCard';

const PokemonList = () => {
	const [pokemonNumber, setPokemonNumber] = useState<number>(1);
	const pokemonCount = [...Array(20)];

	const onNextPage = () => {
		const newNumber = pokemonNumber + 20;
		setPokemonNumber(newNumber);
	};

	const onPrevPage = () => {
		const newNumber = pokemonNumber - 20;
		setPokemonNumber(newNumber);
	};

	const onResetNumber = () => {
		setPokemonNumber(1);
	};

	return (
		<Layout>
			<button
				onClick={onResetNumber}
				className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
			>
				最初に戻る
			</button>
			<div className="grid grid-cols-4 gap-8 mb-10">
				{pokemonCount.map((d, index) => (
					<PokemonCard key={index} count={index + pokemonNumber} />
				))}
			</div>
			<div className="text-center mb-6">
				<div className="inline-flex">
					<button
						onClick={onPrevPage}
						disabled={pokemonNumber == 1}
						className={
							`bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l' +
							${pokemonNumber === 1
								? 'cursor-not-allowed opacity-50'
								: 'hover:bg-gray-400'}`
						}
					>
						前のページ
					</button>
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
