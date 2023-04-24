export interface IAuthState {
    user: IUser | null | undefined;
    isError: boolean;
    isSuccess: boolean;
    isLoading: boolean;
    message: string;
  }
  
  export interface IUser {
    id: number;
    email: string;
    username: string;
    roles: Role[];
    enabled: boolean;
    createdAt?: string;
    updatedAt?: string;
  }
  
  export type Role = "ADMIN" | "MODER" | "USER";
  