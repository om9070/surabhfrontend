
export interface UserRegistration {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    user_type: "Brand" | "Shop" | "Consumer";
    brand_name?: string;
    profile_pic?: string | null;

}




export interface UserRegistration {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    user_type: "Brand" | "Shop" | "Consumer"; // Define the user type
    brand_name?: string; // Only applicable for brand users
    profile_pic?: string | null; // Optional during registration
}

export interface UserProfile {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    user_type: "Brand" | "Shop" | "Consumer";
    profile_pic: string | null;
    country: string| null;
    state: string| null;
    city: string| null;
    dob:string| null;
    brand?: {
        name: string;
        logo: string | null;
    };

    shop?: {
        name: string;
        location: string;
        description?: string;
    };

}

