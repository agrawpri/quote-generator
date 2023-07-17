import React from "react";
import "../styles/QuoteText.css";

export default function QuoteText ({quoteText}) {
    return (
        <div className="quote-text">
            <div className="h-1-wrapper">
                <h1 className="text-wrapper">
                    "{quoteText}"
                </h1>
            </div>
        </div>
    );
};
