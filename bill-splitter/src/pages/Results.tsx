import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Results = () => {
  const location = useLocation();
  const {
    people,
    itemAssignments,
    receiptItems: items,
  } = location.state as {
    people: { id: number; name: string }[];
    itemAssignments: { [itemId: number]: number };
    receiptItems: { id: number; description: string; price: number }[];
  };

  // Define the type for totalsByPerson and totals to ensure type safety
  type TotalsType = { [name: string]: number };

  const [totalsByPerson, setTotalsByPerson] = useState<{
    [name: string]: string;
  }>({});

  useEffect(() => {
    const totals: TotalsType = {};
    for (const person of people) {
      totals[person.name] = 0; // Initialize each person's total to 0
    }

    // Safely calculate totals using the item and person mappings
    for (const [itemId, personId] of Object.entries(itemAssignments)) {
      const item = items.find((item) => item.id === Number(itemId));
      if (item) {
        const person = people.find((person) => person.id === personId);
        if (person && totals.hasOwnProperty(person.name)) {
          totals[person.name] += item.price;
        }
      }
    }

    // Format the totals for display
    const formattedTotals = Object.keys(totals).reduce(
      (acc: { [name: string]: string }, name) => {
        acc[name] = `$${totals[name].toFixed(2)}`;
        return acc;
      },
      {}
    );

    setTotalsByPerson(formattedTotals);
  }, [people, itemAssignments, items]);

  return (
    <div>
      <h1>Bill Results</h1>
      <ul>
        {Object.entries(totalsByPerson).map(([name, total]) => (
          <li key={name}>
            {name} owes: {total}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
