export default function BlogPost({ post }) {
  return (
    <div>
      <h1>{post.heading}</h1>
      <p>{post.body}</p>
      <p>{`${post.author} geschrieben am ${post.timestamp}`}</p>
    </div>
  )
}
