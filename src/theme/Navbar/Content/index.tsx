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

import Logo from "@site/static/img/logo.svg";
import Button from "../../../components/button";

import styles from './styles.module.css';

function useNavbarItems() {
  return useThemeConfig().navbar.items;
}

function NavbarItems({items}) {
  return (
    <>
      {items.map((item, i) => (
        <NavbarItem {...item} key={i} />
      ))}
    </>
  );
}

function NavbarContentLayout({left, right}) {
  return (
    <div className="navbar__inner">
      <div className="navbar__items">{left}</div>
      <div className="navbar__items navbar__items--right">{right}</div>
    </div>
  );
}

export default function NavbarContent() {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);
  const autoAddSearchBar = !items.some((item) => item.type === 'search');
  return (
    <NavbarContentLayout
      left={
        <>
          {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
          <a href="/" ><Logo className={styles.logo}/></a>
          <NavbarItems items={leftItems} />
        </>
      }
      right={
        <>
           <a href="#" target="_blank" className={styles.enterAppBtn}>
            <Button variant="secondary">Enter App</Button>
          </a>
          <NavbarItems items={rightItems} />
          <NavbarColorModeToggle className={styles.colorModeToggle} />
          {autoAddSearchBar && <SearchBar />}
        </>
      }
    />
  );
}
