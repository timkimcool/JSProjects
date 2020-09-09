# Online Calculator

Variable: pi/e/Ans
functions: sin(), cos(), log(), ln(), sqrt(), (), 
operators: /,x,-,+,^
postfix: %/!

Rad/Deg mode: just sets mode
Inv: inverse trig, e^x, 10^x, x^2, ysqrtx, Rnd
Numbers:
    0 in the very beginning doesn't work
    0 at beginning of term afterwards works
    if 0 beginning of term and then number, replace zero with number
    auto multiple after variable or postfix
postfix operator:
    only after number/variable/postfix
    after operator, replace operator
    doesn't work after function
function:
    Doesn't work after E
    Otherwise always works
    ghost parenthesis
operator:
    after number/variable/postfix
    after operator, replace operator
=: evaluate


EXP (google bug: 1 x 0 E -> E replace 0 -> error): 
    only after number and expects only number after
    double check 0

- (neg): activates after operator, function
^: subscript

Parenthesis:
    open: anytime
    close: only after number, variable, or postfix operator

C: backspace on click; clear on hold



x!/%: only after numbers/e/pi/% and !; replace ^, /, x, -, +
pi, e: after anything; multiply after pi, e;
Number: multiply after pi/e/%
