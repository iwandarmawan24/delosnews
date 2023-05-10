import { useEffect, useState } from 'react';
// @ts-ignore
import WheelComponent from 'react-wheel-of-prizes';
import useLocalStorageState from 'use-local-storage-state';

import { Meta } from '@/layouts/Meta';
import NAVBAR_DATA from '@/statics/NAVBAR_DATA';
import { Main } from '@/templates/Main';
import type UserDataType from '@/types/userDataType';

const Index = () => {
  const [userData, setUserData] =
    useLocalStorageState<UserDataType>('userData');
  const [luckyDrawData, setLuckyDrawData] = useState<{
    ticket: number;
    creditAddition: number;
    reRenderKey: number;
    prizeClaimed: boolean;
  }>({
    ticket: userData && userData.luckyDraw ? userData.luckyDraw : 0,
    creditAddition: userData && userData.credit ? userData.credit : 0,
    reRenderKey: 0,
    prizeClaimed: false,
  });

  useEffect(() => {
    if (userData) {
      setUserData({
        ...userData,
        credit: luckyDrawData.creditAddition,
        luckyDraw: luckyDrawData.ticket,
      });
    }
  }, [luckyDrawData]);

  const segments = ['20000', '1', '10000', '1', '10000', '1', '50000', '1'];
  const segColors = [
    '#BDBDBD',
    '#757575',
    '#BDBDBD',
    '#757575',
    '#BDBDBD',
    '#757575',
    '#BDBDBD',
    '#757575',
  ];

  const onFinished = (winner: string) => {
    if (userData && userData.luckyDraw) {
      const newCreditAddition = luckyDrawData.creditAddition + Number(winner);
      let newPrizeClaimed = luckyDrawData.prizeClaimed;

      if (Number(winner) === 50000 && !luckyDrawData.prizeClaimed) {
        newPrizeClaimed = true;
      }

      setLuckyDrawData({
        ...luckyDrawData,
        ticket: luckyDrawData.ticket - 1,
        creditAddition: newCreditAddition,
        prizeClaimed: newPrizeClaimed,
        reRenderKey: luckyDrawData.reRenderKey + 1,
      });

      setUserData((prevUserData) => {
        if (prevUserData && prevUserData.credit) {
          return {
            ...prevUserData,
            credit: prevUserData.credit + Number(winner),
            luckyDraw: prevUserData.luckyDraw
              ? prevUserData.luckyDraw - 1
              : undefined,
          };
        }
        return prevUserData;
      });
    }
  };

  return (
    <Main
      meta={<Meta title="DelosNews" description="DelosNews" />}
      navbar={{
        navbarData: NAVBAR_DATA,
      }}
    >
      {userData ? (
        <div className="relative flex min-h-[100vh] flex-row justify-center">
          <div className="absolute flex h-[500px] w-[450px] flex-row justify-center overflow-hidden">
            <p>Your Lucky Draw Ticket: {luckyDrawData.ticket}</p>
            <p>Total Price: {userData.credit}</p>
            <WheelComponent
              key={luckyDrawData.reRenderKey}
              segments={segments}
              segColors={segColors}
              onFinished={(winner: any) => onFinished(winner)}
              primaryColor="black"
              contrastColor="white"
              buttonText="Spin"
              isOnlyOnce={false}
              size={200}
              upDuration={100}
              downDuration={500}
              fontFamily="Arial"
            />
          </div>
        </div>
      ) : (
        ''
      )}
    </Main>
  );
};

export default Index;
