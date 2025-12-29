import Stat from '@/components/Stat';
import useActivities from '@/hooks/useActivities';
import { translateCityName } from '@/utils/cityTranslation';

// only support China for now
const CitiesStat = ({ onClick }: { onClick: (_city: string) => void }) => {
  const { cities } = useActivities();

  const citiesArr = Object.entries(cities);
  citiesArr.sort((a, b) => b[1] - a[1]);
  return (
    <div className="cursor-pointer">
      <section>
        {citiesArr.map(([city, distance]) => (
          <Stat
            key={city}
            value={translateCityName(city)}
            description={` ${(distance / 1000).toFixed(0)} KM`}
            citySize={3}
            onClick={() => onClick(city)}
          />
        ))}
      </section>
      <hr />
    </div>
  );
};

export default CitiesStat;
