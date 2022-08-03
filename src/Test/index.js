import React, { useEffect, useState } from 'react';

const Index = () => {
  const [List, setList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const result = await fetch('https://pokeapi.co/api/v2/pokemon/')
      .then((res) => res.json())
      .catch((err) => console.log(err));

    if (result.results) {
      let pokemons = result.results;
      setList(pokemons);
    }
  };

  return (
    <div>
      <input type='text' list='pokemon' />
      <datalist name='pokemon' id='pokemon'>
        {List.map((data, i) => (
          <option key={i} name='pokemon' value={data.name}>
            {data.name}
          </option>
        ))}
      </datalist>
    </div>
  );
};

export default Index;
