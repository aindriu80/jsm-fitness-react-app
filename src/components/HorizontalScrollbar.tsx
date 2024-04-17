import { Box } from "@mui/material";
import BodyPart from "./BodyPart";

interface Item {
  id: string | number;
  title: string;
}

interface HorizontalScrollbarProps {
  data: Item[];
  bodyPart: object;
  setBodyPart: object;
}

const HorizontalScrollbar: React.FC<HorizontalScrollbarProps> = ({
  data,
  bodyPart,
  setBodyPart,
}) => {
  return (
    <div>
      {data.map((item: Item) => (
        <Box
          key={item.id.toString() || item}
          itemId={item.id || item}
          title={item.title || item}
          m="0 40px"
        >
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
      ))}
    </div>
  );
};

export default HorizontalScrollbar;
