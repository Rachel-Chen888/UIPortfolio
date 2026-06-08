import { Link } from 'react-router-dom';

function ComingSoon() {
  return (
    <main>
      <h1>Coming Soon</h1>
      <p>This project is currently under development.</p>
      <Link to="/">Back to Portfolio</Link>
    </main>
  );
}

export default ComingSoon;