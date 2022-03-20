import { Layout } from '../Layout';

export const PokemonDetailLoading = () => {
	return (
		<Layout>
			<div className="flex justify-center items-center mb-14">
				<div className="shadow-xl py-10 pl-10 pr-36 rounded-3xl mr-20">
					<div className="w-16 h-4 bg-slate-200 mb-2"></div>
					<div className="w-40 h-8  bg-slate-200 mb-4"></div>
					<div className="w-52 h-5  bg-slate-200 mb-2"></div>
					<div className="w-44 h-5  bg-slate-200 mb-2"></div>
					<div className="w-40 h-5  bg-slate-200 mb-2"></div>
					<div className="w-40 h-5  bg-slate-200 mb-2"></div>
				</div>
				<div className="ml-6 w-52 h-52 bg-slate-200 rounded"></div>
			</div>

			<table className="w-1/2 mx-auto mb-10">
				<tbody>
					{[...Array(6)].map((content, index) => (
						<tr key={index}>
							<td className="w-1/4 border px-4 py-2">
								<div className="bg-slate-200 h-4 w-3/5"></div>
							</td>
							<td className="w-1/4 border px-4 py-2">
								<div className="bg-slate-200 h-4 w-1/4"></div>
							</td>
							<td className="w-1/2 border px-4 py-2">
								<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"></div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</Layout>
	);
};
