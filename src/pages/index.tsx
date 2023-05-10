import { useEffect, useMemo, useState } from 'react';

import useGetArticleQuery from '@/api/useGetArticle';
import ListPageSkeleton from '@/layouts/listPageSkeleton';
import { Meta } from '@/layouts/Meta';
import ModalFilter from '@/layouts/ModalFilter';
import NewsPage from '@/layouts/news';
import NewsCard from '@/layouts/NewsCard';
import NAVBAR_DATA from '@/statics/NAVBAR_DATA';
import { Main } from '@/templates/Main';
import type ArticleType from '@/types/articleType';
import type { TabType } from '@/types/listPageTabType';
import type PeriodType from '@/types/periodType';

const Tab: {
  name: string;
  key: TabType;
}[] = [
  {
    name: 'Most Emailed',
    key: 'emailed',
  },
  {
    name: 'Most Shared',
    key: 'shared',
  },
  {
    name: 'Most Viewed',
    key: 'viewed',
  },
];

const Index = () => {
  const [currentDisplay, setCurrentDisplay] = useState<'list' | 'detail'>(
    'list'
  );
  const [tabActive, setTabActive] = useState<TabType>('emailed');
  const [currentPeriod, setCurrentPeriod] = useState<PeriodType>(1);
  const [currentKeyword, setCurrentKeyword] = useState<string>('');
  const {
    data: articleListPaginateData,
    isLoading: articleListLoading,
    isRefetching,
    refetch,
  } = useGetArticleQuery(currentPeriod, tabActive);
  useEffect(() => {
    refetch();
  }, [tabActive, currentPeriod]);

  const articleList = useMemo(() => {
    return articleListPaginateData?.pages[0]?.results;
  }, [articleListPaginateData, tabActive]);

  function filterArticlesByTitle(
    articleListArr: ArticleType[] | undefined,
    keyword: string
  ) {
    if (!articleListArr) {
      return [];
    }

    return articleListArr.filter((data) => {
      return data.title.toLowerCase().includes(keyword.toLowerCase());
    });
  }
  const filteredArticles = filterArticlesByTitle(articleList, currentKeyword);

  const handleFilterChange = (searchTerm: string, filterType: PeriodType) => {
    setCurrentPeriod(filterType);
    setCurrentKeyword(searchTerm);
  };
  return (
    <Main
      meta={<Meta title="DelosNews" description="DelosNews" />}
      navbar={{
        navbarData: NAVBAR_DATA,
      }}
    >
      {currentDisplay === 'list' ? (
        <>
          <ul className="sticky top-[57px]	z-30 mb-4 flex flex-row items-center justify-between border-y-4 border-double border-black bg-white p-2	transition-all duration-300 ease-in">
            {Tab.map((data) => (
              <li key={data.key}>
                <div
                  onClick={() => setTabActive(data.key)}
                  onKeyPress={() => setTabActive(data.key)}
                  role="button"
                  tabIndex={0}
                  className={`cursor-pointer text-sm ${
                    tabActive === data.key ? 'font-bold' : ''
                  }`}
                >
                  {data.name}
                </div>
              </li>
            ))}
          </ul>

          <div className="relative flex w-[100%] flex-row flex-wrap justify-between gap-2">
            <div className="sticky top-[120px] z-30 mx-auto max-w-screen-md">
              <ModalFilter onFilterChange={handleFilterChange} />
            </div>
            {!articleListLoading && !isRefetching ? (
              // eslint-disable-next-line react/jsx-no-useless-fragment
              <>
                {filteredArticles !== undefined &&
                  filteredArticles.map((data, index) => {
                    if (index === 0) {
                      return (
                        <NewsCard
                          key={data.id}
                          cardData={data}
                          cardIndex={index}
                          badgeData={filteredArticles[index + 1]}
                          onClickHandler={() => setCurrentDisplay('detail')}
                        />
                      );
                    }
                    if (index === 1) {
                      return null; // Returning null instead of an empty string
                    }
                    return (
                      <NewsCard
                        key={data.id}
                        cardData={data}
                        cardIndex={index}
                        badgeData={filteredArticles[index + 1]}
                        onClickHandler={() => setCurrentDisplay('detail')}
                      />
                    );
                  })}
              </>
            ) : (
              <ListPageSkeleton />
            )}
          </div>
        </>
      ) : (
        ''
      )}
      {currentDisplay === 'detail' ? (
        <NewsPage onBackHandler={() => setCurrentDisplay('list')} />
      ) : (
        ''
      )}
    </Main>
  );
};

export default Index;
