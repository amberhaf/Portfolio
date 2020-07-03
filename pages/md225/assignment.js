var ran=9;
var b=true;

function playAudio(sound) { 
    var x = document.getElementById(sound); 
  x.play(); 
} 

function pauseAudio(sound) { 
    var x = document.getElementById(sound); 
  x.pause(); 
} 


function myMove() {
  var elem = document.getElementById("wrapper");   
  var pos = 100;
  var id = setInterval(frame, 1);
  function frame() {
    if (pos == 0) {
      clearInterval(id);
    } else {
      pos=pos-0.5; 
      elem.style.left = pos + '%'; 
    }
  }
    change();
}

function change(){

    var m=document.getElementById('homes');
    m.style.backgroundColor='white';
    var newRan= Math.floor(Math.random()*9);
    while(newRan==ran)
    {
       newRan= Math.floor(Math.random()*9);
    }
    ran=newRan;
    pauseAudio("AudioIcy");
    pauseAudio("AudioEgypt");
    pauseAudio("AudioTemple");
    pauseAudio("AudioChina");
    pauseAudio("AudioDesert");
    pauseAudio("AudioPersia");
    pauseAudio("AudioRocks");
    pauseAudio("AudioThunder");
    pauseAudio("AudioWater");
    
    if(ran==0)
    {
        if(b)
        {
        playAudio("AudioDesert");
        }
        var x = document.getElementsByTagName("BODY")[0];
       x.style.backgroundImage = 'url("img/saharabackground.png")'; 
        var x=document.getElementById("summary");
        x.innerHTML="In the folktale, Aladdin is led on a journey far beyond his city gates by a disguised magician. After walking through the desert for hours they eventually reach the foot of mountain. Here the magician starts a fire while saying magic words which opens up an entrance to a dark Cave below them.";
        var elem = document.getElementById("summary");  
        elem.style.color= 'black';
        
        var p = document.getElementById("photoRef");  
        p.innerHTML="Piqsels, 2020. Sahara Desert, Sunset, Orange. [image] Available at: 'https://www.piqsels.com/en/public-domain-photo-jbdti' [Accessed 15 April 2020]. CC0 Public Domain";
        var a = document.getElementById("audioRef");  
        a.innerHTML="panta_rei, 2016. BERBER_SONG.Wav. [online] Freesound.org. Available at: 'https://freesound.org/s/344389/' [Accessed 15 April 2020].";

    }
    else if(ran==1)
    {
        if(b)
        {
        playAudio("AudioTemple");
        }
        var x = document.getElementsByTagName("BODY")[0];
       x.style.backgroundImage = 'url("img/taj-mahalbackground.png")';
        var x=document.getElementById("summary");
        x.innerHTML="Jasmine and her father live in the Sultan's Palace located in the center of Agrabah. Disney based this palace on the Taj-Mahal. The white palace itself is surrounded by high walls and with Golden domed roofs. Jasmine however longs to escape the Palace and experience the world outside it.";
        var elem = document.getElementById("summary");  
        elem.style.color= 'black';
        var p = document.getElementById("photoRef");  
        p.innerHTML="Triphobo, 2020. Taj-Mahal Agra Itineraries. [image] Available at: ' https://www.triphobo.com/tripplans/agra-india' [Accessed 15 April 2020]. CC0 Public Domain";
        var a = document.getElementById("audioRef");  
        a.innerHTML="GenghisAttenborough, 2007. Temple Percussion.Mp3. [online] Freesound.org. Available at: 'https://freesound.org/s/32272/' [Accessed 15 April 2020].";
    }
    else if(ran==2)
    {
        if(b)
        {
        playAudio("AudioEgypt");
        }
        var x = document.getElementsByTagName("BODY")[0];
       x.style.backgroundImage = 'url("img/pyramidsbackground.png")';
        var x=document.getElementById("summary");
        x.innerHTML="When Aladdin takes Jasmine on a flying carpet ride Aladdin shows her some of the wonders of the world. They passed through Eqgypt and see the Great Sphinx and the Pyramids of Giza.";
        var elem = document.getElementById("summary");  
        elem.style.color= 'orange';
        var p = document.getElementById("photoRef");  
        p.innerHTML="Flickr, 2020. Pyramids And Sphonix Of Egypt. [image] Available at: 'https://www.thoughtco.com/who-was-the-first-pharaoh-of-egypt-43717' [Accessed 15 April 2020]. CC0 Public Domain ";
        var a = document.getElementById("audioRef");  
        a.innerHTML="Maxmakessounds, 2016. Egyptian_Theme.Wav. [online] Freesound.org. Available at: 'https://freesound.org/s/353544/' [Accessed 15 April 2020].";
    }
    else if(ran==3)
    {
        if(b)
        {
        playAudio("AudioPersia");
        }
        var x = document.getElementsByTagName("BODY")[0];
       x.style.backgroundImage = 'url("img/iranbackground.png")';
        var x=document.getElementById("summary");
        x.innerHTML="In the folktale, Aladdin lives with his mother in Persia. One day while playing with his friends in the streets of his city, a magician approaches him pretending he is Aladdin's long lost uncle. However, this is all just part of his plan to trick Aladdin into getting the magic lamp for him.";
        var elem = document.getElementById("summary"); 
        elem.style.color= 'black';
        var p = document.getElementById("photoRef");  
        p.innerHTML="Wong, M., 2017. Iran.Gilan.Masouleh.2017. [image] Available at: 'https://www.flickr.com/photos/hanwonghk/39703679322' [Accessed 15 April 2020].";
        var a = document.getElementById("audioRef");  
        a.innerHTML="CarlosCarty, 2019. Carloscarty. [online] Freesound.org. Available at: 'https://freesound.org/s/469513/' [Accessed 15 April 2020].";
        
    }
    else if(ran==4)
    {
        if(b)
        {
        playAudio("AudioIcy");
        }
        var x = document.getElementsByTagName("BODY")[0];
       x.style.backgroundImage = 'url("img/icymountainbackground.png")';
        var x=document.getElementById("summary");
        x.innerHTML="In the Disney film, Aladdin ends up at the peak of an icy mountain after being lauched there by a makeshift rocket made by Jafar. Aladdin is stranded there with Abu and about to freeze to death when he finds the magic carpet which allows him to escape back to the palace.";
        var elem = document.getElementById("summary");  
        elem.style.color= 'black';
        var p = document.getElementById("photoRef");  
        p.innerHTML="Gagnon, B., 2018. Mount Everest In Clouds. [image] Available at: 'https://commons.wikimedia.org/wiki/File:Mount_Everest_in_clouds.jpg' [Accessed 15 April 2020]. CC0 Public Domain";
        var a = document.getElementById("audioRef");  
        a.innerHTML="InspectorJ, 2017. Wind, Synthesized, A.Wav. [online] Freesound.org. Available at: ' https://freesound.org/s/376415/' [Accessed 15 April 2020].";
    }
    else if(ran==5)
    {
        if(b)
        {
        playAudio("AudioThunder");
        }
        var x = document.getElementsByTagName("BODY")[0];
       x.style.backgroundImage = 'url("img/athenbackground.png")';
        var x=document.getElementById("summary");
        x.innerHTML="When Aladdin takes Jasmine on a flying carpet ride Aladdin, they visit the Acropolis and other Ancient Greek ruins. Aladdin is set in the 9th century so they would have seen the Parthenon in it's full glory.";
        var elem = document.getElementById("summary");  
        elem.style.color= 'orange';
        var p = document.getElementById("photoRef");  
        p.innerHTML="Getty, 2019. Famous Athens Landmark The Parthenon. [image] Available at: 'https://www.thesun.ie/travel/4861372/greek-capital-athens-isnt-just-about-famous-ruins-it-makes-a-great-city-break/' [Accessed 15 April 2020]. CC0 Public Domain";
        var a = document.getElementById("audioRef");  
        a.innerHTML="Makape, 2016. Weather » Rain And Thunder.Wav. [online] Freesound.org. Available at: 'https://freesound.org/s/363252/' [Accessed 15 April 2020].";
    }
    else if(ran==6)
    {
        if(b)
        {
        playAudio("AudioChina");
        }
        var x = document.getElementsByTagName("BODY")[0];
       x.style.backgroundImage = 'url("img/chinabackground.png")';
        var x=document.getElementById("summary");
        x.innerHTML="When Aladdin takes Jasmine on a flying carpet ride, they fly past the Great Wall of China and end up at the Forbidden City Palace in  China. In many versions of story, most of the characters are Chinese, with alot of the action taking place in China.";
        var elem = document.getElementById("summary");  
        elem.style.color= 'black';
        var p = document.getElementById("photoRef");  
        p.innerHTML="peakpx, 2020. Great Wall Of China. [image] Available at: 'https://www.peakpx.com/8418/great-wall-of-china' [Accessed 15 April 2020]. CC0 Public Domain";
        var a = document.getElementById("audioRef");  
        a.innerHTML="Iluppai, 2013. Chinese Flute Hulusi. [online] Freesound.org. Available at: 'https://freesound.org/s/180239/' [Accessed 15 April 2020].";
    }
    else if(ran==7)
    {
        if(b)
        {
        playAudio("AudioRocks");
        }
        var x = document.getElementsByTagName("BODY")[0];
       x.style.backgroundImage = 'url("img/cavebackground2.png")';
        var x=document.getElementById("summary");
        x.innerHTML="In the Disney film, Aladdin is allowed to the Cave of wonders on the condition that he 'touch nothing but the lamp.' Aladdin is about to retrieve the lamp when Abu swipes a large ruby, causing the cave to begin to collapse in on them.";
        var elem = document.getElementById("summary");  
        elem.style.color= 'orange';
        var p = document.getElementById("photoRef");  
        p.innerHTML="Proggie, 2006. Reed Flute Cave. [image] Available at: 'https://www.flickr.com/photos/tym/279699435' [Accessed 15 April 2020]. CC0 Public Domain";
        var a = document.getElementById("audioRef");  
        a.innerHTML="Juskiddink, 2009. Quarry,Rocks And Stones » Rockslide.Wav. [online] Freesound.org. Available at: 'https://freesound.org/s/77931/' [Accessed 15 April 2020].";
    }
    else if(ran==8)
    {
        if(b)
        {
        playAudio("AudioWater");
        }
        var x = document.getElementsByTagName("BODY")[0];
       x.style.backgroundImage = 'url("img/seabackground.png")';
        var x=document.getElementById("summary");
        x.innerHTML="The original tale of Aladdin was first written down in 'The Arabian Nights tales'. This is an enchanting and magical collection of fairy tales of Middle Eastern origin. The original story of Aladdin is set in China but versions of the story were told from the Middle East to North Afirca."
        var elem = document.getElementById("summary");  
        elem.style.color= 'black';
        var p = document.getElementById("photoRef");  
        p.innerHTML="Pixy, 2020. MALLORCA BEACH NEAR THE CLEAR BLUE OCEAN. [image] Available at: 'https://pixy.org/422467/' [Accessed 15 April 2020]. CC0 Public Domain";
        var a = document.getElementById("audioRef");  
        a.innerHTML="Straget, 2017. Big Waves Hit Land.Wav. [online] Freesound.org. Available at: 'https://freesound.org/s/412308/' [Accessed 15 April 2020].";
    }
}


