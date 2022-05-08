/* 
Create a complete Developer array and object data structure with monthly income and search devs by stack location income age 
*/

/*  
Create a complete fifth class students array object data structure and find their result with gpa grade cgpa and final result
*/


let res = new FinalResult();



for (data of stuList){
   console.log(`
   Student Name             : ${data.name}
   Student Roll             : ${data.rool}
   School Name              : ${data.schoolName}
   ------------------------------------
   SUBJECT         MARKS      GPA        Grade 
   -------         ------     ---        ------
   Bangla          ${data.bn}         ${res.result(data.bn).totalGpa}          ${res.result(data.bn).totaoGrade}    
   english         ${data.en}         ${res.result(data.en).totalGpa}          ${res.result(data.en).totaoGrade}
   math            ${data.math}         ${res.result(data.math).totalGpa}          ${res.result(data.math).totaoGrade}
   ========================================
   total mark = ${res.totalGpa(data.bn, data.en , data.math ).final_cgpa}        totalGap = ${res.totalGpa(data.bn, data.en , data.math ).final_rejuslt}  
   
   `);
}