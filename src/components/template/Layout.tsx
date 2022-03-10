import Head from "next/head";
import Header from "./Header";

export const Layout = ({children}:any) => {
  return (
		<div>
			<Head>
				<title>Next.jsでポケモンAPI取得してみた</title>
				<meta
					name="description"
					content="create picture_book with pokemon_api"
				/>
			</Head>
			<Header/>
			<main className="container mx-auto mt-10">
				{children}
			</main>
			<footer className="text-center p-6 border-t-2">
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by <span>ポケモン図鑑だよ</span>
				</a>
			</footer>
		</div>
	);
}