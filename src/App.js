import React, { Fragment } from "react";
import Header from "./components/header/header.component";
import CategoryItem from "./components/category-item/category-item.component";
import MultipleCombinations from "./components/multiple-combinations/multiple-combinations.component";
import Presentation from "./components/presentation/presentation.component";
import Solutions from "./components/solutions/solutions.component";
import Footer from "./components/footer/footer.component";
import CopyRight from "./components/copy/copyright.component";
import ProtectionDevices from "./components/protection-devices/protection-devices.component";

function App() {
    return (
        <Fragment>
            <Header />
            <CategoryItem />
            <MultipleCombinations />
            <Presentation />
            <Solutions />
            <ProtectionDevices />
            <Footer />
            <CopyRight />
        </Fragment>
    );
}

export default App;
