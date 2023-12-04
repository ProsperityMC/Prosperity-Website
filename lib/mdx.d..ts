declare module "*.mdx" {
	import { WikiMeta } from "@lib/lib";
	
    export const meta: WikiMeta;
	export { default };
}
