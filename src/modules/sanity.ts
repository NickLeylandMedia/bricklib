// client.js
import { createClient } from "@sanity/client";
import ImageUrlbuilder from "@sanity/image-url";

const client = createClient({
  apiVersion: "2022-04-25",
  projectId: "0j9pbahj", // you can find this in sanity.json
  dataset: "production", // or the name you chose in step 1
  useCdn: false, // `false` if you want to ensure fresh data
});

const builder = ImageUrlbuilder(client);

const urlFor = (source: string) => builder.image(source);

export { client, urlFor };
