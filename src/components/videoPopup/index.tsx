import React, {FC, memo, useRef} from "react";

import {Modal} from "@site/src/components/modal";
import {useClickOutside} from "@site/src/utils/useClickOutside";


import styles from './index.module.css';

interface IVideoPopup {
  handleClose: () => void;
}

const VideoPopup: FC<IVideoPopup>= memo(({ handleClose }) => {
  const videoPopupRef = useRef(null);

  useClickOutside(videoPopupRef, handleClose)

  return (
    <Modal>
      <div ref={videoPopupRef} className={styles.videoPopup}>
        <video src='/media/attrace-protocol.mp4' autoPlay controls />
        <button onClick={handleClose}>
          <img src='/img/icons/close.svg' alt='close' />
        </button>
      </div>
    </Modal>
  )
})

export default VideoPopup;