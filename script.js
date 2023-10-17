const projectContainer = document.querySelector(".projects_content");

const projects = [
    { projectCover: "./assets/githubfinder.jpg", projectName: "GitHub Finder", useLanguage: "#HTML #CSS #JavaScript", projectDate: "Sep 9, 2023", projectDemo: "https://srjgit86.github.io/gitHub_user_finder/", projectDetail: "https://github.com/SrJGit86/gitHub_user_finder" },
    { projectCover: "./assets/cryptoview.jpg", projectName: "CryptoView - Cryptocurrency Information Web App", useLanguage: "#HTML #CSS #JavaScript", projectDate: "Sep 19, 2023", projectDemo: "https://srjgit86.github.io/cryptoCurrencyView_JS/", projectDetail: "https://github.com/SrJGit86/cryptoCurrencyView_JS" },
    { projectCover: "./assets/musicapp.jpg", projectName: "Online Music Player", useLanguage: "#HTML #CSS #JavaScript", projectDate: "Oct 11, 2023", projectDemo: "https://srjgit86.github.io/SrjMusic_Application/", projectDetail: "https://github.com/SrJGit86/SrjMusic_Application" },
    { projectCover: "./assets/datavisualization.jpg", projectName: "Interactive Data Visualization", useLanguage: "#HTML #CSS #JavaScript", projectDate: "Sep 20, 2023", projectDemo: "https://srjgit86.github.io/interactiveDataVisualization/", projectDetail: "https://github.com/SrJGit86/interactiveDataVisualization" },
    { projectCover: "./assets/dynamicchart.jpg", projectName: "Dynamic Chart with Real-Time Data", useLanguage: "#HTML #CSS #JavaScript", projectDate: "Sep 20, 2023", projectDemo: "https://srjgit86.github.io/dynamicChartWithReal-TimeData/", projectDetail: "https://github.com/SrJGit86/dynamicChartWithReal-TimeData" },
    { projectCover: "./assets/aishop.jpg", projectName: "AI Shop-Add to cart functionalty", useLanguage: "#HTML #CSS #JavaScript", projectDate: "Sep 26, 2023", projectDemo: "https://srjgit86.github.io/AI_Shop_JS/", projectDetail: "https://github.com/SrJGit86/AI_Shop_JS" },
    { projectCover: "./assets/userauthentication.jpg", projectName: "User Info Card - Simple User Information Display", useLanguage: "#HTML #CSS #JavaScript", projectDate: "Sep 12, 2023", projectDemo: "https://srjgit86.github.io/user_info_card/", projectDetail: "https://github.com/SrJGit86/user_info_card" },
    { projectCover: "./assets/emojiapp.jpg", projectName: "Emoji Search Application", useLanguage: "#HTML #CSS #JavaScript", projectDate: "Sep 4, 2023", projectDemo: "https://srjgit86.github.io/emoji-App/", projectDetail: "https://github.com/SrJGit86/emoji-App" },
    { projectCover: "./assets/stopwatch.jpg", projectName: "Stop Watch", useLanguage: "#HTML #CSS #JavaScript", projectDate: "Sep 4, 2023", projectDemo: "https://srjgit86.github.io/stop_Watch/", projectDetail: "https://github.com/SrJGit86/stop_Watch" },
    { projectCover: "./assets/digitalclock.jpg", projectName: "Digital Clock", useLanguage: "#HTML #CSS #JavaScript", projectDate: "Sep 4, 2023", projectDemo: "https://srjgit86.github.io/digital_clock/", projectDetail: "https://github.com/SrJGit86/digital_clock" },
    { projectCover: "./assets/textreader.jpg", projectName: "Speech Text Reader", useLanguage: "#HTML #CSS #JavaScript", projectDate: "Sep 17, 2023", projectDemo: "https://srjgit86.github.io/speechTextReader/", projectDetail: "https://github.com/SrJGit86/speechTextReader" },
]

projects.forEach((ele) => {
    const div = document.createElement("div");
    div.className = "project";
    const a = document.createElement("a");
    const img = document.createElement("img");
    const projName = document.createElement("p");
    const useLang = document.createElement("span");
    useLang.className = "usedLang";
    const dateAndDetail = document.createElement("div");
    const date = document.createElement("span");
    const detail = document.createElement("a");
    detail.className = "aboutBtn";

    img.src = ele.projectCover;
    a.href = ele.projectDemo;
    projName.innerText = ele.projectName;
    useLang.innerText = ele.useLanguage;
    date.innerText = ele.projectDate;
    detail.href = ele.projectDetail;
    detail.innerText = "About Project"

    a.appendChild(img);
    div.appendChild(a);
    div.appendChild(projName);
    div.appendChild(useLang);
    dateAndDetail.appendChild(date);
    dateAndDetail.appendChild(detail);
    div.appendChild(dateAndDetail);
    projectContainer.appendChild(div);

})