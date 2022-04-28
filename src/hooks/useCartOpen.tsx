import React, { createContext, useContext, useState, FC } from 'react';

import { CartOpenCtxProps } from '@hooks/types';

const CartOpenContext = createContext({} as CartOpenCtxProps);

export const CartOpenProvider: FC = ({ children }): JSX.Element => {
  const [isCartOpen, setCartOpen] = useState(false);

  return (
    <CartOpenContext.Provider value={{ isCartOpen, setCartOpen }}>
      {children}
    </CartOpenContext.Provider>
  );
};

export const useCartOpen = (): CartOpenCtxProps => {
  return useContext(CartOpenContext);
};
