import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  btn: {
    backgroundColor: "#212121",
    width: "100%",
    height: "100%",
    color: "#FFF",
    fontSize: "24px",
    "&:hover": {
      backgroundColor: "#414141",
    }
  }
}));

const CalcButton = (props) => {
  const classes = useStyles();
  return (
    <div className={props.cName}>
      <Button className={classes.btn} variant="outlined" color="primary">
        {props.value}
      </Button>
    </div>
  );
}

export default CalcButton;