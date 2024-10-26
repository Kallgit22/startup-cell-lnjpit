import { useEffect, useState } from 'react'
import { getInitiatives } from '../apis/AppContentAPI';

export default function InitiativeContainer() {
    const [initiatives, setInitiatives] = useState(null);

    useEffect(() => {
        try {
          Promise.all([getInitiatives()]).then(function (
            results
          ) {
            const Initiatives = results[0].data;
            setInitiatives(Initiatives);
          });
        } catch (error) {
          console.log(error);
        }
      }, []);
  return (
    {initiatives}
  )
}
