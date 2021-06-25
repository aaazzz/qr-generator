import {
  useParams
} from 'react-router-dom';

const File = () => {
  const { id } = useParams();
  return (
    <div>
      <a href="/">Home</a>
      <img src={`${window.location.origin}/files/${id}`} />
    </div>
  );
}

export default File;

