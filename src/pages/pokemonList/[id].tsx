import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Layout } from '../../components/template/Layout';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';

const url = 'https://pokeapi.co/api/v2/pokemon';
const url2 = 'https://pokeapi.co/api/v2/pokemon-species';
const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const PokemonPage = () => {
	const router = useRouter();
	const { data: content, error } = useSWR(`${url}/${router.query.id}`, fetcher);
	const { data: species } = useSWR(`${url2}/${router.query.id}`, fetcher);

	if ((!content || !species) && !error) return <h2>ローディングなう</h2>;
	if (error) return <h2>エラーだよ</h2>;

	const mainImageLoader = ({ src }: { src: string }) => {
		return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${src}.png`;
	};
	const otherImageLoader = ({ src }: { src: string }) => {
		return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${src}.png`;
	};
	const other2ImageLoader = ({ src }: { src: string }) => {
		return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${src}.png `;
	};
	const other3ImageLoader = ({ src }: { src: string }) => {
		return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${src}.png`;
	};
	const other4ImageLoader = ({ src }: { src: string }) => {
		return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${src}.svg`;
	};
	const other5ImageLoader = ({ src }: { src: string }) => {
		return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${src}.png`;
	};
	const other6ImageLoader = ({ src }: { src: string }) => {
		return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${src}.png`;
	};

	console.log(content);

	const flavorTextFilter = species.flavor_text_entries.find(
		(text: FlavorTextType) => text.language.name === 'ja'
	);

	const changeGenerationName = (generationName: string) => {
		switch (generationName) {
			case 'generation-i':
				return '第1世代';
			default:
				return '第？世代';
		}
	};

	return (
		<Layout>
			<div className="flex justify-center items-center">
				<div className="shadow-xl py-10 pl-10 pr-36 rounded-3xl mr-20">
					<p className="font-bold">No.{router.query.id}</p>
					<h3 className="font-bold text-3xl mb-4">{species.names[0].name}</h3>
					<p className="text-xl mb-2">
						<b>分類</b> : {species.genera[0].genus}
					</p>
					<p className="text-xl mb-2">
						<b>世代</b> : {changeGenerationName(species.generation.name)}
					</p>
					<p className="text-xl mb-2">
						<b>高さ</b> : {content.height * 10}cm
					</p>
					<p className="text-xl mb-2">
						<b>重さ</b> : {content.weight / 10}Kg
					</p>
				</div>
				<div>
					<Image
						className="ml-20"
						loader={mainImageLoader}
						src={content.id.toString()}
						width={200}
						height={200}
						alt=""
					/>
				</div>
			</div>

			<Swiper
				navigation={true}
				modules={[Navigation]}
				className="w-2/5 h-2/5 text-center"
			>
				<SwiperSlide>
					<Image
						className="ml-20"
						loader={otherImageLoader}
						src={content.id.toString()}
						width={200}
						height={200}
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						className="ml-20"
						loader={other2ImageLoader}
						src={content.id.toString()}
						width={200}
						height={200}
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						className="ml-20"
						loader={other3ImageLoader}
						src={content.id.toString()}
						width={200}
						height={200}
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						className="ml-20"
						loader={other4ImageLoader}
						src={content.id.toString()}
						width={200}
						height={200}
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						className="ml-20"
						loader={other5ImageLoader}
						src={content.id.toString()}
						width={200}
						height={200}
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						className="ml-20"
						loader={other6ImageLoader}
						src={content.id.toString()}
						width={200}
						height={200}
						alt=""
					/>
				</SwiperSlide>
			</Swiper>
		</Layout>
	);
};

type FlavorTextType = {
	flavor_text: String;
	language: {
		name: string;
	};
};

export default PokemonPage;
