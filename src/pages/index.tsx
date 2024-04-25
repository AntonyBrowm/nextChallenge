import React, { useEffect, useState } from 'react';
import BankPage from '../components/bankLayout';
import { BankObject } from '../values/interface';
import { getBanks } from '@/services/bank';
import  useStore  from '../hooks/store';

export default function Home() {
  const { bankList, setBankList } = useStore();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBanks = async () => {
      try {
        const bankListArray: BankObject[] = await getBanks();
        const sortedBankList = [...bankListArray].sort((a, b) => a.bankName.localeCompare(b.bankName));
        setBankList(sortedBankList);
      } catch (error) {
        console.error('Error fetching data:', error);
        setBankList([]);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchBanks();
  }, []);
  

  return (
    <div className='content'>
      <div className='header'>
        <h1 className='title'>List of Banks</h1>
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <BankPage bankList={bankList} />
      )}
    </div>
  );
}