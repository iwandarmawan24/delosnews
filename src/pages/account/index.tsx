import useLocalStorageState from 'use-local-storage-state';

import { Meta } from '@/layouts/Meta';
import NAVBAR_DATA from '@/statics/NAVBAR_DATA';
import { Main } from '@/templates/Main';
import type UserDataType from '@/types/userDataType';

const Index = () => {
  const [userData] = useLocalStorageState<UserDataType>('userData');
  return (
    <Main
      meta={<Meta title="DelosNews" description="DelosNews" />}
      navbar={{
        navbarData: NAVBAR_DATA,
      }}
    >
      {userData ? (
        <div className="p-4">
          <h1 className="mb-4 text-2xl font-bold">Account Information</h1>
          <div className="rounded-md bg-white p-4 shadow-md">
            <p>
              <strong>Username:</strong> {userData.userName}
            </p>
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
            <p>
              <strong>Credit:</strong> {userData.credit}
            </p>
            {userData.luckyDraw && (
              <p>
                <strong>Lucky Draw:</strong> {userData.luckyDraw}
              </p>
            )}
          </div>
        </div>
      ) : (
        ''
      )}
    </Main>
  );
};

export default Index;
