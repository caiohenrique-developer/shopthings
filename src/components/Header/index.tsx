import React, { useState } from 'react';
import { CgShoppingCart } from 'react-icons/cg';
import { FiSearch, FiUser } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import MediaQuery from 'react-responsive';

import Image from 'next/image';
import Link from 'next/link';

import CssBaseline from '@material-ui/core/CssBaseline';
import { Tooltip } from '@mui/material';
import { Sling as BurgerBtn } from 'hamburger-react';

import { totalProductCartManagerSelector } from '@store/selectors/productCartManager';

import { Cart } from '@components/Cart';
import { Container } from '@components/Header/styles';
import { ScrollPageProgressStatusBar } from '@components/ScrollPageProgressStatusBar';

import { useCartOpen } from '@hooks/useCartOpen';

import { responsiveBreakpoint } from '@utils/responsiveBreakpoint';

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const { isCartOpen, setCartOpen } = useCartOpen();
  const totalProductCart = useSelector(totalProductCartManagerSelector);

  const { desktop, tablet, mobile } = responsiveBreakpoint;

  return (
    <>
      <Container>
        {isCartOpen && <Cart />}

        <div className='app-container'>
          <Link href='/' passHref>
            <a data-tst='go-to-home'>
              <Image
                src='/assets/logotipo.png'
                alt='App logotipo'
                width={200}
                height={200}
                objectFit='cover'
              />
            </a>
          </Link>

          <MediaQuery minWidth={desktop.breakpoint.min}>
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
            minWidth={mobile.breakpoint.min}
            maxWidth={tablet.breakpoint.max}
          >
            {isMenuOpen && (
              <nav
                className='animate__animated animate__fadeInLeft'
                data-tst='responsive-navigation-menu'
              >
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
            <button type='button' disabled={isCartOpen} data-tst='burger-btn'>
              <MediaQuery
                minWidth={mobile.breakpoint.min}
                maxWidth={tablet.breakpoint.max}
              >
                <BurgerBtn
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
            <button type='button' disabled data-tst='my-account-btn'>
              <FiUser />
            </button>
            <button type='button' disabled data-tst='search-for-btn'>
              <FiSearch />
            </button>
            <Tooltip
              title={
                totalProductCart ? 'Product cart quantity' : 'Your bag is empty'
              }
              arrow
            >
              <button
                type='button'
                data-tst='cart-btn'
                disabled={isMenuOpen}
                onClick={() => setCartOpen(true)}
                className={
                  totalProductCart ? 'animate__animated animate__bounceIn' : ''
                }
              >
                <CgShoppingCart className={totalProductCart ? 'active' : ''} />
                {totalProductCart ? <span>{totalProductCart}</span> : <></>}
              </button>
            </Tooltip>
          </div>
        </div>
      </Container>

      <CssBaseline />
      <ScrollPageProgressStatusBar />
    </>
  );
};
