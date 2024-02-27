// [slug].tsx
import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { fetchPost, fetchSlugs } from '../lib/wp';
import { Post } from '../types/Post';
import DOMPurify from 'isomorphic-dompurify';

interface PostProps {
  post: Post;
}

const PostPage: React.FC<PostProps> = ({ post }) => {
  // Sanitize content to prevent XSS attacks
  const cleanHTML = DOMPurify.sanitize(post.content);

  return (
    <article aria-labelledby="post-title">
      <h1 id="post-title">{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: cleanHTML }} />
      {/* Add more post details as needed */}
    </article>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await fetchSlugs();
  const paths = slugs.map(slug => ({
    params: { slug },
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const { slug } = context.params || {}; // Add a default empty object to handle undefined params
    const post = await fetchPost(slug as string);

    return {
        props: {
            post,
        },
    };
};

export default PostPage;
