import { useRouter } from 'next/router';
import useSWRImmutable from 'swr/immutable';
import { POKEMON_URL, POKEMON_SPECIES_URL } from '../assets/urls';
import { PokemonDetail } from '../types/PokemonDetailType';
import { fetcher } from '../util/fetcher';

export const usePokemonDetail = (): PokemonDetail => {
	const router = useRouter();
	const { data: content, error: contentError } = useSWRImmutable(
		`${POKEMON_URL}/${router.query.id}`,
		fetcher
	);
	const { data: species, error: speciesError } = useSWRImmutable(
		`${POKEMON_SPECIES_URL}/${router.query.id}`,
		fetcher
	);
	

	return {
		id: router.query.id,
		content,
		species,
		isLoading: (!content || !species) && (!contentError || !speciesError),
		isError: contentError || speciesError,
	};
};
