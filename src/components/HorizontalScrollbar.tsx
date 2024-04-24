import { Box, Typography } from '@mui/material';
import BodyPart from './BodyPart';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { useContext } from 'react';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import ExerciseCard from './ExerciseCard';

interface Item {
  id: string | number;
  title: string;
}

interface HorizontalScrollbarProps {
  data: Item[];
  bodyPart: string;
  setBodyPart: string;
  isBodyParts: string;
}

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar: React.FC<HorizontalScrollbarProps> = ({
  data,
  bodyPart,
  setBodyPart,
  isBodyParts,
}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item: Item) => (
        <Box
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          {isBodyParts ? (
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
