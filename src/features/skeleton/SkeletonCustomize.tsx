import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
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
        .map((item, index) => (
          <div key={index}>
            <Skeleton height={30} />
          </div>
        ))}
    </SkeletonContent>
  );
};

export default SkeletonCustomize;
