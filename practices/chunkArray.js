export function chunkArray(array, size) {
  if (!Array.isArray(array) || size <= 0) return [];
  let arrRS = [];
  let countChunks = 1;
  if (size > 20) throw new Error('Too many chunks');
  for (let i = 0; i < array.length; i += size) {
    const element = array[i];
    arrRS.push(array.slice(i, i + size));
    countChunks++;
    if (countChunks > 20) throw new Error('Too many chunks');
  }
  return arrRS;
}
