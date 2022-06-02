/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useEffect, useState } from 'react';
import NavbarLayout from '@theme/Navbar/Layout';

import NavbarContent from './Content';

import styles from './Content/styles.module.css';

export default function Navbar() {
  const [isContained, showContained] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      currentOffset > 300 ? showContained(true) : showContained(false)
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return (
    <div className={isContained && styles.navBarContainerActive}>
      <NavbarLayout>
        <NavbarContent isContained={isContained} />
      </NavbarLayout>
    </div>
  );
}
