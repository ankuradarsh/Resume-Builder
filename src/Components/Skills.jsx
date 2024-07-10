/* eslint-disable react/prop-types */
export default function Skills({
  operatingSystem,
  languages,
  devTools,
  libOrFramework,
  database,
  softSkills,
  subOfInterest,
}) {
  function formatSkillsData(data) {
    return data.join(", ");
  }
  return (
    <>
      <div className="py-1 max-w-2xl">
        <p className="text-2xl">Technical Skills and Interests</p>
        <hr />
        <div className="grid text-sm">
          <li>
            <span className="font-semibold">Operating System:</span>{" "}
            {formatSkillsData(operatingSystem)}
          </li>
          <li>
            <span className="font-semibold">Languages:</span>{" "}
            {formatSkillsData(languages)}
          </li>
          <li>
            <span className="font-semibold">Developer Tools:</span>{" "}
            {formatSkillsData(devTools)}
          </li>
          <li>
            <span className="font-semibold">Library/Frameworks:</span>{" "}
            {formatSkillsData(libOrFramework)}
          </li>
          <li>
            <span className="font-semibold">Databases:</span>{" "}
            {formatSkillsData(database)}
          </li>
          <li>
            <span className="font-semibold">Soft Skills:</span>{" "}
            {formatSkillsData(softSkills)}
          </li>
          <li>
            <span className="font-semibold">Subjects of Interest:</span>{" "}
            {formatSkillsData(subOfInterest)}
          </li>
        </div>
      </div>
    </>
  );
}
