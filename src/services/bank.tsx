export const getBanks = async () => {
    if (process.env.URI_API == null) {
      throw new Error('URI_API environment variable is not defined');
    }
      const response = await fetch(`${process.env.URI_API}/challenge/banks`, {
        method: 'GET',
        headers: {
          "Content-Type": 'application/json',
        },
      });
      if (response.status !== 200) return "error on status";
      const resumenData= await response.json();
      return resumenData;
  };