/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { CgShoppingCart } from 'react-icons/cg';
import { FiSearch, FiUser } from 'react-icons/fi';

import Image from 'next/image';
import Link from 'next/link';

import { Container } from './styles';

export const Header = () => {
  return (
    <>
      <Container>
        <div className='header-container'>
          <Image
            src='/assets/logotipo.png'
            alt='App logotipo'
            width={200}
            height={200}
            objectFit='cover'
          />

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

          <div>
            <button type='button'>
              <FiUser />
            </button>
            <button type='button'>
              <FiSearch />
            </button>
            <button type='button'>
              <CgShoppingCart />
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};
