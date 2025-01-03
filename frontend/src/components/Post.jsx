import PropTypes from 'prop-types';
import Tag from './Tag';
import { Link } from 'react-router-dom';

function Post({ post }) {
  const fileServer = 'http://localhost:5000';

  return (
    <div className="post-card">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="tag-list">
          {post.tags.map((tag, index) => (
            <Tag key={index} tag={tag} />
          ))}
        </div>
        <img
          src="https://s3-alpha-sig.figma.com/img/3116/0882/a171a1a96a6bb1205357e81451fed61e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iJdtcO8MkyrRb2Y~TxrU8pLIy6YacmeEICDdcXRwV3jGSehhRa5-TBoMwumcMfqETWg~8jR~PaNQ-4UpJlObiKEdSXAo0muGuZCEtYU~l9fdloAgXDL~fqrUA6VTaQHG~NZIb9RHQfIfWsr9L8ZbTk~l5nivVjEZIYnKRJqQPsmpUqDcay~SwI-~oQ~HCxoYX~SJ83vN4gJGCm~k8l7fZbJljmH6Jzi6eZKManxPS~rNRtfLK1a99eH76ndNj753EUgsUFsVO1NH1-mH1BWdCAdxOCfnj-QWh2I8tpVuN1qX1TbpxmAmo18H4eR0EQeYhlE02E3Cal-8Ax9yK4UvJQ__"
          alt=""
          className="flower-img"
        />
      </div>
      <Link to={"/posts/" + post.id}><h2 className="post-title">{post.title}</h2></Link>
      <p>{post.content}</p>

      {/* Nếu bài viết có file, hiển thị liên kết tải xuống */}
      {post.fileUrl && (
        <a href={fileServer + post.fileUrl} download={post.title} className="download-link">
          ダウンロード (Download)
        </a>
      )}
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    fileUrl: PropTypes.string, // Thêm trường fileUrl
  }).isRequired,
};

export default Post;
