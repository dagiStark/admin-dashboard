import { useGo } from "@refinedev/core";
import { Link } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import { CustomButton } from "../components";
import { Add } from "@mui/icons-material";

export const AllProperties = () => {
  const go = useGo();
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography fontSize={25} fontWeight={700} color="#11142d">
          All Properties
        </Typography>
        <CustomButton
          title="Add Property"
          handleClick={() => go({ to: "/properties/create" })}
          backgroundColor="#475be8"
          color="#fcfcfc"
          icon={<Add />}
        />
      </Stack>
    </Box>
  );
};
