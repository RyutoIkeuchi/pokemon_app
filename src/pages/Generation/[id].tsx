import { useRouter } from 'next/router';
import PokemonListLayout from '../../components/template/PokemonLIstLayout';

const Generations = () => {
	const router = useRouter();
	let startPokeNumber = 0;
	let endPokeNumber = 0;
	const generation = router.query.id;

	switch (router.query.id) {
		case 'first':
			startPokeNumber = 1;
			endPokeNumber = 152;
			break;
		case 'second':
			startPokeNumber = 152;
			endPokeNumber = 252;
			break;
		case 'third':
			startPokeNumber = 252;
			endPokeNumber = 387;
			break;
		case 'fourth':
			startPokeNumber = 387;
			endPokeNumber = 494;
			break;
		case 'fifth':
			startPokeNumber = 494;
			endPokeNumber = 650;
			break;
		case 'sixth':
			startPokeNumber = 650;
			endPokeNumber = 722;
			break;
		case 'seventh':
			startPokeNumber = 722;
			endPokeNumber = 810;
			break;
		case 'eighth':
			startPokeNumber = 810;
			endPokeNumber = 899;
			break;
	}

	return (
			<PokemonListLayout
				startPokeNumber={startPokeNumber}
				endPokeNumber={endPokeNumber}
				generation={generation}
			/>
	);
};

export default Generations;
