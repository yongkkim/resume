export class Projects {
    private allProjectsByTwo: Array<Array<string[]>> = [];

    constructor() {
        let project_desc = [];

        let game = {
            title: "In Game Web App",
            desc: ["Built a responsive web app using Angular, JavaScript, and third-party APIs to provide users League of Legends game history",
                "Implemented a search engine for users to search for profiles and match history of any user",
                "Provided infotips for multiple images and texts in grid UI structure",
                "Handled errors from HTTP Responses and input on submit and displayed proper error messages"],
            image: "assets/angular.jpg",
            website: "https://yongkkim.github.io/myprojects/",
            github: "https://github.com/yongkkim/myprojects/tree/master/lolsearch/searchLeague",
            video: "assets/angular_proj.mp4"
        };
        project_desc.push(game);

        let calendar = {
            title: "Calendar",
            desc: ["Built a schedulable calendar using React, JavaScript, and Moment.js",
                "Implemented user-friendly UI to easily change month and year and manage all scheduled plans",
                "Provided users options to view, add, delete one plan, undo, and clear all plans on each day",
                "Used cookies in order to save previous plans for 30 days"],
            image: "assets/react.jpg",
            website: "https://yongkkim.github.io/calendar/",
            github: "https://github.com/yongkkim/calendar/",
            video: "assets/react_proj.mp4"
        };

        project_desc.push(calendar);

        let blog = {
            title: "Blog Website",
            desc: ["Built a responsive blog website to provide brief explanations about an online game using React and third-party APIs",
                "Used third party APIs to get resources such as images and descriptions of the game details",
                "Focused on delivering information to users using videos, images, and texts in simple UI layout",
                "Edited images to fit well to the website UI using Photoshop"],
            image: "assets/lol_blog.png",
            website: "https://yongkkim.github.io/lol_blog/",
            github: "https://github.com/yongkkim/lol_blog.git",
            video: "assets/blog.mp4"
        };
        project_desc.push(blog);

        let arrayWithTwo: Array<string[]> = [];
        var userAgent = navigator.userAgent || navigator.vendor;

        if (/iPad|iPhone|iPod/.test(userAgent) && window.innerWidth < 450) {
            project_desc.forEach((proj) => {
                arrayWithTwo.push(proj);
                this.allProjectsByTwo.push(arrayWithTwo);
                arrayWithTwo = [];
            })
        } else {
            project_desc.forEach((proj, i) => {
                if (i % 2 == 1) {
                    arrayWithTwo.push(proj);
                    this.allProjectsByTwo.push(arrayWithTwo);
                    arrayWithTwo = [];
                } else if (i % 2 == 0) {
                    arrayWithTwo.push(proj);
                    if ((i + 1) == project_desc.length) {
                        this.allProjectsByTwo.push(arrayWithTwo);
                    }
                }
            })
        }
    }

    getProject() {
        console.log(this.allProjectsByTwo);
        return this.allProjectsByTwo;
    }
}