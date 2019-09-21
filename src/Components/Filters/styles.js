import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Wrapper = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  margin-right: 15px;
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
  border-radius: 12px;
  outline: none;
`;


export const FilterSubmit = styled.input`
  background-color: #ffab00;
  border: none;
  border-radius: 8px;
  width: 150px;
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
`;
