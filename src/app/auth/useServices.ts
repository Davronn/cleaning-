import create from 'zustand';
import axios from 'axios';

interface ServiceState {
  services: Service[];
  createService: (newService: Service) => Promise<void>;
}

export const useServiceStore = create<ServiceState>((set) => ({
  services: [],
  createService: async (newService) => {
    try {
      // Assuming your API endpoint for creating a new service is something like this
      const response = await axios.post<Service>('https://app.olimjanov.uz/v1/service/create', newService);
      set((state) => ({
        services: [...state.services, response.data],
      }));
    } catch (error) {
      console.error('Error creating service:', error);
    }
  },
}));
