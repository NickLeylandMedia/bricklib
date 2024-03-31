import { urlFor } from "../sanity";

function conform(payload: any) {
  return {
    bio:
      String(payload.bio) ||
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    bioImage: urlFor(payload.bioImage).url(),
  };
}

export { conform };
