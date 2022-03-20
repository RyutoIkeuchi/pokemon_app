export const PokemonCardLoading = () => {
	return (
		<div className="border border-blue-300 shadow rounded-md p-4 w-ful">
			<div className="float-right h-4 bg-slate-200 w-1/12"></div>
			<div className="w-36 h-36 mx-auto rounded-full bg-slate-200"></div>
			<div className="rounded-full bg-slate-200 h-20 w-20 mb-2"></div>
			<div className="rounded-xl border-2 p-4 border-blue-300 ">
				<div className="grid grid-cols-3 gap-4">
					<div className="h-8 mb-2 bg-slate-200 rounded col-span-3"></div>
				</div>
				<div className="flex justify-start">
					<div className="bg-slate-200 px-2 h-6 w-20 rounded mr-2"></div>
					<div className="bg-slate-200 px-2 h-6 w-20 rounded mr-2"></div>
				</div>
			</div>
		</div>
	);
};
