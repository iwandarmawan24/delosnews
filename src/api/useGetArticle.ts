import { useInfiniteQuery } from '@tanstack/react-query';

import type { TabType } from '@/types/listPageTabType';
import type PeriodType from '@/types/periodType';

import type { ArticleRespondType } from './apiCaller';
import { NewsGetter } from './apiCaller';

const useGetArticleQuery = (
  period: PeriodType,
  articleType: TabType,
  enabled = true
) =>
  useInfiniteQuery<void | ArticleRespondType, Error>(
    ['mostEmailedList'],
    () => {
      return NewsGetter.getArticle(period, articleType)
        .then((res) => {
          return res;
        })
        .catch((e) => console.error(e));
    },
    {
      enabled,
    }
  );
export default useGetArticleQuery;
