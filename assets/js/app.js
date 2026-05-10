const cl = console.log;

const stdContainer = document.getElementById('stdContainer')
const stdForm = document.getElementById('stdForm')
const fnameControl = document.getElementById('fname')
const lnameControl = document.getElementById('lname')
const emailControl = document.getElementById('email')
const contactControl = document.getElementById('contact')
const addStdBtn = document.getElementById('addStdBtn')
const updateStdBtn = document.getElementById('updateStdBtn')
const stdTbale = document.getElementById('stdTable')
const noStdMsg = document.getElementById('noStdMsg')


let stdArr = [
    {
        fname: 'Jhon',
        lname: 'Doe',
        email: 'jd@gmail.com',
        contact: '1234567890',
        stdId: '6edf782c-2b0d-4fc8-b013-5468a45891fb'
    },
    {
        fname: 'May',
        lname: 'Doe',
        email: 'may@gmail.com',
        contact: '7895642310',
        stdId: '6789789789c-2b0d-4fc8-b013-5468a45891fb'
    },
    {
        fname: 'June',
        lname: 'Doe',
        email: 'june@gmail.com',
        contact: '9876542310',
        stdId: 'ee688e59-7c9e-40dd-9b92-2b69db8f9db7'
    
    }
]

function createTrs(arr){
    let result = '';
arr.forEach((std,i) =>{
    // cl(std)
    result += `
            <tr id="${std.stdId}">
                            <td>${i + 1}</td>
                            <td>${std.fname} ${std.lname}</td>
                            <td>${std.email}</td>
                            <td>${std.contact}</td>
                            <td>
                                <i onClick="onStdEdit(this)"
                                 role="button" class="fa-solid fa-pen-to-square fa-2x text-success"></i>
                                </td>
                                <td>
                                <i onClick="onStdRemove(this)" 
                                role="button" class="fa-solid fa-trash fa-2x text-danger"></i>
                            </td>
                        </tr>`
    
})

stdContainer.innerHTML = result;
}
createTrs(stdArr)

function onStdRemove(ele){
    let REMOVE_ID = ele.closest('tr').id
    let getConfirm = confirm(`Are you sure,you want to remove the student with ID ${REMOVE_ID} ?`)
    cl(getConfirm)
    if(getConfirm){
        let getIndex = stdArr.findIndex(std => {
            return std.stdId === REMOVE_ID
        })
        let REMOVE_STD = stdArr.splice(getIndex,1)
        ele.closest('tr').remove()
        let allTrs = [...document.querySelectorAll('#stdContainer tr')]
        allTrs.forEach((tr,i) => {
            tr.firstElementChild.innerText = i + 1
        })
        Swal.fire({
            title:`The student ${REMOVE_STD[0].fname} ${REMOVE_STD[0].lname} successfully!!!`,
            icon:"success",
            timer:3000
        })
        if(stdArr.length == 0){
            stdTbale.classList.add('d-none')
            noStdMsg.classList.remove('d-none')
        }
    }
}
