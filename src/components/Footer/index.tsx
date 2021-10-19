import React from 'react';

import Link from 'next/link';

import { Container } from './styles';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const year = currentYear > 2021 ? `2021 - ${currentYear}` : currentYear;

  return (
    <>
      <Container>
        <div className='app-container'>
          <nav>
            <ul>
              <h4>Televisions &#38; Home Theater</h4>
              <li>
                <Link href='#' passHref>
                  <a>Televisions</a>
                </Link>
              </li>
              <li>
                <Link href='#' passHref>
                  <a>Home Theater &#38; Sound Bars</a>
                </Link>
              </li>
              <li>
                <Link href='#' passHref>
                  <a>Projectors</a>
                </Link>
              </li>
              <li>
                <Link href='#' passHref>
                  <a>Blu-ray &#38; DVD Players</a>
                </Link>
              </li>
            </ul>

            <ul>
              <h4>Audio</h4>
              <li>
                <Link href='#' passHref>
                  <a>Headphones</a>
                </Link>
              </li>
              <li>
                <Link href='#' passHref>
                  <a>MP3 Players</a>
                </Link>
              </li>
              <li>
                <Link href='#' passHref>
                  <a>Wireless Speakers</a>
                </Link>
              </li>
              <li>
                <Link href='#' passHref>
                  <a>High-Resolution Audio</a>
                </Link>
              </li>
            </ul>

            <ul>
              <h4>Cameras</h4>
              <li>
                <Link href='#' passHref>
                  <a>Interchangeable-lens Camera</a>
                </Link>
              </li>
              <li>
                <Link href='#' passHref>
                  <a>Lenses</a>
                </Link>
              </li>
              <li>
                <Link href='#' passHref>
                  <a>Compact Cameras</a>
                </Link>
              </li>
              <li>
                <Link href='#' passHref>
                  <a>Lens-Style Cameras</a>
                </Link>
              </li>
            </ul>

            <ul>
              <h4>Mobile, Tablets &#38; Smart Devices</h4>
              <li>
                <Link href='#' passHref>
                  <a>Cell Phones</a>
                </Link>
              </li>
              <li>
                <Link href='#' passHref>
                  <a>Tablets</a>
                </Link>
              </li>
              <li>
                <Link href='#' passHref>
                  <a>Wearable Technology</a>
                </Link>
              </li>
              <li>
                <Link href='#' passHref>
                  <a>Digital Paper</a>
                </Link>
              </li>
            </ul>
          </nav>

          <nav>
            <ul>
              <h4>Video Cameras</h4>
              <li>
                <Link href='#' passHref>
                  <a>Camcorders</a>
                </Link>
              </li>
              <li>
                <Link href='#' passHref>
                  <a>Action Cameras</a>
                </Link>
              </li>
              <li>
                <Link href='#' passHref>
                  <a>Music Video Recorders</a>
                </Link>
              </li>
              <li>
                <Link href='#' passHref>
                  <a>Professional Camcorders</a>
                </Link>
              </li>
            </ul>

            <ul>
              <h4>Car &#38; Marine</h4>
              <li>
                <Link href='#' passHref>
                  <a>In-Car Receivers &#38; Players</a>
                </Link>
              </li>
              <li>
                <Link href='#' passHref>
                  <a>In-Car Speakers &#38; Amplifiers</a>
                </Link>
              </li>
              <li>
                <Link href='#' passHref>
                  <a>Marine Audio</a>
                </Link>
              </li>
              <li>
                <Link href='#' passHref>
                  <a>Automotive OEM Audio</a>
                </Link>
              </li>
            </ul>

            <ul>
              <h4>Energy, Storage &#38; Cables</h4>
              <li>
                <Link href='#' passHref>
                  <a>Batteries</a>
                </Link>
              </li>
              <li>
                <Link href='#' passHref>
                  <a>Memory Cards &#38; Flash Drivers</a>
                </Link>
              </li>
              <li>
                <Link href='#' passHref>
                  <a>Cables</a>
                </Link>
              </li>
            </ul>
          </nav>

          <p>
            Copyright &copy; {year} $hopthings, done with ☕ by:{' '}
            <Link
              href='https://github.com/caiohenrique-developer/shopthings'
              passHref
            >
              <a target='_blank' rel='noreferrer'>
                caiohenrique-developer
              </a>
            </Link>
            .
          </p>
        </div>
      </Container>
    </>
  );
};
