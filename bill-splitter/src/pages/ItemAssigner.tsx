import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Person {
  id: number;
  name: string;
}

interface ReceiptItem {
  id: number;
  description: string;
  price: number;
}

const ItemAssigner: React.FC = () => {
  const navigate = useNavigate();
  const [people, setPeople] = useState<Person[]>([]);
  const [personName, setPersonName] = useState('');
  const [itemAssignments, setItemAssignments] = useState<{
    [key: number]: number;
  }>({});

  // Example receipt items
  const receiptItems: ReceiptItem[] = [
    { id: 1, description: 'Burger', price: 9.99 },
    { id: 2, description: 'Fries', price: 3.99 },
    { id: 3, description: 'Soda', price: 1.99 },
  ];

  const handlePersonNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPersonName(event.target.value);
  };

  const addPerson = () => {
    const newPerson = { id: people.length + 1, name: personName };
    setPeople([...people, newPerson]);
    setPersonName('');
  };

  const assignItemToPerson = (itemId: number, personId: number) => {
    setItemAssignments({ ...itemAssignments, [itemId]: personId });
  };

  const handleSubmit = () => {
    navigate('/results', { state: { people, itemAssignments } });
  };

  return (
    <div>
      <h1>Assign Items to People</h1>
      <div>
        <input
          type="text"
          value={personName}
          onChange={handlePersonNameChange}
          placeholder="Enter person's name"
        />
        <button onClick={addPerson}>Add Person</button>
      </div>
      <div>
        {receiptItems.map((item) => (
          <div key={item.id}>
            <span>
              {item.description} - ${item.price}
            </span>
            <select
              onChange={(e) =>
                assignItemToPerson(item.id, parseInt(e.target.value, 10))
              }
              value={itemAssignments[item.id] || ''}
            >
              <option value="">Select person</option>
              {people.map((person) => (
                <option key={person.id} value={person.id}>
                  {person.name}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ItemAssigner;
