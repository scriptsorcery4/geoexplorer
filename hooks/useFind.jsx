const { useState } = require("react");

function useFind(){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
  
    const findGeo = async (pack) => {
      setIsLoading(true);
      setError(null);
  
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${pack}`);
        if (!response.ok) {
          throw new Error("Country not found");
        }
        const result = await response.json();
        setData(result)
        return null;
      } catch (error) {
        setError(error.message);
        return error.message;
      } finally {
        setIsLoading(false);
      }
    };
  
    return { data, error, isLoading, findGeo };
}

export default useFind