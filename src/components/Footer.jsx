export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner wrap">
        <div>
          <p className="footer__name">Sravani Kumari Palem</p>
          <p className="footer__role">Full Stack Developer</p>
        </div>
        <p className="footer__place">Hatfield, UK</p>
        <div className="footer__links">
          <a href="mailto:sravanikumaripalem@gmail.com">Email</a>
          <a
            href="https://www.linkedin.com/in/sravani-kumari-palem"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <p className="footer__copy wrap">© {new Date().getFullYear()} Sravani Kumari Palem</p>
    </footer>
  )
}
