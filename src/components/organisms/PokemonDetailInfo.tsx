import Image from 'next/image';
import { Content, Species } from '../../types/PokemonDetail';
import { mainImageLoader } from '../../util/imageLoader';

export const PokemonDetailInfo = (props: {
	species: Species;
	content: Content;
	id: string | string[] | undefined;
}) => {
	const { species, content, id } = props;
	const changeGenerationName = (generationName: string) => {
		switch (generationName) {
			case 'generation-i':
				return '第１世代';
			case 'generation-ii':
				return '第２世代';
			case 'generation-iii':
				return '第３世代';
			case 'generation-iv':
				return '第４世代';
			case 'generation-v':
				return '第５世代';
			case 'generation-vi':
				return '第６世代';
			case 'generation-vii':
				return '第７世代';
			case 'generation-viii':
				return '第８世代';
			default:
				return '第？世代';
		}
	};

	return (
		<div className="flex justify-center items-center mb-14">
			<div className="shadow-xl py-10 pl-10 pr-36 rounded-3xl mr-20">
				<p className="font-bold">No.{id}</p>
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
	);
};
