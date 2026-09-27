@echo off
title Monday Weekly Prep — Engineering Cockpit
echo Starting local web server...
start "" "http://localhost:3300"
"C:\Users\Exqiu\AppData\Roaming\Antigravity\bin\agy-node.cmd" "%~dp0server.js"
pause
