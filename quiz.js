$(document).ready(function()
{

    

    /*****************ARRAY SCREENSHOT - 143 ********** */


    var saveButton = document.getElementById('savebutton');
    if(saveButton)
    {
        saveButton.addEventListener('click', getInput, false);
    }
  /*********************************************************************/
    var showButton = document.getElementById('showdata');
    if(showButton)
    {
        showButton.addEventListener('click', showData, false);
    }
  /*********************************************************************/
    var changecolor1 = document.getElementById('opt1');
    if(changecolor1)
    {
        changecolor1.addEventListener('click', ChangeOptionclrA, false);
    }
    function ChangeOptionclrA()
    {
        document.getElementById('opt1').style.backgroundColor = '#4270b1';
        backcolr1();
    }

    function backcolr1()
    {
        document.getElementById('opt2').style.background = '#accefc';
        document.getElementById('opt3').style.background = '#accefc';
        document.getElementById('opt4').style.background = '#accefc';
    }
  /*********************************************************************/
    var changecolor2 = document.getElementById('opt2');
    if(changecolor2)
    {
        changecolor2.addEventListener('click', ChangeOptionclrB, false);
    }
    function ChangeOptionclrB()
    {
        document.getElementById('opt2').style.backgroundColor = '#4270b1';
        backcolr2();
    }
    function backcolr2()
    {
        document.getElementById('opt1').style.background = '#accefc';
        document.getElementById('opt3').style.background = '#accefc';
        document.getElementById('opt4').style.background = '#accefc';
    }
  /*********************************************************************/
    var changecolor3 = document.getElementById('opt3');
    if(changecolor3)
    {
        changecolor3.addEventListener('click', ChangeOptionclrC, false);
    }
    function ChangeOptionclrC()
    {
        document.getElementById('opt3').style.backgroundColor = '#4270b1';
        backcolr3();
    }
    function backcolr3()
    {
        document.getElementById('opt1').style.background = '#accefc';
        document.getElementById('opt2').style.background = '#accefc';
        document.getElementById('opt4').style.background = '#accefc';
    }
  /*********************************************************************/
    var changecolor4 = document.getElementById('opt4');
    if(changecolor4)
    {
        changecolor4.addEventListener('click', ChangeOptionclrD, false);
    }
    function ChangeOptionclrD()
    {
        document.getElementById('opt4').style.backgroundColor = '#4270b1';
        backcolr4();
    }
    function backcolr4()
    {
        document.getElementById('opt1').style.background = '#accefc';
        document.getElementById('opt2').style.background = '#accefc';
        document.getElementById('opt3').style.background = '#accefc';
    }
  /*********************************************************************/

    fname = null;
    lname = null;
    email = null;

    function getInput() {
        var fname = document.getElementById('InputFName').value;
        var lname = document.getElementById('InputLName').value;
        var email = document.getElementById('Inputemail').value;

        sessionStorage.setItem("fname", fname);
        sessionStorage.setItem("lname", lname);
        sessionStorage.setItem("email", email);
    }

  $('.Qbtn button').click(function(e){
      e.preventDefault()
      $('.Qbtn button').removeClass('active')
      $(this).addClass('active')
  })

  $('.showSub a').click(function(e){
    e.preventDefault()
    $('.showSub a').removeClass('active')
    $(this).addClass('active')

  })

  $('.showSub button').click(function(e){
    e.preventDefault()
    $('.showSub button').removeClass('active')
    $(this).addClass('active')
  })

  var subPhysics = document.getElementById('phypage')
  if(subPhysics){
      subPhysics.addEventListener('click',phypage,false)
  }
  function phypage()
  {
    document.getElementById('pqns').style.visibility = "visible";
    document.getElementById('cqns').style.visibility = "hidden";
    document.getElementById('bqns').style.visibility = "hidden";
    document.getElementById('mqns').style.visibility = "hidden";
    $(".QBTN").removeClass("active");
    $("#qbtn1").addClass("active");
    changephyQnImg1();
    
  }


  var subChemistry = document.getElementById('chempage')
  if(subChemistry){
      subChemistry.addEventListener('click',chempage,false)
  }
  function chempage()
  {
    document.getElementById('pqns').style.visibility = "hidden";
    document.getElementById('cqns').style.visibility = "visible";
    document.getElementById('bqns').style.visibility = "hidden";
    document.getElementById('mqns').style.visibility = "hidden";
    $(".QBTN").removeClass("active");
    $("#qbtn51").addClass("active");
    changechemQnImg51();
  }


  var subBio = document.getElementById('biopage')
  if(subBio){
    subBio.addEventListener('click',biopage,false)
  }
  function biopage()
  {
    document.getElementById('pqns').style.visibility = "hidden";
    document.getElementById('cqns').style.visibility = "hidden";
    document.getElementById('bqns').style.visibility = "visible";
    document.getElementById('mqns').style.visibility = "hidden";
    $(".QBTN").removeClass("active");
    $("#qbtn101").addClass("active");
    changebioQnImg101();
  }


  var subMath = document.getElementById('mathpage')
  if(subMath){
    subMath.addEventListener('click',mathpage,false)
  }
  function mathpage()
  {
    document.getElementById('pqns').style.visibility = "hidden";
    document.getElementById('cqns').style.visibility = "hidden";
    document.getElementById('bqns').style.visibility = "hidden";
    document.getElementById('mqns').style.visibility = "visible";
  }



  var qn;

  function blank()
  {
    document.getElementById('opt1').style.background = '#accefc';
    document.getElementById('opt2').style.background = '#accefc';
    document.getElementById('opt3').style.background = '#accefc';
    document.getElementById('opt4').style.background = '#accefc';
  }

  function checked()
  {
      blank();
      if(answered[qn]=='a' || marked[qn]=='a')
      {
          ChangeOptionclrA();
      }
      else if(answered[qn]=='b' || marked[qn]=='b')
      {
          ChangeOptionclrB();   
      }
      else if(answered[qn]=='c' || marked[qn]=='c')
      {
          ChangeOptionclrC();
      }
      else if(answered[qn]=='d' || marked[qn]=='d')
      {
          ChangeOptionclrD();
      }
  }



  var Qn1 = document.getElementById('qbtn1');
  if(Qn1)
  {
      Qn1.addEventListener('click', changephyQnImg1, false);
  }
  function changephyQnImg1()
  {
      document.getElementById("qnNo").innerText="Q.01";
      var image = document.getElementById('qnImage');
      image.src = "./physics/Q1.png";
      qn = 0;
      checked();
  }
  
  var Qn2 = document.getElementById('qbtn2');
    if(Qn2)
    {
        Qn2.addEventListener('click', changephyQnImg2, false);
    }
    function changephyQnImg2()
    {
        document.getElementById("qnNo").innerText="Q.02";
        var image = document.getElementById('qnImage');
            image.src = "./physics/Q2.png";
            qn = 1;
            checked();
    }

    var Qn3 = document.getElementById('qbtn3');
    if(Qn3)
    {
        Qn3.addEventListener('click', changephyQnImg3, false);
    }
    function changephyQnImg3()
    {
        document.getElementById("qnNo").innerText="Q.03";
        var image = document.getElementById('qnImage');
            image.src = "./physics/Q3.png";
            qn = 2;
            checked();
    }

    var Qn4 = document.getElementById('qbtn4');
    if(Qn4)
    {
        Qn4.addEventListener('click', changephyQnImg4, false);
    }
    function changephyQnImg4()
    {
        document.getElementById("qnNo").innerText="Q.04";
        var image = document.getElementById('qnImage');
            image.src = "./physics/Q4.png";
            qn = 3;
            checked();
    }

    var Qn5 = document.getElementById('qbtn5');
    if(Qn5)
    {
        Qn5.addEventListener('click', changephyQnImg5, false);
    }
    function changephyQnImg5()
    {
        document.getElementById("qnNo").innerText="Q.05";
        var image = document.getElementById('qnImage');
            image.src = "./physics/Q5.png";
            qn = 4;
            checked();
    }

    var Qn6 = document.getElementById('qbtn6');
    if(Qn6)
    {
        Qn6.addEventListener('click', changephyQnImg6, false);
    }
    function changephyQnImg6()
    {
        document.getElementById("qnNo").innerText="Q.06";
        var image = document.getElementById('qnImage');
            image.src = "./physics/Q6.png";
            qn = 5;
            checked();
    }

    var Qn7 = document.getElementById('qbtn7');
    if(Qn7)
    {
        Qn7.addEventListener('click', changephyQnImg7, false);
    }
    function changephyQnImg7()
    {
        document.getElementById("qnNo").innerText="Q.07";
        var image = document.getElementById('qnImage');
            image.src = "./physics/Q7.png";
            qn = 6;
            checked();
    }

    var Qn8 = document.getElementById('qbtn8');
    if(Qn8)
    {
        Qn8.addEventListener('click', changephyQnImg8, false);
    }
    function changephyQnImg8()
    {
        document.getElementById("qnNo").innerText="Q.08";
        var image = document.getElementById('qnImage');
            image.src = "./physics/Q8.png";
            qn = 7;
            checked();
    }

    var Qn9 = document.getElementById('qbtn9');
    if(Qn9)
    {
        Qn9.addEventListener('click', changephyQnImg9, false);
    }
    function changephyQnImg9()
    {
        document.getElementById("qnNo").innerText="Q.09";
        var image = document.getElementById('qnImage');
            image.src = "./physics/Q9.png";
            qn = 8;
            checked();
    }

    var Qn10 = document.getElementById('qbtn10');
    if(Qn10)
    {
        Qn10.addEventListener('click', changephyQnImg10, false);
    }
    function changephyQnImg10()
    {
        document.getElementById("qnNo").innerText="Q.10";
        var image = document.getElementById('qnImage');
            image.src = "./physics/Q10.png";
            qn = 9;
            checked();
    }

    var Qn11 = document.getElementById('qbtn11');
    if(Qn11)
    {
        Qn11.addEventListener('click', changephyQnImg11, false);
    }
    function changephyQnImg11()
    {
        document.getElementById("qnNo").innerText="Q.11";
        var image = document.getElementById('qnImage');
            image.src = "./physics/Q11.png";
            qn = 10;
            checked();
    }

    var Qn12 = document.getElementById('qbtn12');
    if(Qn12)
    {
        Qn12.addEventListener('click', changephyQnImg12, false);
    }
    function changephyQnImg12()
    {
        document.getElementById("qnNo").innerText="Q.12";
        var image = document.getElementById('qnImage');
            image.src = "./physics/Q12.png";
            qn = 11;
            checked();
    }

    var Qn13 = document.getElementById('qbtn13');
    if(Qn13)
    {
        Qn13.addEventListener('click', changephyQnImg13, false);
    }
    function changephyQnImg13()
    {
        document.getElementById("qnNo").innerText="Q.13";
        var image = document.getElementById('qnImage');
            image.src = "./physics/Q13.png";
            qn = 12;
            checked();
    }

    var Qn14 = document.getElementById('qbtn14');
    if(Qn14)
    {
        Qn14.addEventListener('click', changephyQnImg14, false);
    }
    function changephyQnImg14()
    {
        document.getElementById("qnNo").innerText="Q.14";
        var image = document.getElementById('qnImage');
            image.src = "./physics/Q14.png";
            qn = 13;
            checked();
    }

    var Qn15 = document.getElementById('qbtn15');
    if(Qn15)
    {
        Qn15.addEventListener('click', changephyQnImg15, false);
    }
    function changephyQnImg15()
    {
        document.getElementById("qnNo").innerText="Q.15";
        var image = document.getElementById('qnImage');
            image.src = "./physics/Q15.png";
            qn = 14;
            checked();
    }

    var Qn16 = document.getElementById('qbtn16');
    if(Qn16)
    {
        Qn16.addEventListener('click', changephyQnImg16, false);
    }
    function changephyQnImg16()
    {
        document.getElementById("qnNo").innerText="Q.16";
        var image = document.getElementById('qnImage');
            image.src = "./physics/Q16.png";
            qn = 15;
            checked();
    }

    var Qn17 = document.getElementById('qbtn17');
    if(Qn17)
    {
        Qn17.addEventListener('click', changephyQnImg17, false);
    }
    function changephyQnImg17()
    {
        document.getElementById("qnNo").innerText="Q.17";
        var image = document.getElementById('qnImage');
            image.src = "./physics/Q17.png";
            qn = 16;
            checked();
    }

    var Qn18 = document.getElementById('qbtn18');
    if(Qn18)
    {
        Qn18.addEventListener('click', changephyQnImg18, false);
    }
    function changephyQnImg18()
    {
        document.getElementById("qnNo").innerText="Q.18";
        var image = document.getElementById('qnImage');
            image.src = "./physics/Q18.png";
            qn = 17;
            checked();
    }

    var Qn19 = document.getElementById('qbtn19');
    if(Qn19)
    {
        Qn19.addEventListener('click', changephyQnImg19, false);
    }
    function changephyQnImg19()
    {
        document.getElementById("qnNo").innerText="Q.19";
        var image = document.getElementById('qnImage');
            image.src = "./physics/Q19.png";
            qn = 18;
            checked();
    }

    var Qn20 = document.getElementById('qbtn20');
    if(Qn20)
    {
        Qn20.addEventListener('click', changephyQnImg20, false);
    }
    function changephyQnImg20()
    {
        document.getElementById("qnNo").innerText="Q.20";
        var image = document.getElementById('qnImage');
            image.src = "./physics/Q20.png";
            qn = 19;
            checked();
    }

    var Qn21 = document.getElementById('qbtn21');
    if(Qn21)
    {
        Qn21.addEventListener('click', changephyQnImg21, false);
    }
    function changephyQnImg21()
    {
        document.getElementById("qnNo").innerText="Q.21";
        var image = document.getElementById('qnImage');
        image.src = "./physics/Q21.png";
        qn = 20;
        checked();
    }

    var Qn22 = document.getElementById('qbtn22');
    if(Qn22)
    {
        Qn22.addEventListener('click', changephyQnImg22, false);
    }
    function changephyQnImg22()
    {
        document.getElementById("qnNo").innerText="Q.22";
        var image = document.getElementById('qnImage');
            image.src = "./physics/Q22.png";
            qn = 21;
            checked();
    }

    var Qn23 = document.getElementById('qbtn23');
    if(Qn23)
    {
        Qn23.addEventListener('click', changephyQnImg23, false);
    }
    function changephyQnImg23()
    {
        document.getElementById("qnNo").innerText="Q.23";
        var image = document.getElementById('qnImage');
            image.src = "./physics/Q23.png";
            qn = 22;
            checked();
    }

    var Qn24 = document.getElementById('qbtn24');
    if(Qn24)
    {
        Qn24.addEventListener('click', changephyQnImg24, false);
    }
    function changephyQnImg24()
    {
        document.getElementById("qnNo").innerText="Q.24";
        var image = document.getElementById('qnImage');
            image.src = "./physics/Q24.png";
            qn = 23;
            checked();
    }

    var Qn25 = document.getElementById('qbtn25');
    if(Qn25)
    {
        Qn25.addEventListener('click', changephyQnImg25, false);
    }
    function changephyQnImg25()
    {
        document.getElementById("qnNo").innerText="Q.25";
        var image = document.getElementById('qnImage');
            image.src = "./physics/Q25.png";
            qn = 24;
            checked();
    }

    var Qn26 = document.getElementById('qbtn26');
    if(Qn26)
    {
        Qn26.addEventListener('click', changephyQnImg26, false);
    }
    function changephyQnImg26()
    {
        document.getElementById("qnNo").innerText="Q.26";
        var image = document.getElementById('qnImage');
            image.src = "./physics/Q26.png";
            qn = 25;
            checked();
    }

    var Qn27 = document.getElementById('qbtn27');
    if(Qn27)
    {
        Qn27.addEventListener('click', changephyQnImg27, false);
    }
    function changephyQnImg27()
    {
        document.getElementById("qnNo").innerText="Q.27";
        var image = document.getElementById('qnImage');
            image.src = "./physics/Q27.png";
            qn = 26;
            checked();
    }

    var Qn28 = document.getElementById('qbtn28');
    if(Qn28)
    {
        Qn28.addEventListener('click', changephyQnImg28, false);
    }
    function changephyQnImg28()
    {
        document.getElementById("qnNo").innerText="Q.28";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q28.png";
            qn = 27;
            checked();
    }

    var Qn29 = document.getElementById('qbtn29');
    if(Qn29)
    {
        Qn29.addEventListener('click', changephyQnImg29, false);
    }
    function changephyQnImg29()
    {
        document.getElementById("qnNo").innerText="Q.29";
        var image = document.getElementById('qnImage');
            image.src = "./physics/Q29.png";
            qn = 28;
            checked();
    }

    var Qn30 = document.getElementById('qbtn30');
    if(Qn30)
    {
        Qn30.addEventListener('click', changephyQnImg30, false);
    }
    function changephyQnImg30()
    {
        document.getElementById("qnNo").innerText="Q.30";
        var image = document.getElementById('qnImage');
            image.src = "./physics/Q30.png";
            qn = 29;
            checked();
    }

    var Qn31 = document.getElementById('qbtn31');
    if(Qn31)
    {
        Qn31.addEventListener('click', changephyQnImg31, false);
    }
    function changephyQnImg31()
    {
        document.getElementById("qnNo").innerText="Q.31";
        var image = document.getElementById('qnImage');
            image.src = "./physics/Q31.png";
            qn = 30;
            checked();
    }

    var Qn32 = document.getElementById('qbtn32');
    if(Qn32)
    {
        Qn32.addEventListener('click', changephyQnImg32, false);
    }
    function changephyQnImg32()
    {
        document.getElementById("qnNo").innerText="Q.32";
        var image = document.getElementById('qnImage');
            image.src = "./physics/Q32.png";
            qn = 31;
            checked();
    }

    var Qn33 = document.getElementById('qbtn33');
    if(Qn33)
    {
        Qn33.addEventListener('click', changephyQnImg33, false);
    }
    function changephyQnImg33()
    {
        document.getElementById("qnNo").innerText="Q.33";
        var image = document.getElementById('qnImage');
            image.src = "./physics/Q33.png";
            qn = 32;
            checked();
    }

    var Qn34 = document.getElementById('qbtn34');
    if(Qn34)
    {
        Qn34.addEventListener('click', changephyQnImg34, false);
    }
    function changephyQnImg34()
    {
        document.getElementById("qnNo").innerText="Q.34";
        var image = document.getElementById('qnImage');
            image.src = "./physics/Q34.png";
            qn = 33;
            checked();
    }

    var Qn35 = document.getElementById('qbtn35');
    if(Qn35)
    {
        Qn35.addEventListener('click', changephyQnImg35, false);
    }
    function changephyQnImg35()
    {
        document.getElementById("qnNo").innerText="Q.35";
        var image = document.getElementById('qnImage');
            image.src = "./physics/Q35.png";
            qn = 34;
            checked();
    }

    var Qn36 = document.getElementById('qbtn36');
    if(Qn36)
    {
        Qn36.addEventListener('click', changephyQnImg36, false);
    }
    function changephyQnImg36()
    {
        document.getElementById("qnNo").innerText="Q.36";
        var image = document.getElementById('qnImage');
            image.src = "./physics/Q36.png";
            qn = 35;
            checked();
    }

    var Qn37 = document.getElementById('qbtn37');
    if(Qn37)
    {
        Qn37.addEventListener('click', changephyQnImg37, false);
    }
    function changephyQnImg37()
    {
        document.getElementById("qnNo").innerText="Q.37";
        var image = document.getElementById('qnImage');
            image.src = "./physics/Q37.png";
            qn = 36;
            checked();
    }

    var Qn38 = document.getElementById('qbtn38');
    if(Qn38)
    {
        Qn38.addEventListener('click', changephyQnImg38, false);
    }
    function changephyQnImg38()
    {
        document.getElementById("qnNo").innerText="Q.38";
        var image = document.getElementById('qnImage');
            image.src = "./physics/Q38.png";
            qn = 37;
            checked();
    }

    var Qn39 = document.getElementById('qbtn39');
    if(Qn39)
    {
        Qn39.addEventListener('click', changephyQnImg39, false);
    }
    function changephyQnImg39()
    {
        document.getElementById("qnNo").innerText="Q.39";
        var image = document.getElementById('qnImage');
            image.src = "./physics/Q39.png";
            qn = 38;
            checked();
    }

    var Qn40 = document.getElementById('qbtn40');
    if(Qn40)
    {
        Qn40.addEventListener('click', changephyQnImg40, false);
    }
    function changephyQnImg40()
    {
        document.getElementById("qnNo").innerText="Q.40";
        var image = document.getElementById('qnImage');
            image.src = "./physics/Q40.png";
            qn = 39;
            checked();
    }

    var Qn41 = document.getElementById('qbtn41');
    if(Qn41)
    {
        Qn41.addEventListener('click', changephyQnImg41, false);
    }
    function changephyQnImg41()
    {
        document.getElementById("qnNo").innerText="Q.41";
        var image = document.getElementById('qnImage');
            image.src = "./physics/Q41.png";
            qn = 40;
            checked();
    }

    var Qn42 = document.getElementById('qbtn42');
    if(Qn42)
    {
        Qn42.addEventListener('click', changephyQnImg42, false);
    }
    function changephyQnImg42()
    {
        document.getElementById("qnNo").innerText="Q.42";
        var image = document.getElementById('qnImage');
            image.src = "./physics/Q42.png";
            qn = 41;
            checked();
    }

    var Qn43 = document.getElementById('qbtn43');
    if(Qn43)
    {
        Qn43.addEventListener('click', changephyQnImg43, false);
    }
    function changephyQnImg43()
    {
        document.getElementById("qnNo").innerText="Q.43";
        var image = document.getElementById('qnImage');
            image.src = "./physics/Q43.png";
            qn = 42;
            checked();
    }

    var Qn44 = document.getElementById('qbtn44');
    if(Qn44)
    {
        Qn44.addEventListener('click', changephyQnImg44, false);
    }
    function changephyQnImg44()
    {
        document.getElementById("qnNo").innerText="Q.44";
        var image = document.getElementById('qnImage');
            image.src = "./physics/Q44.png";
            qn = 43;
            checked();
    }

    var Qn45 = document.getElementById('qbtn45');
    if(Qn45)
    {
        Qn45.addEventListener('click', changephyQnImg45, false);
    }
    function changephyQnImg45()
    {
        document.getElementById("qnNo").innerText="Q.45";
        var image = document.getElementById('qnImage');
            image.src = "./physics/Q45.png";
            qn = 44;
            checked();
    }

    var Qn46 = document.getElementById('qbtn46');
    if(Qn46)
    {
        Qn46.addEventListener('click', changephyQnImg46, false);
    }
    function changephyQnImg46()
    {
        document.getElementById("qnNo").innerText="Q.46";
        var image = document.getElementById('qnImage');
            image.src = "./physics/Q46.png";
            qn = 45;
            checked();
    }

    var Qn47 = document.getElementById('qbtn47');
    if(Qn47)
    {
        Qn47.addEventListener('click', changephyQnImg47, false);
    }
    function changephyQnImg47()
    {
        document.getElementById("qnNo").innerText="Q.47";
        var image = document.getElementById('qnImage');
            image.src = "./physics/Q47.png";
            qn = 46;
            checked();
    }

    var Qn48 = document.getElementById('qbtn48');
    if(Qn48)
    {
        Qn48.addEventListener('click', changephyQnImg48, false);
    }
    function changephyQnImg48()
    {
        document.getElementById("qnNo").innerText="Q.48";
        var image = document.getElementById('qnImage');
            image.src = "./physics/Q48.png";
            qn = 47;
            checked();
    }

        var Qn49 = document.getElementById('qbtn49');
        if(Qn49)
        {
            Qn49.addEventListener('click', changephyQnImg49, false);
        }
        function changephyQnImg49()
        {
            document.getElementById("qnNo").innerText="Q.49";
            var image = document.getElementById('qnImage');
                image.src = "./physics/Q49.png";
                qn = 48;
                checked();
        }

        var Qn50 = document.getElementById('qbtn50');
        if(Qn50)
        {
            Qn50.addEventListener('click', changephyQnImg50, false);
        }
        function changephyQnImg50()
        {
            document.getElementById("qnNo").innerText="Q.50";
            var image = document.getElementById('qnImage');
                image.src = "./physics/Q50.png";
                qn = 49;
                checked();
        }

    /********************************   chemistry    ***************************************** */

    var Qn51 = document.getElementById('qbtn51');
    if(Qn51)
    {
        Qn51.addEventListener('click', changechemQnImg51, false);
    }
    function changechemQnImg51()
    {
        document.getElementById("qnNo").innerText="Q.01";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q1.png";
            qn = 50;
            checked();
  }
  
    var Qn52 = document.getElementById('qbtn52');
    if(Qn52)
    {
        Qn52.addEventListener('click', changechemQnImg52, false);
    }
    function changechemQnImg52()
    {
        document.getElementById("qnNo").innerText="Q.02";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q2.png";
            qn = 51;
            checked();
    }

    var Qn53 = document.getElementById('qbtn53');
    if(Qn53)
    {
        Qn53.addEventListener('click', changechemQnImg53, false);
    }
    function changechemQnImg53()
    {
        document.getElementById("qnNo").innerText="Q.03";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q3.png";
            qn = 52;
            checked();
    }

    var Qn54 = document.getElementById('qbtn54');
    if(Qn54)
    {
        Qn54.addEventListener('click', changechemQnImg54, false);
    }
    function changechemQnImg54()
    {
        document.getElementById("qnNo").innerText="Q.04";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q4.png";
            qn = 53;
            checked();
    }

    var Qn55 = document.getElementById('qbtn55');
    if(Qn55)
    {
        Qn55.addEventListener('click', changechemQnImg55, false);
    }
    function changechemQnImg55()
    {
        document.getElementById("qnNo").innerText="Q.05";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q5.png";
            qn = 54;
            checked();
    }

    var Qn56 = document.getElementById('qbtn56');
    if(Qn56)
    {
        Qn56.addEventListener('click', changechemQnImg56, false);
    }
    function changechemQnImg56()
    {
        document.getElementById("qnNo").innerText="Q.06";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q6.png";
            qn = 55;
            checked();
    }

    var Qn57 = document.getElementById('qbtn57');
    if(Qn57)
    {
        Qn57.addEventListener('click', changechemQnImg57, false);
    }
    function changechemQnImg57()
    {
        document.getElementById("qnNo").innerText="Q.07";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q7.png";
            qn = 56;
            checked();
    }

    var Qn58 = document.getElementById('qbtn58');
    if(Qn58)
    {
        Qn58.addEventListener('click', changechemQnImg58, false);
    }
    function changechemQnImg58()
    {
        document.getElementById("qnNo").innerText="Q.08";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q8.png";
            qn = 57;
            checked();
    }

    var Qn59 = document.getElementById('qbtn59');
    if(Qn59)
    {
        Qn59.addEventListener('click', changechemQnImg59, false);
    }
    function changechemQnImg59()
    {
        document.getElementById("qnNo").innerText="Q.09";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q9.png";
            qn = 58;
            checked();
    }

    var Qn60 = document.getElementById('qbtn60');
    if(Qn60)
    {
        Qn60.addEventListener('click', changechemQnImg60, false);
    }
    function changechemQnImg60()
    {
        document.getElementById("qnNo").innerText="Q.10";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q10.png";
            qn = 59;
            checked();
    }

    var Qn61 = document.getElementById('qbtn61');
    if(Qn61)
    {
        Qn61.addEventListener('click', changechemQnImg61, false);
    }
    function changechemQnImg61()
    {
        document.getElementById("qnNo").innerText="Q.11";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q11.png";
            qn = 60;
            checked();
    }

    var Qn62 = document.getElementById('qbtn62');
    if(Qn62)
    {
        Qn62.addEventListener('click', changechemQnImg62, false);
    }
    function changechemQnImg62()
    {
        document.getElementById("qnNo").innerText="Q.12";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q12.png";
            qn = 61;
            checked();
    }

    var Qn63 = document.getElementById('qbtn63');
    if(Qn63)
    {
        Qn63.addEventListener('click', changechemQnImg63, false);
    }
    function changechemQnImg63()
    {
        document.getElementById("qnNo").innerText="Q.13";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q13.png";
            qn = 62;
            checked();
    }

    var Qn64 = document.getElementById('qbtn64');
    if(Qn64)
    {
        Qn64.addEventListener('click', changechemQnImg64, false);
    }
    function changechemQnImg64()
    {
        document.getElementById("qnNo").innerText="Q.14";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q14.png";
            qn = 63;
            checked();
    }

    var Qn65 = document.getElementById('qbtn65');
    if(Qn65)
    {
        Qn65.addEventListener('click', changechemQnImg65, false);
    }
    function changechemQnImg65()
    {
        document.getElementById("qnNo").innerText="Q.15";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q15.png";
            qn = 64;
            checked();
    }

    var Qn66 = document.getElementById('qbtn66');
    if(Qn66)
    {
        Qn66.addEventListener('click', changechemQnImg66, false);
    }
    function changechemQnImg66()
    {
        document.getElementById("qnNo").innerText="Q.16";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q16.png";
            qn = 65;
            checked();
    }

    var Qn67 = document.getElementById('qbtn67');
    if(Qn67)
    {
        Qn67.addEventListener('click', changechemQnImg67, false);
    }
    function changechemQnImg67()
    {
        document.getElementById("qnNo").innerText="Q.17";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q17.png";
            qn = 66;
            checked();
    }

    var Qn68 = document.getElementById('qbtn68');
    if(Qn68)
    {
        Qn68.addEventListener('click', changechemQnImg68, false);
    }
    function changechemQnImg68()
    {
        document.getElementById("qnNo").innerText="Q.18";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q18.png";
            qn = 67;
            checked();
    }

    var Qn69 = document.getElementById('qbtn69');
    if(Qn69)
    {
        Qn69.addEventListener('click', changechemQnImg69, false);
    }
    function changechemQnImg69()
    {
        document.getElementById("qnNo").innerText="Q.19";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q19.png";
            qn = 68;
            checked();
    }

    var Qn70 = document.getElementById('qbtn70');
    if(Qn70)
    {
        Qn70.addEventListener('click', changechemQnImg70, false);
    }
    function changechemQnImg70()
    {
        document.getElementById("qnNo").innerText="Q.20";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q20.png";
            qn = 69;
            checked();
    }

    var Qn71 = document.getElementById('qbtn71');
    if(Qn71)
    {
        Qn71.addEventListener('click', changechemQnImg71, false);
    }
    function changechemQnImg71()
    {
        document.getElementById("qnNo").innerText="Q.21";
        var image = document.getElementById('qnImage');
        image.src = "./chemistry/Q21.png";
        qn = 70;
        checked();
    }

    var Qn72 = document.getElementById('qbtn72');
    if(Qn72)
    {
        Qn72.addEventListener('click', changechemQnImg72, false);
    }
    function changechemQnImg72()
    {
        document.getElementById("qnNo").innerText="Q.22";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q22.png";
            qn = 71;
            checked();
    }

    var Qn73 = document.getElementById('qbtn73');
    if(Qn73)
    {
        Qn73.addEventListener('click', changechemQnImg73, false);
    }
    function changechemQnImg73()
    {
        document.getElementById("qnNo").innerText="Q.23";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q23.png";
            qn = 72;
            checked();
    }

    var Qn74 = document.getElementById('qbtn74');
    if(Qn74)
    {
        Qn74.addEventListener('click', changechemQnImg74, false);
    }
    function changechemQnImg74()
    {
        document.getElementById("qnNo").innerText="Q.24";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q24.png";
            qn = 73;
            checked();
    }

    var Qn75 = document.getElementById('qbtn75');
    if(Qn75)
    {
        Qn75.addEventListener('click', changechemQnImg75, false);
    }
    function changechemQnImg75()
    {
        document.getElementById("qnNo").innerText="Q.25";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q25.png";
            qn = 74;
            checked();
    }

    var Qn76 = document.getElementById('qbtn76');
    if(Qn76)
    {
        Qn76.addEventListener('click', changechemQnImg76, false);
    }
    function changechemQnImg76()
    {
        document.getElementById("qnNo").innerText="Q.26";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q26.png";
            qn = 75;
            checked();
    }

    var Qn77 = document.getElementById('qbtn77');
    if(Qn77)
    {
        Qn77.addEventListener('click', changechemQnImg77, false);
    }
    function changechemQnImg77()
    {
        document.getElementById("qnNo").innerText="Q.27";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q27.png";
            qn = 76;
            checked();
    }

    var Qn78 = document.getElementById('qbtn78');
    if(Qn78)
    {
        Qn78.addEventListener('click', changechemQnImg78, false);
    }
    function changechemQnImg78()
    {
        document.getElementById("qnNo").innerText="Q.28";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q28.png";
            qn = 77;
            checked();
    }

    var Qn79 = document.getElementById('qbtn79');
    if(Qn79)
    {
        Qn79.addEventListener('click', changechemQnImg79, false);
    }
    function changechemQnImg79()
    {
        document.getElementById("qnNo").innerText="Q.29";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q29.png";
            qn = 78;
            checked();
    }

    var Qn80 = document.getElementById('qbtn80');
    if(Qn80)
    {
        Qn80.addEventListener('click', changechemQnImg80, false);
    }
    function changechemQnImg80()
    {
        document.getElementById("qnNo").innerText="Q.30";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q30.png";
            qn = 79;
            checked();
    }

    var Qn81 = document.getElementById('qbtn81');
    if(Qn81)
    {
        Qn81.addEventListener('click', changechemQnImg81, false);
    }
    function changechemQnImg81()
    {
        document.getElementById("qnNo").innerText="Q.31";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q31.png";
            qn = 80;
            checked();
    }

    var Qn82 = document.getElementById('qbtn82');
    if(Qn82)
    {
        Qn82.addEventListener('click', changechemQnImg82, false);
    }
    function changechemQnImg82()
    {
        document.getElementById("qnNo").innerText="Q.32";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q32.png";
            qn = 81;
            checked();
    }

    var Qn83 = document.getElementById('qbtn83');
    if(Qn83)
    {
        Qn83.addEventListener('click', changechemQnImg83, false);
    }
    function changechemQnImg83()
    {
        document.getElementById("qnNo").innerText="Q.33";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q33.png";
            qn = 82;
            checked();
    }

    var Qn84 = document.getElementById('qbtn84');
    if(Qn84)
    {
        Qn84.addEventListener('click', changechemQnImg84, false);
    }
    function changechemQnImg84()
    {
        document.getElementById("qnNo").innerText="Q.34";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q34.png";
            qn = 83;
            checked();
    }

    var Qn85 = document.getElementById('qbtn85');
    if(Qn85)
    {
        Qn85.addEventListener('click', changechemQnImg85, false);
    }
    function changechemQnImg85()
    {
        document.getElementById("qnNo").innerText="Q.35";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q35.png";
            qn = 84;
            checked();
    }

    var Qn86 = document.getElementById('qbtn86');
    if(Qn86)
    {
        Qn86.addEventListener('click', changechemQnImg86, false);
    }
    function changechemQnImg86()
    {
        document.getElementById("qnNo").innerText="Q.36";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q36.png";
            qn = 85;
            checked();
    }

    var Qn87 = document.getElementById('qbtn87');
    if(Qn87)
    {
        Qn87.addEventListener('click', changechemQnImg87, false);
    }
    function changechemQnImg87()
    {
        document.getElementById("qnNo").innerText="Q.37";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q37.png";
            qn = 86;
            checked();
    }

    var Qn88 = document.getElementById('qbtn88');
    if(Qn88)
    {
        Qn88.addEventListener('click', changechemQnImg88, false);
    }
    function changechemQnImg88()
    {
        document.getElementById("qnNo").innerText="Q.38";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q38.png";
            qn = 87;
            checked();
    }

    var Qn89 = document.getElementById('qbtn89');
    if(Qn89)
    {
        Qn89.addEventListener('click', changechemQnImg89, false);
    }
    function changechemQnImg89()
    {
        document.getElementById("qnNo").innerText="Q.39";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q39.png";
            qn = 88;
            checked();
    }

    var Qn90 = document.getElementById('qbtn90');
    if(Qn90)
    {
        Qn90.addEventListener('click', changechemQnImg90, false);
    }
    function changechemQnImg90()
    {
        document.getElementById("qnNo").innerText="Q.40";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q40.png";
            qn = 89;
            checked();
    }

    var Qn91 = document.getElementById('qbtn91');
    if(Qn91)
    {
        Qn91.addEventListener('click', changechemQnImg91, false);
    }
    function changechemQnImg91()
    {
        document.getElementById("qnNo").innerText="Q.31";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q41.png";
            qn = 90;
            checked();
    }

    var Qn92 = document.getElementById('qbtn92');
    if(Qn92)
    {
        Qn92.addEventListener('click', changechemQnImg92, false);
    }
    function changechemQnImg92()
    {
        document.getElementById("qnNo").innerText="Q.32";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q42.png";
            qn = 91;
            checked();
    }

    var Qn93 = document.getElementById('qbtn93');
    if(Qn93)
    {
        Qn93.addEventListener('click', changechemQnImg93, false);
    }
    function changechemQnImg93()
    {
        document.getElementById("qnNo").innerText="Q.33";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q43.png";
            qn = 92;
            checked();
    }

    var Qn94 = document.getElementById('qbtn94');
    if(Qn94)
    {
        Qn94.addEventListener('click', changechemQnImg94, false);
    }
    function changechemQnImg94()
    {
        document.getElementById("qnNo").innerText="Q.34";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q44.png";
            qn = 93;
            checked();
    }

    var Qn95 = document.getElementById('qbtn95');
    if(Qn95)
    {
        Qn95.addEventListener('click', changechemQnImg95, false);
    }
    function changechemQnImg95()
    {
        document.getElementById("qnNo").innerText="Q.35";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q45.png";
            qn = 94;
            checked();
    }

    var Qn96 = document.getElementById('qbtn96');
    if(Qn96)
    {
        Qn96.addEventListener('click', changechemQnImg96, false);
    }
    function changechemQnImg96()
    {
        document.getElementById("qnNo").innerText="Q.36";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q46.png";
            qn = 95;
            checked();
    }

    var Qn97 = document.getElementById('qbtn97');
    if(Qn97)
    {
        Qn97.addEventListener('click', changechemQnImg97, false);
    }
    function changechemQnImg97()
    {
        document.getElementById("qnNo").innerText="Q.37";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q47.png";
            qn = 96;
            checked();
    }

    var Qn98 = document.getElementById('qbtn98');
    if(Qn98)
    {
        Qn98.addEventListener('click', changechemQnImg98, false);
    }
    function changechemQnImg98()
    {
        document.getElementById("qnNo").innerText="Q.38";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q48.png";
            qn = 97;
            checked();
    }

    var Qn99 = document.getElementById('qbtn99');
    if(Qn99)
    {
        Qn99.addEventListener('click', changechemQnImg99, false);
    }
    function changechemQnImg99()
    {
        document.getElementById("qnNo").innerText="Q.49";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q49.png";
            qn = 98;
            checked();
    }

    var Qn100 = document.getElementById('qbtn100');
    if(Qn100)
    {
        Qn100.addEventListener('click', changechemQnImg100, false);
    }
    function changechemQnImg100()
    {
        document.getElementById("qnNo").innerText="Q.50";
        var image = document.getElementById('qnImage');
            image.src = "./chemistry/Q50.png";
            qn = 99;
            checked();
    }

    /***************************  biology   *************************************/

    var Qn101 = document.getElementById('qbtn101');
    if(Qn101)
    {
        Qn101.addEventListener('click', changebioQnImg101, false);
    }
    function changebioQnImg101()
    {
        document.getElementById("qnNo").innerText="Q.01";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q1.png";
            qn = 100;
            checked();
    }

    var Qn102 = document.getElementById('qbtn102');
    if(Qn102)
    {
        Qn102.addEventListener('click', changebioQnImg102, false);
    }
    function changebioQnImg102()
    {
        document.getElementById("qnNo").innerText="Q.02";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q2.png";
            qn = 101;
            checked();
    }

    var Qn103 = document.getElementById('qbtn103');
    if(Qn103)
    {
        Qn103.addEventListener('click', changebioQnImg103, false);
    }
    function changebioQnImg103()
    {
        document.getElementById("qnNo").innerText="Q.03";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q3.png";
            qn = 102;
            checked();
    }

    var Qn104 = document.getElementById('qbtn104');
    if(Qn104)
    {
        Qn104.addEventListener('click', changebioQnImg104, false);
    }
    function changebioQnImg104()
    {
        document.getElementById("qnNo").innerText="Q.04";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q4.png";
            qn = 103;
            checked();
    }

    var Qn105 = document.getElementById('qbtn105');
    if(Qn105)
    {
        Qn105.addEventListener('click', changebioQnImg105, false);
    }
    function changebioQnImg105()
    {
        document.getElementById("qnNo").innerText="Q.05";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q5.png";
            qn = 104;
            checked();
    }

    var Qn106 = document.getElementById('qbtn106');
    if(Qn106)
    {
        Qn106.addEventListener('click', changebioQnImg106, false);
    }
    function changebioQnImg106()
    {
        document.getElementById("qnNo").innerText="Q.06";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q6.png";
            qn = 105;
            checked();
    }

    var Qn107 = document.getElementById('qbtn107');
    if(Qn107)
    {
        Qn107.addEventListener('click', changebioQnImg107, false);
    }
    function changebioQnImg107()
    {
        document.getElementById("qnNo").innerText="Q.07";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q7.png";
            qn = 16;
            checked();
    }

    var Qn108 = document.getElementById('qbtn108');
    if(Qn108)
    {
        Qn108.addEventListener('click', changebioQnImg108, false);
    }
    function changebioQnImg108()
    {
        document.getElementById("qnNo").innerText="Q.08";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q8.png";
            qn = 107;
            checked();
    }

    var Qn109 = document.getElementById('qbtn109');
    if(Qn109)
    {
        Qn109.addEventListener('click', changebioQnImg109, false);
    }
    function changebioQnImg109()
    {
        document.getElementById("qnNo").innerText="Q.09";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q9.png";
            qn = 108;
            checked();
    }

    var Qn110 = document.getElementById('qbtn110');
    if(Qn110)
    {
        Qn110.addEventListener('click', changebioQnImg110, false);
    }
    function changebioQnImg110()
    {
        document.getElementById("qnNo").innerText="Q.10";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q10.png";
            qn = 109;
            checked();
    }

    var Qn111 = document.getElementById('qbtn111');
    if(Qn111)
    {
        Qn111.addEventListener('click', changebioQnImg111, false);
    }
    function changebioQnImg111()
    {
        document.getElementById("qnNo").innerText="Q.11";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q11.png";
            qn = 110;
            checked();
    }

    var Qn112 = document.getElementById('qbtn112');
    if(Qn112)
    {
        Qn112.addEventListener('click', changebioQnImg112, false);
    }
    function changebioQnImg112()
    {
        document.getElementById("qnNo").innerText="Q.12";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q12.png";
            qn = 111;
            checked();
    }

    var Qn113 = document.getElementById('qbtn113');
    if(Qn113)
    {
        Qn113.addEventListener('click', changebioQnImg113, false);
    }
    function changebioQnImg113()
    {
        document.getElementById("qnNo").innerText="Q.13";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q13.png";
            qn = 112;
            checked();
    }

    var Qn114 = document.getElementById('qbtn114');
    if(Qn114)
    {
        Qn114.addEventListener('click', changebioQnImg114, false);
    }
    function changebioQnImg114()
    {
        document.getElementById("qnNo").innerText="Q.14";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q14.png";
            qn = 113;
            checked();
    }

    var Qn115 = document.getElementById('qbtn115');
    if(Qn115)
    {
        Qn115.addEventListener('click', changebioQnImg115, false);
    }
    function changebioQnImg115()
    {
        document.getElementById("qnNo").innerText="Q.15";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q15.png";
            qn = 114;
            checked();
    }

    var Qn116 = document.getElementById('qbtn116');
    if(Qn116)
    {
        Qn116.addEventListener('click', changebioQnImg116, false);
    }
    function changebioQnImg116()
    {
        document.getElementById("qnNo").innerText="Q.16";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q16.png";
            qn = 115;
            checked();
    }

    var Qn117 = document.getElementById('qbtn117');
    if(Qn117)
    {
        Qn117.addEventListener('click', changebioQnImg117, false);
    }
    function changebioQnImg117()
    {
        document.getElementById("qnNo").innerText="Q.17";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q17.png";
            qn = 116;
            checked();
    }

    var Qn118 = document.getElementById('qbtn118');
    if(Qn118)
    {
        Qn118.addEventListener('click', changebioQnImg118, false);
    }
    function changebioQnImg118()
    {
        document.getElementById("qnNo").innerText="Q.18";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q18.png";
            qn = 117;
            checked();
    }

    var Qn119 = document.getElementById('qbtn119');
    if(Qn119)
    {
        Qn119.addEventListener('click', changebioQnImg119, false);
    }
    function changebioQnImg119()
    {
        document.getElementById("qnNo").innerText="Q.19";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q19.png";
            qn = 118;
            checked();
    }

    var Qn120 = document.getElementById('qbtn120');
    if(Qn120)
    {
        Qn120.addEventListener('click', changebioQnImg120, false);
    }
    function changebioQnImg120()
    {
        document.getElementById("qnNo").innerText="Q.20";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q20.png";
            qn = 119;
            checked();
    }

    var Qn121 = document.getElementById('qbtn121');
    if(Qn121)
    {
        Qn121.addEventListener('click', changebioQnImg121, false);
    }
    function changebioQnImg121(){
    document.getElementById("qnNo").innerText="Q.21";
        var image = document.getElementById('qnImage');
        image.src = "./biology.png";
        qn = 120;
        checked();
    }

    var Qn122 = document.getElementById('qbtn122');
    if(Qn122)
    {
        Qn122.addEventListener('click', changebioQnImg122, false);
    }
    function changebioQnImg122()
    {
        document.getElementById("qnNo").innerText="Q.22";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q22.png";
            qn = 121;
            checked();
    }

    var Qn123 = document.getElementById('qbtn123');
    if(Qn123)
    {
        Qn123.addEventListener('click', changebioQnImg123, false);
    }
    function changebioQnImg123()
    {
        document.getElementById("qnNo").innerText="Q.23";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q23.png";
            qn = 122;
            checked();
    }

    var Qn124 = document.getElementById('qbtn124');
    if(Qn124)
    {
        Qn124.addEventListener('click', changebioQnImg124, false);
    }
    function changebioQnImg124()
    {
        document.getElementById("qnNo").innerText="Q.24";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q24.png";
            qn = 123;
            checked();
    }

    var Qn125 = document.getElementById('qbtn125');
    if(Qn125)
    {
        Qn125.addEventListener('click', changebioQnImg125, false);
    }
    function changebioQnImg125()
    {
        document.getElementById("qnNo").innerText="Q.25";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q25.png";
            qn = 124;
            checked();
    }

    var Qn126 = document.getElementById('qbtn126');
    if(Qn126)
    {
        Qn126.addEventListener('click', changebioQnImg126, false);
    }
    function changebioQnImg126()
    {
        document.getElementById("qnNo").innerText="Q.26";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q26.png";
            qn = 125;
            checked();
    }

    var Qn127 = document.getElementById('qbtn127');
    if(Qn127)
    {
        Qn127.addEventListener('click', changebioQnImg127, false);
    }
    function changebioQnImg127()
    {
        document.getElementById("qnNo").innerText="Q.27";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q27.png";
            qn = 126;
            checked();
    }

    var Qn128 = document.getElementById('qbtn128');
    if(Qn128)
    {
        Qn128.addEventListener('click', changebioQnImg128, false);
    }
    function changebioQnImg128()
    {
        document.getElementById("qnNo").innerText="Q.28";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q28.png";
            qn = 127;
            checked();
    }

    var Qn129 = document.getElementById('qbtn129');
    if(Qn129)
    {
        Qn129.addEventListener('click', changebioQnImg129, false);
    }
    function changebioQnImg129()
    {
        document.getElementById("qnNo").innerText="Q.29";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q29.png";
            qn = 128;
            checked();
    }

    var Qn130 = document.getElementById('qbtn130');
    if(Qn130)
    {
        Qn130.addEventListener('click', changebioQnImg130, false);
    }
    function changebioQnImg130()
    {
        document.getElementById("qnNo").innerText="Q.30";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q30.png";
            qn = 129;
            checked();
    }

    var Qn131 = document.getElementById('qbtn131');
    if(Qn131)
    {
        Qn131.addEventListener('click', changebioQnImg131, false);
    }
    function changebioQnImg131()
    {
        document.getElementById("qnNo").innerText="Q.31";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q31.png";
            qn = 130;
            checked();
    }

    var Qn132 = document.getElementById('qbtn132');
    if(Qn132)
    {
        Qn132.addEventListener('click', changebioQnImg132, false);
    }
    function changebioQnImg132()
    {
        document.getElementById("qnNo").innerText="Q.32";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q32.png";
            qn = 131;
            checked();
    }

    var Qn133 = document.getElementById('qbtn133');
    if(Qn133)
    {
        Qn133.addEventListener('click', changebioQnImg133, false);
    }
    function changebioQnImg133()
    {
        document.getElementById("qnNo").innerText="Q.33";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q33.png";
            qn = 132;
            checked();
    }

    var Qn134 = document.getElementById('qbtn134');
    if(Qn134)
    {
        Qn134.addEventListener('click', changebioQnImg134, false);
    }
    function changebioQnImg134()
    {
        document.getElementById("qnNo").innerText="Q.34";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q34.png";
            qn = 133;
            checked();
    }

    var Qn135 = document.getElementById('qbtn135');
    if(Qn135)
    {
        Qn135.addEventListener('click', changebioQnImg135, false);
    }
    function changebioQnImg135()
    {
        document.getElementById("qnNo").innerText="Q.35";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q35.png";
            qn = 134;
            checked();
    }

    var Qn136 = document.getElementById('qbtn136');
    if(Qn136)
    {
        Qn136.addEventListener('click', changebioQnImg136, false);
    }
    function changebioQnImg136()
    {
        document.getElementById("qnNo").innerText="Q.36";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q36.png";
            qn = 135;
            checked();
    }

    var Qn137 = document.getElementById('qbtn137');
    if(Qn137)
    {
        Qn137.addEventListener('click', changebioQnImg137, false);
    }
    function changebioQnImg137()
    {
        document.getElementById("qnNo").innerText="Q.37";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q37.png";
            qn = 136;
            checked();
    }

    var Qn138 = document.getElementById('qbtn138');
    if(Qn138)
    {
        Qn138.addEventListener('click', changebioQnImg138, false);
    }
    function changebioQnImg138()
    {
        document.getElementById("qnNo").innerText="Q.38";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q38.png";
            qn = 137;
            checked();
    }

    var Qn139 = document.getElementById('qbtn139');
    if(Qn139)
    {
        Qn139.addEventListener('click', changebioQnImg139, false);
    }
    function changebioQnImg139()
    {
        document.getElementById("qnNo").innerText="Q.39";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q39.png";
            qn = 138;
            checked();
    }

    var Qn140 = document.getElementById('qbtn140');
    if(Qn140)
    {
        Qn140.addEventListener('click', changebioQnImg140, false);
    }
    function changebioQnImg140()
    {
        document.getElementById("qnNo").innerText="Q.40";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q40.png";
            qn = 139;
            checked();
    }

    var Qn141 = document.getElementById('qbtn141');
    if(Qn141)
    {
        Qn141.addEventListener('click', changebioQnImg141, false);
    }
    function changebioQnImg141()
    {
        document.getElementById("qnNo").innerText="Q.31";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q41.png";
            qn = 140;
            checked();
    }

    var Qn142 = document.getElementById('qbtn142');
    if(Qn142)
    {
        Qn142.addEventListener('click', changebioQnImg142, false);
    }
    function changebioQnImg142()
    {
        document.getElementById("qnNo").innerText="Q.32";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q42.png";
            qn = 141;
            checked();
    }

    var Qn143 = document.getElementById('qbtn143');
    if(Qn143)
    {
        Qn143.addEventListener('click', changebioQnImg143, false);
    }
    function changebioQnImg143()
    {
        document.getElementById("qnNo").innerText="Q.33";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q43.png";
            qn = 142;
            checked();
    }

    var Qn144 = document.getElementById('qbtn144');
    if(Qn144)
    {
        Qn144.addEventListener('click', changebioQnImg144, false);
    }
    function changebioQnImg144()
    {
        document.getElementById("qnNo").innerText="Q.34";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q44.png";
            qn = 143;
            checked();
    }

    var Qn145 = document.getElementById('qbtn145');
    if(Qn145)
    {
        Qn145.addEventListener('click', changebioQnImg145, false);
    }
    function changebioQnImg145()
    {
        document.getElementById("qnNo").innerText="Q.35";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q45.png";
            qn = 144;
            checked();
    }

    var Qn146 = document.getElementById('qbtn146');
    if(Qn146)
    {
        Qn146.addEventListener('click', changebioQnImg146, false);
    }
    function changebioQnImg146()
    {
        document.getElementById("qnNo").innerText="Q.36";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q46.png";
            qn = 145;
            checked();
    }

    var Qn147 = document.getElementById('qbtn147');
    if(Qn147)
    {
        Qn147.addEventListener('click', changebioQnImg147, false);
    }
    function changebioQnImg147()
    {
        document.getElementById("qnNo").innerText="Q.37";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q47.png";
            qn = 146;
            checked();
    }

    var Qn148 = document.getElementById('qbtn148');
    if(Qn148)
    {
        Qn148.addEventListener('click', changebioQnImg148, false);
    }
    function changebioQnImg148()
    {
        document.getElementById("qnNo").innerText="Q.38";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q48.png";
            qn = 147;
            checked();
    }

    var Qn149 = document.getElementById('qbtn149');
    if(Qn149)
    {
        Qn149.addEventListener('click', changebioQnImg149, false);
    }
    function changebioQnImg149()
    {
        document.getElementById("qnNo").innerText="Q.49";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q49.png";
            qn = 148;
            checked();
    }

    var Qn150 = document.getElementById('qbtn150');
    if(Qn150)
    {
        Qn150.addEventListener('click', changebioQnImg150, false);
    }
    function changebioQnImg150()
    {
        document.getElementById("qnNo").innerText="Q.50";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q50.png";
            qn = 149;
            checked();
    }

    var Qn151 = document.getElementById('qbtn151');
    if(Qn151)
    {
        Qn151.addEventListener('click', changebioQnImg151, false);
    }
    function changebioQnImg151()
    {
        document.getElementById("qnNo").innerText="Q.51";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q51.png";
            qn = 150;
            checked();
    }
  
    var Qn152 = document.getElementById('qbtn152');
    if(Qn152)
    {
        Qn152.addEventListener('click', changebioQnImg152, false);
    }
    function changebioQnImg152()
    {
        document.getElementById("qnNo").innerText="Q.52";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q52.png";
            qn = 151;
            checked();
    }

    var Qn153 = document.getElementById('qbtn153');
    if(Qn153)
    {
        Qn153.addEventListener('click', changebioQnImg153, false);
    }
    function changebioQnImg153()
    {
        document.getElementById("qnNo").innerText="Q.53";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q53.png";
            qn = 152;
            checked();
    }

    var Qn154 = document.getElementById('qbtn154');
    if(Qn154)
    {
        Qn154.addEventListener('click', changebioQnImg154, false);
    }
    function changebioQnImg154()
    {
        document.getElementById("qnNo").innerText="Q.54";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q54.png";
            qn = 153;
            checked();
    }

    var Qn155 = document.getElementById('qbtn155');
    if(Qn155)
    {
        Qn155.addEventListener('click', changebioQnImg155, false);
    }
    function changebioQnImg155()
    {
        document.getElementById("qnNo").innerText="Q.55";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q55.png";
            qn = 154;
            checked();
    }

    var Qn156 = document.getElementById('qbtn156');
    if(Qn156)
    {
        Qn156.addEventListener('click', changebioQnImg156, false);
    }
    function changebioQnImg156()
    {
        document.getElementById("qnNo").innerText="Q.56";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q56.png";
            qn = 155;
            checked();
    }

    var Qn157 = document.getElementById('qbtn157');
    if(Qn157)
    {
        Qn157.addEventListener('click', changebioQnImg157, false);
    }
    function changebioQnImg157()
    {
        document.getElementById("qnNo").innerText="Q.57";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q57.png";
            qn = 156;
            checked();
    }

    var Qn158 = document.getElementById('qbtn158');
    if(Qn158)
    {
        Qn158.addEventListener('click', changebioQnImg158, false);
    }
    function changebioQnImg158()
    {
        document.getElementById("qnNo").innerText="Q.58";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q58.png";
            qn = 157;
            checked();
    }

    var Qn159 = document.getElementById('qbtn159');
    if(Qn159)
    {
        Qn159.addEventListener('click', changebioQnImg159, false);
    }
    function changebioQnImg159()
    {
        document.getElementById("qnNo").innerText="Q.59";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q59.png";
            qn = 158;
            checked();
    }

    var Qn160 = document.getElementById('qbtn160');
    if(Qn160)
    {
        Qn160.addEventListener('click', changebioQnImg160, false);
    }
    function changebioQnImg160()
    {
        document.getElementById("qnNo").innerText="Q.60";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q60.png";
            qn = 159;
            checked();
    }

    var Qn161 = document.getElementById('qbtn161');
    if(Qn161)
    {
        Qn161.addEventListener('click', changebioQnImg161, false);
    }
    function changebioQnImg161()
    {
        document.getElementById("qnNo").innerText="Q.61";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q61.png";
            qn = 160;
            checked();
    }

    var Qn162 = document.getElementById('qbtn162');
    if(Qn162)
    {
        Qn162.addEventListener('click', changebioQnImg162, false);
    }
    function changebioQnImg162()
    {
        document.getElementById("qnNo").innerText="Q.62";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q62.png";
            qn = 161;
            checked();
    }

    var Qn163 = document.getElementById('qbtn163');
    if(Qn163)
    {
        Qn163.addEventListener('click', changebioQnImg163, false);
    }
    function changebioQnImg163()
    {
        document.getElementById("qnNo").innerText="Q.63";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q63.png";
            qn = 162;
            checked();
    }

    var Qn164 = document.getElementById('qbtn164');
    if(Qn164)
    {
        Qn164.addEventListener('click', changebioQnImg164, false);
    }
    function changebioQnImg164()
    {
        document.getElementById("qnNo").innerText="Q.64";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q64.png";
            qn = 163;
            checked();
    }

    var Qn165 = document.getElementById('qbtn165');
    if(Qn165)
    {
        Qn165.addEventListener('click', changebioQnImg165, false);
    }
    function changebioQnImg165()
    {
        document.getElementById("qnNo").innerText="Q.65";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q65.png";
            qn = 164;
            checked();
    }

    var Qn166 = document.getElementById('qbtn166');
    if(Qn166)
    {
        Qn166.addEventListener('click', changebioQnImg166, false);
    }
    function changebioQnImg166()
    {
        document.getElementById("qnNo").innerText="Q.66";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q66.png";
            qn = 165;
            checked();
    }

    var Qn167 = document.getElementById('qbtn167');
    if(Qn167)
    {
        Qn167.addEventListener('click', changebioQnImg167, false);
    }
    function changebioQnImg167()
    {
        document.getElementById("qnNo").innerText="Q.67";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q67.png";
            qn = 166;
            checked();
    }

    var Qn168 = document.getElementById('qbtn168');
    if(Qn168)
    {
        Qn168.addEventListener('click', changebioQnImg168, false);
    }
    function changebioQnImg168()
    {
        document.getElementById("qnNo").innerText="Q.68";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q68.png";
            qn = 167;
            checked();
    }

    var Qn169 = document.getElementById('qbtn169');
    if(Qn169)
    {
        Qn169.addEventListener('click', changebioQnImg169, false);
    }
    function changebioQnImg169()
    {
        document.getElementById("qnNo").innerText="Q.69";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q69.png";
            qn = 168;
            checked();
    }

    var Qn170 = document.getElementById('qbtn170');
    if(Qn170)
    {
        Qn170.addEventListener('click', changebioQnImg170, false);
    }
    function changebioQnImg170()
    {
        document.getElementById("qnNo").innerText="Q.70";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q70.png";
            qn = 169;
            checked();
    }

    var Qn171 = document.getElementById('qbtn171');
    if(Qn171)
    {
        Qn171.addEventListener('click', changebioQnImg171, false);
    }
    function changebioQnImg171()
    {
        document.getElementById("qnNo").innerText="Q.71";
        var image = document.getElementById('qnImage');
        image.src = "./biology/Q71.png";
        qn = 170;
        checked();
    }

    var Qn172 = document.getElementById('qbtn172');
    if(Qn172)
    {
        Qn172.addEventListener('click', changebioQnImg172, false);
    }
    function changebioQnImg172()
    {
        document.getElementById("qnNo").innerText="Q.72";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q72.png";
            qn = 171;
            checked();
    }

    var Qn173 = document.getElementById('qbtn173');
    if(Qn173)
    {
        Qn173.addEventListener('click', changebioQnImg173, false);
    }
    function changebioQnImg173()
    {
        document.getElementById("qnNo").innerText="Q.73";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q73.png";
            qn = 172;
            checked();
    }

    var Qn174 = document.getElementById('qbtn174');
    if(Qn174)
    {
        Qn174.addEventListener('click', changebioQnImg174, false);
    }
    function changebioQnImg174()
    {
        document.getElementById("qnNo").innerText="Q.74";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q74.png";
            qn = 173;
            checked();
    }

    var Qn175 = document.getElementById('qbtn175');
    if(Qn175)
    {
        Qn175.addEventListener('click', changebioQnImg175, false);
    }
    function changebioQnImg175()
    {
        document.getElementById("qnNo").innerText="Q.75";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q75.png";
            qn = 174;
            checked();
    }

    var Qn176 = document.getElementById('qbtn176');
    if(Qn176)
    {
        Qn176.addEventListener('click', changebioQnImg176, false);
    }
    function changebioQnImg176()
    {
        document.getElementById("qnNo").innerText="Q.76";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q76.png";
            qn = 175;
            checked();
    }

    var Qn177 = document.getElementById('qbtn177');
    if(Qn177)
    {
        Qn177.addEventListener('click', changebioQnImg177, false);
    }
    function changebioQnImg177()
    {
        document.getElementById("qnNo").innerText="Q.77";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q77.png";
            qn = 176;
            checked();
    }

    var Qn178 = document.getElementById('qbtn178');
    if(Qn178)
    {
        Qn178.addEventListener('click', changebioQnImg178, false);
    }
    function changebioQnImg178()
    {
        document.getElementById("qnNo").innerText="Q.78";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q78.png";
            qn = 177;
            checked();
    }

    var Qn179 = document.getElementById('qbtn179');
    if(Qn179)
    {
        Qn179.addEventListener('click', changebioQnImg179, false);
    }
    function changebioQnImg179()
    {
        document.getElementById("qnNo").innerText="Q.79";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q79.png";
            qn = 178;
            checked();
    }

    var Qn180 = document.getElementById('qbtn180');
    if(Qn180)
    {
        Qn180.addEventListener('click', changebioQnImg180, false);
    }
    function changebioQnImg180()
    {
        document.getElementById("qnNo").innerText="Q.80";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q80.png";
            qn = 179;
            checked();
    }

    var Qn181 = document.getElementById('qbtn181');
    if(Qn181)
    {
        Qn181.addEventListener('click', changebioQnImg181, false);
    }
    function changebioQnImg181()
    {
        document.getElementById("qnNo").innerText="Q.81";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q81.png";
            qn = 180;
            checked();
    }

    var Qn182 = document.getElementById('qbtn182');
    if(Qn182)
    {
        Qn182.addEventListener('click', changebioQnImg182, false);
    }
    function changebioQnImg182()
    {
        document.getElementById("qnNo").innerText="Q.82";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q82.png";
            qn = 181;
            checked();
    }

    var Qn183 = document.getElementById('qbtn183');
    if(Qn183)
    {
        Qn183.addEventListener('click', changebioQnImg183, false);
    }
    function changebioQnImg183()
    {
        document.getElementById("qnNo").innerText="Q.83";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q83.png";
            qn = 182;
            checked();
    }

    var Qn184 = document.getElementById('qbtn184');
    if(Qn184)
    {
        Qn184.addEventListener('click', changebioQnImg184, false);
    }
    function changebioQnImg184()
    {
        document.getElementById("qnNo").innerText="Q.84";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q84.png";
            qn = 183;
            checked();
    }

    var Qn185 = document.getElementById('qbtn185');
    if(Qn185)
    {
        Qn185.addEventListener('click', changebioQnImg185, false);
    }
    function changebioQnImg185()
    {
        document.getElementById("qnNo").innerText="Q.85";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q85.png";
            qn = 184;
            checked();
    }

    var Qn186 = document.getElementById('qbtn186');
    if(Qn186)
    {
        Qn186.addEventListener('click', changebioQnImg186, false);
    }
    function changebioQnImg186()
    {
        document.getElementById("qnNo").innerText="Q.86";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q86.png";
            qn = 185;
            checked();
    }

    var Qn187 = document.getElementById('qbtn187');
    if(Qn187)
    {
        Qn187.addEventListener('click', changebioQnImg187, false);
    }
    function changebioQnImg187()
    {
        document.getElementById("qnNo").innerText="Q.87";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q87.png";
            qn = 186;
            checked();
    }

    var Qn188 = document.getElementById('qbtn188');
    if(Qn188)
    {
        Qn188.addEventListener('click', changebioQnImg188, false);
    }
    function changebioQnImg188()
    {
        document.getElementById("qnNo").innerText="Q.88";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q88.png";
            qn = 187;
            checked();
    }

    var Qn189 = document.getElementById('qbtn189');
    if(Qn189)
    {
        Qn189.addEventListener('click', changebioQnImg189, false);
    }
    function changebioQnImg189()
    {
        document.getElementById("qnNo").innerText="Q.89";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q89.png";
            qn = 188;
            checked();
    }

    var Qn190 = document.getElementById('qbtn190');
    if(Qn190)
    {
        Qn190.addEventListener('click', changebioQnImg190, false);
    }
    function changebioQnImg190()
    {
        document.getElementById("qnNo").innerText="Q.90";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q90.png";
            qn = 189;
            checked();
    }

    var Qn191 = document.getElementById('qbtn191');
    if(Qn191)
    {
        Qn191.addEventListener('click', changebioQnImg191, false);
    }
    function changebioQnImg191()
    {
        document.getElementById("qnNo").innerText="Q.91";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q91.png";
            qn = 190;
            checked();
    }

    var Qn192 = document.getElementById('qbtn192');
    if(Qn192)
    {
        Qn192.addEventListener('click', changebioQnImg192, false);
    }
    function changebioQnImg192()
    {
        document.getElementById("qnNo").innerText="Q.92";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q92.png";
            qn = 191;
            checked();
    }

    var Qn193 = document.getElementById('qbtn193');
    if(Qn193)
    {
        Qn193.addEventListener('click', changebioQnImg193, false);
    }
    function changebioQnImg193()
    {
        document.getElementById("qnNo").innerText="Q.93";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q93.png";
            qn = 192;
            checked();
    }

    var Qn194 = document.getElementById('qbtn194');
    if(Qn194)
    {
        Qn194.addEventListener('click', changebioQnImg194, false);
    }
    function changebioQnImg194()
    {
        document.getElementById("qnNo").innerText="Q.94";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q94.png";
            qn = 193;
            checked();
    }

    var Qn195 = document.getElementById('qbtn195');
    if(Qn195)
    {
        Qn195.addEventListener('click', changebioQnImg195, false);
    }
    function changebioQnImg195()
    {
        document.getElementById("qnNo").innerText="Q.95";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q95.png";
            qn = 194;
            checked();
    }

    var Qn196 = document.getElementById('qbtn196');
    if(Qn196)
    {
        Qn196.addEventListener('click', changebioQnImg196, false);
    }
    function changebioQnImg196()
    {
        document.getElementById("qnNo").innerText="Q.96";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q96.png";
            qn = 195;
            checked();
    }

    var Qn197 = document.getElementById('qbtn197');
    if(Qn197)
    {
        Qn197.addEventListener('click', changebioQnImg197, false);
    }
    function changebioQnImg197()
    {
        document.getElementById("qnNo").innerText="Q.97";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q97.png";
            qn = 196;
            checked();
    }

    var Qn198 = document.getElementById('qbtn198');
    if(Qn198)
    {
        Qn198.addEventListener('click', changebioQnImg198, false);
    }
    function changebioQnImg198()
    {
        document.getElementById("qnNo").innerText="Q.98";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q98.png";
            qn = 197;
            checked();
    }

    var Qn199 = document.getElementById('qbtn199');
    if(Qn199)
    {
        Qn199.addEventListener('click', changebioQnImg199, false);
    }
    function changebioQnImg199()
    {
        document.getElementById("qnNo").innerText="Q.99";
        var image = document.getElementById('qnImage');
            image.src = "./biology/Q99.png";
            qn = 198;
            checked();
    }

    var Qn200 = document.getElementById('qbtn200');
    if(Qn200)
    {
        Qn200.addEventListener('click', changebioQnImg200, false);
    }
    function changebioQnImg200()
    {
        document.getElementById("qnNo").innerTe5xt="Q.200";
        var image = document.getElementById('qnImage');
        image.src = "./biology/Q100.png";
            qn = 199;
            checked();
    }

            
        var saveqn = document.getElementById('SaveBtn');  
        if(saveqn)
        {
            saveqn.addEventListener('click', saveQN, false);
        }

        var saved  = false;
        var a=0;
        var clicked = 0;
        function saveQN()
        {
            if(clicked == 0)
            {
                myFunction();
            }
            else
            {
                if(clicked == 1)
                {
                    OptionA()
                    marked[a]=null
                    clicked=0
                }
                else if(clicked == 2)
                {
                    OptionB()
                    marked[a]=null
                    clicked=0
                }
                else if(clicked == 3)
                {
                    OptionC()
                    marked[a]=null
                    clicked=0
                }
                else if(clicked == 4)
                {
                    OptionD()
                    marked[a]=null
                    clicked=0
                }


                if ($("#qbtn1").hasClass("active"))
                {
                    document.getElementById('qbtn1').style.backgroundColor = 'green';
                    changephyQnImg2();
                    $("#qbtn1").removeClass("active");
                    $("#qbtn2").addClass("active");
                }

                else if ($("#qbtn2").hasClass("active"))
                {
                    document.getElementById('qbtn2').style.backgroundColor = 'green';
                    changephyQnImg3();
                    $("#qbtn2").removeClass("active");
                    $("#qbtn3").addClass("active");
                }

                else if ($("#qbtn3").hasClass("active"))
                {
                    document.getElementById('qbtn3').style.backgroundColor = 'green';
                    changephyQnImg4();
                    $("#qbtn3").removeClass("active");
                    $("#qbtn4").addClass("active");
                }

                else if ($("#qbtn4").hasClass("active"))
                {
                    document.getElementById('qbtn4').style.backgroundColor = 'green';
                    changephyQnImg5();
                    $("#qbtn4").removeClass("active");
                    $("#qbtn5").addClass("active");
                }

                else if ($("#qbtn5").hasClass("active"))
                {
                    document.getElementById('qbtn5').style.backgroundColor = 'green';
                    changephyQnImg6();
                    $("#qbtn5").removeClass("active");
                    $("#qbtn6").addClass("active");
                }

                else if ($("#qbtn6").hasClass("active"))
                {
                    document.getElementById('qbtn6').style.backgroundColor = 'green';
                    changephyQnImg7();
                    $("#qbtn6").removeClass("active");
                    $("#qbtn7").addClass("active");
                }

                else if ($("#qbtn7").hasClass("active"))
                {
                    document.getElementById('qbtn7').style.backgroundColor = 'green';
                    changephyQnImg8();
                    $("#qbtn7").removeClass("active");
                    $("#qbtn8").addClass("active");
                }

                else if ($("#qbtn8").hasClass("active"))
                {
                    document.getElementById('qbtn8').style.backgroundColor = 'green';
                    changephyQnImg9();
                    $("#qbtn8").removeClass("active");
                    $("#qbtn9").addClass("active");
                }

                else if ($("#qbtn9").hasClass("active"))
                {
                    document.getElementById('qbtn9').style.backgroundColor = 'green';
                    changephyQnImg10();
                    $("#qbtn9").removeClass("active");
                    $("#qbtn10").addClass("active");
                }

                else if ($("#qbtn10").hasClass("active"))
                {
                    document.getElementById('qbtn10').style.backgroundColor = 'green';
                    changephyQnImg11();
                    $("#qbtn10").removeClass("active");
                    $("#qbtn11").addClass("active");
                }

                else if ($("#qbtn11").hasClass("active"))
                {
                    document.getElementById('qbtn11').style.backgroundColor = 'green';
                    changephyQnImg12();
                    $("#qbtn11").removeClass("active");
                    $("#qbtn12").addClass("active");
                }

                else if ($("#qbtn12").hasClass("active"))
                {
                    document.getElementById('qbtn12').style.backgroundColor = 'green';
                    changephyQnImg13();
                    $("#qbtn12").removeClass("active");
                    $("#qbtn13").addClass("active");
                }

                else if ($("#qbtn13").hasClass("active"))
                {
                    document.getElementById('qbtn13').style.backgroundColor = 'green';
                    changephyQnImg14();
                    $("#qbtn13").removeClass("active");
                    $("#qbtn14").addClass("active");
                }

                else if ($("#qbtn14").hasClass("active"))
                {
                    document.getElementById('qbtn14').style.backgroundColor = 'green';
                    changephyQnImg15();
                    $("#qbtn14").removeClass("active");
                    $("#qbtn15").addClass("active");
                }

                else if ($("#qbtn15").hasClass("active"))
                {
                    document.getElementById('qbtn15').style.backgroundColor = 'green';
                    changephyQnImg16();
                    $("#qbtn15").removeClass("active");
                    $("#qbtn16").addClass("active");
                }

                else if ($("#qbtn16").hasClass("active"))
                {
                    document.getElementById('qbtn16').style.backgroundColor = 'green';
                    changephyQnImg17();
                    $("#qbtn16").removeClass("active");
                    $("#qbtn17").addClass("active");
                }

                else if ($("#qbtn17").hasClass("active"))
                {
                    document.getElementById('qbtn17').style.backgroundColor = 'green';
                    changephyQnImg18();
                    $("#qbtn17").removeClass("active");
                    $("#qbtn18").addClass("active");
                }

                else if ($("#qbtn18").hasClass("active"))
                {
                    document.getElementById('qbtn18').style.backgroundColor = 'green';
                    changephyQnImg19();
                    $("#qbtn18").removeClass("active");
                    $("#qbtn19").addClass("active");
                }

                else if ($("#qbtn19").hasClass("active"))
                {
                    document.getElementById('qbtn19').style.backgroundColor = 'green';
                    changephyQnImg20();
                    $("#qbtn19").removeClass("active");
                    $("#qbtn20").addClass("active");
                }

                else if ($("#qbtn20").hasClass("active"))
                {
                    document.getElementById('qbtn20').style.backgroundColor = 'green';
                    changephyQnImg21();
                    $("#qbtn20").removeClass("active");
                    $("#qbtn21").addClass("active");
                }

                else if ($("#qbtn21").hasClass("active"))
                {
                    document.getElementById('qbtn21').style.backgroundColor = 'green';
                    changephyQnImg22();
                    $("#qbtn21").removeClass("active");
                    $("#qbtn22").addClass("active");
                }

                else if ($("#qbtn22").hasClass("active"))
                {
                    document.getElementById('qbtn22').style.backgroundColor = 'green';
                    changephyQnImg23();
                    $("#qbtn22").removeClass("active");
                    $("#qbtn23").addClass("active");
                }

                else if ($("#qbtn23").hasClass("active"))
                {
                    document.getElementById('qbtn23').style.backgroundColor = 'green';
                    changephyQnImg24();
                    $("#qbtn23").removeClass("active");
                    $("#qbtn24").addClass("active");
                }

                else if ($("#qbtn24").hasClass("active"))
                {
                    document.getElementById('qbtn24').style.backgroundColor = 'green';
                    changephyQnImg25();
                    $("#qbtn24").removeClass("active");
                    $("#qbtn25").addClass("active");
                }

                else if ($("#qbtn25").hasClass("active"))
                {
                    document.getElementById('qbtn25').style.backgroundColor = 'green';
                    changephyQnImg26();
                    $("#qbtn25").removeClass("active");
                    $("#qbtn26").addClass("active");
                }

                else if ($("#qbtn26").hasClass("active"))
                {
                    document.getElementById('qbtn26').style.backgroundColor = 'green';
                    changephyQnImg27();
                    $("#qbtn26").removeClass("active");
                    $("#qbtn27").addClass("active");
                }

                else if ($("#qbtn27").hasClass("active"))
                {
                    document.getElementById('qbtn27').style.backgroundColor = 'green';
                    changephyQnImg28();
                    $("#qbtn27").removeClass("active");
                    $("#qbtn28").addClass("active");
                }

                else if ($("#qbtn28").hasClass("active"))
                {
                    document.getElementById('qbtn28').style.backgroundColor = 'green';
                    changephyQnImg29();
                    $("#qbtn28").removeClass("active");
                    $("#qbtn29").addClass("active");
                }

                else if ($("#qbtn29").hasClass("active"))
                {
                    document.getElementById('qbtn29').style.backgroundColor = 'green';
                    changephyQnImg30();
                    $("#qbtn29").removeClass("active");
                    $("#qbtn30").addClass("active");
                }

                else if ($("#qbtn30").hasClass("active"))
                {
                    document.getElementById('qbtn30').style.backgroundColor = 'green';
                    changephyQnImg31();
                    $("#qbtn30").removeClass("active");
                    $("#qbtn31").addClass("active");
                }

                else if ($("#qbtn31").hasClass("active"))
                {
                    document.getElementById('qbtn31').style.backgroundColor = 'green';
                    changephyQnImg32();
                    $("#qbtn31").removeClass("active");
                    $("#qbtn32").addClass("active");
                }

                else if ($("#qbtn32").hasClass("active"))
                {
                    document.getElementById('qbtn32').style.backgroundColor = 'green';
                    changephyQnImg33();
                    $("#qbtn32").removeClass("active");
                    $("#qbtn33").addClass("active");
                }

                else if ($("#qbtn33").hasClass("active"))
                {
                    document.getElementById('qbtn33').style.backgroundColor = 'green';
                    changephyQnImg34();
                    $("#qbtn33").removeClass("active");
                    $("#qbtn34").addClass("active");
                }

                else if ($("#qbtn34").hasClass("active"))
                {
                    document.getElementById('qbtn34').style.backgroundColor = 'green';
                    changephyQnImg35();
                    $("#qbtn34").removeClass("active");
                    $("#qbtn35").addClass("active");
                }

                else if ($("#qbtn35").hasClass("active"))
                {
                    document.getElementById('qbtn35').style.backgroundColor = 'green';
                    changephyQnImg36();
                    $("#qbtn35").removeClass("active");
                    $("#qbtn36").addClass("active");
                }

                else if ($("#qbtn36").hasClass("active"))
                {
                    document.getElementById('qbtn36').style.backgroundColor = 'green';
                    changephyQnImg37();
                    $("#qbtn36").removeClass("active");
                    $("#qbtn37").addClass("active");
                }

                else if ($("#qbtn37").hasClass("active"))
                {
                    document.getElementById('qbtn37').style.backgroundColor = 'green';
                    changephyQnImg38();
                    $("#qbtn37").removeClass("active");
                    $("#qbtn38").addClass("active");
                }

                else if ($("#qbtn38").hasClass("active"))
                {
                    document.getElementById('qbtn38').style.backgroundColor = 'green';
                    changephyQnImg39();
                    $("#qbtn38").removeClass("active");
                    $("#qbtn39").addClass("active");
                }

                else if ($("#qbtn39").hasClass("active"))
                {
                    document.getElementById('qbtn39').style.backgroundColor = 'green';
                    changephyQnImg40();
                    $("#qbtn39").removeClass("active");
                    $("#qbtn40").addClass("active");
                }

                else if ($("#qbtn40").hasClass("active"))
                {
                    document.getElementById('qbtn40').style.backgroundColor = 'green';
                    changephyQnImg41();
                    $("#qbtn40").removeClass("active");
                    $("#qbtn41").addClass("active");
                }

                else if ($("#qbtn41").hasClass("active"))
                {
                    document.getElementById('qbtn41').style.backgroundColor = 'green';
                    changephyQnImg42();
                    $("#qbtn41").removeClass("active");
                    $("#qbtn42").addClass("active");
                }

                else if ($("#qbtn42").hasClass("active"))
                {
                    document.getElementById('qbtn42').style.backgroundColor = 'green';
                    changephyQnImg43();
                    $("#qbtn42").removeClass("active");
                    $("#qbtn43").addClass("active");
                }

                else if ($("#qbtn43").hasClass("active"))
                {
                    document.getElementById('qbtn43').style.backgroundColor = 'green';
                    changephyQnImg44();
                    $("#qbtn43").removeClass("active");
                    $("#qbtn44").addClass("active");
                }

                else if ($("#qbtn44").hasClass("active"))
                {
                    document.getElementById('qbtn44').style.backgroundColor = 'green';
                    changephyQnImg45();
                    $("#qbtn44").removeClass("active");
                    $("#qbtn45").addClass("active");
                }

                else if ($("#qbtn45").hasClass("active"))
                {
                    document.getElementById('qbtn45').style.backgroundColor = 'green';
                    changephyQnImg46();
                    $("#qbtn45").removeClass("active");
                    $("#qbtn46").addClass("active");
                }

                else if ($("#qbtn46").hasClass("active"))
                {
                    document.getElementById('qbtn46').style.backgroundColor = 'green';
                    changephyQnImg47();
                    $("#qbtn46").removeClass("active");
                    $("#qbtn47").addClass("active");
                }

                else if ($("#qbtn47").hasClass("active"))
                {
                    document.getElementById('qbtn47').style.backgroundColor = 'green';
                    changephyQnImg48();
                    $("#qbtn47").removeClass("active");
                    $("#qbtn48").addClass("active");
                }

                else if ($("#qbtn48").hasClass("active"))
                {
                    document.getElementById('qbtn48').style.backgroundColor = 'green';
                    changephyQnImg49();
                    $("#qbtn48").removeClass("active");
                    $("#qbtn49").addClass("active");
                }

                else if ($("#qbtn49").hasClass("active"))
                {
                    document.getElementById('qbtn49').style.backgroundColor = 'green';
                    changephyQnImg50();
                    $("#qbtn49").removeClass("active");
                    $("#qbtn50").addClass("active");
                }

                else if ($("#qbtn50").hasClass("active"))
                {
                    document.getElementById('qbtn50').style.backgroundColor = 'green';
                    changechemQnImg51();
                    $("#qbtn50").removeClass("active");
                    $("#qbtn51").addClass("active");
                    $("#phypage").removeClass("active");
                    $("#chempage").addClass("active");
                    chempage();
                }

            /***********************************    chem    ************************************** */
                else if ($("#qbtn51").hasClass("active"))
                {
                    document.getElementById('qbtn51').style.backgroundColor = 'green';
                    changechemQnImg52();
                    $("#qbtn51").removeClass("active");
                    $("#qbtn52").addClass("active");
                }

                else if ($("#qbtn52").hasClass("active"))
                {
                    document.getElementById('qbtn52').style.backgroundColor = 'green';
                    changechemQnImg53();
                    $("#qbtn52").removeClass("active");
                    $("#qbtn53").addClass("active");
                }

                else if ($("#qbtn53").hasClass("active"))
                {
                    document.getElementById('qbtn53').style.backgroundColor = 'green';
                    changechemQnImg54();
                    $("#qbtn53").removeClass("active");
                    $("#qbtn54").addClass("active");
                }

                else if ($("#qbtn54").hasClass("active"))
                {
                    document.getElementById('qbtn54').style.backgroundColor = 'green';
                    changechemQnImg55();
                    $("#qbtn54").removeClass("active");
                    $("#qbtn55").addClass("active");
                }

                else if ($("#qbtn55").hasClass("active"))
                {
                    document.getElementById('qbtn55').style.backgroundColor = 'green';
                    changechemQnImg56();
                    $("#qbtn55").removeClass("active");
                    $("#qbtn56").addClass("active");
                }

                else if ($("#qbtn56").hasClass("active"))
                {
                    document.getElementById('qbtn56').style.backgroundColor = 'green';
                    changechemQnImg57();
                    $("#qbtn56").removeClass("active");
                    $("#qbtn57").addClass("active");
                }

                else if ($("#qbtn57").hasClass("active"))
                {
                    document.getElementById('qbtn57').style.backgroundColor = 'green';
                    changechemQnImg58();
                    $("#qbtn57").removeClass("active");
                    $("#qbtn58").addClass("active");
                }

                else if ($("#qbtn58").hasClass("active"))
                {
                    document.getElementById('qbtn58').style.backgroundColor = 'green';
                    changechemQnImg59();
                    $("#qbtn58").removeClass("active");
                    $("#qbtn59").addClass("active");
                }

                else if ($("#qbtn59").hasClass("active"))
                {
                    document.getElementById('qbtn59').style.backgroundColor = 'green';
                    changechemQnImg60();
                    $("#qbtn59").removeClass("active");
                    $("#qbtn60").addClass("active");
                }

                else if ($("#qbtn60").hasClass("active"))
                {
                    document.getElementById('qbtn60').style.backgroundColor = 'green';
                    changechemQnImg11();
                    $("#qbtn60").removeClass("active");
                    $("#qbtn61").addClass("active");
                }

                else if ($("#qbtn61").hasClass("active"))
                {
                    document.getElementById('qbtn61').style.backgroundColor = 'green';
                    changechemQnImg62();
                    $("#qbtn61").removeClass("active");
                    $("#qbtn62").addClass("active");
                }

                else if ($("#qbtn62").hasClass("active"))
                {
                    document.getElementById('qbtn62').style.backgroundColor = 'green';
                    changechemQnImg63();
                    $("#qbtn62").removeClass("active");
                    $("#qbtn63").addClass("active");
                }

                else if ($("#qbtn63").hasClass("active"))
                {
                    document.getElementById('qbtn63').style.backgroundColor = 'green';
                    changechemQnImg64();
                    $("#qbtn63").removeClass("active");
                    $("#qbtn64").addClass("active");
                }

                else if ($("#qbtn64").hasClass("active"))
                {
                    document.getElementById('qbtn64').style.backgroundColor = 'green';
                    changechemQnImg65();
                    $("#qbtn64").removeClass("active");
                    $("#qbtn65").addClass("active");
                }

                else if ($("#qbtn65").hasClass("active"))
                {
                    document.getElementById('qbtn65').style.backgroundColor = 'green';
                    changechemQnImg66();
                    $("#qbtn65").removeClass("active");
                    $("#qbtn66").addClass("active");
                }

                else if ($("#qbtn66").hasClass("active"))
                {
                    document.getElementById('qbtn66').style.backgroundColor = 'green';
                    changechemQnImg67();
                    $("#qbtn66").removeClass("active");
                    $("#qbtn67").addClass("active");
                }

                else if ($("#qbtn67").hasClass("active"))
                {
                    document.getElementById('qbtn67').style.backgroundColor = 'green';
                    changechemQnImg68();
                    $("#qbtn67").removeClass("active");
                    $("#qbtn68").addClass("active");
                }

                else if ($("#qbtn68").hasClass("active"))
                {
                    document.getElementById('qbtn68').style.backgroundColor = 'green';
                    changechemQnImg69();
                    $("#qbtn68").removeClass("active");
                    $("#qbtn69").addClass("active");
                }

                else if ($("#qbtn69").hasClass("active"))
                {
                    document.getElementById('qbtn69').style.backgroundColor = 'green';
                    changechemQnImg70();
                    $("#qbtn69").removeClass("active");
                    $("#qbtn70").addClass("active");
                }

                else if ($("#qbtn70").hasClass("active"))
                {
                    document.getElementById('qbtn70').style.backgroundColor = 'green';
                    changechemQnImg71();
                    $("#qbtn70").removeClass("active");
                    $("#qbtn71").addClass("active");
                }

                else if ($("#qbtn71").hasClass("active"))
                {
                    document.getElementById('qbtn71').style.backgroundColor = 'green';
                    changechemQnImg72();
                    $("#qbtn71").removeClass("active");
                    $("#qbtn72").addClass("active");
                }

                else if ($("#qbtn72").hasClass("active"))
                {
                    document.getElementById('qbtn72').style.backgroundColor = 'green';
                    changechemQnImg73();
                    $("#qbtn72").removeClass("active");
                    $("#qbtn73").addClass("active");
                }

                else if ($("#qbtn73").hasClass("active"))
                {
                    document.getElementById('qbtn73').style.backgroundColor = 'green';
                    changechemQnImg74();
                    $("#qbtn73").removeClass("active");
                    $("#qbtn74").addClass("active");
                }

                else if ($("#qbtn74").hasClass("active"))
                {
                    document.getElementById('qbtn74').style.backgroundColor = 'green';
                    changechemQnImg75();
                    $("#qbtn74").removeClass("active");
                    $("#qbtn75").addClass("active");
                }

                else if ($("#qbtn75").hasClass("active"))
                {
                    document.getElementById('qbtn75').style.backgroundColor = 'green';
                    changechemQnImg76();
                    $("#qbtn75").removeClass("active");
                    $("#qbtn76").addClass("active");
                }

                else if ($("#qbtn76").hasClass("active"))
                {
                    document.getElementById('qbtn76').style.backgroundColor = 'green';
                    changechemQnImg77();
                    $("#qbtn76").removeClass("active");
                    $("#qbtn77").addClass("active");
                }

                else if ($("#qbtn77").hasClass("active"))
                {
                    document.getElementById('qbtn77').style.backgroundColor = 'green';
                    changechemQnImg78();
                    $("#qbtn77").removeClass("active");
                    $("#qbtn78").addClass("active");
                }

                else if ($("#qbtn78").hasClass("active"))
                {
                    document.getElementById('qbtn78').style.backgroundColor = 'green';
                    changechemQnImg79();
                    $("#qbtn78").removeClass("active");
                    $("#qbtn79").addClass("active");
                }

                else if ($("#qbtn79").hasClass("active"))
                {
                    document.getElementById('qbtn79').style.backgroundColor = 'green';
                    changechemQnImg80();
                    $("#qbtn79").removeClass("active");
                    $("#qbtn80").addClass("active");
                }

                else if ($("#qbtn80").hasClass("active"))
                {
                    document.getElementById('qbtn80').style.backgroundColor = 'green';
                    changechemQnImg81();
                    $("#qbtn80").removeClass("active");
                    $("#qbtn81").addClass("active");
                }

                else if ($("#qbtn31").hasClass("active"))
                {
                    document.getElementById('qbtn81').style.backgroundColor = 'green';
                    changechemQnImg82();
                    $("#qbtn81").removeClass("active");
                    $("#qbtn82").addClass("active");
                }

                else if ($("#qbtn82").hasClass("active"))
                {
                    document.getElementById('qbtn82').style.backgroundColor = 'green';
                    changechemQnImg83();
                    $("#qbtn82").removeClass("active");
                    $("#qbtn83").addClass("active");
                }

                else if ($("#qbtn83").hasClass("active"))
                {
                    document.getElementById('qbtn83').style.backgroundColor = 'green';
                    changechemQnImg84();
                    $("#qbtn83").removeClass("active");
                    $("#qbtn84").addClass("active");
                }

                else if ($("#qbtn84").hasClass("active"))
                {
                    document.getElementById('qbtn84').style.backgroundColor = 'green';
                    changechemQnImg85();
                    $("#qbtn84").removeClass("active");
                    $("#qbtn85").addClass("active");
                }

                else if ($("#qbtn85").hasClass("active"))
                {
                    document.getElementById('qbtn85').style.backgroundColor = 'green';
                    changechemQnImg86();
                    $("#qbtn85").removeClass("active");
                    $("#qbtn86").addClass("active");
                }

                else if ($("#qbtn86").hasClass("active"))
                {
                    document.getElementById('qbtn86').style.backgroundColor = 'green';
                    changechemQnImg87();
                    $("#qbtn86").removeClass("active");
                    $("#qbtn87").addClass("active");
                }

                else if ($("#qbtn87").hasClass("active"))
                {
                    document.getElementById('qbtn87').style.backgroundColor = 'green';
                    changechemQnImg88();
                    $("#qbtn87").removeClass("active");
                    $("#qbtn88").addClass("active");
                }

                else if ($("#qbtn88").hasClass("active"))
                {
                    document.getElementById('qbtn88').style.backgroundColor = 'green';
                    changechemQnImg89();
                    $("#qbtn88").removeClass("active");
                    $("#qbtn89").addClass("active");
                }

                else if ($("#qbtn89").hasClass("active"))
                {
                    document.getElementById('qbtn89').style.backgroundColor = 'green';
                    changechemQnImg90();
                    $("#qbtn89").removeClass("active");
                    $("#qbtn90").addClass("active");
                }

                else if ($("#qbtn90").hasClass("active"))
                {
                    document.getElementById('qbtn90').style.backgroundColor = 'green';
                    changechemQnImg91();
                    $("#qbtn90").removeClass("active");
                    $("#qbtn91").addClass("active");
                }

                else if ($("#qbtn91").hasClass("active"))
                {
                    document.getElementById('qbtn91').style.backgroundColor = 'green';
                    changechemQnImg92();
                    $("#qbtn91").removeClass("active");
                    $("#qbtn92").addClass("active");
                }

                else if ($("#qbtn92").hasClass("active"))
                {
                    document.getElementById('qbtn92').style.backgroundColor = 'green';
                    changechemQnImg93();
                    $("#qbtn92").removeClass("active");
                    $("#qbtn93").addClass("active");
                }

                else if ($("#qbtn93").hasClass("active"))
                {
                    document.getElementById('qbtn93').style.backgroundColor = 'green';
                    changechemQnImg94();
                    $("#qbtn93").removeClass("active");
                    $("#qbtn94").addClass("active");
                }

                else if ($("#qbtn94").hasClass("active"))
                {
                    document.getElementById('qbtn94').style.backgroundColor = 'green';
                    changechemQnImg95();
                    $("#qbtn94").removeClass("active");
                    $("#qbtn95").addClass("active");
                }

                else if ($("#qbtn95").hasClass("active"))
                {
                    document.getElementById('qbtn95').style.backgroundColor = 'green';
                    changechemQnImg96();
                    $("#qbtn95").removeClass("active");
                    $("#qbtn96").addClass("active");
                }

                else if ($("#qbtn96").hasClass("active"))
                {
                    document.getElementById('qbtn96').style.backgroundColor = 'green';
                    changechemQnImg97();
                    $("#qbtn96").removeClass("active");
                    $("#qbtn97").addClass("active");
                }

                else if ($("#qbtn97").hasClass("active"))
                {
                    document.getElementById('qbtn97').style.backgroundColor = 'green';
                    changechemQnImg98();
                    $("#qbtn97").removeClass("active");
                    $("#qbtn98").addClass("active");
                }

                else if ($("#qbtn98").hasClass("active"))
                {
                    document.getElementById('qbtn98').style.backgroundColor = 'green';
                    changechemQnImg99();
                    $("#qbtn98").removeClass("active");
                    $("#qbtn99").addClass("active");
                }

                else if ($("#qbtn99").hasClass("active"))
                {
                    document.getElementById('qbtn99').style.backgroundColor = 'green';
                    changechemQnImg100();
                    $("#qbtn99").removeClass("active");
                    $("#qbtn100").addClass("active");
                }

                else if ($("#qbtn100").hasClass("active"))
                {
                    document.getElementById('qbtn100').style.backgroundColor = 'green';
                    changebioQnImg101();
                    $("#qbtn100").removeClass("active");
                    $("#qbtn101").addClass("active");
                    $("#chempage").removeClass("active");
                    $("#biompage").addClass("active");
                    biopage();
                }

            /*********************************    bio    ************************************* */
            else if ($("#qbtn101").hasClass("active"))
            {
                document.getElementById('qbtn101').style.backgroundColor = 'green';
                changephyQnImg102();
                $("#qbtn101").removeClass("active");
                $("#qbtn102").addClass("active");
            }

            else if ($("#qbtn102").hasClass("active"))
            {
                document.getElementById('qbtn102').style.backgroundColor = 'green';
                changephyQnImg103();
                $("#qbtn102").removeClass("active");
                $("#qbtn103").addClass("active");
            }

            else if ($("#qbtn103").hasClass("active"))
            {
                document.getElementById('qbtn103').style.backgroundColor = 'green';
                changephyQnImg104();
                $("#qbtn103").removeClass("active");
                $("#qbtn104").addClass("active");
            }

            else if ($("#qbtn104").hasClass("active"))
            {
                document.getElementById('qbtn104').style.backgroundColor = 'green';
                changephyQnImg105();
                $("#qbtn104").removeClass("active");
                $("#qbtn105").addClass("active");
            }

            else if ($("#qbtn105").hasClass("active"))
            {
                document.getElementById('qbtn105').style.backgroundColor = 'green';
                changephyQnImg106();
                $("#qbtn105").removeClass("active");
                $("#qbtn106").addClass("active");
            }

            else if ($("#qbtn106").hasClass("active"))
            {
                document.getElementById('qbtn106').style.backgroundColor = 'green';
                changephyQnImg107();
                $("#qbtn106").removeClass("active");
                $("#qbtn107").addClass("active");
            }

            else if ($("#qbtn107").hasClass("active"))
            {
                document.getElementById('qbtn107').style.backgroundColor = 'green';
                changephyQnImg108();
                $("#qbtn107").removeClass("active");
                $("#qbtn108").addClass("active");
            }

            else if ($("#qbtn108").hasClass("active"))
            {
                document.getElementById('qbtn108').style.backgroundColor = 'green';
                changephyQnImg109();
                $("#qbtn108").removeClass("active");
                $("#qbtn109").addClass("active");
            }

            else if ($("#qbtn109").hasClass("active"))
            {
                document.getElementById('qbtn109').style.backgroundColor = 'green';
                changephyQnImg110();
                $("#qbtn109").removeClass("active");
                $("#qbtn110").addClass("active");
            }

            else if ($("#qbtn110").hasClass("active"))
            {
                document.getElementById('qbtn110').style.backgroundColor = 'green';
                changephyQnImg111();
                $("#qbtn110").removeClass("active");
                $("#qbtn111").addClass("active");
            }

            else if ($("#qbtn111").hasClass("active"))
            {
                document.getElementById('qbtn111').style.backgroundColor = 'green';
                changebioQnImg112();
                $("#qbtn111").removeClass("active");
                $("#qbtn112").addClass("active");
            }

            else if ($("#qbtn112").hasClass("active"))
            {
                document.getElementById('qbtn112').style.backgroundColor = 'green';
                changebioQnImg113();
                $("#qbtn112").removeClass("active");
                $("#qbtn113").addClass("active");
            }

            else if ($("#qbtn113").hasClass("active"))
            {
                document.getElementById('qbtn113').style.backgroundColor = 'green';
                changebioQnImg114();
                $("#qbtn113").removeClass("active");
                $("#qbtn114").addClass("active");
            }

            else if ($("#qbtn114").hasClass("active"))
            {
                document.getElementById('qbtn114').style.backgroundColor = 'green';
                changebioQnImg115();
                $("#qbtn114").removeClass("active");
                $("#qbtn115").addClass("active");
            }

            else if ($("#qbtn115").hasClass("active"))
            {
                document.getElementById('qbtn115').style.backgroundColor = 'green';
                changebioQnImg116();
                $("#qbtn115").removeClass("active");
                $("#qbtn116").addClass("active");
            }

            else if ($("#qbtn116").hasClass("active"))
            {
                document.getElementById('qbtn116').style.backgroundColor = 'green';
                changebioQnImg117();
                $("#qbtn116").removeClass("active");
                $("#qbtn117").addClass("active");
            }

            else if ($("#qbtn117").hasClass("active"))
            {
                document.getElementById('qbtn117').style.backgroundColor = 'green';
                changebioQnImg118();
                $("#qbtn117").removeClass("active");
                $("#qbtn118").addClass("active");
            }

            else if ($("#qbtn118").hasClass("active"))
            {
                document.getElementById('qbtn118').style.backgroundColor = 'green';
                changebioQnImg119();
                $("#qbtn118").removeClass("active");
                $("#qbtn119").addClass("active");
            }

            else if ($("#qbtn119").hasClass("active"))
            {
                document.getElementById('qbtn119').style.backgroundColor = 'green';
                changebioQnImg120();
                $("#qbtn119").removeClass("active");
                $("#qbtn120").addClass("active");
            }

            else if ($("#qbtn120").hasClass("active"))
            {
                document.getElementById('qbtn120').style.backgroundColor = 'green';
                changebioQnImg121();
                $("#qbtn120").removeClass("active");
                $("#qbtn121").addClass("active");
            }

            else if ($("#qbtn121").hasClass("active"))
            {
                document.getElementById('qbtn121').style.backgroundColor = 'green';
                changebioQnImg122();
                $("#qbtn121").removeClass("active");
                $("#qbtn122").addClass("active");
            }

            else if ($("#qbtn122").hasClass("active"))
            {
                document.getElementById('qbtn122').style.backgroundColor = 'green';
                changebioQnImg123();
                $("#qbtn122").removeClass("active");
                $("#qbtn123").addClass("active");
            }

            else if ($("#qbtn123").hasClass("active"))
            {
                document.getElementById('qbtn123').style.backgroundColor = 'green';
                changebioQnImg124();
                $("#qbtn123").removeClass("active");
                $("#qbtn124").addClass("active");
            }

            else if ($("#qbtn124").hasClass("active"))
            {
                document.getElementById('qbtn124').style.backgroundColor = 'green';
                changebioQnImg125();
                $("#qbtn124").removeClass("active");
                $("#qbtn125").addClass("active");
            }

            else if ($("#qbtn125").hasClass("active"))
            {
                document.getElementById('qbtn125').style.backgroundColor = 'green';
                changebioQnImg126();
                $("#qbtn125").removeClass("active");
                $("#qbtn126").addClass("active");
            }

            else if ($("#qbtn126").hasClass("active"))
            {
                document.getElementById('qbtn126').style.backgroundColor = 'green';
                changebioQnImg127();
                $("#qbtn126").removeClass("active");
                $("#qbtn127").addClass("active");
            }

            else if ($("#qbtn127").hasClass("active"))
            {
                document.getElementById('qbtn127').style.backgroundColor = 'green';
                changebioQnImg128();
                $("#qbtn127").removeClass("active");
                $("#qbtn128").addClass("active");
            }

            else if ($("#qbtn128").hasClass("active"))
            {
                document.getElementById('qbtn128').style.backgroundColor = 'green';
                changebioQnImg129();
                $("#qbtn128").removeClass("active");
                $("#qbtn129").addClass("active");
            }

            else if ($("#qbtn129").hasClass("active"))
            {
                document.getElementById('qbtn129').style.backgroundColor = 'green';
                changebioQnImg130();
                $("#qbtn129").removeClass("active");
                $("#qbtn130").addClass("active");
            }

            else if ($("#qbtn130").hasClass("active"))
            {
                document.getElementById('qbtn130').style.backgroundColor = 'green';
                changebioQnImg131();
                $("#qbtn130").removeClass("active");
                $("#qbtn131").addClass("active");
            }

            else if ($("#qbtn131").hasClass("active"))
            {
                document.getElementById('qbtn131').style.backgroundColor = 'green';
                changebioQnImg132();
                $("#qbtn131").removeClass("active");
                $("#qbtn132").addClass("active");
            }

            else if ($("#qbtn132").hasClass("active"))
            {
                document.getElementById('qbtn132').style.backgroundColor = 'green';
                changebioQnImg133();
                $("#qbtn132").removeClass("active");
                $("#qbtn133").addClass("active");
            }

            else if ($("#qbtn133").hasClass("active"))
            {
                document.getElementById('qbtn133').style.backgroundColor = 'green';
                changebioQnImg134();
                $("#qbtn133").removeClass("active");
                $("#qbtn134").addClass("active");
            }

            else if ($("#qbtn134").hasClass("active"))
            {
                document.getElementById('qbtn134').style.backgroundColor = 'green';
                changebioQnImg135();
                $("#qbtn134").removeClass("active");
                $("#qbtn135").addClass("active");
            }

            else if ($("#qbtn135").hasClass("active"))
            {
                document.getElementById('qbtn135').style.backgroundColor = 'green';
                changebioQnImg136();
                $("#qbtn135").removeClass("active");
                $("#qbtn136").addClass("active");
            }

            else if ($("#qbtn136").hasClass("active"))
            {
                document.getElementById('qbtn136').style.backgroundColor = 'green';
                changebioQnImg137();
                $("#qbtn136").removeClass("active");
                $("#qbtn137").addClass("active");
            }

            else if ($("#qbtn137").hasClass("active"))
            {
                document.getElementById('qbtn137').style.backgroundColor = 'green';
                changebioQnImg138();
                $("#qbtn137").removeClass("active");
                $("#qbtn138").addClass("active");
            }

            else if ($("#qbtn138").hasClass("active"))
            {
                document.getElementById('qbtn138').style.backgroundColor = 'green';
                changebioQnImg139();
                $("#qbtn138").removeClass("active");
                $("#qbtn139").addClass("active");
            }

            else if ($("#qbtn139").hasClass("active"))
            {
                document.getElementById('qbtn139').style.backgroundColor = 'green';
                changebioQnImg140();
                $("#qbtn139").removeClass("active");
                $("#qbtn140").addClass("active");
            }

            else if ($("#qbtn140").hasClass("active"))
            {
                document.getElementById('qbtn140').style.backgroundColor = 'green';
                changebioQnImg141();
                $("#qbtn140").removeClass("active");
                $("#qbtn141").addClass("active");
            }

            else if ($("#qbtn141").hasClass("active"))
            {
                document.getElementById('qbtn141').style.backgroundColor = 'green';
                changebioQnImg142();
                $("#qbtn141").removeClass("active");
                $("#qbtn142").addClass("active");
            }

            else if ($("#qbtn142").hasClass("active"))
            {
                document.getElementById('qbtn142').style.backgroundColor = 'green';
                changebioQnImg143();
                $("#qbtn142").removeClass("active");
                $("#qbtn143").addClass("active");
            }

            else if ($("#qbtn143").hasClass("active"))
            {
                document.getElementById('qbtn143').style.backgroundColor = 'green';
                changebioQnImg144();
                $("#qbtn143").removeClass("active");
                $("#qbtn144").addClass("active");
            }

            else if ($("#qbtn144").hasClass("active"))
            {
                document.getElementById('qbtn144').style.backgroundColor = 'green';
                changebioQnImg145();
                $("#qbtn144").removeClass("active");
                $("#qbtn145").addClass("active");
            }

            else if ($("#qbtn145").hasClass("active"))
            {
                document.getElementById('qbtn145').style.backgroundColor = 'green';
                changebioQnImg146();
                $("#qbtn145").removeClass("active");
                $("#qbtn146").addClass("active");
            }

            else if ($("#qbtn146").hasClass("active"))
            {
                document.getElementById('qbtn146').style.backgroundColor = 'green';
                changebioQnImg147();
                $("#qbtn146").removeClass("active");
                $("#qbtn147").addClass("active");
            }

            else if ($("#qbtn147").hasClass("active"))
            {
                document.getElementById('qbtn147').style.backgroundColor = 'green';
                changebioQnImg148();
                $("#qbtn147").removeClass("active");
                $("#qbtn148").addClass("active");
            }

            else if ($("#qbtn148").hasClass("active"))
            {
                document.getElementById('qbtn148').style.backgroundColor = 'green';
                changebioQnImg149();
                $("#qbtn148").removeClass("active");
                $("#qbtn149").addClass("active");
            }

            else if ($("#qbtn149").hasClass("active"))
            {
                document.getElementById('qbtn149').style.backgroundColor = 'green';
                changebioQnImg150();
                $("#qbtn149").removeClass("active");
                $("#qbtn150").addClass("active");
            }

            else if ($("#qbtn150").hasClass("active"))
            {
                document.getElementById('qbtn150').style.backgroundColor = 'green';
                changebioQnImg151();
                $("#qbtn150").removeClass("active");
                $("#qbtn151").addClass("active");
            }

        /***********************************    chem    ************************************** */
            else if ($("#qbtn151").hasClass("active"))
            {
                document.getElementById('qbtn151').style.backgroundColor = 'green';
                changebioQnImg152();
                $("#qbtn151").removeClass("active");
                $("#qbtn152").addClass("active");
            }

            else if ($("#qbtn152").hasClass("active"))
            {
                document.getElementById('qbtn152').style.backgroundColor = 'green';
                changebioQnImg153();
                $("#qbtn152").removeClass("active");
                $("#qbtn153").addClass("active");
            }

            else if ($("#qbtn153").hasClass("active"))
            {
                document.getElementById('qbtn153').style.backgroundColor = 'green';
                changebioQnImg154();
                $("#qbtn153").removeClass("active");
                $("#qbtn154").addClass("active");
            }

            else if ($("#qbtn154").hasClass("active"))
            {
                document.getElementById('qbtn154').style.backgroundColor = 'green';
                changebioQnImg155();
                $("#qbtn154").removeClass("active");
                $("#qbtn155").addClass("active");
            }

            else if ($("#qbtn155").hasClass("active"))
            {
                document.getElementById('qbtn155').style.backgroundColor = 'green';
                changebioQnImg156();
                $("#qbtn155").removeClass("active");
                $("#qbtn156").addClass("active");
            }

            else if ($("#qbtn156").hasClass("active"))
            {
                document.getElementById('qbtn156').style.backgroundColor = 'green';
                changebioQnImg157();
                $("#qbtn156").removeClass("active");
                $("#qbtn157").addClass("active");
            }

            else if ($("#qbtn157").hasClass("active"))
            {
                document.getElementById('qbtn157').style.backgroundColor = 'green';
                changebioQnImg158();
                $("#qbtn157").removeClass("active");
                $("#qbtn158").addClass("active");
            }

            else if ($("#qbtn158").hasClass("active"))
            {
                document.getElementById('qbtn158').style.backgroundColor = 'green';
                changebioQnImg159();
                $("#qbtn158").removeClass("active");
                $("#qbtn159").addClass("active");
            }

            else if ($("#qbtn159").hasClass("active"))
            {
                document.getElementById('qbtn159').style.backgroundColor = 'green';
                changebioQnImg160();
                $("#qbtn159").removeClass("active");
                $("#qbtn160").addClass("active");
            }

            else if ($("#qbtn160").hasClass("active"))
            {
                document.getElementById('qbtn160').style.backgroundColor = 'green';
                changebioQnImg111();
                $("#qbtn160").removeClass("active");
                $("#qbtn161").addClass("active");
            }

            else if ($("#qbtn161").hasClass("active"))
            {
                document.getElementById('qbtn161').style.backgroundColor = 'green';
                changebioQnImg162();
                $("#qbtn161").removeClass("active");
                $("#qbtn162").addClass("active");
            }

            else if ($("#qbtn162").hasClass("active"))
            {
                document.getElementById('qbtn162').style.backgroundColor = 'green';
                changebioQnImg163();
                $("#qbtn162").removeClass("active");
                $("#qbtn163").addClass("active");
            }

            else if ($("#qbtn163").hasClass("active"))
            {
                document.getElementById('qbtn163').style.backgroundColor = 'green';
                changebioQnImg164();
                $("#qbtn163").removeClass("active");
                $("#qbtn164").addClass("active");
            }

            else if ($("#qbtn164").hasClass("active"))
            {
                document.getElementById('qbtn164').style.backgroundColor = 'green';
                changebioQnImg165();
                $("#qbtn164").removeClass("active");
                $("#qbtn165").addClass("active");
            }

            else if ($("#qbtn165").hasClass("active"))
            {
                document.getElementById('qbtn165').style.backgroundColor = 'green';
                changebioQnImg166();
                $("#qbtn165").removeClass("active");
                $("#qbtn166").addClass("active");
            }

            else if ($("#qbtn166").hasClass("active"))
            {
                document.getElementById('qbtn166').style.backgroundColor = 'green';
                changebioQnImg167();
                $("#qbtn166").removeClass("active");
                $("#qbtn167").addClass("active");
            }

            else if ($("#qbtn167").hasClass("active"))
            {
                document.getElementById('qbtn167').style.backgroundColor = 'green';
                changebioQnImg168();
                $("#qbtn167").removeClass("active");
                $("#qbtn168").addClass("active");
            }

            else if ($("#qbtn168").hasClass("active"))
            {
                document.getElementById('qbtn168').style.backgroundColor = 'green';
                changebioQnImg169();
                $("#qbtn168").removeClass("active");
                $("#qbtn169").addClass("active");
            }

            else if ($("#qbtn169").hasClass("active"))
            {
                document.getElementById('qbtn169').style.backgroundColor = 'green';
                changebioQnImg170();
                $("#qbtn169").removeClass("active");
                $("#qbtn170").addClass("active");
            }

            else if ($("#qbtn170").hasClass("active"))
            {
                document.getElementById('qbtn170').style.backgroundColor = 'green';
                changebioQnImg171();
                $("#qbtn170").removeClass("active");
                $("#qbtn171").addClass("active");
            }

            else if ($("#qbtn171").hasClass("active"))
            {
                document.getElementById('qbtn171').style.backgroundColor = 'green';
                changebioQnImg172();
                $("#qbtn171").removeClass("active");
                $("#qbtn172").addClass("active");
            }

            else if ($("#qbtn172").hasClass("active"))
            {
                document.getElementById('qbtn172').style.backgroundColor = 'green';
                changebioQnImg173();
                $("#qbtn172").removeClass("active");
                $("#qbtn173").addClass("active");
            }

            else if ($("#qbtn173").hasClass("active"))
            {
                document.getElementById('qbtn173').style.backgroundColor = 'green';
                changebioQnImg174();
                $("#qbtn173").removeClass("active");
                $("#qbtn174").addClass("active");
            }

            else if ($("#qbtn174").hasClass("active"))
            {
                document.getElementById('qbtn174').style.backgroundColor = 'green';
                changebioQnImg175();
                $("#qbtn174").removeClass("active");
                $("#qbtn175").addClass("active");
            }

            else if ($("#qbtn175").hasClass("active"))
            {
                document.getElementById('qbtn175').style.backgroundColor = 'green';
                changebioQnImg176();
                $("#qbtn175").removeClass("active");
                $("#qbtn176").addClass("active");
            }

            else if ($("#qbtn176").hasClass("active"))
            {
                document.getElementById('qbtn176').style.backgroundColor = 'green';
                changebioQnImg177();
                $("#qbtn176").removeClass("active");
                $("#qbtn177").addClass("active");
            }

            else if ($("#qbtn177").hasClass("active"))
            {
                document.getElementById('qbtn177').style.backgroundColor = 'green';
                changebioQnImg178();
                $("#qbtn177").removeClass("active");
                $("#qbtn178").addClass("active");
            }

            else if ($("#qbtn178").hasClass("active"))
            {
                document.getElementById('qbtn178').style.backgroundColor = 'green';
                changebioQnImg179();
                $("#qbtn178").removeClass("active");
                $("#qbtn179").addClass("active");
            }

            else if ($("#qbtn179").hasClass("active"))
            {
                document.getElementById('qbtn179').style.backgroundColor = 'green';
                changebioQnImg180();
                $("#qbtn179").removeClass("active");
                $("#qbtn180").addClass("active");
            }

            else if ($("#qbtn180").hasClass("active"))
            {
                document.getElementById('qbtn180').style.backgroundColor = 'green';
                changebioQnImg181();
                $("#qbtn180").removeClass("active");
                $("#qbtn181").addClass("active");
            }

            else if ($("#qbtn131").hasClass("active"))
            {
                document.getElementById('qbtn181').style.backgroundColor = 'green';
                changebioQnImg182();
                $("#qbtn181").removeClass("active");
                $("#qbtn182").addClass("active");
            }

            else if ($("#qbtn182").hasClass("active"))
            {
                document.getElementById('qbtn182').style.backgroundColor = 'green';
                changebioQnImg183();
                $("#qbtn182").removeClass("active");
                $("#qbtn183").addClass("active");
            }

            else if ($("#qbtn183").hasClass("active"))
            {
                document.getElementById('qbtn183').style.backgroundColor = 'green';
                changebioQnImg184();
                $("#qbtn183").removeClass("active");
                $("#qbtn184").addClass("active");
            }

            else if ($("#qbtn184").hasClass("active"))
            {
                document.getElementById('qbtn184').style.backgroundColor = 'green';
                changebioQnImg185();
                $("#qbtn184").removeClass("active");
                $("#qbtn185").addClass("active");
            }

            else if ($("#qbtn185").hasClass("active"))
            {
                document.getElementById('qbtn185').style.backgroundColor = 'green';
                changebioQnImg186();
                $("#qbtn185").removeClass("active");
                $("#qbtn186").addClass("active");
            }

            else if ($("#qbtn186").hasClass("active"))
            {
                document.getElementById('qbtn186').style.backgroundColor = 'green';
                changebioQnImg187();
                $("#qbtn186").removeClass("active");
                $("#qbtn187").addClass("active");
            }

            else if ($("#qbtn187").hasClass("active"))
            {
                document.getElementById('qbtn187').style.backgroundColor = 'green';
                changebioQnImg188();
                $("#qbtn187").removeClass("active");
                $("#qbtn188").addClass("active");
            }

            else if ($("#qbtn188").hasClass("active"))
            {
                document.getElementById('qbtn188').style.backgroundColor = 'green';
                changebioQnImg189();
                $("#qbtn188").removeClass("active");
                $("#qbtn189").addClass("active");
            }

            else if ($("#qbtn189").hasClass("active"))
            {
                document.getElementById('qbtn189').style.backgroundColor = 'green';
                changebioQnImg190();
                $("#qbtn189").removeClass("active");
                $("#qbtn190").addClass("active");
            }

            else if ($("#qbtn190").hasClass("active"))
            {
                document.getElementById('qbtn190').style.backgroundColor = 'green';
                changebioQnImg191();
                $("#qbtn190").removeClass("active");
                $("#qbtn191").addClass("active");
            }

            else if ($("#qbtn191").hasClass("active"))
            {
                document.getElementById('qbtn191').style.backgroundColor = 'green';
                changebioQnImg192();
                $("#qbtn191").removeClass("active");
                $("#qbtn192").addClass("active");
            }

            else if ($("#qbtn192").hasClass("active"))
            {
                document.getElementById('qbtn192').style.backgroundColor = 'green';
                changebioQnImg193();
                $("#qbtn192").removeClass("active");
                $("#qbtn193").addClass("active");
            }

            else if ($("#qbtn193").hasClass("active"))
            {
                document.getElementById('qbtn193').style.backgroundColor = 'green';
                changebioQnImg194();
                $("#qbtn193").removeClass("active");
                $("#qbtn194").addClass("active");
            }

            else if ($("#qbtn194").hasClass("active"))
            {
                document.getElementById('qbtn194').style.backgroundColor = 'green';
                changebioQnImg195();
                $("#qbtn194").removeClass("active");
                $("#qbtn195").addClass("active");
            }

            else if ($("#qbtn195").hasClass("active"))
            {
                document.getElementById('qbtn195').style.backgroundColor = 'green';
                changebioQnImg196();
                $("#qbtn195").removeClass("active");
                $("#qbtn196").addClass("active");
            }

            else if ($("#qbtn196").hasClass("active"))
            {
                document.getElementById('qbtn196').style.backgroundColor = 'green';
                changebioQnImg197();
                $("#qbtn196").removeClass("active");
                $("#qbtn197").addClass("active");
            }

            else if ($("#qbtn197").hasClass("active"))
            {
                document.getElementById('qbtn197').style.backgroundColor = 'green';
                changebioQnImg198();
                $("#qbtn197").removeClass("active");
                $("#qbtn198").addClass("active");
            }

            else if ($("#qbtn198").hasClass("active"))
            {
                document.getElementById('qbtn198').style.backgroundColor = 'green';
                changebioQnImg199();
                $("#qbtn198").removeClass("active");
                $("#qbtn199").addClass("active");
            }

            else if ($("#qbtn199").hasClass("active"))
            {
                document.getElementById('qbtn199').style.backgroundColor = 'green';
                changebioQnImg200();
                $("#qbtn199").removeClass("active");
                $("#qbtn200").addClass("active");
            }

            else if ($("#qbtn200").hasClass("active"))
            {
                document.getElementById('qbtn100').style.backgroundColor = 'green';
            //changemathQnImg201();
                $("#qbtn200").removeClass("active");
                //$("#qbtn201").addClass("active");
                $("#biopage").removeClass("active");
                $("#phypage").addClass("active");
                phypage();
            }
        }
    }


    var saveqn = document.getElementById('MarkBtn');
    if(saveqn)
    {
        saveqn.addEventListener('click', markQN, false);
    }

    function markQN()
    {

        if(clicked == 0)
        {
            myFunction1();
        }
        else
        {
            if(clicked == 1)
            {
                OptionA()
                marked[a]=answered[a];
                answered[a]= null;
                clicked=0
            }
            else if(clicked == 2)
            {
                OptionB()
                marked[a]=answered[a];
                answered[a]= null;
                clicked=0
            }
            else if(clicked == 3)
            {
                OptionC()
                marked[a]=answered[a];
                answered[a]= null;
                clicked=0
            }
            else if(clicked == 4)
            {
                OptionD()
                marked[a]=answered[a];
                answered[a]= null;
                clicked=0
            }

            if ($("#qbtn1").hasClass("active"))
            {
                document.getElementById('qbtn1').style.backgroundColor = 'Yellow';
                changephyQnImg2();
                $("#qbtn1").removeClass("active");
                $("#qbtn2").addClass("active");
            }

            else if ($("#qbtn2").hasClass("active"))
            {
                document.getElementById('qbtn2').style.backgroundColor = 'Yellow';
                changephyQnImg3();
                $("#qbtn2").removeClass("active");
                $("#qbtn3").addClass("active");
            }

            else if ($("#qbtn3").hasClass("active"))
            {
                document.getElementById('qbtn3').style.backgroundColor = 'Yellow';
                changephyQnImg4();
                $("#qbtn3").removeClass("active");
                $("#qbtn4").addClass("active");
            }

            else if ($("#qbtn4").hasClass("active"))
            {
                document.getElementById('qbtn4').style.backgroundColor = 'Yellow';
                changephyQnImg5();
                $("#qbtn4").removeClass("active");
                $("#qbtn5").addClass("active");
            }

            else if ($("#qbtn5").hasClass("active"))
            {
                document.getElementById('qbtn5').style.backgroundColor = 'Yellow';
                changephyQnImg6();
                $("#qbtn5").removeClass("active");
                $("#qbtn6").addClass("active");
            }

            else if ($("#qbtn6").hasClass("active"))
            {
                document.getElementById('qbtn6').style.backgroundColor = 'Yellow';
                changephyQnImg7();
                $("#qbtn6").removeClass("active");
                $("#qbtn7").addClass("active");
            }

            else if ($("#qbtn7").hasClass("active"))
            {
                document.getElementById('qbtn7').style.backgroundColor = 'Yellow';
                changephyQnImg8();
                $("#qbtn7").removeClass("active");
                $("#qbtn8").addClass("active");
            }

            else if ($("#qbtn8").hasClass("active"))
            {
                document.getElementById('qbtn8').style.backgroundColor = 'Yellow';
                changephyQnImg9();
                $("#qbtn8").removeClass("active");
                $("#qbtn9").addClass("active");
            }

            else if ($("#qbtn9").hasClass("active"))
            {
                document.getElementById('qbtn9').style.backgroundColor = 'Yellow';
                changephyQnImg10();
                $("#qbtn9").removeClass("active");
                $("#qbtn10").addClass("active");
            }

            else if ($("#qbtn10").hasClass("active"))
            {
                document.getElementById('qbtn10').style.backgroundColor = 'Yellow';
                changephyQnImg11();
                $("#qbtn10").removeClass("active");
                $("#qbtn11").addClass("active");
            }

            else if ($("#qbtn11").hasClass("active"))
            {
                document.getElementById('qbtn11').style.backgroundColor = 'Yellow';
                changephyQnImg12();
                $("#qbtn11").removeClass("active");
                $("#qbtn12").addClass("active");
            }

            else if ($("#qbtn12").hasClass("active"))
            {
                document.getElementById('qbtn12').style.backgroundColor = 'Yellow';
                changephyQnImg13();
                $("#qbtn12").removeClass("active");
                $("#qbtn13").addClass("active");
            }

            else if ($("#qbtn13").hasClass("active"))
            {
                document.getElementById('qbtn13').style.backgroundColor = 'Yellow';
                changephyQnImg14();
                $("#qbtn13").removeClass("active");
                $("#qbtn14").addClass("active");
            }

            else if ($("#qbtn14").hasClass("active"))
            {
                document.getElementById('qbtn14').style.backgroundColor = 'Yellow';
                changephyQnImg15();
                $("#qbtn14").removeClass("active");
                $("#qbtn15").addClass("active");
            }

            else if ($("#qbtn15").hasClass("active"))
            {
                document.getElementById('qbtn15').style.backgroundColor = 'Yellow';
                changephyQnImg16();
                $("#qbtn15").removeClass("active");
                $("#qbtn16").addClass("active");
            }

            else if ($("#qbtn16").hasClass("active"))
            {
                document.getElementById('qbtn16').style.backgroundColor = 'Yellow';
                changephyQnImg17();
                $("#qbtn16").removeClass("active");
                $("#qbtn17").addClass("active");
            }

            else if ($("#qbtn17").hasClass("active"))
            {
                document.getElementById('qbtn17').style.backgroundColor = 'Yellow';
                changephyQnImg18();
                $("#qbtn17").removeClass("active");
                $("#qbtn18").addClass("active");
            }

            else if ($("#qbtn18").hasClass("active"))
            {
                document.getElementById('qbtn18').style.backgroundColor = 'Yellow';
                changephyQnImg19();
                $("#qbtn18").removeClass("active");
                $("#qbtn19").addClass("active");
            }

            else if ($("#qbtn19").hasClass("active"))
            {
                document.getElementById('qbtn19').style.backgroundColor = 'Yellow';
                changephyQnImg20();
                $("#qbtn19").removeClass("active");
                $("#qbtn20").addClass("active");
            }

            else if ($("#qbtn20").hasClass("active"))
            {
                document.getElementById('qbtn20').style.backgroundColor = 'Yellow';
                changephyQnImg21();
                $("#qbtn20").removeClass("active");
                $("#qbtn21").addClass("active");
            }

            else if ($("#qbtn21").hasClass("active"))
            {
                document.getElementById('qbtn21').style.backgroundColor = 'Yellow';
                changephyQnImg22();
                $("#qbtn21").removeClass("active");
                $("#qbtn22").addClass("active");
            }

            else if ($("#qbtn22").hasClass("active"))
            {
                document.getElementById('qbtn22').style.backgroundColor = 'Yellow';
                changephyQnImg23();
                $("#qbtn22").removeClass("active");
                $("#qbtn23").addClass("active");
            }

            else if ($("#qbtn23").hasClass("active"))
            {
                document.getElementById('qbtn23').style.backgroundColor = 'Yellow';
                changephyQnImg24();
                $("#qbtn23").removeClass("active");
                $("#qbtn24").addClass("active");
            }

            else if ($("#qbtn24").hasClass("active"))
            {
                document.getElementById('qbtn24').style.backgroundColor = 'Yellow';
                changephyQnImg25();
                $("#qbtn24").removeClass("active");
                $("#qbtn25").addClass("active");
            }

            else if ($("#qbtn25").hasClass("active"))
            {
                document.getElementById('qbtn25').style.backgroundColor = 'Yellow';
                changephyQnImg26();
                $("#qbtn25").removeClass("active");
                $("#qbtn26").addClass("active");
            }

            else if ($("#qbtn26").hasClass("active"))
            {
                document.getElementById('qbtn26').style.backgroundColor = 'Yellow';
                changephyQnImg27();
                $("#qbtn26").removeClass("active");
                $("#qbtn27").addClass("active");
            }

            else if ($("#qbtn27").hasClass("active"))
            {
                document.getElementById('qbtn27').style.backgroundColor = 'Yellow';
                changephyQnImg28();
                $("#qbtn27").removeClass("active");
                $("#qbtn28").addClass("active");
            }

            else if ($("#qbtn28").hasClass("active"))
            {
                document.getElementById('qbtn28').style.backgroundColor = 'Yellow';
                changephyQnImg29();
                $("#qbtn28").removeClass("active");
                $("#qbtn29").addClass("active");
            }

            else if ($("#qbtn29").hasClass("active"))
            {
                document.getElementById('qbtn29').style.backgroundColor = 'Yellow';
                changephyQnImg30();
                $("#qbtn29").removeClass("active");
                $("#qbtn30").addClass("active");
            }

            else if ($("#qbtn30").hasClass("active"))
            {
                document.getElementById('qbtn30').style.backgroundColor = 'Yellow';
                changephyQnImg11();
                $("#qbtn30").removeClass("active");
                $("#qbtn31").addClass("active");
            }

            else if ($("#qbtn31").hasClass("active"))
            {
                document.getElementById('qbtn31').style.backgroundColor = 'Yellow';
                changephyQnImg2();
                $("#qbtn31").removeClass("active");
                $("#qbtn32").addClass("active");
            }

            else if ($("#qbtn32").hasClass("active"))
            {
                document.getElementById('qbtn32').style.backgroundColor = 'Yellow';
                changephyQnImg33();
                $("#qbtn32").removeClass("active");
                $("#qbtn33").addClass("active");
            }

            else if ($("#qbtn33").hasClass("active"))
            {
                document.getElementById('qbtn33').style.backgroundColor = 'Yellow';
                changephyQnImg34();
                $("#qbtn33").removeClass("active");
                $("#qbtn34").addClass("active");
            }

            else if ($("#qbtn34").hasClass("active"))
            {
                document.getElementById('qbtn34').style.backgroundColor = 'Yellow';
                changephyQnImg35();
                $("#qbtn34").removeClass("active");
                $("#qbtn35").addClass("active");
            }

            else if ($("#qbtn35").hasClass("active"))
            {
                document.getElementById('qbtn35').style.backgroundColor = 'Yellow';
                changephyQnImg36();
                $("#qbtn35").removeClass("active");
                $("#qbtn36").addClass("active");
            }

            else if ($("#qbtn36").hasClass("active"))
            {
                document.getElementById('qbtn36').style.backgroundColor = 'Yellow';
                changephyQnImg37();
                $("#qbtn36").removeClass("active");
                $("#qbtn37").addClass("active");
            }

            else if ($("#qbtn37").hasClass("active"))
            {
                document.getElementById('qbtn37').style.backgroundColor = 'Yellow';
                changephyQnImg38();
                $("#qbtn37").removeClass("active");
                $("#qbtn38").addClass("active");
            }

            else if ($("#qbtn38").hasClass("active"))
            {
                document.getElementById('qbtn38').style.backgroundColor = 'Yellow';
                changephyQnImg39();
                $("#qbtn38").removeClass("active");
                $("#qbtn39").addClass("active");
            }

            else if ($("#qbtn39").hasClass("active"))
            {
                document.getElementById('qbtn39').style.backgroundColor = 'Yellow';
                changephyQnImg40();
                $("#qbtn39").removeClass("active");
                $("#qbtn40").addClass("active");
            }

            else if ($("#qbtn40").hasClass("active"))
            {
                document.getElementById('qbtn40').style.backgroundColor = 'Yellow';
                changephyQnImg41();
                $("#qbtn40").removeClass("active");
                $("#qbtn41").addClass("active");
            }

            else if ($("#qbtn41").hasClass("active"))
            {
                document.getElementById('qbtn41').style.backgroundColor = 'Yellow';
                changephyQnImg42();
                $("#qbtn41").removeClass("active");
                $("#qbtn42").addClass("active");
            }

            else if ($("#qbtn42").hasClass("active"))
            {
                document.getElementById('qbtn42').style.backgroundColor = 'Yellow';
                changephyQnImg43();
                $("#qbtn42").removeClass("active");
                $("#qbtn43").addClass("active");
            }

            else if ($("#qbtn43").hasClass("active"))
            {
                document.getElementById('qbtn43').style.backgroundColor = 'Yellow';
                changephyQnImg44();
                $("#qbtn43").removeClass("active");
                $("#qbtn44").addClass("active");
            }

            else if ($("#qbtn44").hasClass("active"))
            {
                document.getElementById('qbtn44').style.backgroundColor = 'Yellow';
                changephyQnImg45();
                $("#qbtn44").removeClass("active");
                $("#qbtn45").addClass("active");
            }

            else if ($("#qbtn45").hasClass("active"))
            {
                document.getElementById('qbtn45').style.backgroundColor = 'Yellow';
                changephyQnImg46();
                $("#qbtn45").removeClass("active");
                $("#qbtn46").addClass("active");
            }

            else if ($("#qbtn46").hasClass("active"))
            {
                document.getElementById('qbtn46').style.backgroundColor = 'Yellow';
                changephyQnImg47();
                $("#qbtn46").removeClass("active");
                $("#qbtn47").addClass("active");
            }

            else if ($("#qbtn47").hasClass("active"))
            {
                document.getElementById('qbtn47').style.backgroundColor = 'Yellow';
                changephyQnImg48();
                $("#qbtn47").removeClass("active");
                $("#qbtn48").addClass("active");
            }

            else if ($("#qbtn48").hasClass("active"))
            {
                document.getElementById('qbtn48').style.backgroundColor = 'Yellow';
                changephyQnImg49();
                $("#qbtn48").removeClass("active");
                $("#qbtn49").addClass("active");
            }

            else if ($("#qbtn49").hasClass("active"))
            {
                document.getElementById('qbtn49').style.backgroundColor = 'Yellow';
                changephyQnImg50();
                $("#qbtn49").removeClass("active");
                $("#qbtn50").addClass("active");
            }

            else if ($("#qbtn50").hasClass("active"))
            {
                document.getElementById('qbtn50').style.backgroundColor = 'Yellow';
                changechemQnImg51();
                $("#qbtn10").removeClass("active");
                $("#qbtn51").addClass("active");
                $("#phypage").removeClass("active");
                $("#chempage").addClass("active");
                chempage();
            }

        /***********************************    chem    ************************************** */
            else if ($("#qbtn51").hasClass("active"))
            {
                document.getElementById('qbtn51').style.backgroundColor = 'Yellow';
                changechemQnImg52();
                $("#qbtn51").removeClass("active");
                $("#qbtn52").addClass("active");
            }

            else if ($("#qbtn52").hasClass("active"))
            {
                document.getElementById('qbtn52').style.backgroundColor = 'Yellow';
                changechemQnImg53();
                $("#qbtn52").removeClass("active");
                $("#qbtn53").addClass("active");
            }

            else if ($("#qbtn53").hasClass("active"))
            {
                document.getElementById('qbtn53').style.backgroundColor = 'Yellow';
                changechemQnImg54();
                $("#qbtn53").removeClass("active");
                $("#qbtn54").addClass("active");
            }

            else if ($("#qbtn54").hasClass("active"))
            {
                document.getElementById('qbtn54').style.backgroundColor = 'Yellow';
                changechemQnImg55();
                $("#qbtn54").removeClass("active");
                $("#qbtn55").addClass("active");
            }

            else if ($("#qbtn55").hasClass("active"))
            {
                document.getElementById('qbtn55').style.backgroundColor = 'Yellow';
                changechemQnImg56();
                $("#qbtn55").removeClass("active");
                $("#qbtn56").addClass("active");
            }

            else if ($("#qbtn56").hasClass("active"))
            {
                document.getElementById('qbtn56').style.backgroundColor = 'Yellow';
                changechemQnImg57();
                $("#qbtn56").removeClass("active");
                $("#qbtn57").addClass("active");
            }

            else if ($("#qbtn57").hasClass("active"))
            {
                document.getElementById('qbtn57').style.backgroundColor = 'Yellow';
                changechemQnImg58();
                $("#qbtn57").removeClass("active");
                $("#qbtn58").addClass("active");
            }

            else if ($("#qbtn58").hasClass("active"))
            {
                document.getElementById('qbtn58').style.backgroundColor = 'Yellow';
                changechemQnImg59();
                $("#qbtn58").removeClass("active");
                $("#qbtn59").addClass("active");
            }

            else if ($("#qbtn59").hasClass("active"))
            {
                document.getElementById('qbtn59').style.backgroundColor = 'Yellow';
                changechemQnImg60();
                $("#qbtn59").removeClass("active");
                $("#qbtn60").addClass("active");
            }

            else if ($("#qbtn60").hasClass("active"))
            {
                document.getElementById('qbtn60').style.backgroundColor = 'Yellow';
                changechemQnImg11();
                $("#qbtn60").removeClass("active");
                $("#qbtn61").addClass("active");
            }

            else if ($("#qbtn61").hasClass("active"))
            {
                document.getElementById('qbtn61').style.backgroundColor = 'Yellow';
                changechemQnImg62();
                $("#qbtn61").removeClass("active");
                $("#qbtn62").addClass("active");
            }

            else if ($("#qbtn62").hasClass("active"))
            {
                document.getElementById('qbtn62').style.backgroundColor = 'Yellow';
                changechemQnImg63();
                $("#qbtn62").removeClass("active");
                $("#qbtn63").addClass("active");
            }

            else if ($("#qbtn63").hasClass("active"))
            {
                document.getElementById('qbtn63').style.backgroundColor = 'Yellow';
                changechemQnImg64();
                $("#qbtn63").removeClass("active");
                $("#qbtn64").addClass("active");
            }

            else if ($("#qbtn64").hasClass("active"))
            {
                document.getElementById('qbtn64').style.backgroundColor = 'Yellow';
                changechemQnImg65();
                $("#qbtn64").removeClass("active");
                $("#qbtn65").addClass("active");
            }

            else if ($("#qbtn65").hasClass("active"))
            {
                document.getElementById('qbtn65').style.backgroundColor = 'Yellow';
                changechemQnImg66();
                $("#qbtn65").removeClass("active");
                $("#qbtn66").addClass("active");
            }

            else if ($("#qbtn66").hasClass("active"))
            {
                document.getElementById('qbtn66').style.backgroundColor = 'Yellow';
                changechemQnImg67();
                $("#qbtn66").removeClass("active");
                $("#qbtn67").addClass("active");
            }

            else if ($("#qbtn67").hasClass("active"))
            {
                document.getElementById('qbtn67').style.backgroundColor = 'Yellow';
                changechemQnImg68();
                $("#qbtn67").removeClass("active");
                $("#qbtn68").addClass("active");
            }

            else if ($("#qbtn68").hasClass("active"))
            {
                document.getElementById('qbtn68').style.backgroundColor = 'Yellow';
                changechemQnImg69();
                $("#qbtn68").removeClass("active");
                $("#qbtn69").addClass("active");
            }

            else if ($("#qbtn69").hasClass("active"))
            {
                document.getElementById('qbtn69').style.backgroundColor = 'Yellow';
                changechemQnImg70();
                $("#qbtn69").removeClass("active");
                $("#qbtn70").addClass("active");
            }

            else if ($("#qbtn70").hasClass("active"))
            {
                document.getElementById('qbtn70').style.backgroundColor = 'Yellow';
                changechemQnImg71();
                $("#qbtn70").removeClass("active");
                $("#qbtn71").addClass("active");
            }

            else if ($("#qbtn71").hasClass("active"))
            {
                document.getElementById('qbtn71').style.backgroundColor = 'Yellow';
                changechemQnImg72();
                $("#qbtn71").removeClass("active");
                $("#qbtn72").addClass("active");
            }

            else if ($("#qbtn72").hasClass("active"))
            {
                document.getElementById('qbtn72').style.backgroundColor = 'Yellow';
                changechemQnImg73();
                $("#qbtn72").removeClass("active");
                $("#qbtn73").addClass("active");
            }

            else if ($("#qbtn73").hasClass("active"))
            {
                document.getElementById('qbtn73').style.backgroundColor = 'Yellow';
                changechemQnImg74();
                $("#qbtn73").removeClass("active");
                $("#qbtn74").addClass("active");
            }

            else if ($("#qbtn74").hasClass("active"))
            {
                document.getElementById('qbtn74').style.backgroundColor = 'Yellow';
                changechemQnImg75();
                $("#qbtn74").removeClass("active");
                $("#qbtn75").addClass("active");
            }

            else if ($("#qbtn75").hasClass("active"))
            {
                document.getElementById('qbtn75').style.backgroundColor = 'Yellow';
                changechemQnImg76();
                $("#qbtn75").removeClass("active");
                $("#qbtn76").addClass("active");
            }

            else if ($("#qbtn76").hasClass("active"))
            {
                document.getElementById('qbtn76').style.backgroundColor = 'Yellow';
                changechemQnImg77();
                $("#qbtn76").removeClass("active");
                $("#qbtn77").addClass("active");
            }

            else if ($("#qbtn77").hasClass("active"))
            {
                document.getElementById('qbtn77').style.backgroundColor = 'Yellow';
                changechemQnImg78();
                $("#qbtn77").removeClass("active");
                $("#qbtn78").addClass("active");
            }

            else if ($("#qbtn78").hasClass("active"))
            {
                document.getElementById('qbtn78').style.backgroundColor = 'Yellow';
                changechemQnImg79();
                $("#qbtn78").removeClass("active");
                $("#qbtn79").addClass("active");
            }

            else if ($("#qbtn79").hasClass("active"))
            {
                document.getElementById('qbtn79').style.backgroundColor = 'Yellow';
                changechemQnImg80();
                $("#qbtn79").removeClass("active");
                $("#qbtn80").addClass("active");
            }

            else if ($("#qbtn80").hasClass("active"))
            {
                document.getElementById('qbtn80').style.backgroundColor = 'Yellow';
                changechemQnImg81();
                $("#qbtn80").removeClass("active");
                $("#qbtn81").addClass("active");
            }

            else if ($("#qbtn31").hasClass("active"))
            {
                document.getElementById('qbtn81').style.backgroundColor = 'Yellow';
                changechemQnImg82();
                $("#qbtn81").removeClass("active");
                $("#qbtn82").addClass("active");
            }

            else if ($("#qbtn82").hasClass("active"))
            {
                document.getElementById('qbtn82').style.backgroundColor = 'Yellow';
                changechemQnImg83();
                $("#qbtn82").removeClass("active");
                $("#qbtn83").addClass("active");
            }

            else if ($("#qbtn83").hasClass("active"))
            {
                document.getElementById('qbtn83').style.backgroundColor = 'Yellow';
                changechemQnImg84();
                $("#qbtn83").removeClass("active");
                $("#qbtn84").addClass("active");
            }

            else if ($("#qbtn84").hasClass("active"))
            {
                document.getElementById('qbtn84').style.backgroundColor = 'Yellow';
                changechemQnImg85();
                $("#qbtn84").removeClass("active");
                $("#qbtn85").addClass("active");
            }

            else if ($("#qbtn85").hasClass("active"))
            {
                document.getElementById('qbtn85').style.backgroundColor = 'Yellow';
                changechemQnImg86();
                $("#qbtn85").removeClass("active");
                $("#qbtn86").addClass("active");
            }

            else if ($("#qbtn86").hasClass("active"))
            {
                document.getElementById('qbtn86').style.backgroundColor = 'Yellow';
                changechemQnImg87();
                $("#qbtn86").removeClass("active");
                $("#qbtn87").addClass("active");
            }

            else if ($("#qbtn87").hasClass("active"))
            {
                document.getElementById('qbtn87').style.backgroundColor = 'Yellow';
                changechemQnImg88();
                $("#qbtn87").removeClass("active");
                $("#qbtn88").addClass("active");
            }

            else if ($("#qbtn88").hasClass("active"))
            {
                document.getElementById('qbtn88').style.backgroundColor = 'Yellow';
                changechemQnImg89();
                $("#qbtn88").removeClass("active");
                $("#qbtn89").addClass("active");
            }

            else if ($("#qbtn89").hasClass("active"))
            {
                document.getElementById('qbtn89').style.backgroundColor = 'Yellow';
                changechemQnImg90();
                $("#qbtn89").removeClass("active");
                $("#qbtn90").addClass("active");
            }

            else if ($("#qbtn90").hasClass("active"))
            {
                document.getElementById('qbtn90').style.backgroundColor = 'Yellow';
                changechemQnImg91();
                $("#qbtn90").removeClass("active");
                $("#qbtn91").addClass("active");
            }

            else if ($("#qbtn91").hasClass("active"))
            {
                document.getElementById('qbtn91').style.backgroundColor = 'Yellow';
                changechemQnImg92();
                $("#qbtn91").removeClass("active");
                $("#qbtn92").addClass("active");
            }

            else if ($("#qbtn92").hasClass("active"))
            {
                document.getElementById('qbtn92').style.backgroundColor = 'Yellow';
                changechemQnImg93();
                $("#qbtn92").removeClass("active");
                $("#qbtn93").addClass("active");
            }

            else if ($("#qbtn93").hasClass("active"))
            {
                document.getElementById('qbtn93').style.backgroundColor = 'Yellow';
                changechemQnImg94();
                $("#qbtn93").removeClass("active");
                $("#qbtn94").addClass("active");
            }

            else if ($("#qbtn94").hasClass("active"))
            {
                document.getElementById('qbtn94').style.backgroundColor = 'Yellow';
                changechemQnImg95();
                $("#qbtn94").removeClass("active");
                $("#qbtn95").addClass("active");
            }

            else if ($("#qbtn95").hasClass("active"))
            {
                document.getElementById('qbtn95').style.backgroundColor = 'Yellow';
                changechemQnImg96();
                $("#qbtn95").removeClass("active");
                $("#qbtn96").addClass("active");
            }

            else if ($("#qbtn96").hasClass("active"))
            {
                document.getElementById('qbtn96').style.backgroundColor = 'Yellow';
                changechemQnImg97();
                $("#qbtn96").removeClass("active");
                $("#qbtn97").addClass("active");
            }

            else if ($("#qbtn97").hasClass("active"))
            {
                document.getElementById('qbtn97').style.backgroundColor = 'Yellow';
                changechemQnImg98();
                $("#qbtn97").removeClass("active");
                $("#qbtn98").addClass("active");
            }

            else if ($("#qbtn98").hasClass("active"))
            {
                document.getElementById('qbtn98').style.backgroundColor = 'Yellow';
                changechemQnImg99();
                $("#qbtn98").removeClass("active");
                $("#qbtn99").addClass("active");
            }

            else if ($("#qbtn99").hasClass("active"))
            {
                document.getElementById('qbtn99').style.backgroundColor = 'Yellow';
                changechemQnImg100();
                $("#qbtn99").removeClass("active");
                $("#qbtn100").addClass("active");
            }

            else if ($("#qbtn100").hasClass("active"))
            {
                document.getElementById('qbtn100').style.backgroundColor = 'Yellow';
                changebioQnImg101();
                $("#qbtn100").removeClass("active");
                $("#qbtn101").addClass("active");
                $("#chempage").removeClass("active");
                $("#biopage").addClass("active");
                biopage();
            }

        /*********************************    bio    ************************************* */
        else if ($("#qbtn101").hasClass("active"))
        {
            document.getElementById('qbtn101').style.backgroundColor = 'Yellow';
            changephyQnImg102();
            $("#qbtn101").removeClass("active");
            $("#qbtn102").addClass("active");
        }

        else if ($("#qbtn102").hasClass("active"))
        {
            document.getElementById('qbtn102').style.backgroundColor = 'Yellow';
            changephyQnImg103();
            $("#qbtn102").removeClass("active");
            $("#qbtn103").addClass("active");
        }

        else if ($("#qbtn103").hasClass("active"))
        {
            document.getElementById('qbtn103').style.backgroundColor = 'Yellow';
            changephyQnImg104();
            $("#qbtn103").removeClass("active");
            $("#qbtn104").addClass("active");
        }

        else if ($("#qbtn104").hasClass("active"))
        {
            document.getElementById('qbtn104').style.backgroundColor = 'Yellow';
            changephyQnImg105();
            $("#qbtn104").removeClass("active");
            $("#qbtn105").addClass("active");
        }

        else if ($("#qbtn105").hasClass("active"))
        {
            document.getElementById('qbtn105').style.backgroundColor = 'Yellow';
            changephyQnImg106();
            $("#qbtn105").removeClass("active");
            $("#qbtn106").addClass("active");
        }

        else if ($("#qbtn106").hasClass("active"))
        {
            document.getElementById('qbtn106').style.backgroundColor = 'Yellow';
            changephyQnImg107();
            $("#qbtn106").removeClass("active");
            $("#qbtn107").addClass("active");
        }

        else if ($("#qbtn107").hasClass("active"))
        {
            document.getElementById('qbtn107').style.backgroundColor = 'Yellow';
            changephyQnImg108();
            $("#qbtn107").removeClass("active");
            $("#qbtn108").addClass("active");
        }

        else if ($("#qbtn108").hasClass("active"))
        {
            document.getElementById('qbtn108').style.backgroundColor = 'Yellow';
            changephyQnImg109();
            $("#qbtn108").removeClass("active");
            $("#qbtn109").addClass("active");
        }

        else if ($("#qbtn109").hasClass("active"))
        {
            document.getElementById('qbtn109').style.backgroundColor = 'Yellow';
            changephyQnImg110();
            $("#qbtn109").removeClass("active");
            $("#qbtn110").addClass("active");
        }

        else if ($("#qbtn110").hasClass("active"))
        {
            document.getElementById('qbtn110').style.backgroundColor = 'Yellow';
            changephyQnImg111();
            $("#qbtn110").removeClass("active");
            $("#qbtn111").addClass("active");
        }

        else if ($("#qbtn111").hasClass("active"))
        {
            document.getElementById('qbtn111').style.backgroundColor = 'Yellow';
            changebioQnImg112();
            $("#qbtn111").removeClass("active");
            $("#qbtn112").addClass("active");
        }

        else if ($("#qbtn112").hasClass("active"))
        {
            document.getElementById('qbtn112').style.backgroundColor = 'Yellow';
            changebioQnImg113();
            $("#qbtn112").removeClass("active");
            $("#qbtn113").addClass("active");
        }

        else if ($("#qbtn113").hasClass("active"))
        {
            document.getElementById('qbtn113').style.backgroundColor = 'Yellow';
            changebioQnImg114();
            $("#qbtn113").removeClass("active");
            $("#qbtn114").addClass("active");
        }

        else if ($("#qbtn114").hasClass("active"))
        {
            document.getElementById('qbtn114').style.backgroundColor = 'Yellow';
            changebioQnImg115();
            $("#qbtn114").removeClass("active");
            $("#qbtn115").addClass("active");
        }

        else if ($("#qbtn115").hasClass("active"))
        {
            document.getElementById('qbtn115').style.backgroundColor = 'Yellow';
            changebioQnImg116();
            $("#qbtn115").removeClass("active");
            $("#qbtn116").addClass("active");
        }

        else if ($("#qbtn116").hasClass("active"))
        {
            document.getElementById('qbtn116').style.backgroundColor = 'Yellow';
            changebioQnImg117();
            $("#qbtn116").removeClass("active");
            $("#qbtn117").addClass("active");
        }

        else if ($("#qbtn117").hasClass("active"))
        {
            document.getElementById('qbtn117').style.backgroundColor = 'Yellow';
            changebioQnImg118();
            $("#qbtn117").removeClass("active");
            $("#qbtn118").addClass("active");
        }

        else if ($("#qbtn118").hasClass("active"))
        {
            document.getElementById('qbtn118').style.backgroundColor = 'Yellow';
            changebioQnImg119();
            $("#qbtn118").removeClass("active");
            $("#qbtn119").addClass("active");
        }

        else if ($("#qbtn119").hasClass("active"))
        {
            document.getElementById('qbtn119').style.backgroundColor = 'Yellow';
            changebioQnImg120();
            $("#qbtn119").removeClass("active");
            $("#qbtn120").addClass("active");
        }

        else if ($("#qbtn120").hasClass("active"))
        {
            document.getElementById('qbtn120').style.backgroundColor = 'Yellow';
            changebioQnImg121();
            $("#qbtn120").removeClass("active");
            $("#qbtn121").addClass("active");
        }

        else if ($("#qbtn121").hasClass("active"))
        {
            document.getElementById('qbtn121').style.backgroundColor = 'Yellow';
            changebioQnImg122();
            $("#qbtn121").removeClass("active");
            $("#qbtn122").addClass("active");
        }

        else if ($("#qbtn122").hasClass("active"))
        {
            document.getElementById('qbtn122').style.backgroundColor = 'Yellow';
            changebioQnImg123();
            $("#qbtn122").removeClass("active");
            $("#qbtn123").addClass("active");
        }

        else if ($("#qbtn123").hasClass("active"))
        {
            document.getElementById('qbtn123').style.backgroundColor = 'Yellow';
            changebioQnImg124();
            $("#qbtn123").removeClass("active");
            $("#qbtn124").addClass("active");
        }

        else if ($("#qbtn124").hasClass("active"))
        {
            document.getElementById('qbtn124').style.backgroundColor = 'Yellow';
            changebioQnImg125();
            $("#qbtn124").removeClass("active");
            $("#qbtn125").addClass("active");
        }

        else if ($("#qbtn125").hasClass("active"))
        {
            document.getElementById('qbtn125').style.backgroundColor = 'Yellow';
            changebioQnImg126();
            $("#qbtn125").removeClass("active");
            $("#qbtn126").addClass("active");
        }

        else if ($("#qbtn126").hasClass("active"))
        {
            document.getElementById('qbtn126').style.backgroundColor = 'Yellow';
            changebioQnImg127();
            $("#qbtn126").removeClass("active");
            $("#qbtn127").addClass("active");
        }

        else if ($("#qbtn127").hasClass("active"))
        {
            document.getElementById('qbtn127').style.backgroundColor = 'Yellow';
            changebioQnImg128();
            $("#qbtn127").removeClass("active");
            $("#qbtn128").addClass("active");
        }

        else if ($("#qbtn128").hasClass("active"))
        {
            document.getElementById('qbtn128').style.backgroundColor = 'Yellow';
            changebioQnImg129();
            $("#qbtn128").removeClass("active");
            $("#qbtn129").addClass("active");
        }

        else if ($("#qbtn129").hasClass("active"))
        {
            document.getElementById('qbtn129').style.backgroundColor = 'Yellow';
            changebioQnImg130();
            $("#qbtn129").removeClass("active");
            $("#qbtn130").addClass("active");
        }

        else if ($("#qbtn130").hasClass("active"))
        {
            document.getElementById('qbtn130').style.backgroundColor = 'Yellow';
            changebioQnImg131();
            $("#qbtn130").removeClass("active");
            $("#qbtn131").addClass("active");
        }

        else if ($("#qbtn131").hasClass("active"))
        {
            document.getElementById('qbtn131').style.backgroundColor = 'Yellow';
            changebioQnImg132();
            $("#qbtn131").removeClass("active");
            $("#qbtn132").addClass("active");
        }

        else if ($("#qbtn132").hasClass("active"))
        {
            document.getElementById('qbtn132').style.backgroundColor = 'Yellow';
            changebioQnImg133();
            $("#qbtn132").removeClass("active");
            $("#qbtn133").addClass("active");
        }

        else if ($("#qbtn133").hasClass("active"))
        {
            document.getElementById('qbtn133').style.backgroundColor = 'Yellow';
            changebioQnImg134();
            $("#qbtn133").removeClass("active");
            $("#qbtn134").addClass("active");
        }

        else if ($("#qbtn134").hasClass("active"))
        {
            document.getElementById('qbtn134').style.backgroundColor = 'Yellow';
            changebioQnImg135();
            $("#qbtn134").removeClass("active");
            $("#qbtn135").addClass("active");
        }

        else if ($("#qbtn135").hasClass("active"))
        {
            document.getElementById('qbtn135').style.backgroundColor = 'Yellow';
            changebioQnImg136();
            $("#qbtn135").removeClass("active");
            $("#qbtn136").addClass("active");
        }

        else if ($("#qbtn136").hasClass("active"))
        {
            document.getElementById('qbtn136').style.backgroundColor = 'Yellow';
            changebioQnImg137();
            $("#qbtn136").removeClass("active");
            $("#qbtn137").addClass("active");
        }

        else if ($("#qbtn137").hasClass("active"))
        {
            document.getElementById('qbtn137').style.backgroundColor = 'Yellow';
            changebioQnImg138();
            $("#qbtn137").removeClass("active");
            $("#qbtn138").addClass("active");
        }

        else if ($("#qbtn138").hasClass("active"))
        {
            document.getElementById('qbtn138').style.backgroundColor = 'Yellow';
            changebioQnImg139();
            $("#qbtn138").removeClass("active");
            $("#qbtn139").addClass("active");
        }

        else if ($("#qbtn139").hasClass("active"))
        {
            document.getElementById('qbtn139').style.backgroundColor = 'Yellow';
            changebioQnImg140();
            $("#qbtn139").removeClass("active");
            $("#qbtn140").addClass("active");
        }

        else if ($("#qbtn140").hasClass("active"))
        {
            document.getElementById('qbtn140').style.backgroundColor = 'Yellow';
            changebioQnImg141();
            $("#qbtn140").removeClass("active");
            $("#qbtn141").addClass("active");
        }

        else if ($("#qbtn141").hasClass("active"))
        {
            document.getElementById('qbtn141').style.backgroundColor = 'Yellow';
            changebioQnImg142();
            $("#qbtn141").removeClass("active");
            $("#qbtn142").addClass("active");
        }

        else if ($("#qbtn142").hasClass("active"))
        {
            document.getElementById('qbtn142').style.backgroundColor = 'Yellow';
            changebioQnImg143();
            $("#qbtn142").removeClass("active");
            $("#qbtn143").addClass("active");
        }

        else if ($("#qbtn143").hasClass("active"))
        {
            document.getElementById('qbtn143').style.backgroundColor = 'Yellow';
            changebioQnImg144();
            $("#qbtn143").removeClass("active");
            $("#qbtn144").addClass("active");
        }

        else if ($("#qbtn144").hasClass("active"))
        {
            document.getElementById('qbtn144').style.backgroundColor = 'Yellow';
            changebioQnImg145();
            $("#qbtn144").removeClass("active");
            $("#qbtn145").addClass("active");
        }

        else if ($("#qbtn145").hasClass("active"))
        {
            document.getElementById('qbtn145').style.backgroundColor = 'Yellow';
            changebioQnImg146();
            $("#qbtn145").removeClass("active");
            $("#qbtn146").addClass("active");
        }

        else if ($("#qbtn146").hasClass("active"))
        {
            document.getElementById('qbtn146').style.backgroundColor = 'Yellow';
            changebioQnImg147();
            $("#qbtn146").removeClass("active");
            $("#qbtn147").addClass("active");
        }

        else if ($("#qbtn147").hasClass("active"))
        {
            document.getElementById('qbtn147').style.backgroundColor = 'Yellow';
            changebioQnImg148();
            $("#qbtn147").removeClass("active");
            $("#qbtn148").addClass("active");
        }

        else if ($("#qbtn148").hasClass("active"))
        {
            document.getElementById('qbtn148').style.backgroundColor = 'Yellow';
            changebioQnImg149();
            $("#qbtn148").removeClass("active");
            $("#qbtn149").addClass("active");
        }

        else if ($("#qbtn149").hasClass("active"))
        {
            document.getElementById('qbtn149').style.backgroundColor = 'Yellow';
            changebioQnImg150();
            $("#qbtn149").removeClass("active");
            $("#qbtn150").addClass("active");
        }

        else if ($("#qbtn150").hasClass("active"))
        {
            document.getElementById('qbtn150').style.backgroundColor = 'Yellow';
            changebioQnImg151();
            $("#qbtn150").removeClass("active");
            $("#qbtn151").addClass("active");
        }

    /***********************************    chem    ************************************** */
        else if ($("#qbtn151").hasClass("active"))
        {
            document.getElementById('qbtn151').style.backgroundColor = 'Yellow';
            changebioQnImg152();
            $("#qbtn151").removeClass("active");
            $("#qbtn152").addClass("active");
        }

        else if ($("#qbtn152").hasClass("active"))
        {
            document.getElementById('qbtn152').style.backgroundColor = 'Yellow';
            changebioQnImg153();
            $("#qbtn152").removeClass("active");
            $("#qbtn153").addClass("active");
        }

        else if ($("#qbtn153").hasClass("active"))
        {
            document.getElementById('qbtn153').style.backgroundColor = 'Yellow';
            changebioQnImg154();
            $("#qbtn153").removeClass("active");
            $("#qbtn154").addClass("active");
        }

        else if ($("#qbtn154").hasClass("active"))
        {
            document.getElementById('qbtn154').style.backgroundColor = 'Yellow';
            changebioQnImg155();
            $("#qbtn154").removeClass("active");
            $("#qbtn155").addClass("active");
        }

        else if ($("#qbtn155").hasClass("active"))
        {
            document.getElementById('qbtn155').style.backgroundColor = 'Yellow';
            changebioQnImg156();
            $("#qbtn155").removeClass("active");
            $("#qbtn156").addClass("active");
        }

        else if ($("#qbtn156").hasClass("active"))
        {
            document.getElementById('qbtn156').style.backgroundColor = 'Yellow';
            changebioQnImg157();
            $("#qbtn156").removeClass("active");
            $("#qbtn157").addClass("active");
        }

        else if ($("#qbtn157").hasClass("active"))
        {
            document.getElementById('qbtn157').style.backgroundColor = 'Yellow';
            changebioQnImg158();
            $("#qbtn157").removeClass("active");
            $("#qbtn158").addClass("active");
        }

        else if ($("#qbtn158").hasClass("active"))
        {
            document.getElementById('qbtn158').style.backgroundColor = 'Yellow';
            changebioQnImg159();
            $("#qbtn158").removeClass("active");
            $("#qbtn159").addClass("active");
        }

        else if ($("#qbtn159").hasClass("active"))
        {
            document.getElementById('qbtn159').style.backgroundColor = 'Yellow';
            changebioQnImg160();
            $("#qbtn159").removeClass("active");
            $("#qbtn160").addClass("active");
        }

        else if ($("#qbtn160").hasClass("active"))
        {
            document.getElementById('qbtn160').style.backgroundColor = 'Yellow';
            changebioQnImg111();
            $("#qbtn160").removeClass("active");
            $("#qbtn161").addClass("active");
        }

        else if ($("#qbtn161").hasClass("active"))
        {
            document.getElementById('qbtn161').style.backgroundColor = 'Yellow';
            changebioQnImg162();
            $("#qbtn161").removeClass("active");
            $("#qbtn162").addClass("active");
        }

        else if ($("#qbtn162").hasClass("active"))
        {
            document.getElementById('qbtn162').style.backgroundColor = 'Yellow';
            changebioQnImg163();
            $("#qbtn162").removeClass("active");
            $("#qbtn163").addClass("active");
        }

        else if ($("#qbtn163").hasClass("active"))
        {
            document.getElementById('qbtn163').style.backgroundColor = 'Yellow';
            changebioQnImg164();
            $("#qbtn163").removeClass("active");
            $("#qbtn164").addClass("active");
        }

        else if ($("#qbtn164").hasClass("active"))
        {
            document.getElementById('qbtn164').style.backgroundColor = 'Yellow';
            changebioQnImg165();
            $("#qbtn164").removeClass("active");
            $("#qbtn165").addClass("active");
        }

        else if ($("#qbtn165").hasClass("active"))
        {
            document.getElementById('qbtn165').style.backgroundColor = 'Yellow';
            changebioQnImg166();
            $("#qbtn165").removeClass("active");
            $("#qbtn166").addClass("active");
        }

        else if ($("#qbtn166").hasClass("active"))
        {
            document.getElementById('qbtn166').style.backgroundColor = 'Yellow';
            changebioQnImg167();
            $("#qbtn166").removeClass("active");
            $("#qbtn167").addClass("active");
        }

        else if ($("#qbtn167").hasClass("active"))
        {
            document.getElementById('qbtn167').style.backgroundColor = 'Yellow';
            changebioQnImg168();
            $("#qbtn167").removeClass("active");
            $("#qbtn168").addClass("active");
        }

        else if ($("#qbtn168").hasClass("active"))
        {
            document.getElementById('qbtn168').style.backgroundColor = 'Yellow';
            changebioQnImg169();
            $("#qbtn168").removeClass("active");
            $("#qbtn169").addClass("active");
        }

        else if ($("#qbtn169").hasClass("active"))
        {
            document.getElementById('qbtn169').style.backgroundColor = 'Yellow';
            changebioQnImg170();
            $("#qbtn169").removeClass("active");
            $("#qbtn170").addClass("active");
        }

        else if ($("#qbtn170").hasClass("active"))
        {
            document.getElementById('qbtn170').style.backgroundColor = 'Yellow';
            changebioQnImg171();
            $("#qbtn170").removeClass("active");
            $("#qbtn171").addClass("active");
        }

        else if ($("#qbtn171").hasClass("active"))
        {
            document.getElementById('qbtn171').style.backgroundColor = 'Yellow';
            changebioQnImg172();
            $("#qbtn171").removeClass("active");
            $("#qbtn172").addClass("active");
        }

        else if ($("#qbtn172").hasClass("active"))
        {
            document.getElementById('qbtn172').style.backgroundColor = 'Yellow';
            changebioQnImg173();
            $("#qbtn172").removeClass("active");
            $("#qbtn173").addClass("active");
        }

        else if ($("#qbtn173").hasClass("active"))
        {
            document.getElementById('qbtn173').style.backgroundColor = 'Yellow';
            changebioQnImg174();
            $("#qbtn173").removeClass("active");
            $("#qbtn174").addClass("active");
        }

        else if ($("#qbtn174").hasClass("active"))
        {
            document.getElementById('qbtn174').style.backgroundColor = 'Yellow';
            changebioQnImg175();
            $("#qbtn174").removeClass("active");
            $("#qbtn175").addClass("active");
        }

        else if ($("#qbtn175").hasClass("active"))
        {
            document.getElementById('qbtn175').style.backgroundColor = 'Yellow';
            changebioQnImg176();
            $("#qbtn175").removeClass("active");
            $("#qbtn176").addClass("active");
        }

        else if ($("#qbtn176").hasClass("active"))
        {
            document.getElementById('qbtn176').style.backgroundColor = 'Yellow';
            changebioQnImg177();
            $("#qbtn176").removeClass("active");
            $("#qbtn177").addClass("active");
        }

        else if ($("#qbtn177").hasClass("active"))
        {
            document.getElementById('qbtn177').style.backgroundColor = 'Yellow';
            changebioQnImg178();
            $("#qbtn177").removeClass("active");
            $("#qbtn178").addClass("active");
        }

        else if ($("#qbtn178").hasClass("active"))
        {
            document.getElementById('qbtn178').style.backgroundColor = 'Yellow';
            changebioQnImg179();
            $("#qbtn178").removeClass("active");
            $("#qbtn179").addClass("active");
        }

        else if ($("#qbtn179").hasClass("active"))
        {
            document.getElementById('qbtn179').style.backgroundColor = 'Yellow';
            changebioQnImg180();
            $("#qbtn179").removeClass("active");
            $("#qbtn180").addClass("active");
        }

        else if ($("#qbtn180").hasClass("active"))
        {
            document.getElementById('qbtn180').style.backgroundColor = 'Yellow';
            changebioQnImg181();
            $("#qbtn180").removeClass("active");
            $("#qbtn181").addClass("active");
        }

        else if ($("#qbtn131").hasClass("active"))
        {
            document.getElementById('qbtn181').style.backgroundColor = 'Yellow';
            changebioQnImg182();
            $("#qbtn181").removeClass("active");
            $("#qbtn182").addClass("active");
        }

        else if ($("#qbtn182").hasClass("active"))
        {
            document.getElementById('qbtn182').style.backgroundColor = 'Yellow';
            changebioQnImg183();
            $("#qbtn182").removeClass("active");
            $("#qbtn183").addClass("active");
        }

        else if ($("#qbtn183").hasClass("active"))
        {
            document.getElementById('qbtn183').style.backgroundColor = 'Yellow';
            changebioQnImg184();
            $("#qbtn183").removeClass("active");
            $("#qbtn184").addClass("active");
        }

        else if ($("#qbtn184").hasClass("active"))
        {
            document.getElementById('qbtn184').style.backgroundColor = 'Yellow';
            changebioQnImg185();
            $("#qbtn184").removeClass("active");
            $("#qbtn185").addClass("active");
        }

        else if ($("#qbtn185").hasClass("active"))
        {
            document.getElementById('qbtn185').style.backgroundColor = 'Yellow';
            changebioQnImg186();
            $("#qbtn185").removeClass("active");
            $("#qbtn186").addClass("active");
        }

        else if ($("#qbtn186").hasClass("active"))
        {
            document.getElementById('qbtn186').style.backgroundColor = 'Yellow';
            changebioQnImg187();
            $("#qbtn186").removeClass("active");
            $("#qbtn187").addClass("active");
        }

        else if ($("#qbtn187").hasClass("active"))
        {
            document.getElementById('qbtn187').style.backgroundColor = 'Yellow';
            changebioQnImg188();
            $("#qbtn187").removeClass("active");
            $("#qbtn188").addClass("active");
        }

        else if ($("#qbtn188").hasClass("active"))
        {
            document.getElementById('qbtn188').style.backgroundColor = 'Yellow';
            changebioQnImg189();
            $("#qbtn188").removeClass("active");
            $("#qbtn189").addClass("active");
        }

        else if ($("#qbtn189").hasClass("active"))
        {
            document.getElementById('qbtn189').style.backgroundColor = 'Yellow';
            changebioQnImg190();
            $("#qbtn189").removeClass("active");
            $("#qbtn190").addClass("active");
        }

        else if ($("#qbtn190").hasClass("active"))
        {
            document.getElementById('qbtn190').style.backgroundColor = 'Yellow';
            changebioQnImg191();
            $("#qbtn190").removeClass("active");
            $("#qbtn191").addClass("active");
        }

        else if ($("#qbtn191").hasClass("active"))
        {
            document.getElementById('qbtn191').style.backgroundColor = 'Yellow';
            changebioQnImg192();
            $("#qbtn191").removeClass("active");
            $("#qbtn192").addClass("active");
        }

        else if ($("#qbtn192").hasClass("active"))
        {
            document.getElementById('qbtn192').style.backgroundColor = 'Yellow';
            changebioQnImg193();
            $("#qbtn192").removeClass("active");
            $("#qbtn193").addClass("active");
        }

        else if ($("#qbtn193").hasClass("active"))
        {
            document.getElementById('qbtn193').style.backgroundColor = 'Yellow';
            changebioQnImg194();
            $("#qbtn193").removeClass("active");
            $("#qbtn194").addClass("active");
        }

        else if ($("#qbtn194").hasClass("active"))
        {
            document.getElementById('qbtn194').style.backgroundColor = 'Yellow';
            changebioQnImg195();
            $("#qbtn194").removeClass("active");
            $("#qbtn195").addClass("active");
        }

        else if ($("#qbtn195").hasClass("active"))
        {
            document.getElementById('qbtn195').style.backgroundColor = 'Yellow';
            changebioQnImg196();
            $("#qbtn195").removeClass("active");
            $("#qbtn196").addClass("active");
        }

        else if ($("#qbtn196").hasClass("active"))
        {
            document.getElementById('qbtn196').style.backgroundColor = 'Yellow';
            changebioQnImg197();
            $("#qbtn196").removeClass("active");
            $("#qbtn197").addClass("active");
        }

        else if ($("#qbtn197").hasClass("active"))
        {
            document.getElementById('qbtn197').style.backgroundColor = 'Yellow';
            changebioQnImg198();
            $("#qbtn197").removeClass("active");
            $("#qbtn198").addClass("active");
        }

        else if ($("#qbtn198").hasClass("active"))
        {
            document.getElementById('qbtn198').style.backgroundColor = 'Yellow';
            changebioQnImg199();
            $("#qbtn198").removeClass("active");
            $("#qbtn199").addClass("active");
        }

        else if ($("#qbtn199").hasClass("active"))
        {
            document.getElementById('qbtn199').style.backgroundColor = 'Yellow';
            changebioQnImg200();
            $("#qbtn199").removeClass("active");
            $("#qbtn200").addClass("active");
        }

        else if ($("#qbtn200").hasClass("active"))
        {
            document.getElementById('qbtn100').style.backgroundColor = 'Yellow';
           //changemathQnImg201();
            $("#qbtn200").removeClass("active");
            //$("#qbtn201").addClass("active");
            $("#biopage").removeClass("active");
            $("#phypage").addClass("active");
            phypage();
        }


        }
    }

    var answered = [];
    var marked = [];

    var A = document.getElementById('opt1');
    if(A)
    {
        A.addEventListener('click',opt1,false)
    }

    var B = document.getElementById('opt2');
    if(B)
    {
        B.addEventListener('click',opt2,false)
    }

    var C = document.getElementById('opt3');
    if(C)
    {
        C.addEventListener('click',opt3,false)
    }

    var D = document.getElementById('opt4');
    if(D)
    {
        D.addEventListener('click',opt4,false)
    }

    function opt1()
    {
        clicked = 1;
    }

    function opt2()
    {
        clicked = 2;
    }

    function opt3()
    {
        clicked = 3;
    }

    function opt4()
    {
        clicked = 4;
    }

    function OptionA()
    {
        for(var p=1; p<=200; p++)
        {
            if($("#qbtn"+p).hasClass("active"))
            {
                answered[p-1]='a'
                a=p-1
            }
        }
    }

    function OptionB()
    {
        for(var q=1; q<=200; q++)
        {
            if($("#qbtn"+q).hasClass("active"))
            {
                answered[q-1]='b'
                a=q-1
            }
        }
    }

    function OptionC()
    {
        for(var r=1; r<=200; r++)
        {
            if($("#qbtn"+r).hasClass("active"))
            {
                answered[r-1]='c'
                a=r-1
            }
        }
    }

    function OptionD()
    {
        for(var s=1; s<=200; s++)
        {
            if($("#qbtn"+s).hasClass("active"))
            {
                answered[s-1]='d'
                a=s-1
            }
        }
    }


   /* var currentTime =0;
    var timeleft = 1080;
    
    function convertSeconds(s)
    {
        var hour = s / 3600;
        var rhours = Math.floor(hour);
        var min = (hour - rhours) * 60;
        var rmin = Math.floor(min);
        var sec = s % 60;

        return rhours + ":" + rmin + ":" + sec;

    }
    var timer = document.getElementById('examtime')
    timer.innerHTML = convertSeconds(timeleft-currentTime);



    function timeIt()
    {
        currentTime++;
        timer.innerHTML = (convertSeconds(timeleft-currentTime));

        if(currentTime == timeleft)
        {
            clearInterval(interval);
        }
    }

    //var interval = setInterval(function(){ timeIt(); },10);
    var interval = setInterval(timeIt,10);*/

    var abcd = document.getElementById('endTest')
    if(abcd)
    {
        abcd.addEventListener('click', getAns,false)
    }

    function getAns()
    {
        sessionStorage.setItem('TheArray', JSON.stringify(answered));
        sessionStorage.setItem('Array', JSON.stringify(marked));
        window.location.href = 'final_page.html';
    }

    var sessionString1 = sessionStorage.getItem('TheArray');
    var sessionString2 = sessionStorage.getItem('Array');
    var C_ans = JSON.parse(sessionString1);
    var M_ans = JSON.parse(sessionString2);


    console.log(C_ans[0])
    console.log(M_ans[0])


    /******************************************************************** */
    function myFunction() 
    {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar");
      
        // Add the "show" class to DIV
        x.className = "show";
      
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1500);
    }

    function myFunction1()
    {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar1");
        
        // Add the "show" class to DIV
        x.className = "show";
        
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1500);
    }

    document.getElementById("UN").innerHTML = sessionStorage.getItem("fname") +" " + sessionStorage.getItem("lname");
    document.getElementById("useremail").innerHTML = sessionStorage.getItem("email")


    var c_ans = ['b','a']

    var right=0, wrong=0, left=0, total=0, later=0;

    var rightphy=0, wrongphy=0, leftphy=0, totalphy=0, laterphy=0;
    var rightchem=0, wrongchem=0, leftchem=0, totalchem=0, laterchem=0;
    var rightbio=0, wrongbio=0, leftbio=0, totalbio=0, laterbio=0;

    for(var j=0; j<c_ans.length; j++)
    {
        if(C_ans[j] == c_ans[j])
        {
            right = right+1;
        }
        else if((C_ans[j] == undefined && M_ans[j] == undefined) || (C_ans[j] == null && M_ans[j] == null))
        {
            left = left+1;
        }
        else if((C_ans[j] != c_ans[j]) && (C_ans[j]!=null || C_ans[j]!=undefined))
        {
            wrong = wrong+1
        }
    }

    for(var j=0; j<20; j++)
    {
        if(M_ans[j] != undefined || M_ans[j] != null)
        {
            later = later+1;
        }
    }


    total = right;

    document.getElementById('tms').innerText = total;
    document.getElementById('ca').innerText = right;
    document.getElementById('ia').innerText = wrong;
    document.getElementById('mfl').innerText = later;
    document.getElementById('uq').innerText = left;

})