import { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        setData(null); 
        
        fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => {
            console.error("Błąd fetch:", err);
            setData([]);
        });
    },[url]);

    return [data]; 
}

export default useFetch;