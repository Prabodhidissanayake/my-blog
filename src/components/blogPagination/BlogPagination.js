import React from "react";
import Pagination from "react-bootstrap/Pagination";

class BlogPagination extends React.Component {
  constructor() {
    super();
  }

  getPrintablePgNumbers() {
    let pgNumbers = [];
    let pagesToSides = 2;
    let startCounter = this.props.paginationDetails.currentPage - pagesToSides;
    let endCounter = this.props.paginationDetails.currentPage + pagesToSides;
    for (let i = startCounter; i <= endCounter; i++) {
      if (i >= 1 && i <= this.props.paginationDetails.lastPage) {
        pgNumbers.push(i);
      }
    }
    return pgNumbers;
  }

  getPaginationItemsFromCurrentPage() {
    return this.getPrintablePgNumbers().map((pgNumber) => {
      return this.props.paginationDetails.currentPage == pgNumber ? (
        <Pagination.Item active key={pgNumber}>
          {pgNumber}
        </Pagination.Item>
      ) : (
        <Pagination.Item
          key={pgNumber}
          onClick={() => {
            this.onPageClick(pgNumber);
          }}
        >
          {pgNumber}
        </Pagination.Item>
      );
    });
  }

  onPageClick = (page) => {
    console.log("clicked " + page);
  };

  render() {
    return (
      <Pagination>
        {/* {JSON.stringify(this.props)} */}
        <Pagination.First />
        {this.props.paginationDetails.currentPage == 1 && (
          <Pagination.Prev disabled />
        )}
        {this.props.paginationDetails.currentPage > 1 && <Pagination.Prev />}
        {this.props.paginationDetails.currentPage > 3 && (
          <Pagination.Item>{1}</Pagination.Item>
        )}
        {this.props.paginationDetails.currentPage > 4 && (
          <Pagination.Ellipsis disabled />
        )}

        {this.getPaginationItemsFromCurrentPage()}

        {this.props.paginationDetails.currentPage <
          this.props.paginationDetails.lastPage - 3 && (
          <Pagination.Ellipsis disabled />
        )}

        {this.props.paginationDetails.currentPage <
          this.props.paginationDetails.lastPage - 2 && (
          <Pagination.Item>
            {this.props.paginationDetails.lastPage}
          </Pagination.Item>
        )}

        {this.props.paginationDetails.currentPage !=
          this.props.paginationDetails.lastPage && <Pagination.Next />}

        <Pagination.Last />
      </Pagination>
    );
  }
}

export default BlogPagination;
