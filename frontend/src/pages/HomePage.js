import React from "react";
import EntityTable from "../components/EntityTable";
import Description from "../components/Description";
import ERD from "../components/ERD";
import Schema from "../components/Schema";

// renders on start up

function HomePage({}) {
    return (
        <div>
            <h2>Welcome</h2>
            <Description />
            <EntityTable />
            <ERD />
            <Schema />
        </div>
    );
}

export default HomePage;
