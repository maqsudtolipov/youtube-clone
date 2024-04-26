import { RiSearchLine } from 'react-icons/ri';
import styled from 'styled-components';

const StyledSearchForm = styled.form`
  position: relative;
  flex: 1;
  display: flex;

  & #search-icon {
    position: absolute;
    left: 1.6rem;
    top: 50%;
    transform: translateY(-70%);
    display: none;

    font-size: 2rem;
    z-index: 9999;
  }
`;

const SearchInput = styled.input`
  padding: 0 0.4rem 0 1.6rem;
  margin-left: 3.2rem;

  flex: 1;

  font-size: 1.6rem;
  color: #ffffffe0;
  background-color: #121212;
  border: 1px solid var(--color-border);
  outline: none;
  border-radius: 4rem 0 0 4rem;

  &:focus {
    padding: 0 0.4rem 0 4.8rem;
    margin-left: 0;
    border: 1px solid #1c62b9;
  }

  &:focus + #search-icon {
    display: inline-block;
  }
`;

const SearchButton = styled.button`
  height: 4rem;
  width: 6.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid var(--color-border);
  border-left: 0;
  border-radius: 0 40px 40px 0;

  svg {
    color: var(--color-white);
  }
`;

function SearchForm() {
  return (
    <StyledSearchForm>
      <SearchInput placeholder="Search" />
      <RiSearchLine id="search-icon" />

      <SearchButton>
        <RiSearchLine />
      </SearchButton>
    </StyledSearchForm>
  );
}

export default SearchForm;
