/* eslint-disable react/prop-types */
function Projects({ project }) {
  return (
    <>
      <div className="max-w-2xl">
        <p className="text-2xl">Personal Projects </p>
        <hr />
        {project.map((proj) => (
          <div key={proj.id} className="container p-1 max-w-2xl">
            <div className="flex text-bold py-1">
              <div className="grid w-full justify-between">
                <div className="text-md font-semibold">
                  {proj.projName}
                  {proj.liveLink != null ? (
                    <a href={proj.liveLink}> | Live</a>
                  ) : null}
                </div>
                <span className="italic text-xs">{proj.oneLineDesc}</span>
              </div>
              <div className="grid w-full justify-end text-sm">
                {proj.duration}
              </div>
            </div>
            <div className="grid text-sm">- {proj.objectiveOfProject}</div>
            <div className="grid text-sm">- {proj.techStack}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
