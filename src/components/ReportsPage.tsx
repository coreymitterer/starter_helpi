import React from "react";
interface Reports {
    basicReport: string;
    detailedReport: string;
  }
export function ReportsPage({basicReport, detailedReport}: Reports): JSX.Element {
    
    function changeReport(){
        if(basicReport !== '' && detailedReport !==''){
            return(<span>{detailedReport}</span>)
        }
        else if(basicReport === '' && detailedReport !==''){
            return(<span>{detailedReport}</span>)
        }
        else if(basicReport !== '' && detailedReport ===''){
            return(<span>{basicReport}</span>)
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