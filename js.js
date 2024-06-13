var intro = document.getElementById('intro')
var ex = document.getElementById('regras')
var d = document.getElementById('doping')
var caso = document.getElementById('casos')
var p = document.getElementById('punicoes')
var detecçao = document.getElementById('Deteccão')




function cl1()
{
    intro.style.display ='block'
    ex.style.display ='none'
    d.style.display ='none'
    detecçao.style.display = 'none'

    caso.style.display = 'none'


}
function cl2()
{
    intro.style.display ='none'
    ex.style.display ='block'
    d.style.display ='none'
    detecçao.style.display = 'none'

    caso.style.display = 'none'
}
function cl3()
{
    intro.style.display ='none'
    ex.style.display ='none'
    d.style.display ='block'
    detecçao.style.display = 'none'
    p.style.display = 'none'
    caso.style.display = 'none'

}
function cl4()
{
    intro.style.display ='none'
    ex.style.display ='none'
    d.style.display ='none'
    detecçao.style.display = 'none'
    p.style.display = 'none'
    caso.style.display = 'block'
}
function cl6()
{
    intro.style.display ='none'
    ex.style.display ='none'
    d.style.display ='none'
    detecçao.style.display = 'block'
    caso.style.display = 'none'

}


/*
    tudo correto
*/

var exx = document.getElementById('exa')
var exx1 = document.getElementById('exa1')
var exx2 = document.getElementById('exa2')
var exx3 = document.getElementById('exa3')
var exx4 = document.getElementById('exa4')
var exx5 = document.getElementById('exa5')

var caso1 = document.getElementById('caso1')
var caso2 = document.getElementById('caso2')
var caso3 = document.getElementById('caso3')
var caso4 = document.getElementById('caso4')
var caso5 = document.getElementById('caso5')
var caso6 = document.getElementById('caso6')


var oi = 0;
 function imgc1() 
 {
    if(oi == 0)
        
        {
            oi = oi+1
        exx1.style.display = 'none'
        exx2.style.display = 'none'
        exx3.style.display = 'none'
        exx4.style.display = 'none'
        exx5.style.display = 'none'
        caso1.style.display = 'block'
            exx.style.left = '10%'
            exx.style.top = '8%'


        }else
        {
            oi = 0
            exx1.style.display = 'block'
            exx2.style.display = 'block'
            exx3.style.display = 'block'
            exx4.style.display = 'block'
            exx5.style.display = 'block'
            caso1.style.display = 'none'
            exx.style.left = '10%'
            exx.style.top = '52%'

        }
    }


        function imgc2() 
        {
           if(oi == 0)
               {
                   oi = oi+1
               exx.style.display = 'none'
               exx2.style.display = 'none'
               exx3.style.display = 'none'
               exx4.style.display = 'none'
               exx5.style.display = 'none'
               caso2.style.display = 'block'
                   exx1.style.left = '10%'
                   exx1.style.top = '8%'
       
       
               }else
               {
                   oi = 0
                   exx.style.display = 'block'
                   exx2.style.display = 'block'
                   exx3.style.display = 'block'
                   exx4.style.display = 'block'
                   exx5.style.display = 'block'
                   caso2.style.display = 'none'
                   exx1.style.left = '45%'
                   exx1.style.top = '52%'
       
               }
            }
               function imgc3() 
               {
                  if(oi == 0)
                      {
                          oi = oi+1
                      exx.style.display = 'none'
                      exx1.style.display = 'none'
                      exx3.style.display = 'none'
                      exx4.style.display = 'none'
                      exx5.style.display = 'none'
                      caso3.style.display = 'block'
                          exx2.style.left = '10%'
                          exx2.style.top = '8%'
              
              
                      }else
                      {
                          oi = 0
                          exx.style.display = 'block'
                          exx1.style.display = 'block'
                          exx3.style.display = 'block'
                          exx4.style.display = 'block'
                          exx5.style.display = 'block'
                          caso3.style.display = 'none'
                            exx2.style.left = '75%'
                            exx2.style.top = '52%'
              
                      }

    
 }




 function imgc4() 
 {
    if(oi == 0)
        
        {
            oi = oi+1
        exx1.style.display = 'none'
        exx2.style.display = 'none'
        exx.style.display = 'none'
        exx4.style.display = 'none'
        exx5.style.display = 'none'
        caso4.style.display = 'block'
            exx3.style.left = '10%'
            exx3.style.top = '8%'


        }else
        {
            oi = 0
            exx1.style.display = 'block'
            exx2.style.display = 'block'
            exx.style.display = 'block'
            exx4.style.display = 'block'
            exx5.style.display = 'block'
            caso4.style.display = 'none'
            exx3.style.left = '10%'
            exx3.style.top = '3%'

        }
    }


        function imgc5() 
        {
           if(oi == 0)
               {
                   oi = oi+1
               exx.style.display = 'none'
               exx2.style.display = 'none'
               exx3.style.display = 'none'
               exx1.style.display = 'none'
               exx5.style.display = 'none'
caso5.style.display = 'block'
                   exx4.style.left = '10%'
                   exx4.style.top = '8%'
       
       
               }else
               {
                   oi = 0
                   exx.style.display = 'block'
                   exx2.style.display = 'block'
                   exx3.style.display = 'block'
                   exx1.style.display = 'block'
                   exx5.style.display = 'block'
                caso5.style.display = 'none'
                   exx4.style.left = '45%'
                   exx4.style.top = '3%'
       
               }
            }
               function imgc6() 
               {
                  if(oi == 0)
                      {
                          oi = oi+1
                      exx.style.display = 'none'
                      exx1.style.display = 'none'
                      exx3.style.display = 'none'
                      exx4.style.display = 'none'
                      exx2.style.display = 'none'
                        caso6.style.display = 'block'
                          exx5.style.left = '10%'
                          exx5.style.top = '8%'
              
              
                      }else
                      {
                          oi = 0
                          exx.style.display = 'block'
                          exx1.style.display = 'block'
                          exx3.style.display = 'block'
                          exx4.style.display = 'block'
                          exx2.style.display = 'block'
                            caso6.style.display = 'none'
                            exx5.style.left = '75%'
                            exx5.style.top = '3%'
              
                      }

    
 }


 /**
  *     Tudo correto
  *     Essa parte é sobre as partiçoes de casos
  * a proxima são as partiçoes de doping
  */

       var ag = document.getElementById("ag")
       var est= document.getElementById("est")
       var dm= document.getElementById("dm")
       var g= document.getElementById("g")
       var mhm= document.getElementById("mhm")
       var outros= document.getElementById("outros")
