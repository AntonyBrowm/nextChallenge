import { useState } from 'react';
import { BankObject } from '../values/interface';

const useBankHandler = (initialBankList: BankObject[]) => {
  const [filteredBankList, setFilteredBankList] = useState<BankObject[]>(initialBankList);

  const handleSearch = (term: string, bankList: BankObject[]) => {
    const filteredBanks = bankList.filter(bank =>
      bank.bankName.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredBankList(filteredBanks);
  };

  const handleDelete = (bankName: string) => {
    const updatedList = filteredBankList.filter(bank => bank.bankName !== bankName);
    setFilteredBankList(updatedList);
  };

  return { filteredBankList, handleSearch, handleDelete };
};

export default useBankHandler;
