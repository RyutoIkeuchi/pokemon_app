import { Species, Content, PokemonType } from '../../types/PokemonDetailType';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

export const PokemonDetailContent = (props: {
	species: Species;
	content: Content;
}) => {
	const { species, content } = props;
	const [pokemonType, setPokemonType] = useState<Array<string>>([]);

	const getPokemonType = async () => {
		const response = await Promise.all(
			content.types.map(async (d: PokemonType) => {
				const res = await axios(d.type.url);
				return findJapanText(res.data.names).name;
			})
		);
		setPokemonType(response);
	};

	const assignTypeColor = (type: string) => {
		switch (type) {
			case 'くさ':
				return 'bg-green-500';
			case 'どく':
				return 'bg-purple-500';
			case 'ほのお':
				return 'bg-red-500';
			case 'ひこう':
				return 'bg-indigo-400';
			case 'みず':
				return 'bg-blue-500';
			case 'むし':
				return 'bg-green-700';
			case 'でんき':
				return 'bg-yellow-500';
			case 'じめん':
				return 'bg-yellow-700';
			case 'エスパー':
				return 'bg-pink-500';
			case 'フェアリー':
				return 'bg-pink-200';
			case 'あく':
				return 'bg-purple-700';
			case 'いわ':
				return 'bg-gray-300';
			case 'かくとう':
				return 'bg-pink-900';
			case 'ドラゴン':
				return 'bg-indigo-800';
			case 'はがね':
				return 'bg-gray-400';
			case 'こおり':
				return 'bg-blue-200';
			case 'ゴースト':
				return 'bg-purple-900';
			default:
				return 'bg-gray-500';
		}
	};

	useEffect(() => {
		getPokemonType();
	}, []);

	const findJapanText = (data: Array<any>) => {
		return data.find((text) => text.language.name === 'ja');
	};

	return (
		<div className="mx-auto w-1/2 border-2 p-4 rounded-2xl mb-10">
			<div className="flex justify-start mb-6">
				{pokemonType.map((type: string) => (
					<div
						key={type}
						className={`py-2 px-6 rounded text-white mr-4 ${assignTypeColor(type)}`}
					>
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
