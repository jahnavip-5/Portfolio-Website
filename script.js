
// Create a media query for the screen width of 1500px

// const mq = window.matchMedia( "(max-width: 1500px)" );



if(window.innerWidth<1000){
    document.querySelector('.cross').style.display='none';

    document.querySelector('.hamburger').addEventListener('click',()=>{
        document.querySelector('.navbar').classList.toggle('navGo');
        if(document.querySelector('.navbar').classList.contains('navGo')){
            document.querySelector('.ham').style.display='inline';
            document.querySelector('.cross').style.display='none';
            
        }
        else{
            document.querySelector('.ham').style.display='none';
            // Show cross bar after 500ms bcz u set transition time 0.5s 
            // setTimeout(()=>{
                
            //     document.querySelector('.cross').style.display='inline';
            // },100);
            
            document.querySelector('.cross').style.display='inline';
        }
    });
}else{
    document.querySelector('.ham').style.display='none';
    document.querySelector('.cross').style.display='none';
    document.querySelector('.navbar').classList.remove('navGo');

}
        
   

   




