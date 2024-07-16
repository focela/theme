import { Link } from 'react-router-dom';

// THIRD-PARTY IMPORT
import { useIntl } from 'react-intl';

// MUI IMPORT
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// PROJECT IMPORT
import AuthLogin from '~/sections/auth/auth-forms/AuthLogin';
import AuthWrapper from '~/sections/auth/AuthWrapper';

export default function Login() {
  const intl = useIntl();

  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h3">{intl.formatMessage({ id: 'auth.login' })}</Typography>
            <Typography component={Link} to="/register" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
              {intl.formatMessage({ id: 'auth.register' })}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <AuthLogin />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
}
