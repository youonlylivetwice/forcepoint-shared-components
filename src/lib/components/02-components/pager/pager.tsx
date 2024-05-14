import { ComponentPropsWithoutRef, ElementType } from 'react';
import Button from '../../01-elements/button/button';

export interface PagerProps extends ComponentPropsWithoutRef<'nav'> {
  baseUrl: string;
  currentPage: number;
  totalPages: number;
  component?: ElementType;
  previousLabel?: string;
  nextLabel?: string;
  currentPageLabel?: string;
}

export default function Pager({
  className,
  baseUrl,
  currentPage = 0,
  previousLabel = 'Previous',
  nextLabel = 'Next',
  currentPageLabel = 'of',
  component: Element = 'a',
  totalPages,
  ...props
}: PagerProps) {
  function createPageURL(page: number) {
    const parsedUrl = new URL(baseUrl);
    const params = parsedUrl.searchParams;
    if (page > 0) {
      params.set('page', page.toString());
    } else {
      params.delete('page');
    }
    const search = params.toString();
    return `${parsedUrl.pathname}${search ? `?${search}` : ''}`;
  }

  const renderedPrevious = currentPage > 0 && (
    <li>
      <Button
        className="px-md sm:px-lg"
        component={Element}
        as="link"
        color="blue"
        href={createPageURL(currentPage - 1)}>
        {previousLabel}
      </Button>
    </li>
  );

  const renderedCurrentPage = (
    <li className="flex-shrink-0 items-center text-h4 font-semibold sm:mx-xl">{`${currentPage + 1} ${currentPageLabel} ${totalPages}`}</li>
  );

  const renderedNext = currentPage + 1 < totalPages && (
    <li>
      <Button
        className="px-md sm:px-lg"
        component={Element}
        as="link"
        color="blue"
        href={createPageURL(currentPage + 1)}>
        {nextLabel}
      </Button>
    </li>
  );
  return (
    <nav className={className} {...props}>
      <ul className="flex items-center justify-between sm:justify-normal">
        {renderedPrevious}
        {renderedCurrentPage}
        {renderedNext}
      </ul>
    </nav>
  );
}
