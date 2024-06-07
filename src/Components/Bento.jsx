import PropTypes from 'prop-types';

const Bento = ({ content, size, height }) => {
  return (
    <div
      className="bg-white p-[20px] flex items-center justify-center rounded-xl phone:w-[95%] tablet:w-[90%]"
      style={{ width: `${size}vw`, height: `${height}vh` }}
    >
      {content}
    </div>
  );
};

export default Bento;

Bento.propTypes = {
  content: PropTypes.node, // Changed from object to node to accept any renderable content
  size: PropTypes.number.isRequired, // Added isRequired to ensure these props are passed
  height: PropTypes.number.isRequired,
};
