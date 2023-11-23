{% load static %} 
<link rel="stylesheet" href="{% static 'front/css/sass.css' %}">

<div dir='ltr' class='text-light'>
    <h1><u><i>  SASS </i></u></h1>
    <div class="h2 text-light"> 1 - install sass from npm </div>
    <div class='alert bg-dark text-light pb-0'><pre>npm install -g sass</pre></div>
    <b>Get version sass </b>
    <div class='alert bg-dark text-light pb-0'><pre>sass --version</pre></div>
    <ul>
        <li> Search for "Command Prompt" or "cmd" in the Windows Start menu. </li>
        <li> Right-click on "Command Prompt" and select "Run as administrator. </li>
        <li> In the elevated Command Prompt, Try : </li>
    </ul>
    <div class='alert bg-dark text-light pb-0'><pre>where sass</pre></div>
    <ul>
        <li>On Windows: You can add the directory to your PATH by opening the System Properties, going to the "Advanced" tab, clicking on "Environment Variables," and then editing the PATH variable to include the directory where Sass is installed.</li>
    </ul>
    <img src="{% static 'css/sass1.png' %}" class="img">
    <b>Create output.css with CMD </b>
    <img src="{% static 'css/sass2.png' %}" class="img">
    
    <h2> Example 1</h2>
    <img src="{% static 'css/sass3.png' %}" class="img">
    <h4 class='d-flex justify-content-between'>
        <span>sass code</span>  
        <button onclick="handleCopieCode('paragraph1')" class='btn text-light'>Copie Code</button>
    </h4>
    <img src="{% static 'css/sass4.png' %}" class="img">
    <h3> Result </h3>
    <div>
        <div class='container-test'>
            <div class='ring'></div>
            <div class='ring'></div>
            <div class='ring'></div>
        </div>
    </div>
    <p id="paragraph1" style='display:none'>
@import "./flex"

@mixin animationRotate($name , $x , $y ) 
    animation: #{$name} 2s linear infinite
    @keyframes #{$name}
        0%
            transform: rotateX($x) rotateY($y) rotateZ(0deg)
        100%
            transform: rotateX($x) rotateY($y) rotateZ(360deg)
    

.container-test
    @extend %flex-center-center
    background-color: black
    width: 100%
    height: 700px
    .ring
        width: 200px
        height: 200px
        border-radius: 50% 
        position: absolute
        &:nth-child(1)
            border-top: 5px solid green
            @include animationRotate( "ring-animatio-1" , 35deg , -45deg) 
        &:nth-child(2)
            border-top: 5px solid red
            @include animationRotate( "ring-animation-2" , 50deg , 10deg) 
        &:nth-child(3)
            border-top: 5px solid yellow
            @include animationRotate( "ring-animation-3" , 35deg , 55deg) 
    </p>

    <hr/>

    
    <h2> Example 2 </h2>
    <img src="{% static 'css/sass5.png' %}" class="img">
    <h4 class='d-flex justify-content-between'>
        <span>sass code</span>  
        <button onclick="handleCopieCode('paragraph2')" class='btn text-light'>Copie Code</button>
    </h4>
    <img src="{% static 'css/sass6.png' %}" class="img">
    <h3> Result </h3>
    <div>
        <div class="container-test-2">
            <h2> <span>P</span>articles Di<span>st</span>ortion Effects </h2>
        </div>
    </div>
    <p id="paragraph2" style='display:none'>
@import "./flex"
*
    margin: 0
    padding: 0
    
.container-test-2 
    @extend %flex-center-center
    background-color: black
    width: 100%
    height: 500px
    h2
        position: relative
        margin: 0
        font-size: 4.5rem
        color: white
        z-index: 1
        overflow: hidden
        span
            color: red
        &:before
            content: ''
            position: absolute
            left: 120%
            width: 120%
            height: 100%
            background: linear-gradient(90deg, transparent 0%, black 5%, black 100%)
            animation: animate-heading 6s linear forwards infinite
            @keyframes animate-heading
                0%
                    left: 110%
                100% 
                    left: -20%
    </p>

    <hr/>

    <h2> Example 3 </h2>
    <img src="{% static 'css/sass7.png' %}" class="img" />
    <h4 class='d-flex justify-content-between'>
        <span>sass code</span>  
        <button onclick="handleCopieCode('paragraph3')" class='btn text-light'>Copie Code</button>
    </h4>
    <img src="{% static 'css/sass8.png' %}" class="img" />
    <h3> Result </h3>
    <div>
        <div class='container-3'>
            <div class='container-box'>
               <div class="container-h2">
                     <span>R</span><span>e</span><span>d</span><span>a</span>
                     <span>E</span><span>s</span><span>k</span><span>o</span><span>u</span><span>n</span><span>i</span>
               </div>
            </div>
        </div>
    <div>
    <p id="paragraph3" style='display:none'>
.container-3
    .container-box
        height: 100vh
        background: black
        .container-h2
            position: absolute
            top: 35%
            left: 25%
            font-size: 5rem
            letter-spacing: 0.2em
            span
                color: white
                opacity: 0
                display: inline-block
                animation: animate4 1s linear forwards infinite
                @keyframes animate4 
                    0%
                        opacity: 0
                        transform: rotateY(90deg)
                        filter: blur(10px)
                    100%  
                        opacity: 1
                        transform: rotateY(0deg)     
                        filter: blur(0)
    </p>

</div>
<script>
    
    function handleCopieCode(idElement){
        var paragraph = document.getElementById(idElement);
        var text = paragraph.textContent;
        var tempInput = document.createElement("input");
        tempInput.value = text;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
    }

</script>