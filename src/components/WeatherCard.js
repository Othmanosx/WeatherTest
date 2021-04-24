import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography, CardContent, Card, Button } from "@material-ui/core"
import { useDispatch } from "react-redux"
import { passDayData } from "../actions/actions"

const useStyles = makeStyles({
  root: {
    minWidth: 150,
    textAlign: "center",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

export default function OutlinedCard({ status, date, temp, unit, passData }) {
  const classes = useStyles()
  const handleDate = (date) => {
    const event = new Date(date * 1000)
    return event.toDateString()
  }
  const dispatch = useDispatch()
  const pass = () => {
    dispatch(passDayData(date, unit))
  }
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        ></Typography>
        <Typography variant="h5" component="h2" color="secondary">
          {status}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {handleDate(date)}
        </Typography>
        <Typography variant="h4" component="p">
          {temp} {unit}
        </Typography>
        <Button onClick={pass} variant="outlined" color="primary">
          More info
        </Button>
      </CardContent>
    </Card>
  )
}
