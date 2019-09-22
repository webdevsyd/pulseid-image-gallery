import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width : 768px) {
    flex-direction: row;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 15px;
  margin-bottom: 8px;
  @media only screen and (min-width : 768px) {
    width: 33%;
  }
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 4px;
  color: #343434;
`;

export const Select = styled.select`
  height: 40px;
  font-size: 18px;
  border-radius: 8px;
  outline: none;
  width: 100%;
  padding: 0 15px;
  @media only screen and (min-width : 768px) {
    width: auto;
  }
`;


export const FilterSubmit = styled.input`
  background-color: #ffab00;
  border: none;
  border-radius: 8px;
  width: 100%;
  height: 40px;
  margin-top: 30px;
  color: #FFF;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  @media only screen and (min-width : 768px) {
    width: 150px;
  }
`;