function home()
{
    pauseAudio("AudioIcy");
    pauseAudio("AudioEgypt");
    pauseAudio("AudioTemple");
    pauseAudio("AudioChina");
    pauseAudio("AudioDesert");
    pauseAudio("AudioPersia");
    pauseAudio("AudioRocks");
    pauseAudio("AudioThunder");
    pauseAudio("AudioWater");
    var elem = document.getElementsByTagName("BODY")[0];
    elem.style.backgroundImage = 'url("img/Aladdinbackground.png")';
    var x=document.getElementById("summary");
    x.innerHTML="Click the magic carpet to travel on a mystery carpet ride.You will be taken to a location inspired by Aladdin. It will show you a whole new world and parts of the story only explored in the original Aladdin Folktale.";
    x.style.color= 'orange';
        var p = document.getElementById("photoRef");  
        p.innerHTML="Zoe Toseland,Flickr, 2012. Aladdin. [image] Available at: 'https://www.flickr.com/photos/zoe_toseland/8249850478' [Accessed 15 April 2020].";
        var a = document.getElementById("audioRef");  
        a.innerHTML="No Audio";
        var m=document.getElementById('homes');
            m.style.backgroundColor='grey';

}

function volume()
{
    b=!b;
    var m=document.getElementById('volumes');
    if(b==false)
    {
            pauseAudio("AudioIcy");
            pauseAudio("AudioEgypt");
            pauseAudio("AudioTemple");
            pauseAudio("AudioChina");
            pauseAudio("AudioDesert");
            pauseAudio("AudioPersia");
            pauseAudio("AudioRocks");
            pauseAudio("AudioThunder");
            pauseAudio("AudioWater"); 
        m.style.backgroundColor='grey';
    }
    else
    {
        m.style.backgroundColor='white';
        if(ran==0)
        {
            playAudio("AudioDesert");
        }
        else if(ran==1)
        {
            playAudio("AudioTemple");
        }
        else if(ran==2)
        {
            playAudio("AudioEgypt");
        }
        else if(ran==3)
        {
            playAudio("AudioPersia");
        }
        else if(ran==4)
        {
            playAudio("AudioIcy");
        }
        else if(ran==5)
        {
            playAudio("AudioThunder");
        }
        else if(ran==6)
        {
            playAudio("AudioChina");
        }
        else if(ran==7)
        {
            playAudio("AudioRocks");
        }
        else if(ran==8)
        {
            playAudio("AudioWater");
        }
    }
}

var r=true;
function reference(){
    r=!r;
    var elem=document.getElementById('ref');
    var m=document.getElementById('check');
    if(r==true)
    {
        elem.style.visibility='hidden';
        m.style.backgroundColor='white';
    }
    else
    {
        elem.style.visibility='visible';
        m.style.backgroundColor='grey';
    }
}
