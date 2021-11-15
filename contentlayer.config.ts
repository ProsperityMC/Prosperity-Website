import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `**/*.md`,
  fields: {
    title: {
      type: "string",
      description: "The title of the page.",
      required: true,
    },
  },
}));

export default makeSource({
  contentDirPath: "content/wiki",
  documentTypes: [Page],
});
