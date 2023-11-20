const codes = {
    Introduction: "",     
    Install_git:"",
    Diagram_git:"",
    Repository:"",
    Branch:"",
    Local_Repository:"",
    Remote_Repository:"",
    Pull_Request:"",
    Clone_Repository:[`git clone <repo link>`, `git clone https://github.com/RedaFarissi/front-portfolio.git `],
    Initialize_Repository:"",
    git_status:"",
    git_add:[
        `git add css/ `,
        `git add index.html`,
        `git add .`,
        `git add index.html css/`,
        `git reset css/ index.html`
    ],
    git_commit:[
        `git commit -m "message to your teams"`,
        `git rm -f index.html css/`
    ],
    git_branch:`git branch`,
    git_remote:`git remote -v`,
    git_push:[
        `git push Remote_branch_name  local_branch_name`,
        `git push origin  main`
    ],
    Work_as_a_team:"",
    git_pull:[
        `git add .`,
        `git commit -m "commit message"`,
        `git pull origin master`
    ],
    Existing_Project_powerShell:[
        `git init`,
        `git add .`, 
        `git commit -m "Initial commit"`,
        `git remote add origin <repository URL>`,
        `git push -u origin master`
    ],
    Existing_Project_App:"",
    gitignore_file:"",
    submodules:[
        `git submodule add <repository-url> <submodule-path>`,
        `C:\\project> git init `,
        `C:\\project> git submodule add https://github.com/RedaFarissi/front-ecommerce.git front`,
        `C:\\project> git commit -m "commit message to front"`,
        `C:\\project> git remote add origin https://github.com/RedaFarissi/portfolio-back.git`,
        `C:\\project> git push <remote> <branch>`,
    ],
    Create_new_branch:[
        `git branch -c My_name_branch`,
        `git checkout My_name_branch`,
        `git branch -b My_name_branch`,
        `git add .`,
        `git commit -m  "message"`,
        `git push `,
    ],
    Remove_connection:`rd /s /q .git`,
}


export default codes;