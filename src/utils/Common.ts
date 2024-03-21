export const stringToSlug = (str: string) => {
  return str
    .trim()
    .toLowerCase()
    .replace(/[\W_]+/g, '-')
    .replace(/^-+|-+$/g, '');
};
