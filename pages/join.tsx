import ArticleContent from "@wiki/join-info-v2.mdx";

export default function Join() {
	return (
		<main className="markdown">
			<section className="flex flex-col gap-10 text-center markdown"></section>
			<hr />
			<article className="markdown">
				<ArticleContent></ArticleContent>
			</article>
		</main>
	);
}
