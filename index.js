// Write your solution in this file!
const employee={}
employee.name="Sam"
employee.streetAddress="TR"

//ok
function updateEmployeeWithKeyAndValue(employee, key, value){
        const emp={...employee}
        emp[key]=value
        

        return emp

    }



//ok
 function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
        employee[key]=value
        return employee

 }


 function deleteFromEmployeeByKey(employee,key) {

    const emp2={
        ...employee
    }
     delete emp2[key]

     return emp2
     
 }



 function destructivelyDeleteFromEmployeeByKey(employee,key) {

          delete employee[key]

          return employee

 }