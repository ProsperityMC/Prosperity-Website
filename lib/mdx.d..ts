declare module "wiki/*.mdx" {
	import { WikiMeta } from "@lib/lib";
	
    export const meta: WikiMeta;
	export { default };
}

declare module "project/*.mdx" {
	import { ProjectMeta } from "@lib/lib";
	
    export const meta: ProjectMeta;
	export { default };
}
