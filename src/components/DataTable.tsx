import React from 'react'
import ReactPaginate from 'react-paginate'
import { TableOptions, usePagination, useTable } from 'react-table'

export const DataTable = (options: TableOptions<any>) => {
  const tableInstance = useTable(options, usePagination)

  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, pageCount, page, gotoPage } = tableInstance

  return (
    <div>
      <div className="rounded-lg overflow-hidden border border-innovasive-ui-border shadow-sm">
        <table {...getTableProps()} className="w-full">
          <thead className="bg-innovasive-ui-table-header-bg">
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <td className={column.headerClassName}>{column.render('Header')}</td>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="bg-white">
            {page.map(row => {
              prepareRow(row)

              return (
                <tr {...row.getRowProps()} className="border-b border-innovasive-ui-border">
                  {row.cells.map(cell => (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-16 flex items-center justify-center">
        <ReactPaginate
          pageCount={pageCount}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          onPageChange={item => gotoPage(item.selected)}
          previousLabel={
            <div className="flex items-center cursor-pointer border-r  border-innovasive-ui-border pr-8">
              <div className="text-sm font-bold flex items-center justify-center rounded px-8 py-2 hover:bg-innovasive-ui-paginate-hover transition-all duration-300">
                <svg className="mr-8" width="4" height="7" viewBox="0 0 4 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.66568 6.66389L3.88906 6.44206C3.95882 6.37225 3.99725 6.27936 3.99725 6.18009C3.99725 6.08088 3.95882 5.98788 3.88906 5.91807L1.35846 3.38758L3.89187 0.854177C3.96162 0.784473 4 0.691479 4 0.592264C4 0.493049 3.96162 0.4 3.89187 0.330241L3.66987 0.108355C3.52551 -0.0361184 3.29035 -0.0361184 3.14599 0.108355L0.118817 3.12468C0.0491127 3.19438 9.47276e-08 3.28727 9.03523e-08 3.38736L9.03017e-08 3.38852C8.59625e-08 3.48779 0.0491677 3.58067 0.118817 3.65038L3.13778 6.66389C3.20749 6.73371 3.30318 6.77203 3.40239 6.77214C3.50167 6.77214 3.59604 6.73371 3.66568 6.66389Z"
                    fill="#191D3C"
                  />
                </svg>
                PREV
              </div>
            </div>
          }
          nextLabel={
            <div className="flex items-center cursor-pointer border-l border-innovasive-ui-border pl-8">
              <div className="text-sm font-bold flex items-center justify-center rounded px-8 py-2 hover:bg-innovasive-ui-paginate-hover active:bg-innovasive-ui-paginate-hover transition-all duration-300">
                NEXT
                <svg className="ml-8" width="4" height="7" viewBox="0 0 4 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0.334315 0.108325L0.110943 0.330155C0.0411839 0.399969 0.00275306 0.492853 0.00275306 0.592123C0.00275306 0.691339 0.0411839 0.784332 0.110943 0.854146L2.64154 3.38463L0.108135 5.91804C0.0383758 5.98774 8.24581e-09 6.08074 7.06268e-09 6.17995C5.87955e-09 6.27917 0.0383758 6.37222 0.108135 6.44198L0.330131 6.66386C0.474494 6.80834 0.709649 6.80834 0.854012 6.66386L3.88118 3.64754C3.95089 3.57783 4 3.48495 4 3.38485L4 3.3837C4 3.28443 3.95083 3.19154 3.88118 3.12184L0.862216 0.108325C0.792512 0.0385103 0.69682 0.000189313 0.597605 7.91621e-05C0.498335 7.91609e-05 0.403964 0.0385103 0.334315 0.108325Z"
                    fill="#191D3C"
                  />
                </svg>
              </div>
            </div>
          }
          previousLinkClassName="focus:outline-none"
          nextLinkClassName="focus:outline-none"
          containerClassName="flex space-x-8 bg-white shadow items-center h-40 px-24"
          activeClassName="bg-innovasive-ui-paginate-selected rounded"
          activeLinkClassName="p-4 min-w-24 h-24 text-white rounded flex justify-center items-center text-sm font-bold bg-innovasive-ui-paginate-selected hover:bg-innovasive-ui-paginate-selected"
          pageClassName="rounded hover:bg-innovasive-ui-paginate-hover transition-all duration-300"
          pageLinkClassName="p-4 min-w-24 h-24 rounded flex justify-center items-center text-sm font-bold focus:outline-none"
        />
      </div>
    </div>
  )
}
