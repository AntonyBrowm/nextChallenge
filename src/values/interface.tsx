export interface BankObject {
    bankName: string;
    description: string;
    age: number;
    url: string;
  }


export interface BankPageProps {
    bankList: BankObject[];
  }

export interface BankListProps {
    bankList: BankObject[];
    onDelete: (bankName: string) => void;
  }

export interface SearchBarProps {
    onSearch: (term: string, bankList: BankObject[]) => void;
    bankList: BankObject[]; 
  }