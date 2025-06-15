import { useNavigate } from 'react-router-dom';
import { useGetAllPostsQuery } from '../apis/postApi';

interface PostListProps{
  readonly n?:number;
}

function PostList({n = 5}:PostListProps) {
  const { data, isLoading, isError } = useGetAllPostsQuery();
  const navigate = useNavigate();

  const handleClick = (id:number)=>{
      navigate(`/post/${id}`)
  }

  return (
    <div>
      <h1>PostList</h1>
      <ul>
        {data?.slice(0,n).map((item: any) => (
          <li onClick={handleClick.bind(null,item.id)} >{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
