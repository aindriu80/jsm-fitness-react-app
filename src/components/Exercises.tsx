import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

interface Exercise {
  id: string;
  name: string;
}

interface ExercisesProps {
  setExercises: string;
  bodyPart: string;
  exercises: Exercise[];
}

const Exercises: React.FC<ExercisesProps> = ({
  exercises,
  setExercises,
  bodyPart,
}) => {
  console.log('exercises', exercises);
  return (
    <Box id="exercises" sx={{ mt: { lg: '110px' } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Result
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: '110px', xs: '50px' } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {exercises.map((exercise: Exercise, index: number) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
    </Box>
  );
};

export default Exercises;
