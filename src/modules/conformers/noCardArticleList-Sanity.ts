import { urlFor } from "../sanity";

function conform(input: any) {
  const workload = { ...input };
  workload.mainImage = urlFor(input.mainImage).url();
  workload.slug = input.slug.current;
  workload.author.image = urlFor(input.author.image).url();
  return workload;
}

export { conform };
