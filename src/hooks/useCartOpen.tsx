import React, { createContext, useContext, useState, FC } from 'react';

const CartOpenContext = createContext({} as CartOpenCtxProps);

type CartOpenCtxProps = {
  isCartOpen: boolean;
  setCartOpen(isCartOpen: boolean): void;
};

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
