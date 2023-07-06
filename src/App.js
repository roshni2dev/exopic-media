import React, { Fragment } from "react";
import Header from "./components/header/header.component";
import { Box } from "@mui/material";
import CategoryItem from "./components/category-item/category-item.component";
import MultipleCombinations from "./components/multiple-combinations/multiple-combinations.component";
import Presentation from "./components/presentation/presentation.component";

function App() {
    return (
        <Fragment>
            <Header />
            {/* <Box style={{maxWidth: '1200px',margin: 'auto',background: '#ffffff'}}> */}
                <CategoryItem />
                <MultipleCombinations />
                <Presentation />
            {/* </Box> */}
        </Fragment>
    );
}

export default App;
