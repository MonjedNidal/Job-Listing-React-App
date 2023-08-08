import { useState, useEffect } from "react";
import Role from "./Role";
function JobCard(props) {
  const {
    company,
    logo,
    isNew,
    isFeatured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
  } = props.job;

  const [imgSource, setImgSource] = useState(null);
  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setPageWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const filename = logo.split("/").pop();
    import(`../images/${filename}`).then((module) => {
      setImgSource(module.default);
    });
  }, [logo]);

  return (
    <div className="jobCard position-relative d-flex justify-content-between">
      {isFeatured ? <div className="featuredMark position-absolute"></div> : ""}
      <div className="d-flex align-items-center">
        {imgSource && <img src={imgSource} alt="" />}
        <div className="d-flex flex-column justify-content-between">
          <div className="d-flex align-items-start">
            <p className="companyName">{company}</p>
            {isNew ? <span className="new">NEW!</span> : ""}
            {isFeatured ? <span className="featured">FEATURED</span> : ""}
          </div>
          <h6 className="position">{position}</h6>
          <ul className="jobProps d-flex">
            <li>{postedAt}</li>
            <li>{contract}</li>
            <li>{location}</li>
          </ul>
        </div>
      </div>
      {pageWidth < 630 && <hr />}

      <div className="roles align-self-center row">
        <Role text={role} />
        <Role text={level} />
        {languages.map((language) => (
          <Role text={language} />
        ))}
      </div>
    </div>
  );
}

export default JobCard;
