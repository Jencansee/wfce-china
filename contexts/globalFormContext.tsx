import { PropsWithChildren, createContext, useState, useContext } from 'react';

interface IGlobalContextProps {
  isModalActive: string;
  setModal: (S: string) => void;
}

export const GlobalContext = createContext<IGlobalContextProps>({
  isModalActive: '',
  setModal: () => {},
});

export const GlobalContextProvider = ({ children }: PropsWithChildren) => {
  const [modal, toggleModal] = useState('');

  return (
    <GlobalContext.Provider
      value={{
        isModalActive: modal,
        setModal: toggleModal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);