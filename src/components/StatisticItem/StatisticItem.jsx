
import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';

export const StatisticItem = ({ stats: {total, title, id}, icon}) => {
  return (
    <>
      
      <StatisticBox key={id}>
        {icon}
    <StatisticCounter>{total}</StatisticCounter>
    <StatisticText>{title}</StatisticText>
      </StatisticBox>
    </>)
};
