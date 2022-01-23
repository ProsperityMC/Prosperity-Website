import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Wiki = defineDocumentType(() => ({
  name: "Wiki",
  filePathPattern: `**/*.md`,
  fields: {
    title: {
      type: "string",
      description: "The title of the page.",
      required: true,
    },
    authors: {
      type: "list",
      of: { type: "string" },
      description: "All wiki page contributors.",
      required: false,
    },
    description: {
      type: "string",
      description: "Brief summary of the page.",
      required: true,
    },
  },
}));

export default makeSource({
  contentDirPath: "content/wiki",
  documentTypes: [Wiki],
});
