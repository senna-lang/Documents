export function createMetaData(posts: any) {
  const metaData = posts.map((post: any) => {
    const getTags = (tags: any) => {
      const allTags = tags.map((tag: any) => {
        return tag.name;
      });
      return allTags;
    };
    const getCat = (cat: any) => {
      const allCat = cat.map((cat: any) => {
        return cat.name;
      });
      return allCat;
    };

    const meta = {
      id: post.properties.Name.title[0].plain_text,
      description: post.properties.Description.rich_text[0].plain_text,
      date: post.properties.Date.date.start,
      slug: post.properties.Slug.rich_text[0].plain_text,
      tags: getTags(post.properties.Tags.multi_select),
      category: getCat(post.properties.Category.multi_select),
      thumb:
        post.properties.Thumb && post.properties.Thumb.files.length > 0
          ? post.properties.Thumb.files[0].file.url
          : null,
    };
    return meta;
  });
  return metaData;
}
