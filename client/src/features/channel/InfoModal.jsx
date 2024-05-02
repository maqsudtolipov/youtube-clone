import Modal from '../../components/Modal/Modal.jsx';
import Button from '../../components/Button/Button.jsx';

const InfoModal = () => {
  return (
    <Modal>
      <Modal.Open name="info">
        <Button color="gray" bordered={true}>
          More Info
        </Button>
      </Modal.Open>
      <Modal.Body name="info">
        <p>
          Hay! My name is Cody, otherwise known as ChosenArchitect. I'm a
          Content Creator, Photographer, YouTuber & have been a gaming
          enthusiast for over 15 years now. I love Minecraft and other survival
          games that challenge my mind. I have a wife who loves to game just as
          much as I do and 3 beautiful little girls! I live in the USA and am in
          my early 30s. I want to welcome you to my channel! This is where we
          will explore and master the world. So come and join me and stick
          around.
          <br />
          <br />
          My goals:
          <br />
          1. My goal is to upload a video every day.
          <br />
          2. Interact with my audience.
          <br />
          3. Upload good content.
          <br />
          4. Take feedback from you to use in the future.
          <br />
          5. Make all you guys smile!
          <br />
          <br />
          Links Twitter - https://twitter.com/ChosenArchitect Twitch -
          https://www.twitch.tv/chosenarchitect
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default InfoModal;
