import BankPage from '../components/bankLayout';
import { BankObject, BankPageProps } from '../values/interface';
import { GetStaticProps } from 'next';
import { getBanks } from '@/services/bank';


export default function Home({ bankList }: BankPageProps) {
  return (
    <div className='content'>
      <div className='header'>
        <h1 className='title'>List of Banks</h1>
      </div>
      <BankPage bankList={bankList} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const bankListArray: BankObject[] = await getBanks();
    const bankList = [...bankListArray].sort((a, b) => a.bankName.localeCompare(b.bankName));
        return {
      props: {
        bankList
      }
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        bankList: []
      }
    };
  }
};
