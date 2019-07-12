import React from "react";
import { MDBPagination, MDBPageItem, MDBPageNav, MDBRow, MDBContainer } from "mdbreact";

const PaginationPage = () => {
  return (
    <MDBContainer>
    <MDBRow className="justify-content-center">
        <MDBPagination circle color="red">
          <MDBPageItem disabled>
            <MDBPageNav className="page-link">
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem disabled>
            <MDBPageNav className="page-link" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem active>
            <MDBPageNav className="page-link">
              1 <span className="sr-only">(current)</span>
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav className="page-link">
              2
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav className="page-link">
              3
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav className="page-link">
              4
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav className="page-link">
              5
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav className="page-link">
              &raquo;
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
          </MDBPageItem>
        </MDBPagination>
    </MDBRow>
    </MDBContainer>
    )
}

export default PaginationPage;