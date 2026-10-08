export default function ResumeDownload({ available }) {
  if (available) {
    return (
      <a className="button button-outline" href="/resume.pdf" download="Erick-Ramos-Resume.pdf">
        Download résumé
      </a>
    );
  }

  return (
    <div className="resume-download">
      <button className="button button-outline" type="button" disabled aria-describedby="resume-note">
        Download résumé
      </button>
      <span className="resume-note" id="resume-note">PDF coming soon</span>
    </div>
  );
}
