import { Layout } from "../../components/template/Layout"
import PokemonCard from "../../components/template/PokemonCard";

const Random = () => {

  const randomParty = () => {    
    return [...Array(6)].map((count) => {
      const number = Math.floor(Math.random() * 898);
      return <PokemonCard key={count} count={number} />;
    })
  }

	return (
		<Layout>
			<div className="grid grid-cols-3 gap-24 mb-10">{randomParty()}</div>
		</Layout>
	);
};

  export default Random;