const quizList = [
    {
        id: 0,
        "type": "questions",
        "title": "What does the “https://” at the beginning of a URL denote, as opposed to \"http://\" (without the “s”)?",
        "options": ['That the site has special high definition', 'That information entered into the site is encrypted', 'That the site is the newest version available', 'That the site is not accessible to certain computers'],
        "correct": 2,
    },
    {
        id: 1,
        "type": "questions",
        "title": "Which of the following is an example of a “phishing” attack?",
        "options": [
            'Sending someone an email that contains a malicious link that is disguised to look like an email from someone the person knows',
            'Creating a fake website that looks nearly identical to a real website in order to trick users into entering their login information',
            'Sending someone a text message that contains a malicious link that is disguised to look like a notification that the person has won a contest',
            'All of the above'],
        "correct": 3,
    },
    {
        id: 2,
        "type": "questions",
        "title": "A group of computers that is networked together and used by hackers to steal information is called a ",
        "options": [
            'Botnet',
            'Rootkit',
            'DDoS',
            'Operating system'],
        "correct": 0,
    },
    {
        id: 3,
        "type": "questions",
        "title": "Which of the following four passwords is the most secure?",
        "options": [
            'Boat123',
            'WTh!5Z',
            'into*48',
            '123456'],
        "correct": 1,
    },
    {
        id: 4,
        "type": "questions",
        "title": "Criminals access someone’s computer and encrypt the user’s personal files and data. The user is unable to access this data unless they pay the criminals to decrypt the files. This practice is called …",
        "options": [
            'Botnet',
            'Ransomware',
            'Driving',
            'Spam'],
        "correct": 1,
    },
    {
        id: 5,
        "type": "questions",
        "title": "“Private browsing” is a feature in many internet browsers that lets users access web pages without any information (like browsing history) being stored by the browser. Can internet service providers see the online activities of their subscribers when those subscribers are using private browsing?",
        "options": [
            'Yes',
            'No'],
        "correct": 0,
    },
    {
        id: 6,
        "type": "questions",
        "title": "Turning off the GPS function of your smartphone prevents any tracking of your phone’s location.",
        "options": [
            'True',
            'False'],
        "correct": 1,
    },
    {
        id: 7,
        "type": "questions",
        "title": "If a public Wi-Fi network (such as in an airport or café) requires a password to access, is it generally safe to use that network for sensitive activities such as online banking?",
        "options": [
            'True',
            'False'],
        "correct": 1,
    },
    {
        id: 8,
        "type": "questions",
        "title": "What kind of cybersecurity risks can be minimized by using a Virtual Private Network (VPN)?",
        "options": [
            'Use of insecure Wi-Fi networks',
            'Key-logging',
            'De-anonymization by network operators',
            'Phishing attacks',
        ],
        "correct": 0,
    },
    {
        id: 9,
        "type": "questions",
        "title": "Which of the following would be best password(hardest to crack)?",
        "options": [
            'Summ3r2017',
            '1234356456',
            'T3chnologyRulz',
            'Ilm！cd、sad！',
        ],
        "correct": 3,
    },
    {
        id: 10,
        "type": "questions",
        "title": "What are types of password attack?",
        "options": [
            'Electronic Attack',
            'Non-electronic attack',
            'Shoulder surfing',
            'Man, in middle attack',
        ],
        "correct": 1,
    },
    {
        id: 11,
        "type": "questions",
        "title": "A hacker can use a remote administration Trojan to shutdown an infected computer even if the power is switched off in the victim computer.",
        "options": [
            'True',
            'False',
        ],
        "correct": 1,
    },
    {
        id: 12,
        "type": "questions",
        "title": "What is SQL code among the 4 option ?",
        "options": [
            "' or '1'='1",
            "' or '1'='1'",
            "'' OR '1'='1'",
            "'t' = 't'"
        ],
        "correct": 1,
    },
    {
        id: 13,
        "type": "questions",
        "title": "A Social engineer convinces a person to give him sensitive information without his knowledge",
        "options": [
            'True',
            'False',
        ],
        "correct": 0,
    },
    {
        id: 14,
        "type": "questions",
        "title": "A coffee shop that collects payments from customers by debit / credit cards would be liable under the data privacy law",
        "options": [
            'True',
            'False',
        ],
        "correct": 0,
    },
    {
        id: 15,
        "type": "questions",
        "title": "Code for hiding your folder ?",
        "options": [
            'Alter + 225',
            'Ctrl+255',
        ],
        "correct": 0,
    },
    {
        id: 16,
        "type": "questions",
        "title": "How to track Email ?",
        "options": [
            'Self-distracting',
            'Gmail',
            'Read notify',
            'Spy pin',
        ],
        "correct": 2,
    },
    {
        id: 17,
        "type": "questions",
        "title": "What is the google hacking code for Email ?",
        "options": [
            'Index:intitle.of inbox',
            'Index.of inbox:intitle',
            'Intitle:index.of inbox',
            'Intitle:index.of milebox',
        ],
        "correct": 2,
    },
    {
        id: 18,
        "type": "questions",
        "title": "To understand your ip address which add on do you use ?",
        "options": [
            'Hide my ip',
            'Noscript',
            'Show ip',
            'Extreme ip',
        ],
        "correct": 3,
    },
    {
        id: 19,
        "type": "questions",
        "title": "How to trace website ?",
        "options": [
            'Http://www.domaintools.com/ ',
            'Http://www.pro.slinteractive.com.au/',
            'Http://www.defaultpassword.com/',
            'Http://www.readnotify.com/',
        ],
        "correct": 0,
    },
    {
        id: 20,
        "type": "questions",
        "title": "Which of the following should you do to restrict access to your files and devices?",
        "options": [
            'Update your software once a year.',
            'Share passwords only with colleagues you trust.',
            'Have your staff members access information via an open Wi-Fi network.',
            'Use multi-factor authentication.',
        ],
        "correct": 1,
    },
    {
        id: 21,
        "type": "questions",
        "title": "Backing up important files offline, on an external hard drive or in the cloud, will help protect your business in the event of a cyber attack. True or False?",
        "options": [
            'True',
            'False',
        ],
        "correct": 0,
    },
    {
        id: 22,
        "type": "questions",
        "title": "Which is the best answer for which people in a business should be responsible for cybersecurity?",
        "options": [
            'Business owners. They run the business, so they need to know cybersecurity basics and put them in practice to reduce the risk of cyber attacks.',
            'IT specialists, because they are in the best position to know about and promote cybersecurity within a business.',
            'Managers, because they are responsible for making sure that staff members are following the right practices.',
            'All staff members should know some cybersecurity basics to reduce the risk of cyber attacks.'
        ],
        "correct": 3,
    },
    {
        id: 23,
        "type": "questions",
        "title": "Cyber criminals only target large companies. True or False?",
        "options": [
            'True',
            'False',
        ],
        "correct": 1,
    },
    {
        id: 24,
        "type": "questions",
        "title": "Which of the following is the best answer for how to secure your router?",
        "options": [
            'Change the default name and password of the router.',
            'Turn off the router’s remote management.',
            'Log out as the administrator once the router is set up.',
            'All of the above'
        ],
        "correct": 0,
    },
    {
        id: 25,
        "type": "questions",
        "title": "Promoting physical security includes protecting:",
        "options": [
            'Only paper files',
            'Only paper files and any computer on which you store electronic copies of those files.',
            'Only paper files, flash drives, and point-of-sale devices.',
            'All the above plus any other device with sensitive information on it.'
        ],
        "correct": 3,
    },
    {
        id: 26,
        "type": "questions",
        "title": "Paper files that have sensitive information should be disposed of in a locked trash bin. True or False?",
        "options": [
            'True',
            'False'
        ],
        "correct": 1,
    },
    {
        id: 27,
        "type": "questions",
        "title": "When you hit the “delete” key, that means a file is automatically removed from your computer. True or False?",
        "options": [
            'True',
            'False'
        ],
        "correct": 1,
    },
    {
        id: 28,
        "type": "questions",
        "title": "Which one of these statements is true?",
        "options": [
            'It’s best to use multi-factor authentication to access areas of the business network with sensitive information',
            'You should use the same password for key business devices to guarantee that high-level employees can access them in an emergency',
            'The best way to protect business data is to make sure no one loses any device',
            'You shouldn’t limit login attempts on key business devices, because getting locked out for having too many incorrect attempts would leave you unable to access your accounts'
        ],
        "correct": 3,
    },
    {
        id: 29,
        "type": "questions",
        "title": "Before connecting remotely to the company network, your personal device should meet the same security requirements as company-issued devices. True or False?",
        "options": [
            'True',
            'False'
        ],
        "correct": 0,
    },
    {
        id: 30,
        "type": "questions",
        "title": "Keeping your router’s default name will help security professionals identify it and thus help protect your network’s security. True or False?",
        "options": [
            'True',
            'False'
        ],
        "correct": 1,
    },
    {
        id: 31,
        "type": "questions",
        "title": "What is a common way to help protect devices connected to the company network?",
        "options": [
            'Only use laptops and other mobile devices with full-disk encryption',
            'Change your smartphone settings to let your devices connect automatically to public Wi-Fi',
            'Let guests and customers use the same secure Wi-Fi that you use',
            'Use the router’s pre-set password so you won’t forget it'
        ],
        "correct": 0,
    },
    {
        id: 32,
        "type": "questions",
        "title": "WPA2 and WPA3 encryption are the encryption standards that will protect information sent over a wireless network. True or False?",
        "options": [
            'True',
            'False'
        ],
        "correct": 0,
    },
    {
        id: 33,
        "type": "questions",
        "title": "Which of the following describes the best way to make sure you are securely accessing the company network remotely?",
        "options": [
            'Read your company’s cybersecurity policies thoroughly',
            'Use VPN when connecting remotely to the company network',
            'Use unique, complex network passwords and avoid unattended, open workstations',
            'Do all of the above'
        ],
        "correct": 0,
    },
    {
        id: 34,
        "type": "questions",
        "title": " An email from your boss asks for the name, addresses, and credit card information of the company’s top clients. The email says it’s urgent and to please reply right away. You should reply right away. True or False?",
        "options": [
            'True',
            'False'
        ],
        "correct": 1,
    },
    {
        id: 35,
        "type": "questions",
        "title": "Email authentication can help protect against phishing attacks. True or False?",
        "options": [
            'True',
            'False'
        ],
        "correct": 0,
    },
    {
        id: 36,
        "type": "questions",
        "title": "Requiring vendors to use multi-factor authentication to access your network makes users take an additional step beyond logging in with a password. True or False?",
        "options": [
            'True',
            'False'
        ],
        "correct": 0,
    }, {
        id: 37,
        "type": "questions",
        "title": "Properly configured strong encryption – recommended for any devices that connect remotely to your network – can help you detect cyber attacks in your system. True or False?",
        "options": [
            'True',
            'False'
        ],
        "correct": 1,
    },
]
const gameList = [
    {
        name: "hamster",
        url: "",
        duration: "232"
    }, {
        name: "2048",
        url: "",
        duration: "232"
    },
    {
        name: "snake",
        url: ""
    }, {
        name: "tetris",
        url: ""
    }
]
const videoList = [
    {
        id: 0,
        url: "https://www.youtube.com/embed/sdpxddDzXfE",
        duration: "232"
    },
    {
        id: 1,
        url: "https://www.youtube.com/embed/inWWhr5tnEA",
        duration: "420"
    }, {
        id: 2,
        url: "https://www.youtube.com/embed/Kx4y9c7w2JQ",
        duration: "480"
    },
    {
        id: 3,
        url: "https://www.youtube.com/embed/BGMG7AIKNRg",
        duration: "150"
    },
    {
        id: 4,
        url: "https://www.youtube.com/embed/bPVaOlJ6ln0",
        duration: "720"
    },
    {
        id: 5,
        url: "https://www.youtube.com/embed/H3XpuDN4Tsc",
        duration: "600"
    },
    {
        id: 6,
        url: "https://www.youtube.com/embed/ZOtQ21hXJ7k",
        duration: "350"
    },
    {
        id: 7,
        url: "https://www.youtube.com/embed/eIeTXphIRAE",
        duration: "120"
    }
]

