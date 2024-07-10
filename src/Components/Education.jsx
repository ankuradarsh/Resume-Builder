/* eslint-disable react/prop-types */
function Education({ degree }) {
  return (
    <>
      <div className="max-w-2xl py-1">
        <p className="text-2xl">Education</p>
        <hr />
        {degree.map((deg) => (
          <div key={deg.id} className="container flex p-1 max-w-2xl">
            <div className="flex grid w-full justify-between">
              <div className="flex-row text-md font-semibold">{deg.college}</div>
              <div className="flex-row text-xs italic">{deg.course}</div>
            </div>
            <div className="flex grid w-full justify-end">
              <div className="flex-row text-right">{deg.year}</div>
              <div className="flex-row text-right text-sm">
                {deg.gradetype}: {deg.marks}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Education;
