    const rapid = (x) => {
        x = x.toLowerCase();
        for(var i = 0; i < x.length; i++){          
            if(x[i] == "a" || x[i] == "e" || x[i] == "i" || x[i] == "o" || x[i] == "u"){
                b = i + 1;
                var newString = x.slice(0, b - 1 ) + x.slice(b, x.length); 
            }
        }
        return newString.toUpperCase();
}
   // From this line up Do not change code below
   let str = "John";
   console.log(rapid(str));