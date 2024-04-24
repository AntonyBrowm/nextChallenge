import React from 'react';
import { BankListProps} from '../values/interface';
import styles from '@/styles/Home.module.css'


const List: React.FC<BankListProps> = ({ bankList, onDelete }) => {
  return (
    <ul>
      {bankList.map((bank, index) => (
         <div className={styles.BankCard} key={index}>
            <h2>{bank.bankName}</h2>
            <p>{bank.description}</p>
            <button onClick={() => onDelete(bank.bankName)}>Delete</button>
         </div>
      ))}
    </ul>
  );
};

export default List;
