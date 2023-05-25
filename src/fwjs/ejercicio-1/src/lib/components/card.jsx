import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function MediaCard({ movie }) {
  return (
    <Button sx={{ textTransform: "none", textAlign: "left", height: "100%" }}>
      <Card
        sx={{
          width: 220,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <CardMedia
          sx={{ height: 330, width: 220 }}
          image={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
          title={movie.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.title}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary"> */}
          {/*   {text} */}
          {/* </Typography> */}
        </CardContent>
        <CardActions>
          <Stack direction="row" spacing={10}>
            <Chip label={`${movie.vote_average}`} variant="outlined" />
            <Chip label="Ver más" variant="filled" />
          </Stack>
        </CardActions>
      </Card>
    </Button>
  );
}
