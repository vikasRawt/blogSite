import './singlePage.css';
import Sidebar from '../../sidebar/sidebar';
import Singlepost from '../../singlePost/singlePost';

export default function SinglePage() {
  return (
    <div className='singlePage'>
        <Singlepost/>
      <Sidebar/>
    </div>
  );
}
