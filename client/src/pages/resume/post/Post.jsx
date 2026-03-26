import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
// import PostFooter from "./PostFooter";

const Post = ({ post }) => {
    return (
        <article className="post">

            { post.header && <PostHeader
                title={post.header.title}
                subtitle={post.header.subtitle}
            /> }

            <PostBody blocks={post.blocks} />

            {/* {post.footer && <PostFooter footer={post.footer} />} */}

        </article>
    );
}

export default Post