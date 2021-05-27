import { FC } from 'react';
import { ICommonAnnouncement } from 'RentApi';
import {
  StyledCommonText,
  StyledName,
  StyledValueText,
  StyledWrapper,
  StyledAgeWrapper,
  StyledGenderWrapper,
  StyledNumberWrapper,
  StyledDescription,
  StyledProgressWrapper,
  StyledProgress,
  StyledLine,
  StyledWhiteText,
  StyledSmallTest
} from './styled';

interface IProps {
  announcement: ICommonAnnouncement;
}

const CommonAnnouncement: FC<IProps> = ({ announcement }) => {
  return (
    <StyledWrapper>
      <StyledName>
        {announcement.name} {announcement.surname}
      </StyledName>
      <StyledAgeWrapper>
        <StyledCommonText>Вік:</StyledCommonText>
        <StyledValueText>{announcement.age}</StyledValueText>
      </StyledAgeWrapper>
      <StyledGenderWrapper>
        <StyledCommonText>Стать:</StyledCommonText>
        <StyledValueText>{announcement.sex}</StyledValueText>
      </StyledGenderWrapper>
      <StyledNumberWrapper>
        <StyledCommonText>Телефон:</StyledCommonText>
        <StyledValueText>{announcement.phone}</StyledValueText>
      </StyledNumberWrapper>
      <StyledDescription>{announcement.review}</StyledDescription>
      <StyledLine />
      <StyledProgressWrapper>
        <StyledProgress progress={announcement.compability}>
          <StyledWhiteText>{announcement.compability}</StyledWhiteText>
        </StyledProgress>
        <StyledSmallTest>Коефіцієнт сумістності</StyledSmallTest>
      </StyledProgressWrapper>
    </StyledWrapper>
  );
};

export default CommonAnnouncement;
