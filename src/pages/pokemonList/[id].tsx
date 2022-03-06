import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Layout } from '../../components/template/Layout';

const url = 'https://pokeapi.co/api/v2/pokemon';
const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const PokemonPage = () => {
	const router = useRouter();
  const { data:post, error } = useSWR(`${url}/${router.query.id}`, fetcher);
  if (!post && !error) return <h2>ローディングなう</h2>;
  if (error) return <h2>エラーだよ</h2>;
	const mainImageLoader = ({ src }: { src: string }) => {
		return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${src}.png`;
	};
	return (
		<Layout>
      <h2>{router.query.id}</h2>
			<p>content</p>
			<Image
				className="ml-20"
				loader={mainImageLoader}
				src={post.id.toString()}
				width={200}
				height={200}
				alt=""
			/>
		</Layout>
	);
};

export default PokemonPage;
