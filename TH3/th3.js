var list = document.getElementsByClassName("imghead");
var index = 0;
for( x of list)
{
   x.style.display='none';
}
list[index].style.display='block'

function myf()
{
    for(x of list)
    {
        x.style.display='none';
    }
if(index == 0) index =list.length-1;
else index=index-1;
list[index].style.display='block';
setTimeout(myf(),1000);
}

function fr()
{
    for(x of list)
    {
        x.style.display='none';
    }
if(index == list.length-1) index =0;
else index=index+1;
list[index].style.display='block';
setTimeout(fr(),1000);
}