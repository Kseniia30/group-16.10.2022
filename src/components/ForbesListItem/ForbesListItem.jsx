import { BiDollarCircle } from 'react-icons/bi';
import { FcBullish, FcBearish } from 'react-icons/fc';
import { ForbesItem, Avatar, Name, Capital } from './ForbesListItem.styled';
import PropTypes from 'prop-types';
import { theme } from 'styles/theme';

export const ForbesListItem = ({avatar, name, capital, isIncrease}) => {
  return (
      <ForbesItem>
        <Avatar
          src={avatar}
          alt={name}
        />
        <Name>{name}</Name>
        <Capital>
        {capital} <BiDollarCircle color={theme.colors.accent} size={22} />
        {isIncrease ? <FcBullish/> : <FcBearish/>}
          {/* Тут має бути необхідна іконка зміни статку */}
        </Capital>
      </ForbesItem>
    );
};

ForbesListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  capital: PropTypes.number,
  isIncrease: PropTypes.bool
}