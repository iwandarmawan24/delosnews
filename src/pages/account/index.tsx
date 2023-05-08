import { useState } from 'react';

import { Meta } from '@/layouts/Meta';
import NAVBAR_DATA from '@/statics/NAVBAR_DATA';
import { Main } from '@/templates/Main';

const Index = () => {
  const [tabActive, setTabActive] = useState('most-emailed');

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
      <ul className="sticky top-[57px]	z-30 mb-4 flex flex-row items-center justify-between border-y-4 border-double border-black bg-white p-2	transition-all duration-300 ease-in">
        {[
          {
            name: 'Most Emailed',
            key: 'most-emailed',
          },
          {
            name: 'Most Shared',
            key: 'most-shared',
          },
          {
            name: 'Most Viewed',
            key: 'most-viewed',
          },
        ].map((data) => (
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
      <div className="flex w-[100%] flex-row flex-wrap justify-between gap-2">
        <div className="flex w-[100%] animate-pulse flex-row flex-wrap justify-between gap-[1%]">
          <div className="min-md:[49%] min-h-[200px] w-[100%] bg-gray-300 md:w-[50%]" />
          <div className="mt-2 flex w-[100%] flex-row md:mt-0 md:w-[49%] md:flex-col md:gap-2">
            <div className="flex w-[50%] flex-col space-y-2 md:w-[100%]">
              <div className="h-8 w-11/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-10/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-9/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-9/12 rounded-md bg-gray-300 " />
            </div>
            <div className="flex w-[50%] flex-col space-y-2 md:w-[100%]">
              <div className="h-8 w-11/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-10/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-9/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-9/12 rounded-md bg-gray-300 " />
            </div>
          </div>
        </div>

        <div className=" flex w-[100%] animate-pulse flex-row justify-between gap-2 md:w-[49%]">
          <div className="min-h-[60px] w-[50%]  bg-gray-300" />
          <div className="w-[50%]">
            <div className="flex flex-col space-y-2">
              <div className="h-8 w-11/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-10/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-9/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-9/12 rounded-md bg-gray-300 " />
            </div>
          </div>
        </div>
        <div className=" flex w-[100%] animate-pulse flex-row justify-between gap-2 md:w-[49%]">
          <div className="min-h-[60px] w-[50%]  bg-gray-300" />
          <div className="w-[50%]">
            <div className="flex flex-col space-y-2">
              <div className="h-8 w-11/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-10/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-9/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-9/12 rounded-md bg-gray-300 " />
            </div>
          </div>
        </div>
        <div className=" flex w-[100%] animate-pulse flex-row justify-between gap-2 md:w-[49%]">
          <div className="min-h-[60px] w-[50%]  bg-gray-300" />
          <div className="w-[50%]">
            <div className="flex flex-col space-y-2">
              <div className="h-8 w-11/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-10/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-9/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-9/12 rounded-md bg-gray-300 " />
            </div>
          </div>
        </div>
        <div className=" flex w-[100%] animate-pulse flex-row justify-between gap-2 md:w-[49%]">
          <div className="min-h-[60px] w-[50%]  bg-gray-300" />
          <div className="w-[50%]">
            <div className="flex flex-col space-y-2">
              <div className="h-8 w-11/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-10/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-9/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-9/12 rounded-md bg-gray-300 " />
            </div>
          </div>
        </div>
        <div className=" flex w-[100%] animate-pulse flex-row justify-between gap-2 md:w-[49%]">
          <div className="min-h-[60px] w-[50%]  bg-gray-300" />
          <div className="w-[50%]">
            <div className="flex flex-col space-y-2">
              <div className="h-8 w-11/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-10/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-9/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-9/12 rounded-md bg-gray-300 " />
            </div>
          </div>
        </div>
        <div className=" flex w-[100%] animate-pulse flex-row justify-between gap-2 md:w-[49%]">
          <div className="min-h-[60px] w-[50%]  bg-gray-300" />
          <div className="w-[50%]">
            <div className="flex flex-col space-y-2">
              <div className="h-8 w-11/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-10/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-9/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-9/12 rounded-md bg-gray-300 " />
            </div>
          </div>
        </div>
        <div className=" flex w-[100%] animate-pulse flex-row justify-between gap-2 md:w-[49%]">
          <div className="min-h-[60px] w-[50%]  bg-gray-300" />
          <div className="w-[50%]">
            <div className="flex flex-col space-y-2">
              <div className="h-8 w-11/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-10/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-9/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-9/12 rounded-md bg-gray-300 " />
            </div>
          </div>
        </div>
        <div className=" flex w-[100%] animate-pulse flex-row justify-between gap-2 md:w-[49%]">
          <div className="min-h-[60px] w-[50%]  bg-gray-300" />
          <div className="w-[50%]">
            <div className="flex flex-col space-y-2">
              <div className="h-8 w-11/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-10/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-9/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-9/12 rounded-md bg-gray-300 " />
            </div>
          </div>
        </div>
        <div className=" flex w-[100%] animate-pulse flex-row justify-between gap-2 md:w-[49%]">
          <div className="min-h-[60px] w-[50%]  bg-gray-300" />
          <div className="w-[50%]">
            <div className="flex flex-col space-y-2">
              <div className="h-8 w-11/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-10/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-9/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-9/12 rounded-md bg-gray-300 " />
            </div>
          </div>
        </div>
        <div className=" flex w-[100%] animate-pulse flex-row justify-between gap-2 md:w-[49%]">
          <div className="min-h-[60px] w-[50%]  bg-gray-300" />
          <div className="w-[50%]">
            <div className="flex flex-col space-y-2">
              <div className="h-8 w-11/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-10/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-9/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-9/12 rounded-md bg-gray-300 " />
            </div>
          </div>
        </div>
        <div className=" flex w-[100%] animate-pulse flex-row justify-between gap-2 md:w-[49%]">
          <div className="min-h-[60px] w-[50%]  bg-gray-300" />
          <div className="w-[50%]">
            <div className="flex flex-col space-y-2">
              <div className="h-8 w-11/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-10/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-9/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-9/12 rounded-md bg-gray-300 " />
            </div>
          </div>
        </div>
        <div className=" flex w-[100%] animate-pulse flex-row justify-between gap-2 md:w-[49%]">
          <div className="min-h-[60px] w-[50%]  bg-gray-300" />
          <div className="w-[50%]">
            <div className="flex flex-col space-y-2">
              <div className="h-8 w-11/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-10/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-9/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-9/12 rounded-md bg-gray-300 " />
            </div>
          </div>
        </div>
        <div className=" flex w-[100%] animate-pulse flex-row justify-between gap-2 md:w-[49%]">
          <div className="min-h-[60px] w-[50%]  bg-gray-300" />
          <div className="w-[50%]">
            <div className="flex flex-col space-y-2">
              <div className="h-8 w-11/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-10/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-9/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-9/12 rounded-md bg-gray-300 " />
            </div>
          </div>
        </div>
        <div className=" flex w-[100%] animate-pulse flex-row justify-between gap-2 md:w-[49%]">
          <div className="min-h-[60px] w-[50%]  bg-gray-300" />
          <div className="w-[50%]">
            <div className="flex flex-col space-y-2">
              <div className="h-8 w-11/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-10/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-9/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-9/12 rounded-md bg-gray-300 " />
            </div>
          </div>
        </div>
        <div className=" flex w-[100%] animate-pulse flex-row justify-between gap-2 md:w-[49%]">
          <div className="min-h-[60px] w-[50%]  bg-gray-300" />
          <div className="w-[50%]">
            <div className="flex flex-col space-y-2">
              <div className="h-8 w-11/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-10/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-9/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-9/12 rounded-md bg-gray-300 " />
            </div>
          </div>
        </div>
        <div className=" flex w-[100%] animate-pulse flex-row justify-between gap-2 md:w-[49%]">
          <div className="min-h-[60px] w-[50%]  bg-gray-300" />
          <div className="w-[50%]">
            <div className="flex flex-col space-y-2">
              <div className="h-8 w-11/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-10/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-9/12 rounded-md bg-gray-300 " />
              <div className="h-4 w-9/12 rounded-md bg-gray-300 " />
            </div>
          </div>
        </div>
      </div>
      {tabActive}
    </Main>
  );
};

export default Index;
