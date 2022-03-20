export type PokemonDetail = {
	id: string | string[] | undefined;
	content: Content;
	species: Species;
	isLoading: boolean;
	isError: boolean;
};

export type Species = {
	flavor_text_entries: Array<FlavorText>;
	names: Array<{ name: string }>;
	genera: Array<{ genus: string }>;
	generation: {
		name: string;
	};
};

export type Content = {
	stats: Array<PokemonStatus>;
	id: number;
	weight: number;
	height: number;
};

export type FlavorText = {
	flavor_text: String;
	language: {
		name: string;
	};
};

export type PokemonStatus = {
	base_stat: number;
	stat: {
		name: string;
	};
};
