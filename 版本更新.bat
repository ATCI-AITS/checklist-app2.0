@echo off
cd /d %~dp0

echo === Git add & commit ===
git add .
git commit -m "update: checklist update"

echo === Git pull (rebase) ===
git pull --rebase origin master

IF %ERRORLEVEL% NEQ 0 (
    echo.
    echo !!! Pull 發生衝突，請手動解決後再跑這個批次檔 !!!
    pause
    exit /b %ERRORLEVEL%
)

echo === Git push ===
git push origin master

echo === Build React app ===
npm run build

echo === Deploy to GitHub Pages ===
npm run deploy

echo.
echo === 完成！網站已更新到 GitHub Pages ===
pause
