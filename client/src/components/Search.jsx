import styled from 'styled-components';
import CircleButton from './Button/CircleButton.jsx';
import { RiMicFill } from 'react-icons/ri';
import SearchForm from './SearchForm.jsx';

const StyledSearch = styled.div`
  flex: 0 1 72rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

function Search() {
  return (
    <StyledSearch>
      <SearchForm />
      <CircleButton $gray title="Search with your voice" icon={<RiMicFill />} />
    </StyledSearch>
  );
}

export default Search;
