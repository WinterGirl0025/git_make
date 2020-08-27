在当前文件夹下打开git bash

+ <span style="color:orange">git init</span> ==> 新项目的创建

+ <span style="color:orange">git status</span> ==> 查看当前分支更改的文件

+ <span style="color:orange">git branch</span> ==> 查看所有本地分支

+ <span style="color:orange">git branch now</span> ==> 新建本地分支now

+  <span style="color:orange">git checkout now</span> ==>切换到now这个分支

+ <span style="color:orange">git remote add origin</span> 你的远程库地址  ==> 关联到远程库

  > 如：git remote add origin https://github.com/githubusername/demo.git

+ <span style="color:orange">git add .</span> ==>会监控工作区的状态树，把工作区的所有变化提交到暂存区，包括修改内容的文件（modified）和新文件（new），但是<span style="color:pink">不包括被删除的文件</span>

+ <span style="color:orange">git add -u</span> ==>这个命令<span style="color:pink">不会提交新文件（untracked file）</span>-----仅仅作为修改提交被修改（modified）和被删除（delete）文件，不包括新文件（new）

+ <span style="color:orange">git add -A  // git add -all</span> ==>是上面两个命令的集合，会提交所有的文件<span style="color:pink">包括修改新建和删除的</span>

+ <span style="color:orange">git commit -m "what is changed"</span> ==>提交修改的注释（what is changed）

+ <span style="color:orange">git push</span> ==>推送到git仓库对应的分支

+ <span style="color:orange">git pull </span> ==>从远程仓库拉取分支，容易与本地产生冲突

+ <span style="color:orange">git merge [branch]</span> ==>合并分支branch到当前分支

+ <span style="color:orange">git reset --hard HEAD</span> ==>撤销本地当前未提交的修改

