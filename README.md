[] for using the jsx we import react at the top (import React from 'react'; )

[] style = {{color : "orange",   backgroundColor : "red"}}
[]  instead of background-color  we wright this backgroundColor(camelCase)
[] {{}} for applying styles : {js{object}}
[] for adding px we have to make it ""
[] fontSize : "200px"
[] for adding css we have to use className 
[] using ternary inside the h3 : 
    style = {{display : props.question ? "block" : "none"}}

[] changing the color of answer when it  doesn't have question :
     style = {{color : !props.question && "red"}}