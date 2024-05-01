import styled, { css } from 'styled-components';
import { useRef, useState } from 'react';
import TabsButton from './TabsButton.jsx';
import TabsList from './TabsList.jsx';

const StyledTabs = styled.div`
  position: relative;
`;

function Tabs() {
  const [showRightBtn, setShowRightBtn] = useState(true);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const listRef = useRef();

  function handleScrollRight() {
    listRef.current.scrollLeft += 400;
  }

  function handleScrollLeft() {
    listRef.current.scrollLeft -= 400;
  }

  // Toggles buttons visibility when list is scrolled
  function listenScroll(e) {
    const listEl = e.target;

    // Toggle right button
    const remainingSpace =
      listEl.scrollWidth -
      listEl.scrollLeft -
      listEl.getBoundingClientRect().width;

    if (remainingSpace < 40) setShowRightBtn(false);
    else setShowRightBtn(true);

    // Toggle left button
    if (listEl.scrollLeft < 40) setShowLeftBtn(false);
    else setShowLeftBtn(true);
  }

  return (
    <StyledTabs>
      <TabsButton
        isVisible={showLeftBtn}
        position="left"
        onClick={handleScrollLeft}
      />
      <TabsButton
        isVisible={showRightBtn}
        position="right"
        onClick={handleScrollRight}
      />

      <TabsList ref={listRef} onScroll={listenScroll} />
    </StyledTabs>
  );
}

export default Tabs;
