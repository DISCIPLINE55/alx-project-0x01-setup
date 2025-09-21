// Post types
export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}

// User types
export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface UserData {
  id?: number;
  name: string;
  username: string;
  email: string;
  address?: Partial<Address>;
  phone?: string;
  website?: string;
  company?: Partial<Company>;
}

export interface UserModalProps {
  onClose: () => void;
  onSubmit: (post: UserProps) => void;
}

// Button
export interface ButtonProps {
  title: string;
  className?: string;
  onClick?: () => void;
}
