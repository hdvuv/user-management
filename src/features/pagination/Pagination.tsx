import { PaginationContent } from './PaginationStyled';

const Pagination = ({ usersPerPage, totalUsers, paginate }: any) => {
  // Array contain number of pages
  const pageNumbers = [];

  // Calculate number of page, then push to the array above
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContent>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a onClick={() => paginate(number)} href="#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </PaginationContent>
  );
};

export default Pagination;
