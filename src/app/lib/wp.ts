import { Post } from '../types/Post';

const WORDPRESS_API_URL = 'https://cinesanity.wordpress.com/wp-json/wp/v2/posts';

// to do: use dompurify to sanitize content
// to do: handle featured media
// to do: functions for fetching single post, allow for fetching next 6 posts/previous 6 posts

export async function fetchPosts(page = 1): Promise<Post[]> {
  const response = await fetch(`${WORDPRESS_API_URL}?per_page=6&page=${page}`);
  const posts: Post[] = await response.json();
  return posts.map(post => ({
      id: post.id.toString(),
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      author: post.author,
      date: post.date,
  }));
}


// fetch single post
export async function fetchPost(slug: string): Promise<Post> {
    const response = await fetch(`${WORDPRESS_API_URL}?slug=${slug}`);
    const post: Post = await response.json();
    return {
        id: post.id.toString(),
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        author: post.author,
        date: post.date,
        // featuredImage: post.featured_media, // You'll need to handle media separately
        // movieId: You could store this as custom meta in WordPress and retrieve here
    };
}

// fetch slugs
export async function fetchSlugs(): Promise<string[]> {
    const response = await fetch(`${WORDPRESS_API_URL}?per_page=100`);
    const posts: Post[] = await response.json();
    return posts.map(post => post.slug);
}