var yat = 0

var agtxt = document.getElementById('agtxt')
var esttxt = document.getElementById('esttxt')
var dmtxt = document.getElementById('dmtxt')
var gtxt = document.getElementById('gtxt')
var mhmtxt = document.getElementById('mhmtxt')
var outrostxt = document.getElementById('outrostxt')
       function agc1() 
       {
            if (yat == 0) {
                yat = 1
                est.style.display = 'none'
                dm.style.display = 'none'
                g.style.display = 'none'
                mhm.style.display = 'none'
                outros.style.display = 'none'
                agtxt.style.display = 'block'
                ag.style.left = '40%'
                ag.style.top = '5%'

            }else
            {
                yat = 0
                est.style.display = 'block'
                dm.style.display = 'block'
                g.style.display = 'block'
                mhm.style.display = 'block'
                outros.style.display = 'block'
                agtxt.style.display = 'none'
                ag.style.left = '2%'
                ag.style.top = '0%'
            }
       }
       function agc2() 
       {
            if (yat == 0) {
                yat = 1
                ag.style.display = 'none'
                dm.style.display = 'none'
                g.style.display = 'none'
                mhm.style.display = 'none'
                outros.style.display = 'none'
                esttxt.style.display = 'block'
                est.style.left = '40%'
                est.style.top = '5%'

            }else
            {
                yat = 0
                ag.style.display = 'block'
                dm.style.display = 'block'
                g.style.display = 'block'
                mhm.style.display = 'block'
                outros.style.display = 'block'
                esttxt.style.display = 'none'
                est.style.left = '2%'
                est.style.top = '19%'
            }
       }





       function agc3() 
       {
            if (yat == 0) {
                yat = 1
                ag.style.display = 'none'
                est.style.display = 'none'
                g.style.display = 'none'
                mhm.style.display = 'none'
                outros.style.display = 'none'
                dmtxt.style.display = 'block'
                dm.style.left = '40%'
                dm.style.top = '5%'

            }else
            {
                yat = 0
                ag.style.display = 'block'
                est.style.display = 'block'
                g.style.display = 'block'
                mhm.style.display = 'block'
                outros.style.display = 'block'
                dmtxt.style.display = 'none'
                dm.style.left = '2%'
                dm.style.top = '38%'
            }
       }

       function agc4() 
       {
            if (yat == 0) {
                yat = 1
                ag.style.display = 'none'
                est.style.display = 'none'
                dm.style.display = 'none'
                mhm.style.display = 'none'
                outros.style.display = 'none'
                gtxt.style.display = 'block'
                g.style.left = '40%'
                g.style.top = '5%'

            }else
            {
                yat = 0
                ag.style.display = 'block'
                est.style.display = 'block'
                dm.style.display = 'block'
                mhm.style.display = 'block'
                outros.style.display = 'block'
                gtxt.style.display = 'none'
                g.style.left = '2%'
                g.style.top = '57%'
            }
       }

       function agc5() 
       {
            if (yat == 0) {
                yat = 1
                ag.style.display = 'none'
                est.style.display = 'none'
                g.style.display = 'none'
                dm.style.display = 'none'
                outros.style.display = 'none'
                mhmtxt.style.display = 'block'
                mhm.style.left = '40%'
                mhm.style.top = '5%'

            }else
            {
                yat = 0
                ag.style.display = 'block'
                est.style.display = 'block'
                g.style.display = 'block'
                dm.style.display = 'block'
                outros.style.display = 'block'
                mhmtxt.style.display = 'none'
                mhm.style.left = '2%'
                mhm.style.top = '76%'
            }
       }

       function agc6() 
       {
            if (yat == 0) {
                yat = 1
                ag.style.display = 'none'
                est.style.display = 'none'
                g.style.display = 'none'
                dm.style.display = 'none'
                mhm.style.display = 'none'
                outrostxt.style.display = 'block'
                outros.style.left = '45%'
                outros.style.top = '5%'

            }else
            {
                yat = 0
                ag.style.display = 'block'
                est.style.display = 'block'
                g.style.display = 'block'
                dm.style.display = 'block'
                mhm.style.display = 'block'
        outrostxt.style.display = 'none'
                outros.style.left = '2%'
                outros.style.top = '95%'
            }
       }





















