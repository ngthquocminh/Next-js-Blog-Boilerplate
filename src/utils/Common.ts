export const stringToSlug = (str: string) => {
  return str
    .trim()
    .toLowerCase()
    .replace(/[\W_]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export function parseDateString(dateString: string) {
  if (
    dateString === undefined ||
    dateString === null ||
    dateString.length === 0
  )
    return new Date();

  const parts = dateString.split('/'); // Split the string by '/'
  const day = parseInt(parts[0], 10); // Convert day to an integer
  const month = parseInt(parts[1], 10) - 1; // Convert month to 0-based index
  const year = parseInt(parts[2], 10);

  return new Date(year, month, day);
}

export function cvt2RelativePath(absolutePath: string) {
  if (
    absolutePath === undefined ||
    absolutePath === null ||
    absolutePath.length === 0
  )
    return '';
  let ppath = absolutePath.replace(process.cwd(), '');
  if (ppath.startsWith('\\public')) ppath = ppath.replace('\\public', '');
  if (ppath.startsWith('/public')) ppath = ppath.replace('/public', '');
  return ppath;
}
