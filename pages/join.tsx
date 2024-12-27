import ArticleContent from "@wiki/member-requirements.mdx";

export default function Join() {
	return (
		<main>
			<article className="w-full markdown max-w-[100ch] mx-auto min-h-screen">
				<section className="markdown text-center">
					<header className="text-4xl">How to Join</header>
					<p className="text-lg text-zinc-300">
						Requirements and recommendations for joining the
						community.
					</p>
				</section>
				<hr />
				<ArticleContent></ArticleContent>
			</article>
		</main>
	);
}
