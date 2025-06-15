import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getPost } from '../api/post';

function Post() {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ['posts', id],
    queryFn: getPost(Number(id)),
  });

  return (
    <div>
      Post-{id}
      {isLoading && <p>Loading...</p>}
      <h1>{data?.data.title}</h1>
      <p>{data?.data.body}</p>
    </div>
  );
}

export default Post;
