import { GetStaticProps } from 'next';
import { fetchPosts } from '../lib/wp';
import { Post } from '../types/Post';
import PostList from '../components/PostList';

interface HomeProps {
    initialPosts: Post[]; 
}

export const getStaticProps: GetStaticProps = async () => {
    const initialPosts = await fetchPosts();
    console.log(initialPosts);
    return {
        props: {
            initialPosts,
        },
    };
};

const HomePage: React.FC<HomeProps> = ({ initialPosts }) => {
    return (
        <div>
            <h1 className='text-6xl'>Movie Blog</h1>
            <PostList initialPosts={initialPosts} />
        </div>
    );
};


export default HomePage; 