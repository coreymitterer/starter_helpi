import React from "react";

interface Reports {
    Report: string;
}

interface Career {
    title: string;
    description: string;
}

export function ReportsPage({ Report }: Reports): JSX.Element {
    // Parse the JSON string into an object
    const reportObject = JSON.parse(Report);

    // Extract careers and descriptions into arrays
    const careers: Career[] = [];

    // Iterate over the keys (e.g., "Job1", "Job2", etc.)
    Object.keys(reportObject).forEach((key: string) => {
        const job = reportObject[key];
        careers.push({
            title: job.title,
            description: job.description
        });
    });

    return (
        <div className="quiz-page">
            <div className="quiz">
                <div className="unfolded-plane">
                    <div className="quiz-container">
                        <div>
                            {careers.map((career, index) => (
                            <div key={index}>
                                <h1>{career.title}
                                    <span>{career.description}</span>
                                </h1>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
