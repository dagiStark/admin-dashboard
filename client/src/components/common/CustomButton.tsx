import { CustomButtonProps } from "../../interfaces/common";
import { Button } from "@mui/material";

export const CustomButton = ({
  type,
  title,
  backgroundColor,
  handleClick,
  color,
  fullWidth,
  icon,
}: CustomButtonProps) => {
  return (
    <Button
      sx={{
        flex: fullWidth ? 1 : "unset",
        padding: "10px 15px",
        width: fullWidth ? "100%" : "fit-content",
        minWidth: 130,
        backgroundColor,
        color,
        fontSize: 16,
        fontWeight: 600,
        gap: '10px',
        textTransform: 'capitalize', '&:hover' : {
          opacity: 0.9,
          backgroundColor
        }
      }}
      onClick={handleClick}
    >
      {icon}
      {title}
    </Button>
  );
};