function countdown() {

}

function closeModal() {
    if (currentModal.duration > 0)
        alert("It can't end yet")
    else
        $("#modal").css('display', 'none');
}

function openModal(content) {
    if (currentModal.duration) {
        $("#bonus").html(`Bonus: ${currentModal.score} Time left: ${currentModal.duration}s`)
        interval = setInterval(function () {
            currentModal.duration--;
            $("#bonus").html(`Bonus: ${currentModal.score} Time left: ${currentModal.duration}s`)
            if (currentModal.duration === 0) {
                clearInterval(interval)
            }
        }, 1000)
    } else
        $("#bonus").html(`Bonus: ${currentModal.score}`)
    $("#modal").css('display', 'flex');
    let contentEle = $(".content");
    contentEle.empty();
    contentEle.append(content);
}

function rule() {
    return `
       <div class="title">Game Rule</div>
        <div class="selections">
          
              <div class="select">Hello, welcome to the game. In this game, there are 5 levels. In order to pass each level, you need to get at least the minimum score of each level.
            🎮 * 10
            📺 * 20
            🔑 * 50
            Have Fun!
            </div>

        </div>
        <div class="give-up" onclick="closeModal()">Got it</div>
        `
}

function tip() {
    return `
       <div class="title">Message</div>
        <div class="selections">
              <div class="select">You don't have enough points at the moment！</div>

        </div>
        <div class="give-up" onclick="playAgain()">Once again!</div>
        `
}

