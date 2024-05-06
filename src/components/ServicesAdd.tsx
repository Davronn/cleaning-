import React, { useState } from 'react';
import { useServiceStore } from '../app/auth/useServices';

const NewServiceForm: React.FC = () => {
  const [name, setName] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [price, setPrice] = useState(0);

  const createService = useServiceStore((state) => state.createService);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createService({ name, owner_email: ownerEmail, price });
    setName('');
    setOwnerEmail('');
    setPrice(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Owner Email:
        <input type="text" value={ownerEmail} onChange={(e) => setOwnerEmail(e.target.value)} />
      </label>
      <label>
        Price:
        <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
      </label>
      <button type="submit">Create Service</button>
    </form>
  );
};

export default NewServiceForm;
