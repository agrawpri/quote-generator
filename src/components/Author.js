import React from "react";
import "../styles/Author.css";

export default function Author ({author}) {
    return (
        <div className="author-box">
            <div className="rectangle-wrapper">
                <div className="rectangle">
                    <div className="author-text">
                        <div className="h-1-wrapper">
                            <h1 className="text-wrapper">{author}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
