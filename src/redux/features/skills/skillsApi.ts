import { baseApi } from "@/redux/api/baseApi";

const skillsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSkills: builder.query({
      query: () => ({
        url: "/skills",
        method: "GET",
      }),
      providesTags: ["skills"],
    }),
    createSkill: builder.mutation({
      query: (data) => ({
        url: "/skills",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["skills"],
    }),
    deleteSkill: builder.mutation({
      query: (skillId) => ({
        url: `/skills/${skillId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["skills"],
    }),
  }),
});

export const {
  useGetSkillsQuery,
  useCreateSkillMutation,
  useDeleteSkillMutation,
} = skillsApi;
