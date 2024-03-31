import { urlFor } from "../sanity";

function conform(object: any) {
  return {
    name: object.name,
    photo: urlFor(object.photo).url(),
    slug: object.slug.current,
  };
}

export { conform };
