import styled from 'styled-components';

export const StyledForm = styled.form`
  position: fixed;
  top: calc(50% - 300px);
  left: 30px;
  padding: 20px;
  background-color: #ffb31c;
  width: 450px;
  box-shadow: 0 0 5px rgb(65, 65, 65);
`;

export const StyledInput = styled.input`
  border-radius: 3px;
  outline: none;
  border: 1px solid rgb(65, 65, 65);
  background-color: white;
  font-size: 0.8rem;
  text-align: left;
  color: rgb(65, 65, 65);
  padding: 3px 7px 3px 4px;

  margin: 0px 0px 15px;
`;

export const StyledSelect = styled.select`
  border-radius: 3px;
  outline: none;
  border: 1px solid rgb(65, 65, 65);
  background-color: white;
  font-size: 0.8rem;
  text-align: left;
  color: rgb(65, 65, 65);
  padding: 6px 15px 6px 7px;
  margin: 0px 0px 15px;
`;

export const StyledFormTitle = styled.div`
  width: fit-content;
  font-size: 1.1rem;
  color: #4285f4;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0 auto 15px;
`;

export const StyledLabel = styled.label`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 30% 30%;
  grid-gap: 10px;
`;

export const StyledInputText = styled.span`
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
`;

export const StyledDateInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const StyledSubmit = styled.button`
  cursor: pointer;
  border: none;
  text-decoration: none;
  display: inline-block;
  width: 140px;
  height: 45px;
  line-height: 45px;
  border-radius: 45px;
  margin: 10px 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8rem;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  font-weight: 600;
  color: #524f4e;
  background: white;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  outline: none;

  &:hover {
    background: #2ee59d;
    box-shadow: 0 15px 20px rgba(46, 229, 157, 0.4);
    color: white;
    transform: translateY(-7px);
  }
`;

export const StyledErrorMessage = styled.div`
  position: absolute;
  bottom: -7px;
  color: #e62922;
  font-size: 0.8rem;
`;
