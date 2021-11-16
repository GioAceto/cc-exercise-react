import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import ReactPlayer from "react-player";

const VideoModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
      </Modal.Header>
      <Modal.Body>
        <div className='player-wrapper'>
          <ReactPlayer
            url='https://player.vimeo.com/video/554279132'
            controls={true}
            playing={true}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default VideoModal