import React, { useState } from 'react';
import {SearchBarProps } from '../values/interface';
import styles from  "../styles/Home.module.css"


const SearchBar: React.FC<SearchBarProps> = ({ onSearch, bankList }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
    const filteredBanks = bankList.filter(bank =>
      bank.bankName.toLowerCase().includes(value.toLowerCase())
    );
    onSearch(value, filteredBanks);
  };

  return (
    <div className={styles.SearchBar}>
      <input type="text" value={searchTerm} onChange={handleChange} placeholder="Search by bank name" />
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
