import useSWR from 'swr';
import axios from 'axios';
import Image from 'next/image';

const url = 'https://pokeapi.co/api/v2/pokemon';
const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const PokemonCard = (props: { count: number }) => {
	const { data, error } = useSWR(`${url}/${props.count}`, fetcher);

	if (!data && !error)
		return (
			<div className="border border-blue-300 shadow rounded-md p-4 w-ful">
				<div className="float-right h-4 bg-slate-200 w-1/12"></div>
				<div className="w-36 h-36 mx-auto rounded-full bg-slate-200"></div>
				<div className="rounded-full bg-slate-200 h-20 w-20 mb-2"></div>
				<div className="rounded-xl border-2 p-4 border-blue-300 ">
					<div className="grid grid-cols-3 gap-4">
						<div className="h-8 mb-2 bg-slate-200 rounded col-span-3"></div>
					</div>
					<div className="flex justify-start">
						<div className="bg-slate-200 px-2 h-6 w-20 rounded mr-2"></div>
						<div className="bg-slate-200 px-2 h-6 w-20 rounded mr-2"></div>
					</div>
				</div>
			</div>
		);
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
				<div className="flex justify-around">
					<div className="flex justify-center">
						<p>【身長】</p>
						<p>
							<b>{data.height * 10}</b>cm
						</p>
					</div>
					<p>/</p>
					<div className="flex justify-center">
						<p>【体重】</p>
						<p>
							<b>{data.weight / 10}</b>kg
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PokemonCard;
