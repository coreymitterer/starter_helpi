import React from "react";

interface Reports {
    Report: string;
}

interface Career {
    Job_title: string;
    Description: string;
}

export function ReportsPage({ Report }: Reports): JSX.Element {

    // Parse the JSON string into an object
    const reportObject = JSON.parse(Report);

    // Extract careers and descriptions into arrays
    const careers: string[] = [];
    const descriptions: string[] = [];

    Object.keys(reportObject).forEach((key: string) => {
        const career: Career = reportObject[key];
        careers.push(career.Job_title);
        descriptions.push(career.Description);
    });

    return (
        <div>
            <h1>Welcome to the Reports Page!</h1>
            <div>
                {careers.map((career, index) => (
                    <div key={index}>
                        <h2>{career}</h2>
                        <p>{descriptions[index]}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
