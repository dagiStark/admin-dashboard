import React from "react";
import {
  useGetIdentity,
  useOne,
  useResourceParams,
  useShow,
} from "@refinedev/core";
import { useDelete } from "@refinedev/core";
import { Box, Stack, Typography } from "@mui/material";
import { useNavigation } from "react-router-dom";
import { Place, Star } from "@mui/icons-material";

export const PropertyDetails = () => {
  // const navigate = useNavigation();
  const { id } = useResourceParams({});
  // const { mutate } = useDelete();
  // const { data: user } = useGetIdentity();

  // const { query } = useShow();
  const { data, isLoading, isError } = useOne({
    resource: "properties",
    id,
  });

  const PropertyDetails = data?.data ?? {};
  console.log(PropertyDetails);

  if (isLoading) return <div>Loading....</div>;
  if (isError) return <div>Error</div>;

  return (
    <Box
      borderRadius={"15px"}
      padding={"20px"}
      bgcolor={"#fcfcfc"}
      width={"fit-content"}
    >
      <Typography fontSize={25} fontWeight={700} color={"#11142d"}>
        <Box
          mt={"20px"}
          display={"flex"}
          flexDirection={{ xs: "column", lg: "row" }}
          gap={4}
        >
          <Box flex={1} maxWidth={764}>
            <img
              src={PropertyDetails.photo}
              alt={PropertyDetails.title}
              height={546}
              style={{ objectFit: "cover", borderRadius: "20px" }}
              className="property_details-img"
            />
          </Box>
          <Box mt={"15px"}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              flexWrap={"wrap"}
            >
              <Typography
                fontSize={18}
                fontWeight={800}
                color={"#11142d"}
                textTransform={"capitalize"}
              >
                {PropertyDetails.propertyType}
              </Typography>
              <Box>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={`star-${star}`} sx={{ color: "#f2c94c" }} />
                ))}
              </Box>
            </Stack>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              flexWrap={"wrap"}
            >
              <Box>
                <Typography
                  fontSize={22}
                  fontWeight={600}
                  color={"#11142d"}
                  textTransform={"capitalize"}
                >
                  {PropertyDetails.title}
                </Typography>

                <Stack>
                  <Place sx={{ color: "#808191" }} />
                  <Typography fontSize={14} color={"#808191"}>
                    {PropertyDetails.location}
                  </Typography>
                </Stack>
              </Box>

              <Box>
                
              </Box>
            </Stack>
          </Box>
        </Box>
      </Typography>
    </Box>
  );
};
