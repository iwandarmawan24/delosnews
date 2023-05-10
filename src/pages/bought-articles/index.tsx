import useLocalStorageState from 'use-local-storage-state';

import { Meta } from '@/layouts/Meta';
import NewsCard from '@/layouts/NewsCard';
import NAVBAR_DATA from '@/statics/NAVBAR_DATA';
import { Main } from '@/templates/Main';
import type ArticleType from '@/types/articleType';

const Index = () => {
  const [buyArticle] = useLocalStorageState<ArticleType[]>('article', {
    defaultValue: [],
  });
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
      navbar={{
        navbarData: NAVBAR_DATA,
      }}
    >
      <div className="flex w-[100%] flex-row flex-wrap justify-between gap-2">
        {buyArticle.length &&
          buyArticle.map((data, index) => {
            return (
              <NewsCard
                key={data.id}
                cardData={data}
                cardIndex={index}
                isForPurchasedPage
              />
            );
          })}
      </div>
    </Main>
  );
};

export default Index;
