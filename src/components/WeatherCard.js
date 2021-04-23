import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography, CardContent, Card } from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    minWidth: 200,
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

export default function OutlinedCard(props) {
  const classes = useStyles()
  const handleDate = (date) => {
    const event = new Date(date * 1000)
    return event.toDateString()
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
          {props.status}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {handleDate(props.date)}
        </Typography>
        <Typography variant="h2" component="p">
          {props.temp}°c
        </Typography>
      </CardContent>
    </Card>
  )
}
