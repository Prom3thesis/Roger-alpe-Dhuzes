import {defineConfig} from "sanity";
import {structureTool} from "sanity/structure";

import {setPublishedAtOnPublish} from "./sanity/documentActions/setPublishedAtOnPublish";
import {schemaTypes} from "./sanity/schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "yourprojectid";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "default",
  title: "Roger Alpe d'HuZes CMS",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
  document: {
    actions: (previousActions) =>
      previousActions.map((action) =>
        action.action === "publish" ? setPublishedAtOnPublish(action) : action,
      ),
  },
});
