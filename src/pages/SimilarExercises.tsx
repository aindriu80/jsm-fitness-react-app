import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollbar from '../components/HorizontalScrollbar';
import Loader from '../components/Loader';

interface SimilarExercisesProps {
  targetMuscleExercises: Array;
  equipmentExercises: Array;
}

const SimilarExercises: React.FC<SimilarExercisesProps> = ({
  targetMuscleExercises,
  equipmentExercises,
}) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0' } }}>
      <Typography variant="h3" mb={5}>
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>

      <Typography variant="h3" mb={5}>
        Exercises that use the same equipment
      </Typography>
      <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
        {equipmentExercises ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
