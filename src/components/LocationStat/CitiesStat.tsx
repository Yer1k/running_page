import Stat from '@/components/Stat';
import useActivities from '@/hooks/useActivities';
import {
  translateCityName,
  translateCountryName,
} from '@/utils/cityTranslation';

// only support China for now
const CitiesStat = ({ onClick }: { onClick: (_city: string) => void }) => {
  const { countryCities } = useActivities();

  return (
    <div className="cursor-pointer">
      <section>
        {Object.entries(countryCities).map(([country, citiesInCountry]) => {
          const citiesArr = Object.entries(citiesInCountry);
          citiesArr.sort((a, b) => b[1] - a[1]);
          const totalDistance = citiesArr.reduce(
            (sum, [, distance]) => sum + distance,
            0
          );
          return (
            <div key={country} className="mb-4">
              <div className="mb-2 font-semibold">
                {translateCountryName(country)} •{' '}
                {(totalDistance / 1000).toFixed(0)} KM
              </div>
              <div className="ml-4">
                {citiesArr.map(([city, distance]) => (
                  <Stat
                    key={city}
                    value={translateCityName(city)}
                    description={` ${(distance / 1000).toFixed(0)} KM`}
                    citySize={3}
                    onClick={() => onClick(city)}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </section>
      <hr />
    </div>
  );
};

export default CitiesStat;
