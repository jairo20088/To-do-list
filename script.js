
let UIcontroller = (function(){

    const dayOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday'];
    const months = ['January','February','March','April','May','Jun','July','August','September','Octuber','November','December'];
    let date = new Date().getDate();
    let day = new Date().getDay();
    let month = new Date().getMonth();
    let currentDay = dayOfWeek[day];
    let currentMonth = months[month];


    return{
        today: ()=>{
            document.querySelector('.day').textContent =   `${currentDay}, ${date}`;
            document.querySelector('.month').textContent =  currentMonth;
        },
        NumberOfTask: ()=>{
            let task = document.querySelectorAll('li').length;
            document.querySelector('.task-number p').textContent = `${task} tasks`;

        },
        getValue: ()=>{
            let value = document.querySelector('input').value;
            let html = `
            <li class="items">
                <div class="bar-color"></div>
                    <span>${value}</span><div class="checkdelbtn">
                    <img src="iconmonstr-check-mark-1.svg" id="done">
                    <img src="iconmonstr-x-mark-11.svg" id="delete">
                </div>
            </li>`;
            if (value !== ''){
                document.querySelector('.list-items').insertAdjacentHTML('beforeend',html);
            }
            document.querySelector('input').value = '';
        },
        
    }
})();

let controller = (function(UIctrl){

    //  1. ADD An element and Count the tasks
    let eventListener = ()=> {
        document.querySelector('#btn').addEventListener('click',()=>{
            UIctrl.getValue();
            UIctrl.NumberOfTask();
        });
        document.querySelector('.list-items').addEventListener('click',e=>{

            var getItem = e.target;
            var parent = getItem.parentElement.parentElement;
            var lineThrough = parent.firstElementChild.nextElementSibling;
                //getItem.style.textDecoration = 'line-through'
            if(getItem.id === 'done'){
                lineThrough.className = 'done-item';
            } else if (getItem.id ==='delete'){
                parent.remove();
                UIctrl.NumberOfTask()
            }

        })
    }

    return {
        init: ()=>{
            UIctrl.today();
            UIctrl.NumberOfTask();
            eventListener();
            
        }
    }
    

})(UIcontroller);

controller.init();





