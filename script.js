 function show(){

            let userinput=document.getElementById('input').value
          let  displayArea= document.getElementById('display')
         displayArea.innerHTML += `<li>${userinput}</li>`
         document.getElementById('input').value=''
        }