import PropTypes from 'prop-types';

function Movie({ coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>{genres && genres.map(g => <li key={g}>{g}</li>)}</ul>
      {/* genres가 있는지 먼저 체크해주고 genres를 map으로 그려줘야지 에러가 안뜸 */}
    </div>
  );
}
Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
