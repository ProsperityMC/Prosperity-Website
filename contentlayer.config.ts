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
      type: "string",
      description: "All wiki page contributors.",
      required: true,
    },
    description: {
      type: "string",
      description: "Breif summary of the page.",
      required: true,
    },
  },
}));

export default makeSource({
  contentDirPath: "content/wiki",
  documentTypes: [Wiki],
});
