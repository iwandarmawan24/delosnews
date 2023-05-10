/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import { useCookies } from 'react-cookie';

import getImageObjectFromRespond from '@/helpers/getImageObjectFromRespond';
import type ArticleType from '@/types/articleType';
import type PeriodType from '@/types/periodType';

interface NewsCardType {
  cardIndex: number;
  cardData: ArticleType;
  badgeData?: ArticleType;
  isForPurchasedPage?: boolean;
  period?: PeriodType;
  onClickHandler?: () => void;
}

const NewsCard = ({
  cardIndex,
  cardData,
  badgeData,
  isForPurchasedPage = false,
  period,
  onClickHandler,
}: NewsCardType) => {
  // @ts-ignore
  const [cookies, setCookie, removeCookie] = useCookies();

  const redirectAndSaveToCookies = async (data: ArticleType) => {
    const redirectData = { ...data };

    if (period) {
      redirectData.period = period;
    }
    setCookie('detailArticle', redirectData);
    if (onClickHandler !== undefined) {
      onClickHandler();
    }
  };

  if (
    (cardIndex === 0 || cardIndex === 1) &&
    badgeData &&
    !isForPurchasedPage
  ) {
    return (
      <div className="flex w-[100%] flex-row flex-wrap justify-between gap-[1%]">
        {cardIndex === 0 ? (
          <div
            className="min-md:[49%] min-h-[200px] w-[100%] bg-gray-300 md:w-[50%]"
            onKeyPress={() => redirectAndSaveToCookies(cardData)}
            tabIndex={0}
            role="button"
            onClick={() => redirectAndSaveToCookies(cardData)}
          >
            <img
              className="h-[100%]	w-[100%] object-cover"
              src={`${getImageObjectFromRespond(
                cardData.media[0]?.['media-metadata'],
                'mediumThreeByTwo440',
                cardData.media
              )}`}
            />
          </div>
        ) : (
          ''
        )}
        <div className="mt-2 flex w-[100%] flex-row md:mt-0 md:w-[49%] md:flex-col md:gap-2">
          <div
            className="flex w-[50%] flex-col space-y-2 md:w-[100%]"
            onKeyPress={() => redirectAndSaveToCookies(cardData)}
            role="button"
            tabIndex={0}
            onClick={() => redirectAndSaveToCookies(cardData)}
          >
            <p className="truncate-card text-lg font-bold">{cardData.title}</p>
            <p className=" truncate-card text-sm">{cardData.abstract}</p>
          </div>
          <div
            className="flex w-[50%] flex-col space-y-2 md:w-[100%]"
            onKeyPress={() => redirectAndSaveToCookies(cardData)}
            role="button"
            tabIndex={0}
            onClick={() => redirectAndSaveToCookies(cardData)}
          >
            <p className="truncate-card text-lg font-bold">{badgeData.title}</p>
            <p className=" truncate-card text-sm">{badgeData.abstract}</p>
          </div>
        </div>
      </div>
    );
  }

  if (
    (cardIndex !== 0 && cardIndex !== 1 && !isForPurchasedPage) ||
    isForPurchasedPage
  ) {
    return (
      <div
        className=" flex w-[100%] flex-row justify-between gap-2 md:w-[49%]"
        onKeyPress={() => redirectAndSaveToCookies(cardData)}
        role="button"
        tabIndex={0}
        onClick={() => redirectAndSaveToCookies(cardData)}
      >
        <div className="min-h-[60px] w-[50%]  bg-gray-300">
          <img
            className="h-[100%]	w-[100%]	object-cover"
            src={`${getImageObjectFromRespond(
              cardData.media[0]?.['media-metadata'],
              'mediumThreeByTwo440',
              cardData.media
            )}`}
          />
        </div>
        <div className="w-[50%]">
          <div className="flex flex-col space-y-2">
            <p className="truncate-card text-base font-bold">
              {cardData.title}
            </p>
            <p className="  truncate-card text-sm">{cardData.abstract}</p>
          </div>
        </div>
      </div>
    );
  }
  return <>&nbsp;</>;
};

export default NewsCard;
