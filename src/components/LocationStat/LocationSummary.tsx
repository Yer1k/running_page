import Stat from '@/components/Stat';
import useActivities from '@/hooks/useActivities';
import { IS_CHINESE } from '@/utils/const';

const LocationSummary = () => {
  const { years, countries, provinces, cities } = useActivities();
  return (
    <div className="cursor-pointer">
      <section>
        {years ? (
          <Stat
            value={`${years.length}`}
            description={IS_CHINESE ? " 年里我跑过" : " years of running"}
          />
        ) : null}
        {countries ? (
          <Stat
            value={countries.length}
            description={IS_CHINESE ? " 个国家" : " countries"}
          />
        ) : null}
        {provinces ? (
          <Stat
            value={provinces.length}
            description={IS_CHINESE ? " 个省份" : " states"}
          />
        ) : null}
        {cities ? (
          <Stat
            value={Object.keys(cities).length}
            description={IS_CHINESE ? " 个城市" : " cities"}
          />
        ) : null}
      </section>
      <hr />
    </div>
  );
};

export default LocationSummary;
