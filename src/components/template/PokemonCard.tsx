import useSWR from 'swr';
import axios from 'axios';
import Image from 'next/image';

const url = 'https://pokeapi.co/api/v2/pokemon';
const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const PokemonCard = (props: { count: number }) => {
	const { data, error } = useSWR(`${url}/${props.count}`, fetcher);

	if (!data && !error) return <h2>ローディング中</h2>;
	if (error) return <h2>エラーだよ</h2>;

	const mainImageLoader = ({ src }: { src: string }) => {
		return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${src}.png`;
	};

	const otherImageLoader = ({ src }: { src: string }) => {
		return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${src}.png`;
	};

	return (
		<div className="bg-gray-100 p-4 shadow-lg">
			<p className="text-right">{data.id}</p>
			<div className="w-1/2 mx-auto">
				<Image
					className="ml-20"
					loader={mainImageLoader}
					src={data.id.toString()}
					width={200}
					height={200}
					alt=""
				/>
			</div>
			<div className="mb-2">
				<Image
					className="bg-white rounded-full"
					loader={otherImageLoader}
					src={data.id.toString()}
					width={80}
					height={80}
					alt=""
				/>
			</div>
			<div className="bg-white rounded-xl border-gray-400 border-2 p-4">
				<h6 className="text-2xl mb-2">{data.name}</h6>
				<ul className="flex justify-start">
					{data.types.map((type) => (
						<li
							key={type.slot}
							className="bg-orange-500 text-white px-2 rounded mr-2"
						>
							{type.type.name}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default PokemonCard;
