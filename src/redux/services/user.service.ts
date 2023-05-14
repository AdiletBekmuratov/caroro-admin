import { baseApi } from "./baseApi";
import { Users } from "@/components/Users";
import { RegisterFormData } from "@/types/register.types";
import { UserFormData } from "@/types/users.types";

// Define a service using a base URL and expected endpoints
export const userApi = baseApi
  .enhanceEndpoints({ addTagTypes: ["Users"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getUsers: builder.query<Users[], void>({
        query: () => `/users/admin`,
        providesTags: (result, error, arg) =>
          result
            ? // successful query
              [
                ...result.map(({ id }) => ({ type: "Users", id } as const)),
                { type: "Users", id: "LIST" },
              ]
            : // an error occurred, but we still want to refetch this query when `{ type: 'GearBox', id: 'LIST' }` is invalidated
              [{ type: "Users", id: "LIST" }],
      }),

      registerCompanyUser: builder.mutation<any, RegisterFormData>({
        query: (body) => ({
          url: `/auth/register-company-user`,
          method: "POST",
          body: body,
        }),
        invalidatesTags: [{ type: "Users", id: "LIST" }],
      }),
    }),
  });

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUsersQuery, useRegisterCompanyUserMutation } = userApi;
