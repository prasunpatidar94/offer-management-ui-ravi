import React from "react";
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";



const useStyles = makeStyles({


    inputField: {
        width: "100%",
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #484850",
            borderRadius: "5px 5px 0 0"
        },
    },

});

function InputText(props) {

    const classes = useStyles();

    const { lableName, typeName, onChangeHandler, value, fullSizeBool, name } = props;

    return (
        <>
            <div className={classes.inputField}>
                <TextField
                    id="outlined-search"
                    label={lableName}
                    type={typeName}
                    variant="outlined"
                    onChange={onChangeHandler}
                    value={value}
                    name={name}
                    fullWidth={fullSizeBool}
                    InputLabelProps={{
                        shrink: true,
                    }}
                // InputProps={{ inputProps: { min: 0, max: 9, maxlength: "1" } }}

                />
            </div>

        </>
    );


}

export default InputText;
