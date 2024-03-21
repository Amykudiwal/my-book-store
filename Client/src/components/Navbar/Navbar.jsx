import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { getBooks, searchBooks } from "../../redux/bookSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [input, setInput] = useState({
    q: "",
  });

  const handleSubmitSearch = (e) => {
    e.preventDefault();

    const query = {
      q: input.q,
    };
    dispatch(searchBooks(query));
  };

  const { url } = `/search?q=${input.q}`;

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 300,
              }}
              elevation={2}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Here"
                inputProps={{ "aria-label": "search google maps" }}
                onChange={inputHandler}
                name="q"
                value={input.q}
              />
              <Link to={url}>
                <IconButton
                  href={url}
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                  onClick={handleSubmitSearch}
                >
                  <SearchIcon />
                </IconButton>
              </Link>
            </Paper>
          </div>
        </div>
        <div className="center">
          <Link className="link" style={{ marginRight: "150px" }} to="/">
            Book Store
          </Link>
        </div>
        <div className="right">
          <div className="icons">
            <Link
              className="link"
              to="/books"
              style={{
                marginRight: 20,
                color: "black",
              }}
            >
              Books
            </Link>
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
