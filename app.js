const form=document.getElementById('form');
const ul = document.querySelector('ul');

async function getTVShows(searchData) {
    const url=`http://api.tvmaze.com/search/shows?q=${searchData}`;
    const fetcheddata= await axios.get(url);

    console.dir(fetcheddata);
    console.log(fetcheddata.request.responseURL.split('=')[1]);
    const match = fetcheddata.request.responseURL.split('=')[1];

    for(let items of fetcheddata.data) {
        if(items.show.image){
            const image= items.show.image.medium;
            const img = document.createElement('img');
            img.src=image;
            img.style.margin="10px";
            ul.append(img);
        }  
    }
 return match;
    
}



form.addEventListener('submit',(e)=>{
    e.preventDefault();
    // console.dir(form);
    const searchText= form.elements[0].value;
    
    const match= getTVShows(searchText);
    form.elements[0].value=""; 
    
    const delImg = ul.children;
    if(form.elements[0].value!="") {
        img.remove();
    }

})

ul.addEventListener('click',img ,(e)=>{
    // console.dir(ul);
    const delImg = ul.children;
    console.log(delImg);
    for(let img of delImg){
       img.remove();
    }
})