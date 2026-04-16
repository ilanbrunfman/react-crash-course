
const PostHeader = ({ title, subtitle }) => {
    return (
        <div className="post-header">
            <h3>{title}</h3>
            {subtitle && <p>{subtitle}</p>}
        </div>
    );
}

export default PostHeader