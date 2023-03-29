
gsap.registerPlugin(ScrollTrigger);

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
   responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$(".bar").click(function(){
    $(".phonediv").fadeToggle();
 })
 $(".closingbar").click(function(){
     $(".phonediv").fadeToggle();
  })
  
  

  
  gsap.from(".secondbannercontent",{
   scrollTrigger:{
      trigger:".secondbanner",
      start:"top center",
      toggleActions:"restart none none reverse"
      },
    duration:1,opacity:0,y:30})
    gsap.from(".thirdbannercontent",{
            scrollTrigger:{
              trigger:".thirdbanner",
              start:"top center",
              // markers:true,
              toggleActions:"restart none none reverse"
        
              
              
              },
           
            duration:0.5,opacity:0,y:50
          })
          gsap.from(".thirdbannersub2 ",{
            scrollTrigger:{
              trigger:".thirdbanner",
              start:"top center",
              // markers:true,
              toggleActions:"restart none none reverse"
        
              
              
              },
           
            duration:1,opacity:0, y:50,stagger:0.25
          })
          gsap.from(".fourthbannercontent",{
            scrollTrigger:{
              trigger:".fourthbanner",
              start:"top center",
              // markers:true,
              toggleActions:"restart none none reverse"
        
              
              
              },
           
            duration:0.5,opacity:0,y:50
          })
          gsap.from(".item *",{
            scrollTrigger:{
              trigger:".fourthbanner",
              start:"top center",
              // markers:true,
              toggleActions:"restart none none reverse"
        
              
              
              },
           
            duration:1,opacity:0,y:70
          })
          var tl=gsap.timeline();
  
  
  gsap.from(".fifthbannercontent1",{
    scrollTrigger:{
      trigger:".fifthbanner",
      start:"top center",
      // markers:true,
      toggleActions:"restart none none reverse"

      
      
      },
    opacity:0,y:30,duration:0.5,stagger:0.25

  })
  // tl.from(".design",{
  //   scrollTrigger:{
  //     trigger:".fifthbanner",
  //     start:"top center",
  //     markers:true,
  //     toggleActions:"restart none none reverse"

      
      
  //     },
  //   opacity:0,y:20,duration:0.3,stagger:0.25
    
  // })
  gsap.from(".fifthimage1",{
    scrollTrigger:{
      trigger:".fifthbanner",
      start:"top center",
      // markers:true,
      toggleActions:"restart none none reverse"

      
      
      },
    opacity:0,y:50,duration:0.5,stagger:0.25
    
  })
  
  gsap.from(".sixthcontainer",{
    scrollTrigger:{
      trigger:" #sixthbanner",
      start:"top center",
      // markers:true,
      toggleActions:"restart none none reverse"

      
      
      },
    opacity:0,y:30,duration:0.5,stagger:0.25
    
  })
  gsap.from(".sixthimagegallery *",{
    scrollTrigger:{
      trigger:".sixthcontainer",
      start:"top center",
      // markers:true,
      toggleActions:"restart none none reverse"

      
      
      },
    opacity:0,y:50,duration:0.5,stagger:0.25
    
  })
  gsap.from(".sevethcontantfirst",{
    scrollTrigger:{
      trigger:".seventhbanner",
      start:"top center",
      // markers:true,
      toggleActions:"restart none none reverse"

      
      
      },
    opacity:0,y:30,duration:0.5,stagger:0.25
    
  })
  gsap.from(".seventhsecondcontantsub",{
    scrollTrigger:{
      trigger:".seventhbanner",
      start:"top center",
      // markers:true,
      toggleActions:"restart none none reverse"

      
      
      },
    opacity:0,y:50,duration:0.5,stagger:0.25
    
  })
  gsap.from(".eightbannerhead",{
    scrollTrigger:{
      trigger:".eightbanner",
      start:"top center",
      // markers:true,
      toggleActions:"restart none none reverse"

      
      
      },
    opacity:0,y:30,duration:0.5,stagger:0.25
    
  })
  gsap.from(".eightimagegallery",{
    scrollTrigger:{
      trigger:".eightbanner",
      start:"top center",
      // markers:true,
      toggleActions:"restart none none reverse"

      
      
      },
    opacity:0,y:50,duration:0.5,stagger:0.25
    
  })
  gsap.from(".contacthead",{
    scrollTrigger:{
      trigger:"#ninethbanner",
      start:"top center",
      // markers:true,
      toggleActions:"restart none none reverse"

      
      
      },
    opacity:0,y:30,duration:0.5,stagger:0.25
    
  })
  gsap.from(".ninethbannercontent1",{
    scrollTrigger:{
      trigger:"#ninethbanner",
      start:"top center",
      // markers:true,
      toggleActions:"restart none none reverse"

      
      
      },
    opacity:0,y:50,duration:1,stagger:0.25
    
  })
  gsap.from(".ninethbannercontent2",{
    scrollTrigger:{
      trigger:"#ninethbanner",
      start:"top center",
      // markers:true,
      toggleActions:"restart none none reverse"

      
      
      },
    opacity:0,y:50,duration:1,stagger:0.25
    
  })
  
  
  
  


          