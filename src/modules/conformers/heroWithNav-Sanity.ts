import { urlFor } from "../sanity";

function conform(payload: any) {
  return {
    smallImage: urlFor(payload.smallBackgroundImage).url(),
    largeImage: urlFor(payload.largeBackgroundImage).url(),
    header: String(payload.header),
    subHeader: String(payload.subHeader),
  };
}

export { conform };
