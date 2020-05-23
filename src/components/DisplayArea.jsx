import React from 'react';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';

const useStyles = makeStyles(() => (
  createStyles({
    "list": {
      boxSizing: "border-box",
      width: 320,
      height: 120,
      backgroundColor: "#212121",
      margin: "10px auto 30px",
      color: "#a5e1bb",
      fontSize: 20,
      padding: "5px 10px",
      listStyle: "none",
      overflow: "auto",
    },
    "p" :{
      margin: 5,
      fontSize: 16,
    },
    "activeP" : {
      margin: 5,
      fontSize: 26,
      borderBottom: "1px solid #a5e1bb"
    }
  })
));

const DisplayArea = (props) => {
  const classes = useStyles();
  return (
    <List className={classes.list} id={"scroll-area"}>
      {props.showList.map((list, index) => {
        return (
        <p className={classes.p} key={index}>{list}</p>
        );
      })}
        <p className={classes.activeP}>→{props.showCalc}</p>
    </List>
  );
}

export default DisplayArea;