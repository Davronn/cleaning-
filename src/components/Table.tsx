import React, { useEffect } from "react";
import axios from "axios";
import create from "zustand";

interface DataItem {
  name: "string";
  owner_email: "string";
  price: 0;
}

interface StoreState {
  data: DataItem[];
  fetchData: () => Promise<void>;
}

// Define Zustand store
const useStore = create<StoreState>((set) => ({
  data: [],

  fetchData: async () => {
    try {
      const response = await axios.get<DataItem[]>(
        "https://app.olimjanov.uz/v1/get-all"
      );
      set({ data: response.data });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
}));

const TableComponent: React.FC = () => {
  const { data, fetchData } = useStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <h1>Data Table</h1>
      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            {/* Add more headers if needed */}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.owner_email}</td>
              <td>{item.price}</td>
              {/* Add more columns if needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
