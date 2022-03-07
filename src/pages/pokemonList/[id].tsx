import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Layout } from '../../components/template/Layout';

const url = 'https://pokeapi.co/api/v2/pokemon';
const url2 = 'https://pokeapi.co/api/v2/pokemon-species';
const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const PokemonPage = () => {
	const router = useRouter();
  const { data:content, error } = useSWR(`${url}/${router.query.id}`, fetcher);
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

	const flavorTextFilter = species.flavor_text_entries.find((text:FlavorTextType) => (
		text.language.name === "ja"
	));
  

	return (
		<Layout>
			<h2>{router.query.id}</h2>
			<h2>{species.names[0].name}</h2>
			<p>{species.genera[0].genus}</p>
			<p>{species.generation.name}</p>
			<p>{flavorTextFilter.flavor_text}</p>
			<Image
				className="ml-20"
				loader={mainImageLoader}
				src={content.id.toString()}
				width={200}
				height={200}
				alt=""
			/>
			<Image
				className="ml-20"
				loader={otherImageLoader}
				src={content.id.toString()}
				width={200}
				height={200}
				alt=""
			/>
			<Image
				className="ml-20"
				loader={other2ImageLoader}
				src={content.id.toString()}
				width={200}
				height={200}
				alt=""
			/>
			<Image
				className="ml-20"
				loader={other3ImageLoader}
				src={content.id.toString()}
				width={200}
				height={200}
				alt=""
			/>
			<Image
				className="ml-20"
				loader={other4ImageLoader}
				src={content.id.toString()}
				width={200}
				height={200}
				alt=""
			/>
			<Image
				className="ml-20"
				loader={other5ImageLoader}
				src={content.id.toString()}
				width={200}
				height={200}
				alt=""
			/>
			<Image
				className="ml-20"
				loader={other6ImageLoader}
				src={content.id.toString()}
				width={200}
				height={200}
				alt=""
			/>
		</Layout>
	);
};

type FlavorTextType = {
	flavor_text: String,
	language: {
		name:string
	},
}

export default PokemonPage;
