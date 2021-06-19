import {
  useParams
} from 'react-router-dom';
import apiUrl from './helper/apiUrl';


const File = () => {
  const { id } = useParams();
  return (
    <div>
      <img src={`${apiUrl}/${id}`} />
      <a href="/">Home</a>
    </div>
  );
}

export default File;

