/* eslint-disable jsx-a11y/alt-text */
// @ts-ignore

import { useState } from 'react';
import { useCookies } from 'react-cookie';
import useLocalStorageState from 'use-local-storage-state';

import getImageObjectFromRespond from '@/helpers/getImageObjectFromRespond';
import Button from '@/layouts/Button';
import { Meta } from '@/layouts/Meta';
import Modal from '@/layouts/Modal';
import NAVBAR_DATA from '@/statics/NAVBAR_DATA';
import { Main } from '@/templates/Main';
import type ArticleType from '@/types/articleType';
import type UserDataType from '@/types/userDataType';

const Index = () => {
  const [cookies] = useCookies(['detailArticle']);
  const dataFromCookie: ArticleType = cookies.detailArticle;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buyArticle, setBuyArticle] = useLocalStorageState<ArticleType[]>(
    'article',
    {
      defaultValue: [],
    }
  );
  const [userData, setUserData] = useLocalStorageState<UserDataType>(
    'userData',
    {
      defaultValue: {
        userName: '',
        email: '',
        credit: 100000,
      },
    }
  );
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const isAlreadyBuy = buyArticle.some(
    (article) => article.id === dataFromCookie.id
  );

  const saveToArticleLocalStorage = () => {
    const arrArticle: ArticleType[] = buyArticle;

    if (!isAlreadyBuy) {
      arrArticle.push(dataFromCookie);
    }
    setBuyArticle(arrArticle);
  };

  type OutputType = 'more-than-7' | 'within-7' | 'within-1';

  function comparePublishedDateWithCurrentDay(data: ArticleType): OutputType {
    const currentDate = new Date(); // Get the current date
    const publishedDate = new Date(data.published_date); // Convert published_date to a Date object

    const timeDifference = currentDate.getTime() - publishedDate.getTime(); // Get the time difference in milliseconds
    const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24)); // Convert milliseconds to days

    if (daysDifference >= 7) {
      return 'more-than-7';
    }
    if (daysDifference > 1) {
      return 'within-7';
    }
    if (daysDifference <= 1) {
      return 'within-1';
    }
    throw new Error('Invalid date');
  }
  const articleDiffercenceMoreThanSevenDays =
    comparePublishedDateWithCurrentDay(dataFromCookie);

  function countArticlesByDateRanges(array: ArticleType[]) {
    const currentDate = new Date(); // Get the current date
    currentDate.setHours(0, 0, 0, 0); // Set the time to midnight for accurate comparison

    const sevenDaysAgo = new Date(); // Get the date 7 days ago
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    sevenDaysAgo.setHours(0, 0, 0, 0);

    const oneDayAgo = new Date(); // Get the date 1 day ago
    oneDayAgo.setDate(oneDayAgo.getDate() - 1);
    oneDayAgo.setHours(0, 0, 0, 0);

    let countMoreThanSevenDays = 0;
    let countWithinSevenDays = 0;
    let countWithinOneDay = 0;

    for (const article of array) {
      const publishedDate = new Date(article.published_date);
      publishedDate.setHours(0, 0, 0, 0);

      if (publishedDate < sevenDaysAgo) {
        countMoreThanSevenDays += 1;
      } else if (publishedDate <= currentDate) {
        countWithinSevenDays += 1;
      } else if (publishedDate <= oneDayAgo) {
        countWithinOneDay += 1;
      }
    }

    return {
      moreThanSevenDays: countMoreThanSevenDays,
      withinSevenDays: countWithinSevenDays,
      withinOneDay: countWithinOneDay,
    };
  }
  const articlesCount = countArticlesByDateRanges(buyArticle);

  function calculateArticlePrice(
    daysAgo: OutputType,
    maxFreeArticlesReached: boolean
  ): number {
    const priceWithin7Days = 20000;
    const priceWithin1Day = 50000;
    const priceExceededLimit = 10000;

    if (daysAgo === 'more-than-7') {
      // Check if the maximum free articles limit is exceeded
      if (maxFreeArticlesReached) {
        return priceExceededLimit;
      }
      return 0; // Free for the first 5 articles
    }
    if (daysAgo === 'within-7') {
      return priceWithin7Days;
    }
    if (daysAgo === 'within-1') {
      return priceWithin1Day;
    }
    throw new Error('Invalid value for daysAgo');
  }
  const articlePrice = calculateArticlePrice(
    articleDiffercenceMoreThanSevenDays,
    articlesCount.moreThanSevenDays > 5
  );
  const buyArticleHandler = () => {
    if (userData.credit) {
      const reduceCredit = userData.credit - articlePrice;
      if (reduceCredit >= 0) {
        setUserData({ ...userData, credit: reduceCredit });
        saveToArticleLocalStorage();
      }
    }
  };
  return (
    <Main
      meta={<Meta title="DelosNews" description="DelosNews" />}
      navbar={{
        navbarData: NAVBAR_DATA,
      }}
    >
      {dataFromCookie ? (
        <div className="flex h-[calc(100vh-100px)] w-[100%]  flex-row flex-wrap items-start justify-between gap-2">
          <div className="flex w-[100%] flex-row flex-wrap justify-between gap-[1%]">
            <div
              className="min-md:[49%] min-h-[200px] w-[100%] bg-gray-300 md:w-[50%]"
              tabIndex={0}
              role="button"
            >
              <img
                className="h-[100%]	w-[100%] object-cover"
                src={`${getImageObjectFromRespond(
                  dataFromCookie.media[0]?.['media-metadata'],
                  'mediumThreeByTwo440',
                  dataFromCookie.media
                )}`}
              />
            </div>
            <div className="mt-2 w-[100%] md:mt-0 md:w-[49%]">
              <p className="mb-2 text-xl font-bold">{dataFromCookie.title}</p>
              <p className="mb-2 text-sm">{dataFromCookie.abstract}</p>
              <p className="mb-2 text-sm">
                {dataFromCookie.byline} &nbsp; {dataFromCookie.published_date}
              </p>
              <br />
              <p>Price: {articlePrice} coins</p>
              {articleDiffercenceMoreThanSevenDays === 'more-than-7' ? (
                <p>Its published more than 7 days ago its free</p>
              ) : (
                ''
              )}
              {articlesCount.moreThanSevenDays > 5 &&
              articleDiffercenceMoreThanSevenDays === 'more-than-7' ? (
                <p>
                  Its published more than 7 days ago its mean to be free but you
                  got five maximum
                </p>
              ) : (
                ''
              )}
              <Button
                text={`${
                  isAlreadyBuy
                    ? 'You Already Buy this Article'
                    : 'Buy This Article'
                }`}
                handlerClickButton={openModal}
                disabled={isAlreadyBuy}
              />

              <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div className="flex w-[100%] flex-col items-center">
                  {userData.credit && userData.credit - articlePrice < 0 ? (
                    <p>
                      Your Current credit (${userData.credit}) is not enough to
                      buy this article (${articlePrice}).Please find anoteher or
                      add your credit
                    </p>
                  ) : (
                    <>
                      <p>Do You Really want to buy this article?</p>
                      <div className="mt-4 flex w-[100%] flex-row justify-center">
                        <Button
                          text="Yes"
                          handlerClickButton={() => {
                            buyArticleHandler();
                            closeModal();
                          }}
                        />
                        &nbsp; &nbsp;
                        <Button
                          text="No"
                          handlerClickButton={() => closeModal()}
                        />
                      </div>
                    </>
                  )}
                </div>
              </Modal>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </Main>
  );
};

export default Index;
