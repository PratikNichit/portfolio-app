import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface Props {
  tittle: string;
  subTittle: string;
  imageUrl: string;
  projectOverView: string;
  techUsed: string[];
  gitLink: string;
  ViewLink?: string;
}

export const ProjectCard = ({ tittle, subTittle, imageUrl }: Props) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" alt="Pratik" height="160" image={imageUrl} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {tittle}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {subTittle}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            sx={{ mr: 1, mb: 1 }}
          >
            View
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
