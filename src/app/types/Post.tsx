export interface Post {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    author: string;
    featuredImage?: string;
    movieId?: string;
}
