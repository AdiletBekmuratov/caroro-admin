import { Make } from "@/components/Make";
import { baseApi } from "./baseApi";

// Define a service using a base URL and expected endpoints
export const makesApi = baseApi
  .enhanceEndpoints({ addTagTypes: ["Make"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getCarBrands: builder.query<Make[], void>({
        query: () => `/makes`,
        providesTags: (result, error, arg) =>
          result
            ? [
                ...result.map(({ id }) => ({ type: "Make" as const, id })),
                "Make",
              ]
            : ["Make"],
      }),
      updateCarBrands: builder.mutation<any, any>({
        query: () => ({
          url: `/makes`,
          method: "PUT",
          body: {},
        }),
        invalidatesTags: (result, error, arg) => [{ type: "Make", id: arg.id }],
      }),
    }),
  });

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCarBrandsQuery, useUpdateCarBrandsMutation } = makesApi;
