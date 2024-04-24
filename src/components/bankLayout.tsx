import React from 'react';
import SearchBar from './search';
import BankList from './list';
import { BankPageProps } from '../values/interface';
import useBankHandler from '../hooks/useBankHandler';
import styles from "@/styles/Home.module.css"

const BankLayout: React.FC<BankPageProps> = ({ bankList }) => {
  const { filteredBankList, handleSearch, handleDelete } = useBankHandler(bankList);

  return (
    <div className={styles.layout}>
      <SearchBar onSearch={handleSearch} bankList={bankList} />
      <BankList bankList={filteredBankList} onDelete={handleDelete} />
    </div>
  );
};

export default BankLayout;
