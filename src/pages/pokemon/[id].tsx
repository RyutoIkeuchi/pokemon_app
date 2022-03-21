import axios from 'axios';
import Image from 'next/image';
import { Layout } from '../../components/template/Layout';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import { SWRConfig } from 'swr';
import { PokemonDetailLoading } from '../../components/template/Loading/PokemonDetailLoading';
import { PokemonDetailStatus } from '../../components/organisms/PokemonDetailStatus';
import { usePokemonDetail } from '../../hooks/usePokemonDetail';
import { PokemonDetailInfo } from '../../components/organisms/PokemonDetailInfo';
import { POKEMON_SPECIES_URL, POKEMON_URL } from '../../assets/urls';
import {
	other2ImageLoader,
	other3ImageLoader,
	other4ImageLoader,
	other5ImageLoader,
	other6ImageLoader,
	otherImageLoader,
} from '../../util/imageLoader';
import { PokemonDetailContent } from '../../components/organisms/PokemonDetailContent';

export const getStaticPaths = () => {
	const paths = [...Array(898)].map((id, index) => ({
		params: {
			id: (index + 1).toString(),
		},
	}));
	return { paths, fallback: false };
};

export const getStaticProps = async (props: { params: { id: number } }) => {
	const { id } = props.params;
	const CONTENT_API_URL = `${POKEMON_URL}/${id}`;
	const SPECIES_API_URL = `${POKEMON_SPECIES_URL}/${id}`;
	const content = await axios(CONTENT_API_URL);
	const species = await axios(CONTENT_API_URL);
	console.log(`${id}がSGされました`);

	return {
		props: {
			[CONTENT_API_URL]: content.data,
			[SPECIES_API_URL]: species.data,
		},
	};
};

const PokemonPage = ({ fallback }: any) => {
	const { id, content, species, isLoading, isError } =
		usePokemonDetail();
	
	if (isLoading) return <PokemonDetailLoading />;
	if (isError) return <h2>エラーだよ</h2>;
	
	return (
		<SWRConfig value={{ fallback }}>
			<Layout>
				<PokemonDetailInfo species={species} content={content} id={id} />
				<PokemonDetailStatus content={content} />
				<PokemonDetailContent species={species} content={content}/>
				<div className="w-1/2 mx-auto">
					<p>【写真集】</p>
					<Swiper
						navigation={true}
						modules={[Navigation]}
						className="w-full h-full text-center"
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
				</div>
			</Layout>
		</SWRConfig>
	);
};

export default PokemonPage;
