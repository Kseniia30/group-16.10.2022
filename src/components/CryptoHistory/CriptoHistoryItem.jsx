import PropTypes from 'prop-types';
import { result } from './FormatDate';
import { Tr, Td } from './CryptoHistory.styled';




export const CriptoHistoryItem = function ({ item }) {
    return (
        <Tr>
        <Td>{item.id}</Td>
        <Td>{item.price}</Td>
        <Td>{item.amount}</Td>
        <Td>{result(item.date)}</Td>
        </Tr>
    );
};

CriptoHistoryItem.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        amount: PropTypes.number.isRequired,
        date: PropTypes.string.isRequired,
        })
    ),
};