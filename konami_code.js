const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
function codeTester(e){
  const key = isNan(parseInt(e.which || e.detail)) ? e.which : parseInt(e.which || e.detail);
 // const key = e.which;  //parseInt(e.which).isNaN ? e.which : parseInt(e.which);
  console.log(key);
  if(key === code[codeFollower]){
    if(codeFollower === code.length - 1){
      alert('Cheat Entered.');
      codeFollower = 0;
      return;
    }
    codeFollower++;
  }else{
    codeFollower = 0;
  }
  
  console.log(codeFollower);
  
}

var codeFollower = 0;

//init()

function init() {
  
  const cheatListener = document.addEventListener('keydown', codeTester);
  
}