const BASE_URL = 'https://jsonplaceholder.typicode.com';

interface Comment {
  postId: number;
  id: number;
  email: string;
  body: string;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Comments {
  postId: number;
  title: string;
  comments: Comment[];
}

const myFetch = async <T>(path: string): Promise<T> => {
  const res = await fetch(`${BASE_URL}/${path}`);
  return res.json() as Promise<T>;
};

export async function getPosts(userId: number | string): Promise<Comments[]> {

  const posts: Post[] = await myFetch<Post[]>(`posts?userId=${userId}`);

  const postsWithComments: Comments[] = await Promise.all(
    posts.map(async post => {
      const comments = await myFetch<any[]>(`posts/${post.id}/comments`);
      const filteredComments: Comment[] = comments.map(comment => ({
        postId: comment.postId,
        id: comment.id,
        email: comment.email,
        body: comment.body
      }));

      return {
        postId: post.id,
        title: post.title,
        comments: filteredComments
      };
    })
  );

  return postsWithComments;
}
