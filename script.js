const billInput = document.querySelector("#billInput");
const numberPeople = document.querySelector("#numberPeople");
const buttonEl = document.querySelectorAll("button");
const tipAmount = document.querySelector("#tipAmount");
const totalAmount = document.querySelector("#totalAmount");

for(let i=0; i<buttonEl.length;)
{
    buttonEl[i].addEventListener('click',()=>{
        const buttonValue = buttonEl[i].textContent;
            if (index === e.target.btnValue)
            {   
                let buttonValue = btn.innerText;
                return buttonValue;
            }
        })
        
    
}

const amountCal = () => {
 

  tipAmount.innerText = (billInput.value * parseInt(buttonValue)) / 100;
  totalAmount.innerText = numberPeople.value * tipAmount.innerText;
};
