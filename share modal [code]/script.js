const shareMyProfileBtn=document.querySelector('[btn1]');
const hazeEffectContainer=document.querySelector('[haze-effect]');
const shareModalContainer=document.querySelector('[share-modal-container]');

shareMyProfileBtn.addEventListener('click',()=>{
    hazeEffectContainer.classList.add('active');
    shareModalContainer.classList.add('active');
})

const closeModalCrossIcon=document.querySelector('[close-modal]');
function closeModal(){
    hazeEffectContainer.classList.remove('active');
    shareModalContainer.classList.remove('active');
}