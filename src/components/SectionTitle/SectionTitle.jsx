import "./SectionTitle.css";
const SectionTitle = ({ heading, subHeading }) => {
  return (
    <section className="section-title">
      <div>
        <p>---{subHeading}---</p>
        <h3>{heading}</h3>
      </div>
    </section>
  );
};

export default SectionTitle;
