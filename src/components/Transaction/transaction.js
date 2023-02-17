import PropTypes from 'prop-types';
import css from "./transaction.module.css";


export const TransactionHistory  = ({ items }) => {
  return(
    <table className={css.transactionTable}>
      <thead>
       <tr >
        <th >Type</th>
        <th >Amount</th>
        <th >Currency</th>
       </tr>
      </thead> 
          
     <tbody>
       {items.map(item => (
            <tr className={css.transactionBody} key={item.id}>
              <td className={css.transactionTd}>{item.type}</td>
              <td className={css.transactionTd}>{item.amount}</td>
              <td className={css.transactionTd}>{item.currency}</td>
            </tr>
        ))}
     </tbody>       
    </table>
  );
 };
                  
                  
  TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
