// dom elements - display output
let balEl = document.getElementById("balance")
let incEl = document.getElementById("income")
let expEl = document.getElementById("expense")

// form elements - input
let formEl = document.getElementById("expenseForm")
let titleEl = document.getElementById("title")
let amountEl = document.getElementById("amount")
let btnEl = document.getElementById("submitBtn")

// output elements -> transaction list
let listEl = document.getElementById("list")

//for edit
let trId = null;
let isEdit = false;


// read transaction from local storage
function readTransactions() {
    // localStorage.getItem(key_name)
    return localStorage.getItem("transactions") ? JSON.parse(localStorage.getItem("transactions")) : [];
}

// store the result in variable
let data = readTransactions()

//edit handler 
function editHandler(id){
    console.log(`edit trId =`, id)
    trId = id;
    isEdit = false;

    // read the value from data
    let tr = data.find(item => Number(item.id) === Number(trId))
    console.log(`single tr =`, tr)

// if isEdit is true , set the values in form inputs    
    if(trId && isEdit){
        btnEl.innerText = `Update`;
        btnEl.classList.remove(`dark`);
        btnEl.classList.add(`warning`);
        titleEl.value = tr.title;
        amountEl.value = tr.amount;
    }
}

// update transactions
function updateTransaction(val){
    let trIndex = data.findIndex(item => Number(item.id) === Number(trId))

    let upVal = {
        id : trId,
        ...val
    };
    data.splice(trIndex,1,upVal)
    localStorage.setItem("transactions", JSON.stringify(data))
    alert("Transcation Details updated");
    updateIncExpBalance();
    window.location.reload();
}

// create transactions
function createTransaction (val) {
    data.unshift(val)
    // localStorage.setItem(key,value)
    localStorage.setItem("transactions", JSON.stringify(data))
    alert("New transaction created successfully")
    window.location.reload() // refresh the current page
}

// delete transaction
function deleteHandler(id){
    if(window.confirm(`Are you sure to delete the transaction?:${id}`)){
        let trIndex = data.findIndex(item => Number(item.id) === Number(id))
        data.splice(trIndex,1)
        localStorage.setItem("transactions", JSON.stringify(data))
        alert("Transaction is Deleted")
        window.location.reload()
    }
}

// print the transactions
function printTransaction(val) {
     val.forEach(function(item){
        listEl.innerHTML += `<li class="${Number(item.amount) > 0 ? 'income': 'expense'}">
                                 <div class="leftItem">
                                        <span class=""> ${item.title} </span>
                                        <span class=""> ${item.amount} </span>
                                 </div> 
                                 <div class="rightItem">
                                      <span class="btn edit" onclick ="editHandler('${item.id}')">
                                            <i class="fa-solid fa-pen-to-square"></i>
                                      </span>
                                      <span class="btn delete" onclick="deleteHandler('${item.id}')">
                                            <i class="fa-solid fa-trash"></i>
                                      </span>
                                 </div>
                            </li>`
     })
}

printTransaction(data)


// store the data in local storage
formEl.addEventListener("submit", function(e){
    e.preventDefault();// to avoid page reload

    if(amountEl.value === 0 || amountEl.value == -0) {
        alert("Enter non zero value in amount.")
        amountEl.value = '';
    } else {
        let trData = {
            id: isEdit ? trId : Math.round(Math.random() * 100000),
            title: titleEl.value,
            amount: amountEl.value
        }
        console.log(`input =`, trData)
        if(trId && isEdit){
            updateTransaction(trData)
        } else {
            createTransaction(trData)
        }
    }
})


// display the transactions data
function updateIncExpBalance() {
    let amounts = data.map((item,index) => Number(item.amount));
    console.log(`amounts = `, amounts)

    // balance
    let bal = amounts.reduce((ac,cu) => ac + cu,0).toFixed(2);
    balEl.innerHTML = bal > -1 ? `&#8377; ${bal}` : `-&#8377; ${bal}`;

    // income 
    let inc = amounts.filter((val) => val > 0).reduce((ac,cu) => ac + cu,0).toFixed(2);
    incEl.innerHTML = `&#8377; ${inc}`;

    //exp 
    let negVl = amounts.filter(val => val < 0);
    let exp = negVl.reduce((ac,cu) => ac + cu, 0);
    expEl.innerHTML = `&#8377; ${exp.toFixed(2)}`;
}

updateIncExpBalance()