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
            <button type='button' disabled>
              <FiUser />
            </button>
            <button type='button' disabled>
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
