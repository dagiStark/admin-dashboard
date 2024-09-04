import { useGetIdentity, useOne } from "@refinedev/core";
import { Profile } from "../components";

export const MyProfile = () => {
  const { data: user } = useGetIdentity();
  const { data, isLoading, isError } = useOne({
    resource: "users",
    id: user?.userId,
  });

  const myProfile = data?.data ?? [];

  if (isLoading) return <div>Loading....</div>;
  if (isError) return <div>Error</div>;

  return (
    <Profile
      type="My"
      name={myProfile.name}
      email={myProfile.email}
      avatar={myProfile.avatar}
      properties={myProfile.allProperties}
    />
  );
};
