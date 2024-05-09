import React from "react";
interface Reports {
    Report: string;
  }
export function ReportsPage({Report}: Reports): JSX.Element {
    
    function changeReport(){
        if(Report !==''){
            return(<span>{Report}</span>)
        }
        else {
           return(<span>You have not taken either of the Quizzes yet</span>)
        }
    }
    return (
        <div>
        <h1>Welcome to the Reports Page!</h1>
        {changeReport()}
        </div>
    )
}