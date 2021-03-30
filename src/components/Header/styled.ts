import styled from 'styled-components';

export const StyledHeader = styled.header`
  min-height: 55px;
  padding: 0 30px;
  background-color: #fff;
  box-shadow: 1px 2px 5px 0 rgb(0 0 0 / 26%);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLogo = styled.div`
  font-size: 2rem;
  color: #1962c2;
`;

export const StyledExitButton = styled.div`
  cursor: pointer;
  background: #fcf8ed;
  text-decoration: none;
  display: inline-block;
  margin: 10px 20px;
  padding: 10px 30px;
  position: relative;
  border: 2px solid #bd0606;
  color: #bd0606;
  font-family: 'Montserrat', sans-serif;
  transition: 0.4s;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    margin: auto;
    border: 2px solid rgba(0, 0, 0, 0);
    transition: 0.4s;
  }
  &:hover:after {
    border-color: #bd0606;
    width: calc(100% - 10px);
    height: calc(100% + 10px);
  }
`;
