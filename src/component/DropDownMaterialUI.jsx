import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    inputField: {
        width: "100%",
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #484850",
            borderRadius: "5px 5px 0 0"
        },
    },
    formControl: {
        minWidth: "100%",
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #484850",
            borderRadius: "5px 5px 0 0"
        },
    },
});
function DropDownMaterialUI(props) {

    const classes = useStyles();
    const { lableName, onChangeHandler, optionsList, value, name } = props;

    const genrateOptions = (dropList) => {
        let optionItems = dropList.map((option) =>
            <MenuItem key={option} value={option}>{option}</MenuItem>
        );
        return optionItems;
    };


    return (
        <>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">{lableName}</InputLabel>
                <Select
                    // labelId="demo-simple-select-outlined-label"
                    // id="demo-simple-select-outlined"
                    label={lableName}
                    autoWidth={true}
                    onChange={onChangeHandler}
                    value={value}
                    name={name}
                >
                    <MenuItem value="" >
                        <em>None</em>
                    </MenuItem>
                    {genrateOptions(optionsList)}

                </Select>
            </FormControl>
        </>
    );


}

export default DropDownMaterialUI;