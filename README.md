# CST438 Software Engineering California State University Monterey Bay
# Student Registration project Front End application

This application is written in React and requires node.js to be installed.

### Assignment: 03
Using Gitpod for the development of the project mentioned in assignment-03.

#### STEP: 01
```shell
gitpod ~ $ node --version
v16.19.0
```

#### STEP: 02
```shell
gitpod ~ $ git --version
git version 2.37.3
```

#### Step: 03
```shell
gitpod ~ $ mkdir frontend
gitpod ~ $ cd frontend
gitpod ~/frontend $ git init
hint: Using 'master' as the name for the initial branch. This default branch name
hint: is subject to change. To configure the initial branch name to use in all
hint: of your new repositories, which will suppress this warning, call:
hint: 
hint:   git config --global init.defaultBranch <name>
hint: 
hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
hint: 'development'. The just-created branch can be renamed via this command:
hint: 
hint:   git branch -m <name>
Initialized empty Git repository in /home/gitpod/frontend/.git/
gitpod ~/frontend (master) $ git config --global user.name lunavarro22
gitpod ~/frontend (master) $ git config --global user.email lunavarro@csumb.edu
gitpod ~/frontend (master) $ git pull https://github.com/dwisneski/cst438_register_frontend
remote: Enumerating objects: 96, done.
remote: Counting objects: 100% (58/58), done.
remote: Compressing objects: 100% (32/32), done.
remote: Total 96 (delta 34), reused 31 (delta 26), pack-reused 38
Unpacking objects: 100% (96/96), 551.56 KiB | 3.24 MiB/s, done.
From https://github.com/dwisneski/cst438_register_frontend
 * branch            HEAD       -> FETCH_HEAD
gitpod ~/frontend (master) $ git status
On branch master
nothing to commit, working tree clean
gitpod ~/frontend (master) $ ls
package.json  package-lock.json  public  README.md  src
gitpod ~/frontend (master) $
```

#### STEP: 04
Creating ssh key and adding to github to access repositories.

![Added SSH to Github](https://i.imgur.com/AlodB3g.png)
