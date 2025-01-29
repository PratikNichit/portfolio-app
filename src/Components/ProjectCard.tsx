import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {useNavigate} from "react-router-dom"; 

interface Props {
  title: string;
  subTitle: string;
  imageUrl: string;
  projectOverView: string;
  techUsed: {
    name: string;
    link: string;
  }[],
  gitLink: string;
  viewLink?: string;
  details: {
    para1: string;
    para2: string;
    para3: string;
  };
}

export const ProjectCard = ({
  title,
  subTitle,
  imageUrl,
  projectOverView,
  techUsed,
  gitLink,
  viewLink,
  details,
}: Props) => {

  const navigate   = useNavigate();

  const handleNagtive = () => {
    navigate(`/ProjectDetails/${title}`,{
      state :{
        title,
        subTitle,
        imageUrl,
        projectOverView,
        techUsed,
        gitLink,
        viewLink,
        details
      }
    })
  }

  
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" alt="Pratik" height="160" image={imageUrl} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {subTitle}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            sx={{ mr: 1, mb: 1 }}
            onClick={handleNagtive}
          >
            View
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
