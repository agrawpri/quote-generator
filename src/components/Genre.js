import React from "react";
import "../styles/Genre.css";

export default function Genre({genre}) {
    return (
        <div className="genre">
            <div className="div-wrapper">
                <div className="text-wrapper">{genre}</div>
            </div>
        </div>
    );
}
