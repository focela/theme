import { ChangeEvent } from 'react';

// MUI IMPORT
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

// PROJECT IMPORT
import MainCard from '~/components/cards/MainCard';
import useConfig from '~/hooks/useConfig';

export default function ThemeFont() {
  const theme = useTheme();

  const { fontFamily, onChangeFontFamily } = useConfig();

  const handleFontChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeFontFamily(event.target.value as string);
  };

  const fonts = [
    {
      id: 'inter',
      value: `'Inter', sans-serif`,
      label: 'Inter'
    },
    {
      id: 'roboto',
      value: `'Roboto', sans-serif`,
      label: 'Roboto'
    },
    {
      id: 'poppins',
      value: `'Poppins', sans-serif`,
      label: 'Poppins'
    },
    {
      id: 'public-sans',
      value: `'Public Sans', sans-serif`,
      label: 'Public Sans'
    }
  ];

  return (
    <RadioGroup row aria-label="payment-card" name="payment-card" value={fontFamily} onChange={handleFontChange}>
      <Grid container spacing={1.75} sx={{ ml: 0 }}>
        {fonts.map((item, index) => (
          <Grid item key={index}>
            <FormControlLabel
              control={<Radio value={item.value} sx={{ display: 'none' }} />}
              sx={{ display: 'flex', '& .MuiFormControlLabel-label': { flex: 1 } }}
              label={
                <MainCard
                  content={false}
                  sx={{ bgcolor: fontFamily === item.value ? 'primary.lighter' : 'secondary.lighter', p: 1 }}
                  border={false}
                  {...(fontFamily === item.value && { boxShadow: true, shadow: theme.customShadows.primary })}
                >
                  <Box
                    sx={{
                      minWidth: 60,
                      bgcolor: 'background.paper',
                      p: 1,
                      '&:hover': { bgcolor: 'background.paper' }
                    }}
                  >
                    <Stack spacing={0.5} alignItems="center">
                      <Typography variant="h5" color="text.primary" sx={{ fontFamily: item.value }}>
                        Aa
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {item.label}
                      </Typography>
                    </Stack>
                  </Box>
                </MainCard>
              }
            />
          </Grid>
        ))}
      </Grid>
    </RadioGroup>
  );
}