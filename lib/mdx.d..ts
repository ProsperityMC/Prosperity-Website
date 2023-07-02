declare module "*.mdx" {
	import { WikiMeta } from "@lib/wiki";
	
    export const meta: WikiMeta;
	export { default };
}
