/*
1: https://www.tripsavvy.com/thmb/NbvbJR3hkmwQFpxvMUJsDBsYZ_k=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1138165502-1daa3ff05ff54d2dadb274ae52c27f14.jpg
2: https://s20426.pcdn.co/wp-content/uploads/2018/05/iStock-480594075-1600x800.jpg
3: https://www.somoseo.com/wp-content/uploads/2019/02/about-somoseo.jpg
4: https://cdn.wallpapersafari.com/56/10/4gunsO.jpg
*/


var i = 0;
var images = new Array();
var time = 5000;

images[0] = 'https://www.tripsavvy.com/thmb/NbvbJR3hkmwQFpxvMUJsDBsYZ_k=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1138165502-1daa3ff05ff54d2dadb274ae52c27f14.jpg';
images[1] = 'https://s20426.pcdn.co/wp-content/uploads/2018/05/iStock-480594075-1600x800.jpg';
images[2] = 'https://www.somoseo.com/wp-content/uploads/2019/02/about-somoseo.jpg';
images[3] = 'https://cdn.wallpapersafari.com/56/10/4gunsO.jpg';

function changeImg()
{
    document.getElementById('slide').src=images[i];
    
    if (i < images.length - 1)
    {
        i++;
    }
    else
    {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;



!function(d,s,id)
{
    var js,fjs=d.getElementsByTagName(s)[0];
    if(!d.getElementById(id))
    {
        js=d.createElement(s);
        js.id=id;
        js.src='https://weatherwidget.io/js/widget.min.js';
        fjs.parentNode.insertBefore(js,fjs);
    }
}
(document,'script','weatherwidget-io-js');

