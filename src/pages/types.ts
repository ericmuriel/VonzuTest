export interface Expedition {
    id: number;
    reference: string;
    type: string;
    date: number;
    statusCode: string;
    street: string;
    postalCode: string;
    city: string;
    country: string;
    createdAt: string;
    updatedAt: string;
    selected?: boolean;
    client: {
      username: string;
      profile: {
        emails: string[];
        phones: string[];
        name: string;
      };
    };
  }