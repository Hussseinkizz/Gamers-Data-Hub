export default function Table() {
  return (
    // TABLE CONTAINER
      <section className="grid w-full mx-auto text-xs rounded-md shadow-lg place-items-center md:text-sm md:w-3/4 lg:text-base lg:w-4/5 mb-24">
        {/* TABLE HEADER / TITLE */}
        <h1 className="flex justify-center w-full py-2 text-sm font-bold text-center border-gray-300 md:text-base lg:text-lg bg-gradient rounded-t-sm">
          Treatment Data Summary Of Under 5 Years Children
        </h1>
        {/* TABLE */}
        <table className="w-full text-left text-gray-800 rounded-md table-auto bg-gray-50 md:text-center">
          <tr className="font-semibold border-b border-gray-300">
            <th className="px-2 py-1 md:px-4 md:py-3">Districts</th>
            <th className="px-2 py-1 md:px-4 md:py-3">No. Of Children</th>
            <th className="px-2 py-1 md:px-4 md:py-3">GAM Treatment</th>
            <th className="px-2 py-1 md:px-4 md:py-3">MAM Treatment</th>
            <th className="px-2 py-1 md:px-4 md:py-3">SAM Treatment</th>
          </tr>
          {/* 1st table row */}
          <tr className="border-b border-gray-200 hover:bg-indigo-50">
            <td className="px-2 py-1 md:px-4 md:py-3">Nebbi</td>
            <td className="px-2 py-1 md:px-4 md:py-3">47,470</td>
            <td className="px-2 py-1 md:px-4 md:py-3">11,230</td>
            <td className="px-2 py-1 md:px-4 md:py-3">71,090</td>
            <td className="px-2 py-1 md:px-4 md:py-3">1230</td>
          </tr>
          {/* 2nd table row  */}
          <tr className="border-b border-gray-200 hover:bg-indigo-50">
            <td className="px-2 py-1 md:px-4 md:py-3">Zombo</td>
            <td className="px-2 py-1 md:px-4 md:py-3">50,340</td>
            <td className="px-2 py-1 md:px-4 md:py-3">2,459</td>
            <td className="px-2 py-1 md:px-4 md:py-3">25,450</td>
            <td className="px-2 py-1 md:px-4 md:py-3">24,000</td>
          </tr>
          {/* 3rd table row */}
          <tr className="border-b border-gray-200 hover:bg-indigo-50">
            <td className="px-2 py-1 md:px-4 md:py-3">Pasker</td>
            <td className="px-2 py-1 md:px-4 md:py-3">30,304</td>
            <td className="px-2 py-1 md:px-4 md:py-3">53,567</td>
            <td className="px-2 py-1 md:px-4 md:py-3">15,900</td>
            <td className="px-2 py-1 md:px-4 md:py-3">14,680</td>
          </tr>
          {/* 4th table row */}
          <tr className="border-b border-gray-200 hover:bg-indigo-50">
            <td className="px-2 py-1 md:px-4 md:py-3">Cworo</td>
            <td className="px-2 py-1 md:px-4 md:py-3">60,040</td>
            <td className="px-2 py-1 md:px-4 md:py-3">35,442</td>
            <td className="px-2 py-1 md:px-4 md:py-3">23,459</td>
            <td className="px-2 py-1 md:px-4 md:py-3">13,409</td>
          </tr>
          {/* 5th table row */}
          <tr className="border-b border-gray-200 hover:bg-indigo-50">
            <td className="px-2 py-1 md:px-4 md:py-3">Ctuke</td>
            <td className="px-2 py-1 md:px-4 md:py-3">2,000</td>
            <td className="px-2 py-1 md:px-4 md:py-3">53,567</td>
            <td className="px-2 py-1 md:px-4 md:py-3">15,900</td>
            <td className="px-2 py-1 md:px-4 md:py-3">14,680</td>
          </tr>
          {/* 6th table row */}
          <tr className="border-b border-gray-200 hover:bg-indigo-50">
            <td className="px-2 py-1 md:px-4 md:py-3">Kole</td>
            <td className="px-2 py-1 md:px-4 md:py-3">10,304</td>
            <td className="px-2 py-1 md:px-4 md:py-3">30,567</td>
            <td className="px-2 py-1 md:px-4 md:py-3">51,200</td>
            <td className="px-2 py-1 md:px-4 md:py-3">30,670</td>
          </tr>
          {/* 7th table row */}
          <tr className="border-b border-gray-200 hover:bg-indigo-50">
            <td className="px-2 py-1 md:px-4 md:py-3">Adjumani</td>
            <td className="px-2 py-1 md:px-4 md:py-3">80,230</td>
            <td className="px-2 py-1 md:px-4 md:py-3">13,667</td>
            <td className="px-2 py-1 md:px-4 md:py-3">24,000</td>
            <td className="px-2 py-1 md:px-4 md:py-3">13,550</td>
          </tr>
          {/* 8th table row */}
          <tr className="border-b border-gray-200 hover:bg-indigo-50">
            <td className="px-2 py-1 md:px-4 md:py-3">Yumbe</td>
            <td className="px-2 py-1 md:px-4 md:py-3">12,324</td>
            <td className="px-2 py-1 md:px-4 md:py-3">17,067</td>
            <td className="px-2 py-1 md:px-4 md:py-3">40,900</td>
            <td className="px-2 py-1 md:px-4 md:py-3">24,980</td>
          </tr>
          {/* 9th table row */}
          <tr className="border-b border-gray-200 hover:bg-indigo-50">
            <td className="px-2 py-1 md:px-4 md:py-3">Moyo</td>
            <td className="px-2 py-1 md:px-4 md:py-3">30,490</td>
            <td className="px-2 py-1 md:px-4 md:py-3">7,567</td>
            <td className="px-2 py-1 md:px-4 md:py-3">25,900</td>
            <td className="px-2 py-1 md:px-4 md:py-3">11,660</td>
          </tr>
          {/* 10th table row */}
          <tr className="border-b border-gray-200 hover:bg-indigo-50">
            <td className="px-2 py-1 md:px-4 md:py-3">Koboko</td>
            <td className="px-2 py-1 md:px-4 md:py-3">50,304</td>
            <td className="px-2 py-1 md:px-4 md:py-3">52,567</td>
            <td className="px-2 py-1 md:px-4 md:py-3">14,900</td>
            <td className="px-2 py-1 md:px-4 md:py-3">34,680</td>
          </tr>
        </table>
      </section>
  );
}
