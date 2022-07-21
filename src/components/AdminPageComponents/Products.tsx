import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "src/redux/apiCalls";
import { RootState } from "src/redux/store";
import { styled, Typography } from "@mui/material";
import { ROUTES } from "src/constants/routes";

const PREFIX = "ProductList";

const StyledListItem = styled("div", {
  name: `${PREFIX}-StyledListItem`,
})(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

const StyledListImg = styled("img", {
  name: `${PREFIX}-StyledListImg`,
})(({ theme }) => ({
  width: 32,
  height: 32,
  borderRadius: "50%",
  objectFit: "cover",
  marginRight: theme.spacing(1.2),
}));

const StyledListEdit = styled("button", {
  name: `${PREFIX}-StyledListEdit`,
})(({ theme }) => ({
  border: "none",
  borderRadius: 5,
  padding: theme.spacing(1),
  backgroundColor: "#3bb077",
  color: theme.palette.white.main,
  cursor: "pointer",
  marginRight: theme.spacing(3.5),
}));

type renderCellColumnProps = {
  row: {
    _id: string;
    img: string;
    title: string;
  };
};

export const ProductList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state: RootState) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDelete = (id: string) => {
    deleteProduct(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: ({ row: { img, title } }: renderCellColumnProps) => {
        console.log(title);
        return (
          <StyledListItem>
            <StyledListImg src={img} alt="" />
            <Typography sx={{ fontSize: 8 }}>{title}</Typography>
          </StyledListItem>
        );
      },
    },
    {
      field: "inStock",
      headerName: "Stock",
      width: 200,
      renderCell: () => "true",
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: ({ row: { _id } }: renderCellColumnProps) => {
        return (
          <>
            <StyledListEdit
              onClick={() => navigate(`${ROUTES.PRODUCTS}/${_id}`)}
            >
              Edit
            </StyledListEdit>
            <DeleteOutline
              color="error"
              sx={{ cursor: "pointer" }}
              onClick={() => handleDelete(_id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div style={{ height: 525, width: "100%" }}>
      <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
};
