import { useParams } from 'react-router-dom';
import { useGetPostQuery } from '../apis/postApi';

function Post() {
  const { id } = useParams();
  const { data, isLoading } = useGetPostQuery(Number(id));
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <div>
          <h1>{data?.title}</h1>
          <p>{data?.body}</p>
          <p>{data?.userId}</p>
        </div>
      )}
    </div>
  );
}

export default Post;
