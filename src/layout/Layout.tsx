import React from 'react';
import {Navbar} from './Navbar'
import {Box} from "@material-ui/core";
import {NavAccordion} from "./NavAccordion";
import styles from 'src/styles/Nav.module.scss';

export default function Layout({ children }: {children: React.ReactNode}) {
  return (
    <>
      <Navbar />
      <Box className={styles.nav}>
        <Box className={styles.navAccordion}>
          <NavAccordion />
        </Box>

        <main>{ children }</main>
      </Box>
    </>
  )
}
