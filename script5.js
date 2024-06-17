const obj = [
    {key: "Sample 1", data:"Data1"},
    {key: "Sample 1", data:"Data1"},
    {key: "Sample 2", data:"Data2"},
    {key: "Sample 1", data:"Data1"},
    {key: "Sample 3", data:"Data1"},
    {key: "Sample 4", data:"Data1"},
]
let output = {
    "Sample 1": [
        {key: "Sample 1", data:"Data1"},
        {key: "Sample 1", data:"Data1"},
        {key: "Sample 1", data:"Data1"},
        
    ],
    "Sample 2": [],
    "Sample 3": [],
    "Sample 4": [],
}


{

    let myOutput = obj.reduce((acc, curr) =>{
        if(curr.key === "Sample 1"){
            if(!acc[curr.key]) acc[curr.key] =[]
            acc[curr.key].push(curr) 
        }else{
             acc[curr.key] = []
        }
        return acc;
    }, {})
    
    
    // console.log(myOutput)
}

{
    let myOutput = {}
    obj.forEach(element => {
        if(!myOutput[element.key]) myOutput[element.key] = []
        myOutput[element.key].push(element)
    });
    console.log(myOutput)
}