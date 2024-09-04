import { useOne, useResourceParams } from "@refinedev/core";
import { Profile } from "../components";

export const AgentProfile = () => {
  const { id } = useResourceParams({});
  const { data, isLoading, isError } = useOne({
    resource: "users",
    id: id as string,
  });

  const myProfile = data?.data ?? [];

  if (isLoading) return <div>Loading....</div>;
  if (isError) return <div>Error</div>;

  return (
    <Profile
      type="Agent "
      name={myProfile.name}
      email={myProfile.email}
      avatar={myProfile.avatar}
      properties={myProfile.allProperties}
    />
  );
};
