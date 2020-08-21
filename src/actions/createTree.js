import {CREATE_TREE} from './types';
import history from '../history';

export const createTree = (formValues,fields) => {

    let generationObjFn = (fieldsArg) => {
        let fields = fieldsArg; 
        console.log(fields,"FIELDS LINE 10")
        let generationObj ={}; 

        for(let prop in fields){
            if(fields[prop].name === "ancestor" || fields[prop].name === "ancestorChildren"){
                continue; 
            }
            //created this conditional because fields stay registered even after deletion but keep a count of 0,1 or more
            if(fields[prop].count < 1){
                continue; 
            }
            //determining if prop name is a spouse and skipping because it is an over calculation for determining container height
            let spouseRegEx = /spouse/ig
            if(fields[prop].name.match(spouseRegEx)){
                continue; 
            }
            //looking for array brackets in name... which implicates depth of tree (ex... ancestorChildren[0]field0[3] )
            let regEx = /\[\d+\]/g;
            let arr = fields[prop].name.match(regEx);
            //length of current array is an indicator of which generation current iteration is on
            let len = arr?.length || 0; 
            len = len.toString(); 
            //creating an object out of length properties and adding # of values for each
            if(Object.keys(generationObj).includes(len)){
                generationObj[len]++; 
            }else if(!Object.keys(generationObj).includes(len)){
                generationObj[len] = 1; 
            }
        }
        return generationObj;
    }

    class generationObjConstructor{
        constructor(generation,value,pxCount){
            this.generation = generation;
            this.value = value; 
            this.pxCount = pxCount; 
        }
    }

    let generationValueObjCreator = () => {
        let obj = generationObjFn(fields);
        let arr = []; 
        let pxCount = 30; 
        for(let props in obj){
           arr.push(new generationObjConstructor(parseInt(props),obj[props],pxCount));
        }
        //sort array by generation
        arr.sort((a,b)=> a.generation - b.generation);
        return arr; 
    }

    let generationTalley = () => {
        console.log("LINE 58 GENERATION TALLEY RAN")
        // let generationObj = generationObjFn(fields)
        let arr = generationValueObjCreator()
        console.log(arr,";INE 61 ARR")
        let len = arr.length; 
        let pxCount = 30; 
        // going to count backwards assigning what will be a px height value for each container in tree starting from last generation
        for(let i = len - 1; i >= 0; i--){
            console.log(arr[i]);
            arr[i].pxCount = pxCount;
            pxCount *= 6; 
        }
        return arr; 

    }





//determining at what point of tree depth has most values and return that value
let determineMax = (arr) => {
    let max = 0; 

    for(let i = 0; i < arr.length; i++){
        let value = arr[i].value/2;
        let sum = arr[i].pxCount * value; 
        if(sum > max){
            max = sum; 
        }
    }
    return max
}



/////****************************************************************** */

let objArr = [];

class ObjConstructor{
    constructor(name,spouseName,children,generation,pxCount){
        this.name = name;
        this.spouseName = spouseName; 
        this.children = children;
        this.generation = generation; 
        this.pxCount = pxCount; 
    }
}

const mappingFn = () => {
    //start off by hard coding in values to objArr
    objArr.push({ancestor:formValues[`ancestor`]});  
    objArr[0].spouseName =formValues[`ancestorspouse`];

     const arrIterator = (iterObj,generationArg,pxEx) => {
           let pxCountArr = generationTalley(); 

           if(!iterObj) return; 
           return iterObj.map((element)=>{
            let currentGeneration = generationArg; 
            let pxValue = pxCountArr[currentGeneration-1].pxCount;
            // let parentPx = currentPx;
            let generationCounter = generationArg; 
            let name = element[`field`];
            let spouseName = element[`spouse`]  || undefined; 
            let children = element[`arr`] || undefined; 

            //if there are children that will be the next generation
            if (children)  generationCounter+=1 

                return (!children ? 
                        new ObjConstructor(name,spouseName,children,currentGeneration,30) : 
                        new ObjConstructor(name,spouseName,arrIterator(children,generationCounter),currentGeneration,pxValue));
        });//////  
    }
    //passing in what would be ancestorChildren named array on formValues;  also starting generation count at 1 since ancestor children are first generation
    objArr[0].children = arrIterator(formValues[`ancestorChildren`],1,0); 
  
  //adding generation prop and value after objArr was created and all iterations are done
  objArr[0].generation =0;
  return objArr[0]
} 

let newObj = mappingFn();
newObj.generationPxRelation = generationTalley(); 
// let parentHeight = determineMax(generationTalley()); 
// parentHeight = parentHeight < 900 ? 900 : parentHeight; 
// newObj.parentHeight = parentHeight; 

history.push("/tree");

return {
    type: CREATE_TREE,
    payload: newObj
}
}