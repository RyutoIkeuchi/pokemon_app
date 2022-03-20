import useSWRImmutable from 'swr/immutable';
import Image from 'next/image';
import Link from 'next/link';
import { PokemonCardLoading } from './Loading/PokemonCardLoading';
import { fetcher } from '../../util/fetcher';
import { POKEMON_URL } from '../../assets/urls';
import { mainImageLoader, otherImageLoader } from '../../util/imageLoader';

const PokemonCard = (props: { count: number }) => {
	const { data, error } = useSWRImmutable(`${POKEMON_URL}/${props.count}`, fetcher);

	if (!data && !error) return <PokemonCardLoading />;
	if (error) return <h2>エラーだよ</h2>;

	return (
		<Link href={`/pokemon/${props.count}`}>
			<a>
				<div className="bg-gray-100 p-4 shadow-lg hover:bg-gray-300">
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
							<div className="flex justify-center items-baseline">
								<p className="text-sm">【高さ】</p>
								<p className="text-sm">
									<b>{data.height * 10}</b>cm
								</p>
							</div>
							<p>/</p>
							<div className="flex justify-center items-baseline">
								<p className="text-sm">【重さ】</p>
								<p className="text-sm">
									<b>{data.weight / 10}</b>kg
								</p>
							</div>
						</div>
					</div>
				</div>
			</a>
		</Link>
	);
};

export default PokemonCard;
