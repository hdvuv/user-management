import Skeleton from 'react-loading-skeleton';
import { SkeletonContent } from './SkeletonStyled';

const SkeletonCustomize = () => {
  /**
   * Common skeleton for all screens
   * This skeleton have 10 line
   */
  return (
    <SkeletonContent>
      {Array(10)
        .fill(0)
        .map((index) => (
          <div key={index}>
            <Skeleton height={30} />
          </div>
        ))}
    </SkeletonContent>
  );
};

export default SkeletonCustomize;
