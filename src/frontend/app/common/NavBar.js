import React from "react";
import { A } from '@patched/hookrouter';

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li><A href="/">Index</A></li>
                <li><A href="/authors">Authors</A></li>
            </ul>
        </nav>
    );
}