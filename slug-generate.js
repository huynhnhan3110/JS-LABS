function generateSlug(slug) {
  return slug.split(' ').join('-').toLowerCase();
}
console.log(generateSlug('Phim chiếu rạp'));
