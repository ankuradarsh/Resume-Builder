/* eslint-disable react/prop-types */
export default function InternOrTraining({ data }) {
  return (
    <>
      <div className="py-1 max-w-2xl">
        <p className="text-2xl">Internships/Trainings</p>
        <hr />
        {data.map((trData) => (
          <div key={trData.id} className="grid container py-1 max-w-2xl">
            <div className="text-md font-semibold">
              {trData.name}{" "}
              {trData.link != null ? (
                <a href={trData.link}> | view certificate</a>
              ) : null}
            </div>
            <span className="italic text-sm">{trData.description}</span>
          </div>
        ))}
      </div>
    </>
  );
}
