import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  btnStyle: {
    backgroundColor: "linear-gradient(145deg, #b1f1c8, #95cba8)",
    width: "90%",
    height: "80%",
    color: "#FFF",
    fontSize: "22px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "2px 2px 10px #8cbf9f, -2px -2px 10px #beffd7",
    transition: "500ms ease",
    "&:active": {
      background: "linear-gradient(145deg, #95cba8, #b1f1c8)",
      transition: "500ms ease",
    }
  }
}));

const CalcButton = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Button
        className={classes.btnStyle}
        disableRipple
        onClick={() => props.btnClick(props.btn.value, props.btn.type)}
        disabled={!props.btn.able}
      >
        {props.btn.value}
      </Button>
    </div>
  );
}

export default CalcButton;