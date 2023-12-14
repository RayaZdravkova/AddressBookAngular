/**
 * Represents a user in the system.
 * @interface User
 */
export interface User {
    /**
     * The cell phone number of the user.
     * @type {string}
     */
    cell: string;
  
    /**
     * The email address of the user.
     * @type {string}
     */
    email: string;
  
    /**
     * The gender of the user.
     * @type {string}
     */
    gender: string;
  
    /**
     * The ID information of the user.
     * @type {{ name: string, value: string }}
     */
    id: { name: string; value: string };
  
    /**
     * The location details of the user.
     * @type {{ street: { name: string, number: number }, city: string, state: string, country: string, postcode: string }}
     */
    location: {
      street: { name: string; number: number };
      city: string;
      state: string;
      country: string;
      postcode: string;
    };
  
    /**
     * The name details of the user.
     * @type {{ first: string, last: string, title: string }}
     */
    name: {
      first: string;
      last: string;
      title: string;
    };
  
    /**
     * The nationality of the user.
     * @type {string}
     */
    nat: string;
  
    /**
     * The phone number of the user.
     * @type {string}
     */
    phone: string;
  
    /**
     * URLs for the user's pictures in different sizes.
     * @type {{ large: string, medium: string, thumbnail: string }}
     */
    picture: {
      large: string;
      medium: string;
      thumbnail: string;
    };
  }
  