import { createStorefrontClient } from "@shopify/hydrogen-react";

export const client = createStorefrontClient({
  // load environment variables according to your framework and runtime
  storeDomain: String(""),
  publicStorefrontToken: "",
  privateStorefrontToken: "",
});
