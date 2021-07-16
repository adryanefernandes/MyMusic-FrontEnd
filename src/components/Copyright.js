import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit">
        MyMusic
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}