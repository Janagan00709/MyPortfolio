const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/janagan_007/#"
        target="_blank"
        rel="noopener noreferrer"
        className="home__social-icon"
      >
        <i className="uil uil-instagram"></i>
        <span className="home__social-tooltip">Instagram</span>
      </a>
      <a
        href="https://www.linkedin.com/in/janagan-a-260076225/"
        target="_blank"
        rel="noopener noreferrer"
        className="home__social-icon"
      >
        <i className="uil uil-linkedin"></i>
        <span className="home__social-tooltip">LinkedIn</span>
      </a>
      <a
        href="https://github.com/janagan00709"
        target="_blank"
        rel="noopener noreferrer"
        className="home__social-icon"
      >
        <i className="uil uil-github-alt"></i>
        <span className="home__social-tooltip">GitHub</span>
      </a>
      {/* <a
        href="tel:+971588405809"
        rel="noopener noreferrer"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-twitter"></i>
        <span className="home__social-tooltip">Phone</span>
      </a> */}
    </div>
  );
};

export default Social;
