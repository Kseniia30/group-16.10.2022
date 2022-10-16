import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';
import PropTypes from 'prop-types';

import { CriptoHistoryItem } from './CriptoHistoryItem'

export const CryptoHistory = ({items}) => {
  return (<BaseTable>
    <THead>
      <tr>
        <Th>№</Th>
        <Th>PRICE</Th>
        <Th>AMOUNT</Th>
        <Th>DATE</Th>
      </tr>
    </THead>
  
    <tbody>
      {items.map(item => (
        <CriptoHistoryItem key={item.id} item={item} />
      ))}
    </tbody>
  </BaseTable>);
};

CryptoHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ),
};
