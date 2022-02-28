import useSWR from 'swr';
import axios from 'axios';
import Image from 'next/image'
import { useState } from 'react';


const url = 'https://pokeapi.co/api/v2/pokemon';
const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Pokemon = (props:{count:number}) => {
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

const PokemonList = () => {
	const [pokemonNumber,setPokemonNumber] = useState<number>(10)
	const pokemonCount = [...Array(10)];

	const onNextPage = () => {
		const newNumber = pokemonNumber + 10
		setPokemonNumber(newNumber)
	}

	const onPrevPage = () => {
		const newNumber = pokemonNumber - 10
		setPokemonNumber(newNumber)
	}

	const onResetNumber = () => {
		setPokemonNumber(1)
	}
	
	return (
		<div>
			{pokemonCount.map((d,index) => (
				<Pokemon key={index} count={index+pokemonNumber} />
			))}
			<button onClick={onResetNumber}>最初に戻る</button>
			<button onClick={onPrevPage}>前のページ</button>
			<button onClick={onNextPage}>次のページ</button>
		</div>
	);
};

export default PokemonList;
