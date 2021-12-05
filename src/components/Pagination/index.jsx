import React from 'react'
import {
    Pagination as PaginationWrapper,
    PaginationItem,
    PaginationLink
} from 'reactstrap';

const Pagination = ({ currentPage, pagesCount, handlePagination }) => {
    return (
        <div style={{ overflowX: "auto", }}>
            <PaginationWrapper aria-label="Page navigation">

                <PaginationItem disabled={currentPage <= 0}>

                    <PaginationLink
                        onClick={e => handlePagination(e, currentPage - 1)}
                        previous
                        href="#"
                    />

                </PaginationItem>

                {[...Array(pagesCount)].map((page, i) =>
                    <PaginationItem active={i === currentPage} key={i}>
                        <PaginationLink onClick={e => handlePagination(e, i)} href="#">
                            {i + 1}
                        </PaginationLink>
                    </PaginationItem>
                )}

                <PaginationItem disabled={currentPage >= pagesCount - 1}>
                    <PaginationLink
                        onClick={e => handlePagination(e, currentPage + 1)}
                        next
                        href="#"
                    />
                </PaginationItem>

            </PaginationWrapper>
        </div>
    )
}

export default Pagination
