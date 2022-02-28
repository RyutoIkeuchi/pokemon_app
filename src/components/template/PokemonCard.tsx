import useSWR from 'swr';
import axios from 'axios';
import Image from 'next/image'

const url = 'https://pokeapi.co/api/v2/pokemon';
const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const PokemonCard = (props:{count:number}) => {
  const { data, error } = useSWR(`${url}/${props.count}`, fetcher);

	if (!data && !error) return <h2>ローディング中</h2>;
  if (error) return <h2>エラーだよ</h2>;
  
  const myLoader = ({ src }: {src:string}) => {
		return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${src}.png`;
	};

	return (
		<div>
			<Image loader={myLoader} src={data.id.toString()} width={100} height={100} alt="" />
		</div>
	);
};

export default PokemonCard
