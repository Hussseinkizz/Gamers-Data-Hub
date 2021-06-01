export default function TestTable({ pncsData }) {

  return (
    // TABLE CONTAINER
    <section className="grid w-full mx-auto text-xs rounded-md shadow-lg place-items-center md:text-sm md:w-3/4 lg:text-base lg:w-4/5 mb-24">
      {/* TABLE HEADER / TITLE */}
      <h1 className="flex justify-center w-full py-2 text-sm font-bold text-center border-gray-300 md:text-base lg:text-lg bg-gradient rounded-t-sm">
        Post Natal Care Data Summary
      </h1>
      {/* TABLE */}
      <table className="w-full text-center text-gray-800 rounded-md table-auto bg-gray-50">
        <tr className="font-semibold border-b border-gray-300">
          <th className="px-2 py-1 md:px-4 md:py-3">Criteria</th>
          <th className="px-2 py-1 md:px-4 md:py-3">Tracked Mothers</th>
          <th className="px-2 py-1 md:px-4 md:py-3">Active Mothers</th>
          <th className="px-2 py-1 md:px-4 md:py-3">Inactive Mothers</th>
        </tr>
        {/* table rows */}
        {pncsData.map((pnc) => (
          <tr
            className="border-b border-gray-200 hover:bg-indigo-50"
            key={pnc.pncNumber}
          >
            <td className="px-2 py-1 md:px-4 md:py-3">{`PNC ${pnc.pncNumber}`}</td>
            <td className="px-2 py-1 md:px-4 md:py-3">
              {pnc.TotalTrackedMothers}
            </td>
            <td className="px-2 py-1 md:px-4 md:py-3">{pnc.MothersOnPnc}</td>
            <td className="px-2 py-1 md:px-4 md:py-3">{pnc.MothersNotOnPnc}</td>
          </tr>
        ))}
      </table>
    </section>
  );
}

//** table row structure **
// <tr className="border-b border-gray-200 hover:bg-indigo-50">
//   <td className="px-2 py-1 md:px-4 md:py-3">row title</td>
//   <td className="px-2 py-1 md:px-4 md:py-3">mothers on pnc 1</td>
//   <td className="px-2 py-1 md:px-4 md:py-3">mothers on pnc 2</td>
//   <td className="px-2 py-1 md:px-4 md:py-3">mothers on pnc 3</td>
// </tr>
