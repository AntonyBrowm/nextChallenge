import { BankObject } from '@/values/interface';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface IStore {
  bankList: BankObject[];
  setBankList: (bankList: BankObject[]) => void;
}

const useStore = create<IStore>()(
  persist(
    (set) => ({
      bankList: [],
      setBankList: (bankList) => set({ bankList }),
    }),
    {
      name: 'my-storage',
      version:1,
      storage: createJSONStorage(() => localStorage), 
    }
  )
);

export default useStore;
