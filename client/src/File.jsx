import {
  useParams
} from 'react-router-dom';
import apiUrl from './helper/apiUrl';


const File = () => {
  const { id } = useParams();
  return (
    <div>
      <img src={`${apiUrl}/api/files/${id}`} />
      <a href="/">Home</a>
    </div>
  );
}

export default File;

