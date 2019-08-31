Link to APP: https://marijadev.github.io

Thr task is to create web simulation of safe deposit box usually found in hotel rooms.
Backlit screen has two textual segments:
● top left segment that indicates if door is locked,
● main segment for status messages during locking/unlocking process.

Screen’s backlight is turned off when idle for more than 5 seconds. 

Locking/unlocking sequence is described in User’s manual for the safe. You can also check out
this video to see one variation of real world safe implementation: https://youtu.be/qNPJqtGSXuE

Number keypad doesn’t have submit/cancel keys for the commands and passcodes. Instead
input timeout should be implemented with the value of 1.2s: User enters sequence of button
presses, then if idle for 1.2s, control panel processes given input.

Mechanical process of locking/unlocking lasts 3 seconds.

Sometimes hotel guests leave the safe deposit box locked when they uncheck. Or sometimes
they just forget the passcode. This is why there is master unlock IoT feature:
1. hotel’s staff member enters 6 zeros, which puts control panel into “service” mode,
2. then staff member enters super secret master code of unknown length that can be made
up from any keypad character (eg. ‘4L5336*987**L01576823’)
3. when input is completed, master code should be sent to this validation endpoint:
https://9w4qucosgf.execute-api.eu-central-1.amazonaws.com/default/CR-JS_team_M02a?c
ode=456R987L0123
4. if response, eg. {sn:123456}, matches serial number of safe deposit box - door unlocks.
Serial number is predefined and marked with [S/N] and placed on the door of the safe
box. (check the design!)
5. Returned response from master code validation endpoint will be random for invalid
master codes. So, there is no clear error response.

Top left segment values:
● Locked
● Unlocked
Main segment values:
● blank (no value)
● Error
● Ready
● Locking...
● Unlocking...
● Service
● Validating...
