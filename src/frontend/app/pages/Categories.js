import React, { Component } from "react";
import Tagger from "../components/Tagger";
import Category from "../components/Category";
export default class Categories extends Component{


    render() {
        return <>
         <h1>Kategorie</h1>
         <Tagger label="Categories" items={[
            {
                key: "test",
                value: "test"
            },
            {
                key: "test2",
                value: "test2"
            }
         ]} />
         <Category />
        </>;
    }
}