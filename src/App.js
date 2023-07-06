import React, { Fragment } from "react";
import Header from "./components/header/header.component";
import { Box } from "@mui/material";
import CategoryItem from "./components/category-item/category-item.component";

function App() {
    return (
        <Fragment>
            <Header />
            {/* <Box style={{maxWidth: '1200px',margin: 'auto',background: '#ffffff'}}> */}
                <CategoryItem />
            {/* </Box> */}
        </Fragment>
    );
}

export default App;
