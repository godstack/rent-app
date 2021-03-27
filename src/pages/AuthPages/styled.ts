import styled from 'styled-components';

export const StyledFormWrapper = styled.div`
  margin-top: 100px;
  width: 390px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  padding: 77px 55px 33px 55px;
  box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.5);
`;

export const StyledFormTitle = styled.div`
  font-size: 30px;
  color: #333333;
  text-align: center;
  margin-bottom: 26px;
`;

export const StyledLogo = styled.div`
  padding: 0 5px;
  border-radius: 5px;
  background-color: #333333;
  color: #fff;
  font-size: 2rem;
  width: fit-content;
  margin: 0 auto;
  margin-bottom: 20px;
`;

export const StyledInputWrapper = styled.div`
  position: relative;
  margin-bottom: 37px;
`;

export const StyledInput = styled.input`
  font-family: Poppins-Regular;
  font-size: 15px;
  color: #555555;
  line-height: 1.2;
  display: block;
  width: 100%;
  height: 45px;
  background: transparent;
  padding: 0 5px;
  outline: none;
  border: none;
  border-bottom: 2px solid #adadad;

  &::placeholder {
    font-size: 15px;
    color: #555555;
    line-height: 1.2;
    text-transform: uppercase;
  }
`;

export const StyledErrorMessage = styled.div`
  position: absolute;
  bottom: -30px;
  color: #e62922;
  font-size: 1.2rem;
`;

export const StyledSubmit = styled.button`
  width: 100%;
  cursor: pointer;
  padding: 14px 15px;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-shadow: 0 0 1px rgb(0 0 0 / 20%), 0 1px 0 rgb(0 0 0 / 20%);
  outline: none;
  border: none;
  border: 2px solid #f7ca18;
  background: #353535;
  transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
  margin-bottom: 15px;

  &:hover {
    background: #f7ca18;
    color: #353535;
  }
`;

export const StyledLink = styled.div`
  width: fit-content;
  margin: 0 auto;

  a {
    cursor: pointer;
    font-size: 1rem;
    color: #353535;
    text-decoration: none;
    transition: text-decoration 0.3s ease-in-out;

    &:hover {
      text-decoration: underline;
    }

    &:visited {
      color: #353535;
      text-decoration: none;
    }
  }
`;
