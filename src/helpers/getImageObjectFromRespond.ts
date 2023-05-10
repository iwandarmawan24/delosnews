import router from 'next/router';

import type ArticleType from '@/types/articleType';

const getImageObjectFromRespond = (
  arr: NonNullable<ArticleType['media']>[number]['media-metadata'] | undefined,
  format: 'Standard Thumbnail' | 'mediumThreeByTwo210' | 'mediumThreeByTwo440',
  mediaData: ArticleType['media']
) => {
  if (mediaData) {
    if (arr !== undefined) {
      return (
        arr.find((obj) => obj.format === format)?.url ||
        `${router.basePath}/assets/images/image-placeholder.png`
      );
    }
    return `${router.basePath}/assets/images/image-placeholder.png`;
  }
  return `${router.basePath}/assets/images/image-placeholder.png`;
};

export default getImageObjectFromRespond;
