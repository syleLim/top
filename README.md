Top
===

## Explain
There are n of tops on horizontal ground. all tops have signal device on thier head. signal can be analyzed by top taller than signal shooted, and signal analyzed don't transmit other top.
<br><br>

For example, there are 6, 9, 5, 7, 4 height tops, each tops shoot signal to right. Then, signal shooted by 5th top of heights 4 is analyzed by 4th top of heights 7, signal shooted by 4th top of heights 7 is analyzed 2nd top of heights 9, signal shooted by 3th top of heights 5 is also analyzed by 2nd top, signals shooted by 2nd top and 1st top are not analyzed. 
<br><br>

inputs are array of chess board's vertical, horizontal line length, write the function that returns number of solution boards of which queens cant attact each queens.<br><br>
|top analyzing signal(height)|top shooting signal(height)|
|:---|:---|
|5(4)|4(7)|
|4(7)|2(9)|
|3(5)|2(9)|
|2(9)|-|
|1(6)|-|

input is array of top's heights, write the function that returns array of index of top analyzing signal.

CONSTRAINT
 - heights is 1 or more 100 or less.
 - height array length is 2 or more 100 or less.
 - if no one can be analyzed, record 0<br><br>

Ex >
|heights|return|
|:---|:---|
|[6,9,5,7,4]|[0,0,2,2,4]|
|[3,9,9,3,5,7,2]|[0,0,0,3,3,3,6]|
|[1,5,3,6,7,6,5]|[0,0,2,0,0,5,6]|


source : https://programmers.co.kr/learn/courses/30/lessons/12952https://programmers.co.kr/learn/challenges
