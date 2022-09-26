import { Autocomplete as MuiAutocomplete, styled, TextField } from '@mui/material'
import { Controller } from 'react-hook-form';

interface AutocompleteProps {
  control: any,
}

const StyledAutocomplete = styled(MuiAutocomplete)(props => ({
  margin: '30px 0',
  borderRadius: '30px',
  '& .MuiInputBase-root': {
    backgroundColor: '#fafafa',
    borderRadius: '30px',
  }
}))

const Autocomplete = (props: AutocompleteProps) => {
  const { control } = props

  return (
    <Controller
        name={'autocomplete-test'}
        control={control}
        rules={{
          required: 'Select is required'
        }}
        render={({fieldState: { error }, field: { onChange, ref } }) =>
        <StyledAutocomplete
        onChange={(e, data) => onChange(data)}
        isOptionEqualToValue={(option: any, value: any) => option.label === value.label}
        disablePortal
        options={top100Films}
        renderInput={(params) => 
          <TextField 
            helperText={error?.message} 
            FormHelperTextProps={{error: true}} 
            placeholder={'Select from list'} 
            inputRef={ref} 
            {...params} 
        />
      }
    />}
      />
  );
};

const top100Films = 
[
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 }
]

export default Autocomplete;