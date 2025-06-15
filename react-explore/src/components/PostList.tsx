import { useQuery } from '@tanstack/react-query';
import { api } from '../api/post';
import { useNavigate } from 'react-router-dom';

function PostList() {
  const { data, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: api,
  });

  const navigate =  useNavigate();

  return (
    <div className='container'>
      <h1>PostList</h1>
      <ul>
        {data?.data.map((item:any)=>(
          <li onClick={()=>navigate(`/post/${item.id}`)}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
