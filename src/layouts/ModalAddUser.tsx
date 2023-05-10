import { useEffect, useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';

import type UserDataType from '@/types/userDataType';

import Button from './Button';
import FormInput from './FormInput';
import Modal from './Modal';

const ModalAddUser = () => {
  const [userDataState, setUserDataState] = useState<UserDataType>({
    userName: '',
    email: '',
    credit: 100000,
    luckyDraw: 3,
  });
  const [userData, setUserData] =
    useLocalStorageState<UserDataType>('userData');
  const [validationErrors, setValidationErrors] = useState<{
    userNameError: string;
    emailError: string;
  }>({
    userNameError: '',
    emailError: '',
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    fieldName: keyof UserDataType
  ) => {
    const { value } = event.target;

    setUserDataState((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));

    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [`${fieldName}Error`]: '',
    }));
  };

  const validateFields = () => {
    const { userName, email } = userDataState;
    let valid = true;
    if (userName && email) {
      if (userName.length < 6) {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          userNameError: 'Username should have at least 6 characters',
        }));
        valid = false;
      }

      if (!/^\S+@\S+\.\S+$/.test(email)) {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          emailError: 'Invalid email format',
        }));
        valid = false;
      }
    }
    return valid;
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (validateFields()) {
      // Perform submission or further actions
      setUserData(userDataState);
      closeModal();
    }
  };
  useEffect(() => {
    if (!userData || userData.userName === '') {
      openModal();
    }
  }, []);
  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <div className="flex w-[350px] flex-col items-center">
        <p className="text-lg font-bold">Make Your Account</p>
        <form
          onSubmit={handleSubmit}
          className="flex w-[100%] flex-col items-center"
        >
          <FormInput
            name="username"
            label="Username"
            value={userDataState.userName}
            onChange={(e) => handleInputChange(e, 'userName')}
            errorMessage={validationErrors.userNameError}
          />
          <FormInput
            name="email"
            label="Email"
            value={userDataState.email}
            onChange={(e) => handleInputChange(e, 'email')}
            errorMessage={validationErrors.emailError}
          />
          <Button text="Create User" type="submit" />
        </form>
      </div>
    </Modal>
  );
};

export default ModalAddUser;
