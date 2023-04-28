const recipelist=document.querySelector('#recipe-list');
const recipiframe=document.querySelector('#Recipe-Iframe');

recipelist.addEventListener('change',function(){
    const selectedRecipe=recipelist.value;
    recipiframe.src=selectedRecipe;
}
)