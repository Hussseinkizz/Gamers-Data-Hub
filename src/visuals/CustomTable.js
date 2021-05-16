/*
 * 📋 Note: I removed name attributes from elements but it's important if the utitlity classes where inline and if we didn't use tailwind's @apply directive, to make elements self descriptive we have used the BEM class naming convention.
 */

export default function CustomTable() {
  return (
    // A CUSTOM GRIDS TABLE
    <section className="table">
      {/* TABLE MAIN HEADER / TITLE */}
      <h1 className="table-header">Summary Of Children Treatment Data</h1>

      {/* TABLE SUB HEADER / COLUMN TITLES */}
      <section className="table-sub-header">
        <span className="table-column_title">Districts</span>
        <span className="table-column_title">Children Under 5</span>
        <span className="table-column_title">GAM [%]</span>
        <span className="table-column_title">GAM Treatment</span>
        <span className="table-column_title">MAM Treatment</span>
        <span className="table-column_title">SAM Treatment</span>
      </section>

      {/* TABLE BODY */}
      <section className="table-body">
        {/* 1st column */}
        <div className="table-column">
          <span className="table-column_cell">Nebbi</span>
          <span className="table-column_cell">Zombo</span>
          <span className="table-column_cell">Pasker</span>
          <span className="table-column_cell">Cworo</span>
          <span className="table-column_cell">Ctuke</span>
          <span className="table-column_cell">Kole</span>
          <span className="table-column_cell">Adjumani</span>
          <span className="table-column_cell">Yumbe</span>
          <span className="table-column_cell">Moyo</span>
          <span className="table-column_cell">Koboko</span>
        </div>
        {/* 2nd column */}
        <div className="table-column">
          <span className="table-column_cell">1</span>
          <span className="table-column_cell">2</span>
          <span className="table-column_cell">3</span>
          <span className="table-column_cell">4</span>
          <span className="table-column_cell">5</span>
          <span className="table-column_cell">6</span>
          <span className="table-column_cell">7</span>
          <span className="table-column_cell">8</span>
          <span className="table-column_cell">9</span>
          <span className="table-column_cell">10</span>
        </div>
        {/* 3rd column */}
        <div className="table-column">
          <span className="table-column_cell">1</span>
          <span className="table-column_cell">2</span>
          <span className="table-column_cell">3</span>
          <span className="table-column_cell">4</span>
          <span className="table-column_cell">5</span>
          <span className="table-column_cell">6</span>
          <span className="table-column_cell">7</span>
          <span className="table-column_cell">8</span>
          <span className="table-column_cell">9</span>
          <span className="table-column_cell">10</span>
        </div>
        {/* 4th column */}
        <div className="table-column">
          <span className="table-column_cell">1</span>
          <span className="table-column_cell">2</span>
          <span className="table-column_cell">3</span>
          <span className="table-column_cell">4</span>
          <span className="table-column_cell">5</span>
          <span className="table-column_cell">6</span>
          <span className="table-column_cell">7</span>
          <span className="table-column_cell">8</span>
          <span className="table-column_cell">9</span>
          <span className="table-column_cell">10</span>
        </div>
        {/* 5th column */}
        <div className="table-column">
          <span className="table-column_cell">1</span>
          <span className="table-column_cell">2</span>
          <span className="table-column_cell">3</span>
          <span className="table-column_cell">4</span>
          <span className="table-column_cell">5</span>
          <span className="table-column_cell">6</span>
          <span className="table-column_cell">7</span>
          <span className="table-column_cell">8</span>
          <span className="table-column_cell">9</span>
          <span className="table-column_cell">10</span>
        </div>
        {/* 6th column */}
        <div className="table-column">
          <span className="table-column_cell">1</span>
          <span className="table-column_cell">2</span>
          <span className="table-column_cell">3</span>
          <span className="table-column_cell">4</span>
          <span className="table-column_cell">5</span>
          <span className="table-column_cell">6</span>
          <span className="table-column_cell">7</span>
          <span className="table-column_cell">8</span>
          <span className="table-column_cell">9</span>
          <span className="table-column_cell">10</span>
        </div>
      </section>
      {/* TABLE FOOTER */}
      <section className="table-footer">
        <span className="table-footer_column">Total</span>
        <span className="table-footer_column">foo</span>
        <span className="table-footer_column">foo</span>
        <span className="table-footer_column">foo</span>
        <span className="table-footer_column">foo</span>
        <span className="table-footer_column">foo</span>
      </section>
    </section>
  );
}
