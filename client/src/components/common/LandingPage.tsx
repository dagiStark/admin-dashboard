import { Box, Stack, Typography } from "@mui/material";
import {
  PieChart,
  PropertyCard,
  PropertyReferrals,
  TotalRevenue,
} from "../../components";
import { useList } from "@refinedev/core";

export const LandingPage = () => {
  const { data, isLoading, isError } = useList({
    resource: "properties",
    pagination: {
      pageSize: 4,
    },
    sorters: [
      {
        field: "price",
        order: "asc",
      },
    ],
  });


  if (isLoading) return <div>Loading....</div>;
  if (isError) return <div>Error</div>;

  return (
    <Box>
      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart
          title="Properties for sale"
          value={684}
          series={[75, 25]}
          colors={["#475be8", "#e4e8ef"]}
        />
        <PieChart
          title="Properties for rent"
          value={550}
          series={[60, 40]}
          colors={["#475be8", "#e4e8ef"]}
        />
        <PieChart
          title="Properties for customers"
          value={5684}
          series={[75, 25]}
          colors={["#275be8", "#c4e8ef"]}
        />
        <PieChart
          title="Properties for cities"
          value={555}
          series={[75, 25]}
          colors={["#475be8", "#e4e8ef"]}
        />
      </Box>

      <Stack
        mt="25px"
        width="100%"
        direction={{ xs: "column", lg: "row" }}
        gap={4}
      >
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>
    </Box>
  );
};
