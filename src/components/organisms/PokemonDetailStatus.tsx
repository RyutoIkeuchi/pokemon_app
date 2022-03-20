import { Content, PokemonDetail, PokemonStatus } from '../../types/PokemonDetail';

export const PokemonDetailStatus = (props:{content:Content}) => {
	const { content } = props;
	const changeStatusName = (name: string) => {
		switch (name) {
			case 'hp':
				return 'HP';
			case 'attack':
				return 'こうげき';
			case 'defense':
				return 'ぼうぎょ';
			case 'special-attack':
				return 'とくこう';
			case 'special-defense':
				return 'とくぼう';
			case 'speed':
				return 'スピード';
		}
	};

	return (
		<table className="w-1/2 mx-auto mb-10">
			<tbody>
				{content.stats.map((item: PokemonStatus) => (
					<tr key={item.stat.name}>
						<td className="w-1/4 border px-4 py-2">
							{changeStatusName(item.stat.name)}
						</td>
						<td className="w-1/4 border px-4 py-2">{item.base_stat}</td>
						<td className="w-1/2 border px-4 py-2">
							<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
								<div
									className="bg-blue-600 h-2.5 rounded-full"
									style={{ width: `${item.base_stat / 1.8}%` }}
								></div>
							</div>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};