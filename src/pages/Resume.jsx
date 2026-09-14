import ResumeHeader from "../components/resume/ResumeHeader";
import ResumeSidebar from "../components/resume/ResumeSidebar";
import ResumeMain from "../components/resume/ResumeMain";
import ResumeDownloads from "../components/resume/ResumeDownloads";
import ResumeGallery from "../components/resume/ResumeGallery";
import "./Resume.css";

function Resume() {
  return (
    <div className="resume-page">
      <ResumeHeader />

      <section className="resume-page__content container">
        <ResumeSidebar />
        <ResumeMain />
      </section>

      <ResumeDownloads />
      <ResumeGallery />
    </div>
  );
}

export default Resume;
