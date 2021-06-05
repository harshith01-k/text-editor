


function updateText(){
    // CODE GOES HERE
    let text  = document.getElementById("text-input").value;
    document.getElementById("text-output").innerText = text;
  }
  
  
  function makeBold(elem){
    //CODE GOES HERE
    elem.classList.toggle('active');
    document.getElementById("text-output").classList.toggle('bold');
  }
  
  function makeItalic(elem){
      elem.classList.toggle('active');
      document.getElementById("text-output").classList.toggle('italic');
  }
 
  function makeUnderline(elem){
    
      elem.classList.toggle('active');
      document.getElementById("text-output").classList.toggle('underline');
  }
  
 
  function makeLeft(elem)
  {
      elem.classList.toggle('active');
      document.getElementById("text-output").style.textAlign ="left"
  }
  function makeRight(elem)
  {
      elem.classList.toggle('active');
      document.getElementById("text-output").style.textAlign = "right"
  }
  function makeCenter(elem)
  {
      elem.classList.toggle('active');
      document.getElementById("text-output").style.textAlign = "center";
  }
  
  