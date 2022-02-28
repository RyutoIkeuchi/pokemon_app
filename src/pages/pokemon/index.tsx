import { useState } from 'react';
import { Layout } from '../../components/template/Layout';
import PokemonCard from '../../components/template/PokemonCard';

const PokemonList = () => {
	const [pokemonNumber, setPokemonNumber] = useState<number>(10);
	const pokemonCount = [...Array(10)];

	const onNextPage = () => {
		const newNumber = pokemonNumber + 10;
		setPokemonNumber(newNumber);
	};

	const onPrevPage = () => {
		const newNumber = pokemonNumber - 10;
		setPokemonNumber(newNumber);
	};

	const onResetNumber = () => {
		setPokemonNumber(1);
	};

	return (
		<Layout>
			<div>
				{pokemonCount.map((d, index) => (
					<PokemonCard key={index} count={index + pokemonNumber} />
				))}
				<button onClick={onResetNumber}>最初に戻る</button>
				<button onClick={onPrevPage}>前のページ</button>
				<button onClick={onNextPage}>次のページ</button>
			</div>
		</Layout>
	);
};

export default PokemonList;
