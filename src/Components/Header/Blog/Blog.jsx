
import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    console.log(blog)
    return (
        <div>
            
        </div>
    );
};

Blog.protoTypes ={
    blog: PropTypes.object.isRequired
}

export default Blog;