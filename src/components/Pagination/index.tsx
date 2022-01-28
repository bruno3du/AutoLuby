import { Container } from "./styles";
import arrowLeft from "../../assets/images/arrow-left.svg";
import arrowRight from "../../assets/images/arrow-right.svg";

interface PaginationProps {
  limit: number;
  total: number;
  offset: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  current: number;
}

export default function Pagination({
  limit,
  total,
  offset,
  setOffset,
  current,
}: PaginationProps) {
  const MAX_ITEMS = 3;
  const MAX_LEFT = (MAX_ITEMS - 1) / 2;

  const pages = Math.ceil(total / limit); // Quantidade de página
  const maxFirst = Math.max(pages - (MAX_ITEMS - 1), 1);
  const first = Math.min(Math.max(current - MAX_LEFT, 1), maxFirst);

  function onPageChange(page: number) {
    setOffset((page - 1) * limit);
  }

  return (
    <Container className="pagination">
      <li>
        <button
          className="btn-prev-next"
          onClick={() => onPageChange(current - 1)}
          disabled={current === 1}
        >
          <img src={arrowLeft} alt="Anterior" />
          <span>Anterior</span>
        </button>
      </li>
      {Array.from({ length: Math.min(MAX_ITEMS, pages) })
        .map((_, index) => index + first)
        .map((page) => (
          <li key={page}>
            <button
              onClick={() => onPageChange(page)}
              className={
                page === current ? "pagination__item--active btn" : "btn"
              }
            >
              {page}
            </button>
          </li>
        ))}
      <li>
        <button
          onClick={() => onPageChange(current + 1)}
          disabled={current === pages}
          className="btn-prev-next"
        >
          Próxima
          <img src={arrowRight} alt="Próximo" />
        </button>
      </li>
    </Container>
  );
}
