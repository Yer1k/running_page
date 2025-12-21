import Stat from '@/components/Stat';
import useActivities from '@/hooks/useActivities';

const PeriodStat = ({ onClick }: { onClick: (_period: string) => void }) => {
  const { runPeriod } = useActivities();

  const periodArr = Object.entries(runPeriod);
  periodArr.sort((a, b) => b[1] - a[1]);

  // Find peak period (most runs)
  const peakCount = periodArr.length > 0 ? periodArr[0][1] : 0;

  return (
    <div className="cursor-pointer">
      <section>
        {periodArr.map(([period, times], index) => {
          const isPeak = index === 0 && times === peakCount;
          const label = isPeak ? ' (Peak)' : '';
          return (
            <Stat
              key={period}
              value={period}
              description={` ${times} Runs${label}`}
              citySize={3}
              onClick={() => onClick(period)}
            />
          );
        })}
      </section>
      <hr />
    </div>
  );
};

export default PeriodStat;