function getVideo() {
    let videoId = passedRecord.video;
    passedRecord.video++;
    let video = videoList[videoId];
    currentModal.duration = parseInt(video.duration);
    currentModal.score = videoScore;
    return `<iframe class="youtube-player" type="text/html"
                        src="${video.url}" frameborder="0">
                </iframe>;
             
              `
}

function getGame() {
    let gameId = passedRecord.game;
    passedRecord.game++;
    currentModal.duration = 0;
    currentModal.score = gameScore;
    let game = gameList[gameId].name;
    return `<iframe class="youtube-player" type="text/html"
                        src="http://localhost:3000/${game}" frameborder="0">
                </iframe>`;
}


function renderQuiz() {
    let quizId = passedRecord.question;
    passedRecord.question++;
    let quiz = quizList.filter(item => {
        return item.id == quizId
    })[0];
    currentModal.duration = 0;
    currentModal.score = keyScore;
    let title = ` <div class="title">${quiz.title}</div>`;
    let quizEleList = [title];
    quizEleList.push(`<div class="selections">`)
    for (let i = 0; i < quiz.options.length; i++) {
        let op = quiz.options[i];
        quizEleList.push(`<div id="quiz${i}" onclick="checkAnswer(${quizId},${i})" class="select">${op}</div>`)
    }
    quizEleList.push(`</div>`);
    quizEleList.push(`<div class="give-up" onclick="closeModal()">give up</div>`);
    return quizEleList.join("\n");
}

function checkAnswer(quizId, i) {
    if (!check) {
        let quiz = quizList.filter(item => {
            return item.id == quizId
        })[0];
        if (i === quiz.correct) {
            score += keyScore;
            updateScore();
            $("#quiz" + quiz.correct).css("background-color", "green")
            $("#quiz" + quiz.correct).css("color", "white")
            alert("Correct! + 50!");
        } else {
            questionCountdown++;
            $("#quiz" + i).css("background-color", "red")
            $("#quiz" + i).css("color", "white")
            alert("You are wrong!");
        }
    } else {
        alert("You have already answered this question！")
    }
    if (questionCountdown === 3) {
        $("#quiz" + quiz.correct).css("background-color", "green")
        $("#quiz" + quiz.correct).css("color", "white")
        check = false;
    }
}

function playAgain() {
    closeModal();
    startGame(currentLevel)
}

// openModal(rule());
