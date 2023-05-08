// eslint-disable-next-line import/no-extraneous-dependencies
import WheelComponent from 'react-wheel-of-prizes';

import { Meta } from '@/layouts/Meta';
import NAVBAR_DATA from '@/statics/NAVBAR_DATA';
import { Main } from '@/templates/Main';

const Index = () => {
  const segments = [
    'better luck next time',
    'won 70',
    'won 10',
    'better luck next time',
    'won 2',
    'won uber pass',
    'better luck next time',
    'won a voucher',
  ];
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
  const onFinished = (winner: any) => {
    console.log(winner);
  };
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
      <div className=" relative flex min-h-[100vh]  flex-row justify-center">
        <div className="absolute flex h-[500px] w-[450px] flex-row justify-center overflow-hidden">
          <WheelComponent
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
    </Main>
  );
};

export default Index;
