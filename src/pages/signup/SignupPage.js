import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Logo } from './Styled'
import background from '../../assets/signup-background.jpg'
import logoColor from '../../assets/MyMusic-color.png'

import { useUnprotectedPage } from '../../hooks/useUnprotectedPage'
import { SignupForm } from './SignupForm'

function SignupPage() {
  useUnprotectedPage()

  return <Grid container component="main" sx={{ height: '100vh' }}>
    <Grid
      item
      xs={false}
      sm={4}
      md={7}
      sx={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />

    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Logo src={logoColor} alt={"Logo MyMusic color"} />
        <Typography component="h1" variant="h5">
          Cadastro
        </Typography>
        <SignupForm />
      </Box>
    </Grid>
  </Grid>
}


export default SignupPage