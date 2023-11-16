var bt=document.getElementsByClassName('bt')
var bt1=document.getElementsByClassName('bt1')
var p=document.getElementsByClassName('btnsolution')
var p1=document.getElementsByClassName('btnproduct')
p[0].addEventListener('click',function(){
    bt[0].style.border="2px solid red"
    bt1[0].style.border="2px solid #b3ccff"
})
p1[0].addEventListener('click',function(){
    bt1[0].style.border="2px solid red"
    bt[0].style.border="2px solid #b3ccff"
})


const workSection=document.querySelector('.digit')
const workObserver=new IntersectionObserver ((entries,observe)=>{
    const [entry]=entries
    console.log(entry)
    if(! entry.isIntersecting){
        return
    }
    else{
        const counterNum=document.querySelectorAll('.conter-number')

const speed=29

counterNum.forEach((curElem)=>{
    const updateNumber=()=>{
        const targetNumber=parseInt(curElem.dataset.number)
        // console.log(targetNumber)
        const intialNum=parseInt(curElem.innerHTML)
        const incrementNumber=1
        // console.log(incrementNumber)
        if(intialNum<targetNumber){
            curElem.innerText=intialNum+incrementNumber

            setTimeout(updateNumber,50)
        }

    }

    updateNumber()
});
observe.unobserve(workSection)

    }
},{
    root:null,
    threshold:0,
});

workObserver.observe(workSection)

function openNewPage() {
    // Specify the URL of the new page
    var newPageUrl = 'demopage.html';

    // Open the new page in a new window or tab
    // setimeout(10)
    window.open(newPageUrl, '_blank');
}

function openNewPage2() {
    // Specify the URL of the new page
    var newPageUrl = 'pricing.html';

    // Open the new page in a new window or tab
    // setimeout(10)
    window.open(newPageUrl, '_blank');
}
function openNewPage3() {
    // Specify the URL of the new page
    var newPageUrl = 'signpage.html';

    // Open the new page in a new window or tab
    // setimeout(10)
    window.open(newPageUrl, '_blank');
}
