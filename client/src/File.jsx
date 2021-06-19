import {
  BrowserRouter as Router,
  useParams
} from 'react-router-dom';

const File = () => {
  const { id } = useParams();
  return (
    <div>
      <img src={`http://localhost:8888/${id}`} />
      <a href="/">Home</a>
    </div>
  );
}

export default File;

