import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { CustomButton } from "./CustomButton";

export const Form = ({
  type,
  register,
  onFinish,
  formLoading,
  handleSubmit,
  handleImageChange,
  onFinishHandler,
  propertyImage,
}) => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        {type} a Property
      </Typography>
      <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#fcfcfc">
        <form
          style={{
            marginTop: "20px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
          onSubmit={handleSubmit(onFinishHandler)}
        >
          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: "10px 0",
                fontSize: 16,
                color: "#11142d",
              }}
            >
              Enter property name
            </FormHelperText>
            <TextField
              fullWidth
              required
              id="outlined-basic"
              color="info"
              variant="outlined"
              {...register("title", { required: true })}
            />
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: "10px 0",
                fontSize: 16,
                color: "#11142d",
              }}
            >
              Enter description
            </FormHelperText>
            <TextareaAutosize
              minRows={5}
              required
              placeholder="Write description"
              color="info"
              style={{
                width: "100%",
                background: "transparent",
                fontSize: "16px",
                borderColor: "rgba(0,0,0,0.23)",
                borderRadius: 6,
                padding: 10,
                color: "#919191",
              }}
              {...register("description", { required: true })}
            />
          </FormControl>

          <Stack direction="row" gap={4}>
            <FormControl sx={{ flex: 1 }}>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px 0",
                  fontSize: 16,
                  color: "#11142d",
                }}
              >
                Select property type
              </FormHelperText>
              <Select
                variant="outlined"
                color="info"
                displayEmpty
                required
                inputProps={{ "aria-label": "Without label" }}
                defaultValue="aparment"
                {...register("propertyType", { required: true })}
              >
                <MenuItem value="apartment">apartment</MenuItem>
                <MenuItem value="villa">villa</MenuItem>
                <MenuItem value="farmhouse">farmhouse</MenuItem>
                <MenuItem value="condos">condos</MenuItem>
                <MenuItem value="townhouse">townhouse</MenuItem>
                <MenuItem value="duplex">duplex</MenuItem>
                <MenuItem value="studio">studio</MenuItem>
                <MenuItem value="chalet">chalet</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px 0",
                  fontSize: 16,
                  color: "#11142d",
                }}
              >
                Enter property price
              </FormHelperText>
              <TextField
                fullWidth
                required
                id="outlined-basic"
                type="number"
                color="info"
                variant="outlined"
                {...register("price", { required: true })}
              />
            </FormControl>
          </Stack>
          <FormControl>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px 0",
                  fontSize: 16,
                  color: "#11142d",
                }}
              >
                Enter location
              </FormHelperText>
              <TextField
                fullWidth
                required
                id="outlined-basic"
                color="info"
                variant="outlined"
                {...register("location", { required: true })}
              />
            </FormControl>
            <Stack direction="column" gap={1} justifyContent="center" mb={2}>
              <Stack direction="row" gap={2}>
                <Typography color="#11142d" fontSize={16} fontWeight={500} my="10px">
                  Property photo
                </Typography>
                <Button component="label" sx={{
                  width: 'fit-content',
                  color: '#2ed480',
                  textTransform: 'capitalize',
                  fontSize: 16
                }}>
                  upload *
                  <input 
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={(e)=>{
                    // @ts-ignore
                    handleImageChange(e.target.files[0])
                  }}

                  />
                </Button>
              </Stack>
              <Typography fontSize={14} color="#808191" sx={{wordBreak: 'break-all'}}>
                {propertyImage?.name}
              </Typography>
            </Stack>
            <CustomButton 
            type="submit"
            title={formLoading ? 'submitting...' : 'submit'}
            backgroundColor="#475be8"
            color="#fcfcfc"
            />
        </form>
      </Box>
    </Box>
  );
};
