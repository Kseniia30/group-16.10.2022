import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import { BsFillHandThumbsUpFill, BsFillPeopleFill, BsFillCartFill, BsTreeFill} from "react-icons/bs";
const icons = [<BsFillHandThumbsUpFill/>, <BsFillPeopleFill/>, <BsFillCartFill/>, <BsTreeFill/>]
export const Statistics = ({title, stats}) => {
  return (
    <>
      {title && <StatisticTitle>{title}</StatisticTitle>}
      <StatisticsList>{stats.map((stat, index) => (
          <StatisticItem key={stat.id} stats={stat} icon={icons[index]} />
            ))}
        </StatisticsList>
    </>
  );
};
