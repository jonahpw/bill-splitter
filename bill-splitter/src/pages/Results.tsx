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

  const [totalsByPerson, setTotalsByPerson] = useState<{
    [name: string]: string;
  }>({});

  useEffect(() => {
    console.log('People:', people);
    console.log('Item Assignments:', itemAssignments);
    console.log('Items:', items);
    const totals = {};
    for (const person of people) {
      totals[person.name] = 0;
    }
    for (const [itemId, personId] of Object.entries(itemAssignments)) {
      const item = items.find((item) => item.id === Number(itemId));
      const person = people.find((person) => person.id === personId);
      totals[person.name] += item.price;
    }

    setTotalsByPerson(totals);
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
