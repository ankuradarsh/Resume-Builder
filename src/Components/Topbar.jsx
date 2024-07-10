/* eslint-disable react/prop-types */
import Photo from "../assets/Photo1.jpg";

function Topbar({
  name,
  branch,
  college,
  adjective,
  mobileNo,
  emailId,
  githubProfile,
  linkedinProfile,
}) {
  return (
    <>
      <div className="flex w-full">
        <div className="overflow-none rounded-md">
          <img src={Photo} className="max-w-28" alt="pics1" />
        </div>
        <div className="grid px-7 py-2">
          <p className="text-2xl font-bold">{name}</p>
          <p>{branch}</p>
          <p>{college}</p>
          <p>{adjective}</p>
        </div>
        <div className="grid px-3 py-2 text-right">
          <p>
            &#9742; <a href={`tel:${mobileNo}`}>{mobileNo}</a>
          </p>
          <p>
            &#128499; <a href={`mailto:${emailId}`}>{emailId}</a>
          </p>
          <p>
            <a href={githubProfile}>Github</a>
          </p>
          <p>
            <a href={linkedinProfile}>Linkedin</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Topbar;
