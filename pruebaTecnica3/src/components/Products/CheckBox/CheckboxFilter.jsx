import "../ProductList/ProductList.css";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";

const CheckboxFilter = ({ label, value, onChange }) => {
  return (
    <FormGroup sx={{ display: "flex", px: 2 }}>
      <FormControlLabel
        control={
          <Checkbox defaultChecked={value} onChange={() => onChange(!value)} />
        }
        label={<Typography>{label}</Typography>}
      />
    </FormGroup>
  );
};

export default CheckboxFilter;
