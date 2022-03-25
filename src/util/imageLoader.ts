export const mainImageLoader = ({ src }: { src: string }) => {
	return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${src}.png`;
};

export const otherImageLoader = ({ src }: { src: string }) => {
	return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${src}.png `;
};
export const other2ImageLoader = ({ src }: { src: string }) => {
	return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${src}.png`;
};
export const other3ImageLoader = ({ src }: { src: string }) => {
	return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${src}.png`;
};
export const other4ImageLoader = ({ src }: { src: string }) => {
	return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${src}.svg`;
};
export const other5ImageLoader = ({ src }: { src: string }) => {
	return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${src}.png`;
};
export const other6ImageLoader = ({ src }: { src: string }) => {
	return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${src}.png`;
};
