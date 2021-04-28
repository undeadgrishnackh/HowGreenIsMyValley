# Dev Kata
https://www.codewars.com/kata/56e3cd1d93c3d940e50006a4

## Description
Input : an array of integers.
Output : this array, but sorted in such a way that there are two wings:
the left wing with numbers decreasing,
the right wing with numbers increasing.
the two wings have the same length. If the length of the array is odd the wings are around the bottom, if the length is even the bottom is considered to be part of the right wing.
each integer l of the left wing must be greater or equal to its counterpart r in the right wing, the difference l - r being as small as possible. In other words the right wing must be nearly as steep as the left wing.
The function is make_valley or makeValley or make-valley.

## An example:
> a = [79, 35, 54, 19, 35, 25]
> make_valley(a) --> [79, 35, 25, *19*, 35, 54]
> The bottom is 19, left wing is [79, 35, 25], right wing is [*19*, 35, 54].
> 79..................54
>     35..........35
>         25. 
>           ..19
> 
> a = [67, 93, 100, -16, 65, 97, 92]
> make_valley(a) --> [100, 93, 67, *-16*, 65, 92, 97]
> The bottom is -16, left wing [100, 93, 67] and right wing [65, 92, 97] have same length.
> 100.........................97
>     93..........
>                .........92
>         67......
>                .....65
>             -16     
> 
> a = [66, 55, 100, 68, 46, -82, 12, 72, 12, 38]
> make_valley(a) --> [100, 68, 55, 38, 12, *-82*, 12, 46, 66, 72]
> The bottom is -82, left wing is [100, 68, 55, 38, 12]], right wing is [*-82*, 12, 46, 66, 72].
> 
> a = [14,14,14,14,7,14]
> make_valley(a) => [14, 14, 14, *7*, 14, 14]
> 
> a = [14,14,14,14,14]
> make_valley(a) => [14, 14, *14*, 14, 14]

## A counter-example:

> a = [17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1]
> A solution could be [17, 17, 15, 14, 8, 1, 4, 4, 5, 7, 7]
> but the right wing [4, 4, 5, 7, 7] is much flatter than the left one 
> [17, 17, 15, 14, 8].
> 
> Summing the differences between left and right wing:
> (17-7)+(17-7)+(15-5)+(14-4)+(8-4) = 44
> 
> Consider the following solution:
> [17, 15, 8, 7, 4, 1, 4, 5, 7, 14, 17]
> Summing the differences between left and right wing:
> (17-17)+(15-14)+(8-7)+(7-5)+(4-4) = 4
> The right wing is nearly as steep as the right one.


---
# US decomposition

## US 1: Guardians
>> E2E in refinement: SP1 - RT = 5mins - Dev = 2hours.
>> - ✅ accept an array
>> - ✅ the array contains only integers
>> - ✅ the array contains at least 2 elements

Dev. UAT after coding R/G and refactoring: 🛠 SP1 - RT = 30mins - Dev = 15mins.
1. 👍🏻 should reject an INPUT that is NOT and array
2. 👍🏻 should reject NON integers as input
3. 👍🏻 should the array containing at least TWO integers
4. 👍🏻 should accept an array of TWO integers as input

## US 2: The valley
Desc: the valley is a composition of Left wing, §, and right wing.
>> E2E: 
>> 1. a = [79, 35, 54, 19, 35, 25] --> make_valley(a) => [79, 35, 25, *19*, 35, 54]
>> 2. a = [67, 93, 100, -16, 65, 97, 92] --> make_valley(a) => [100, 93, 67, *-16*, 65, 92, 97]
>> 3. a = [66, 55, 100, 68, 46, -82, 12, 72, 12, 38] --> make_valley(a) => [100, 68, 55, 38, 12, *-82*, 12, 46, 66, 72]
>> 4. a = [14,14,14,14,7,14] --> make_valley(a) => [14, 14, 14, *7*, 14, 14]
>> 5. a = [14,14,14,14,14] --> make_valley(a) => [14, 14, *14*, 14, 14]
>> 6. a = [17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1] --> make_valley(a) => [17, 15, 8, 7, 4, 1, 4, 5, 7, 14, 17]

Dev. UAT: 
1. the left wing with numbers decreasing: [1,2,3] --> [3,2,1]
2. the right wing with numbers increasing. [3,2,1] --> [1,2,3]
3. A) the two wings have the same length - ODD [].length === 5 --> L === 2; B === 1; R === 2
3. B) the two wings have the same length - EVEN [].length === 4 --> L === 2; B === 0; R === 2
4. each integer l of the left wing must be greater or equal to its counterpart r in the right wing



## US 3: show me the valley
Desc: the valley is rendered as array and as ASCII art...
UAT:
- every layer add two dots ".."
- the number on the left wing are on the left
- on the rigth wing are on the right side.
1. the valley is EVEN
79............54
  35........35
    25....19

2. the valley is ODD
- the valley is like the EVEN, but in the bottom there's the lowest number 
- add a number of dots "..." equal to the length of the number: examples {1 === . --- 12 === .. --- 123 === ...}
79..............54
  35..........35
    25......19
        12