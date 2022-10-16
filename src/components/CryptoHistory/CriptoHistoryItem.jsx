
import PropTypes from 'prop-types';
import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';




export const CriptoHistoryItem = function ({ item }) {
    return (
        <Tr key={item.id}>
        <Td>{item.id}</Td>
        <Td>{item.price}</Td>
        <Td>{item.amount}</Td>
        <Td>{item.date}</Td>
        </Tr>
    );
};

CriptoHistoryItem.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        })
    ),
};