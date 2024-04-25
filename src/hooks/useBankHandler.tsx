import { useState } from 'react';
import  useStore  from './store';
import { BankObject } from '../values/interface';

const useBankHandler = () => {
  const { bankList, setBankList } = useStore();
  const [filteredBankList, setFilteredBankList] = useState<BankObject[]>(bankList);

  const handleSearch = (term: string) => {
    const filteredBanks = bankList.filter(bank =>
      bank.bankName.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredBankList(filteredBanks);
  };

  const handleDelete = (bankName: string) => {
    const updatedList = filteredBankList.filter(bank => bank.bankName !== bankName);
    setFilteredBankList(updatedList);
    setBankList(updatedList);
  };

  return { filteredBankList, handleSearch, handleDelete };
};

export default useBankHandler;