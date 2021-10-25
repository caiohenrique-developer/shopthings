import React, { useState } from 'react';
import { CgShoppingCart } from 'react-icons/cg';
import { FiSearch, FiUser } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import MediaQuery from 'react-responsive';

import Image from 'next/image';
import Link from 'next/link';

import { Tooltip } from '@mui/material';
import { Sling as Hamburger } from 'hamburger-react';

import { productCartManagerSelector } from '@store/selectors/productCartManager';

import { Cart } from '@components/Cart';

import { useCartOpen } from '@hooks/useCartOpen';

import { responsiveBreakpoint } from '@utils/responsiveBreakpoint';

import { Container } from './styles';

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const { isCartOpen, setCartOpen } = useCartOpen();
  const productList = useSelector(productCartManagerSelector);

  const { desktop, tablet, mobile } = responsiveBreakpoint;

  return (
    <>
      <Container>
        {isCartOpen && <Cart />}

        <div className='app-container'>
          <Link href='/' passHref>
            <a>
              <Image
                src='/assets/logotipo.png'
                alt='App logotipo'
                width={200}
                height={200}
                objectFit='cover'
              />
            </a>
          </Link>

          <MediaQuery minDeviceWidth={desktop.breakpoint.min}>
            <nav>
              <ul>
                <li>
                  <Link href='#' passHref>
                    <a>New in</a>
                  </Link>
                </li>
                <li>
                  <Link href='#' passHref>
                    <a>Furniture</a>
                  </Link>
                </li>
                <li>
                  <Link href='#' passHref>
                    <a>Rest</a>
                  </Link>
                </li>
                <li>
                  <Link href='#' passHref>
                    <a>Decoration</a>
                  </Link>
                </li>
                <li>
                  <Link href='#' passHref>
                    <a>Outdoor</a>
                  </Link>
                </li>
                <li>
                  <Link href='#' passHref>
                    <a>Magazine</a>
                  </Link>
                </li>
                <li>
                  <Link href='#' passHref>
                    <a>Outlet</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </MediaQuery>

          <MediaQuery
            minDeviceWidth={mobile.breakpoint.min}
            maxDeviceWidth={tablet.breakpoint.max}
          >
            {isMenuOpen && (
              <nav className='animate__animated animate__fadeInLeft'>
                <ul>
                  <li>
                    <Link href='#' passHref>
                      <a>New in</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='#' passHref>
                      <a>Furniture</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='#' passHref>
                      <a>Rest</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='#' passHref>
                      <a>Decoration</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='#' passHref>
                      <a>Outdoor</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='#' passHref>
                      <a>Magazine</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='#' passHref>
                      <a>Outlet</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
          </MediaQuery>

          <div>
            <button type='button' disabled={isCartOpen}>
              <MediaQuery
                minDeviceWidth={mobile.breakpoint.min}
                maxDeviceWidth={tablet.breakpoint.max}
              >
                <Hamburger
                  toggled={isMenuOpen}
                  toggle={setMenuOpen}
                  rounded
                  size={20}
                  color={isMenuOpen ? '#ffffff' : '#ACAEAF'}
                  direction='right'
                  label='Show menu mobile'
                />
              </MediaQuery>
            </button>
            <button type='button' disabled>
              <FiUser />
            </button>
            <button type='button' disabled>
              <FiSearch />
            </button>
            <Tooltip
              title={
                productList.length > 0
                  ? 'Product cart quantity'
                  : 'Your bag is empty'
              }
              arrow
            >
              <button
                type='button'
                disabled={isMenuOpen}
                onClick={() => setCartOpen(true)}
                className={
                  productList.length > 0 &&
                  'animate__animated animate__bounceIn'
                }
              >
                <CgShoppingCart
                  className={productList.length > 0 && 'active'}
                />
                {productList.length > 0 && <span>{productList.length}</span>}
              </button>
            </Tooltip>
          </div>
        </div>
      </Container>
    </>
  );
};
