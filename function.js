
function FinalResult (){

    this.result = (marks)  =>  {
 
        let gpa;
        let grade;
    
        if(marks >= 0 && marks < 33){
            gpa = 0;
            grade = 'F';
        }else if (marks >= 33 && marks < 40) {
            gpa = 1;
            grade = 'D';
        }else if (marks >= 40 && marks < 50) {
            gpa = 2;
            grade = 'C';
        }else if (marks >= 50 && marks < 60) {
            gpa =3;
            grade = 'B';
        }else if (marks >= 60 && marks < 70) {
            gpa = 3.5;
            grade = 'A-';
        }else if (marks >= 70 && marks < 80) {
            gpa = 4;
            grade = 'A';
        }else if (marks >= 80 && marks < 100) {
            gpa = 5;
            grade = 'A+';
        }else{
            gpa = '0';
            grade = 'Invaled';
        }
    
        return {
            totalGpa : gpa,
            totaoGrade  :  grade,
        }
    
    }


   this.totalGpa =  function   (bn, en, math) {


    let cgpa ;
    let finalRejuslt;
    

    let totalgpa = ( this.result(bn).totalGpa + this.result(en).totalGpa + this.result(math).totalGpa ) ;
    cgpa = totalgpa / 3

    if(bn < 33 || en < 33 || math < 33  ){
        finalRejuslt ='Faild';
    }else if (cgpa > 0 && cgpa < 1) {
        finalRejuslt = ' F'
    }else if (cgpa > 1 && cgpa < 2) {
        finalRejuslt = ' D';
    } else if (cgpa > 2 && cgpa < 3) {
        finalRejuslt = ' C';
    }  else if (cgpa > 3 && cgpa < 3.5) {
        finalRejuslt = ' B';
    }else if (cgpa > 3.5 && cgpa < 4) {
        finalRejuslt = ' A-';
    }else if (cgpa > 4 && cgpa < 5) {
        finalRejuslt = ' A';
    }else if (cgpa == 5) {
        finalRejuslt = ' A+';
    }  


    return {
        final_cgpa : finalRejuslt == 'F' ? 'Faield'  :   cgpa  ,
        final_rejuslt : finalRejuslt ,
    }    
}






}