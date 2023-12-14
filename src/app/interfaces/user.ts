export interface User {
    cell: string;
    email: string;
    gender: string;
    id: { name: string, value: string };
    location: {
        street: { name: string, number: number },
        city: string;
        state: string;
        country: string;
        postcode: string;
    };
    name: {
        first: string;
        last: string;
        title: string;
    };
    nat: string;
    phone: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
}
