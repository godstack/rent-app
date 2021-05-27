import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: 860px;

  background: #ffffff;
  box-shadow: 0px 4px 33px rgba(209, 224, 255, 0.42);
  display: grid;
  padding: 25px 90px;
  grid-template-areas:
    'name name name line progress'
    'age gender number line progress'
    'description description description line progress';
  grid-template-columns: repeat(4, 1fr) 150px;
  grid-template-rows: 30px 20px 1fr;

  gap: 15px 32px;
`;

export const StyledName = styled.div`
  grid-area: name;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  color: #1c1938;
`;

export const StyledCommonText = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: #1c1938;
`;

export const StyledValueText = styled(StyledCommonText)`
  font-weight: 500;
`;

export const StyledAgeWrapper = styled.div`
  grid-area: age;
  display: flex;
  gap: 5px;
`;

export const StyledGenderWrapper = styled.div`
  grid-area: gender;
  display: flex;
  gap: 5px;
`;

export const StyledNumberWrapper = styled.div`
  grid-area: number;
  display: flex;
  gap: 5px;
`;

export const StyledDescription = styled(StyledCommonText)`
  grid-area: description;
`;

export const StyledLine = styled.div`
  grid-area: line;
  height: 100%;
  justify-self: center;
  width: 1px;
  background: #f2f2f2;
`;

export const StyledProgressWrapper = styled.div`
  grid-area: progress;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7px;
`;

export const StyledProgress = styled.div<{ progress: number }>`
  position: relative;
  width: 75px;
  height: 114px;
  background: #f4f2f2;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: '';
    display: block;
    position: absolute;
    background: #3fbeda;
    border-radius: 0px 0px 10px 10px;
    bottom: 0;
    left: 0;
    width: 100%;
    height: ${({ progress }) => `${progress}%`};
  }
`;

export const StyledWhiteText = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  z-index: 1;
  color: #ffffff;
`;

export const StyledSmallTest = styled(StyledCommonText)`
  font-size: 12px;
`;
