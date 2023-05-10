import axios from 'axios';

import type ArticleType from '@/types/articleType';
import type { TabType } from '@/types/listPageTabType';
import type PeriodType from '@/types/periodType';

const apiClient = axios.create({
  baseURL: 'https://api.nytimes.com/svc/mostpopular/v2/',
  headers: {
    'Content-type': 'application/json',
  },
});

const REACT_APP_NYTIMES_API_KEY = 'v51wG5aoqB1OF9D41N31HXIz6sdPTFcU';

export interface ArticleRespondType {
  copyright: string;
  num_results: number;
  results: ArticleType[];
}

const getArticle = async (period: PeriodType, articleType: TabType) => {
  const response = await apiClient.get<ArticleRespondType>(
    `${articleType}/${period}.json?api-key=${REACT_APP_NYTIMES_API_KEY}`
  );
  return response.data;
};

export const NewsGetter = {
  getArticle,
};
