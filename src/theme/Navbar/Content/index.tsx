/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import NavbarItem from '@theme/NavbarItem';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import SearchBar from '@theme/SearchBar';
import {
  splitNavbarItems,
  useNavbarMobileSidebar,
  useThemeConfig,
} from '@docusaurus/theme-common';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';

import Button from "../../../components/button";
import getAppUrl from "../../../utils/getAppUrl";

import styles from './styles.module.css';

function useNavbarItems() {
  return useThemeConfig().navbar.items;
}

function NavbarItems({ items }) {
  return (
    <>
      {items.map((item, i) => (
        <NavbarItem {...item} key={i} />
      ))}
    </>
  );
}

function NavbarContentLayout({ left, center, right }) {
  return (
    <div className="navbar__inner">
      <div className="navbar__items">{left}</div>
      <div className="navbar__items">{center}</div>
      <div className="navbar__items">{right}</div>
    </div>
  );
}

export default function NavbarContent({ isContained }) {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);
  const autoAddSearchBar = !items.some((item) => item.type === 'search');
  return (
    <NavbarContentLayout
      left={
        <a href="/" > <img className={styles.logo} src='/img/attrace-logo.png' /></a>
      }
      center={
        <NavbarItems items={leftItems} />
      }
      right={
        <>
          <a href={getAppUrl()} target="_blank" className={styles.enterAppBtn}>
            <Button variant="secondary" className={isContained && styles.btnByScroll}>Enter App</Button>
          </a>
          <a href={getAppUrl()} target="_blank" className={styles.enterAppBtnMobile}>
            <Button variant="primary">Enter App</Button>
          </a>
          <div className={styles.menuBtnMobile}>
            {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
          </div>
          <NavbarItems items={rightItems} />
          <NavbarColorModeToggle className={styles.colorModeToggle} />
          {autoAddSearchBar && <SearchBar />}
        </>
      }
    />
  );
}
