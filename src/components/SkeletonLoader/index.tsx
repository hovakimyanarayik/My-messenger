import './style.css'
import { Skeleton } from 'antd';


const SkeletonLoader = () => {
    return ( 
        <div className='skeleton-loader-wrapper'>
            <Skeleton />
        </div>
     );
}
 
export default SkeletonLoader;