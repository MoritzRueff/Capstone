import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

export default function FilterDogs({ dogs }) {
  const [filterDog, setFilterDog] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setFilterDog(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <div>
      <h3>Select dog properties</h3>
      <pre>{JSON.stringify(filterDog)}</pre>
      <MultiSelect
        options={(dogs.name, dogs.age, dogs.breed, dogs.location)}
        filterDog={filterDog}
        onChange={setFilterDog}
        labelledBy={"Select"}
      />
    </div>
  );
}
