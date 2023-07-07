import React, { Fragment } from "react";
import Header from "./components/header/header.component";
import { Box } from "@mui/material";
import CategoryItem from "./components/category-item/category-item.component";
import MultipleCombinations from "./components/multiple-combinations/multiple-combinations.component";
import Presentation from "./components/presentation/presentation.component";
import Solutions from "./components/solutions/solutions.component";
import Footer from "./components/footer/footer.component";
import CopyRight from "./components/copy/copyright.component";

function App() {
    return (
        <Fragment>
            <Header />
            {/* <Box style={{maxWidth: '1200px',margin: 'auto',background: '#ffffff'}}> */}
                <CategoryItem />
                <MultipleCombinations />
                <Presentation />
                <Solutions />
                <Footer />
                <CopyRight />
            {/* </Box> */}
        </Fragment>
    );
}

export default App;
