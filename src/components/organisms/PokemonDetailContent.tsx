import { Species, Content, PokemonType } from '../../types/PokemonDetailType';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';


export const PokemonDetailContent = (props: { species: Species,content:Content}) => {
	const { species, content } = props;
	const [pokemonType, setPokemonType] = useState<Array<string>>([]);
	
	const getPokemonType = async () => {
		const response = await Promise.all(content.types.map(async (d:PokemonType) => {
			const res = await axios(d.type.url);
			return findJapanText(res.data.names).name;
		}))
		setPokemonType(response);
	}

	useEffect(() => {
		getPokemonType()
	});


	const findJapanText = (data: Array<any>) => {
		return data.find((text) => text.language.name === 'ja');
	};

	return (
		<div className="mx-auto w-1/2 border-2 p-4 rounded-2xl mb-10">
			<div className="flex justify-start mb-6">
				{pokemonType.map((type:string) => (
					<div key={type} className="p-2 bg-slate-800 text-white mr-4">
						{type}
					</div>
				))}
			</div>
			<div>
				<p className="font-bold text-xl">【説明】</p>
				<p className="text-xl">
					{findJapanText(species.flavor_text_entries).flavor_text}
				</p>
			</div>
		</div>
	);
};
