import { PaginationContent } from './PaginationStyled';

const Pagination = ({ usersPerPage, totalUsers, paginate }: any) => {
  const pageNumbers = [];

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
