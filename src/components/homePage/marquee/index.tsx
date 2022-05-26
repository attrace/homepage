import React,{ FC, useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

import styles from "./styles.module.css";

const MobileMarquee: FC = () => {
  const [playing, setPlaying] = useState(true);
  const [delta, setDelta] = useState(1100);
  useEffect(() => {
    let index = 0
    let timer = setInterval(() => {
      index++
      if (index % 2 === 1) setPlaying(true)
      else setPlaying(false)
    }, delta)
    return () => clearInterval(timer)
  }, [])
  return (
    <Marquee className={styles.marqueeMobile} speed={50} play={playing}>
      <div><img src="img/partners/mobile/1.png" /></div>
      <div><img src="img/partners/mobile/2.png" /></div>
      <div><img src="img/partners/mobile/3.png" /></div>
      <div><img src="img/partners/mobile/4.png" /></div>
      <div><img src="img/partners/mobile/5.png" /></div>
      <div><img src="img/partners/mobile/6.png" /></div>
    </Marquee>
  )
}

export default MobileMarquee
