import React from "react";
import { AgentCardProp } from "../../interfaces/agent";
import { useGetIdentity } from "@refinedev/core";
import { Box, Stack, Typography } from "@mui/material";
import { useLink } from "@refinedev/core";

export const AgentCard = ({
  id,
  name,
  email,
  avatar,
  noOfProperties,
}: AgentCardProp) => {
  const { data: currentUser } = useGetIdentity();
  const Link = useLink()

  const generateLink = () => {
    if (currentUser.email === email) return "/my-profile";

    return `/agent/show/${id}`;
  };

  return (
    <Box
      component={Link}
      to={generateLink()}
      width={"100%"}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: "20px",
        padding: "20px",
        "&:hover": {
          boxShadow: "0 22px 45px 2px rgba(176, 176, 176, 0.1)",
        },
      }}
    >
      <img
        src={avatar}
        alt="user"
        width={40}
        height={40}
        style={{ borderRadius: 90, objectFit: "cover" }}
      />

      <Stack
        direction={"column"}
        justifyContent={"space-between"}
        flex={1}
        gap={{ xs: 4, sm: 2 }}
      >
        {" "}
        <Stack
          gap={2}
          direction={"row"}
          flexWrap={"wrap"}
          alignItems={"center"}
        >
          <Typography fontWeight={600} fontSize={22} color={"#11142d"}>
            {name}
          </Typography>
          <Typography fontSize={14} color={"#808191"}>Real-Estate Agent</Typography>
        </Stack>
      </Stack>
    </Box>
  );
};
