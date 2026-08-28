// =========================================
// MACOS DESKTOP JAVASCRIPT
// =========================================


// =========================================
// GLOBAL VARIABLES
// =========================================

let activeWindow = null;
let highestZIndex = 10;


// =========================================
// GET ELEMENTS
// =========================================

const finderWindow = document.getElementById("finder-window");
const projectsWindow = document.getElementById("projects-window");
const browserWindow = document.getElementById("browser-window");

const filesIcon = document.getElementById("files-icon");
const projectsIcon = document.getElementById("projects-icon");
const browserIcon = document.getElementById("browser-icon");


// =========================================
// OPEN WINDOW FUNCTION
// =========================================

function openWindow(windowElement) {

    if (!windowElement) {
        return;
    }

    // Show window
    windowElement.style.display = "block";

    // Bring window to front
    highestZIndex++;

    windowElement.style.zIndex = highestZIndex;

    activeWindow = windowElement;
}


// =========================================
// CLOSE WINDOW FUNCTION
// =========================================

function closeWindow(windowElement) {

    if (!windowElement) {
        return;
    }

    windowElement.style.display = "none";
}


// =========================================
// MINIMIZE WINDOW
// =========================================

function minimizeWindow(windowElement) {

    if (!windowElement) {
        return;
    }

    windowElement.style.display = "none";
}


// =========================================
// MAXIMIZE WINDOW
// =========================================

function maximizeWindow(windowElement) {

    if (!windowElement) {
        return;
    }


    // Check whether already maximized

    if (windowElement.classList.contains("maximized")) {

        // Restore

        windowElement.classList.remove("maximized");

        windowElement.style.width = "";
        windowElement.style.height = "";

        windowElement.style.left = "";
        windowElement.style.top = "";

        windowElement.style.transform = "translate(-50%, -50%)";

    }

    else {

        // Maximize

        windowElement.classList.add("maximized");

        windowElement.style.width = "calc(100vw - 20px)";
        windowElement.style.height = "calc(100vh - 95px)";

        windowElement.style.left = "50%";
        windowElement.style.top = "calc(50% - 10px)";

        windowElement.style.transform =
            "translate(-50%, -50%)";
    }

    // Bring to front

    highestZIndex++;

    windowElement.style.zIndex = highestZIndex;
}


// =========================================
// DESKTOP ICON DOUBLE CLICK
// =========================================


// Files

filesIcon.addEventListener("dblclick", function () {

    openWindow(finderWindow);

});


// Projects

projectsIcon.addEventListener("dblclick", function () {

    openWindow(projectsWindow);

});


// Browser

browserIcon.addEventListener("dblclick", function () {

    openWindow(browserWindow);

});


// =========================================
// SINGLE CLICK DESKTOP ICON
// =========================================

const desktopIcons =
    document.querySelectorAll(".desktop-icon");


desktopIcons.forEach(function (icon) {

    icon.addEventListener("click", function () {

        // Remove previous selection

        desktopIcons.forEach(function (item) {

            item.classList.remove("selected");

        });


        // Select clicked icon

        icon.classList.add("selected");

    });

});


// =========================================
// WINDOW CONTROLS
// =========================================

const windows =
    document.querySelectorAll(".window");


windows.forEach(function (windowElement) {


    // -----------------------------------------
    // CLOSE BUTTON
    // -----------------------------------------

    const closeButton =
        windowElement.querySelector(".close-btn");


    if (closeButton) {

        closeButton.addEventListener("click", function (event) {

            event.stopPropagation();

            closeWindow(windowElement);

        });

    }


    // -----------------------------------------
    // MINIMIZE BUTTON
    // -----------------------------------------

    const minimizeButton =
        windowElement.querySelector(".minimize-btn");


    if (minimizeButton) {

        minimizeButton.addEventListener("click", function (event) {

            event.stopPropagation();

            minimizeWindow(windowElement);

        });

    }


    // -----------------------------------------
    // MAXIMIZE BUTTON
    // -----------------------------------------

    const maximizeButton =
        windowElement.querySelector(".maximize-btn");


    if (maximizeButton) {

        maximizeButton.addEventListener("click", function (event) {

            event.stopPropagation();

            maximizeWindow(windowElement);

        });

    }


    // -----------------------------------------
    // CLICK WINDOW
    // -----------------------------------------

    windowElement.addEventListener("mousedown", function () {

        highestZIndex++;

        windowElement.style.zIndex = highestZIndex;

        activeWindow = windowElement;

    });

});


// =========================================
// FINDER FILE SELECTION
// =========================================

const fileItems =
    document.querySelectorAll(".file-item");


fileItems.forEach(function (file) {

    file.addEventListener("click", function (event) {

        event.stopPropagation();


        // Remove previous selection

        fileItems.forEach(function (item) {

            item.classList.remove("selected");

        });


        // Select current file

        file.classList.add("selected");

    });

});


// =========================================
// DOUBLE CLICK FILES
// =========================================

fileItems.forEach(function (file) {

    file.addEventListener("dblclick", function () {

        const fileType =
            file.getAttribute("data-type");

        const fileName =
            file.getAttribute("data-name");


        // -------------------------------------
        // FOLDER
        // -------------------------------------

        if (fileType === "folder") {

            openFolder(fileName);

        }


        // -------------------------------------
        // FILE
        // -------------------------------------

        else {

            openFile(fileName);

        }

    });

});


// =========================================
// OPEN FOLDER
// =========================================

function openFolder(folderName) {

    console.log(
        "Opening folder:",
        folderName
    );


    // Change Finder title

    const title =
        finderWindow.querySelector(".window-title");


    if (title) {

        title.textContent =
            folderName;

    }


    // Bring Finder forward

    openWindow(finderWindow);

}


// =========================================
// OPEN FILE
// =========================================

function openFile(fileName) {

    console.log(
        "Opening file:",
        fileName
    );


    // -------------------------------------
    // README
    // -------------------------------------

    if (fileName === "Projects") {

        openWindow(projectsWindow);

        return;
    }
    if (fileName === "README.txt") {

        alert(
            "README.txt\n\n" +
            "Welcome to my macOS-style desktop!"
        );

        return;
    }


    // -------------------------------------
    // WEBSITE
    // -------------------------------------

    if (fileName === "website.html") {

        openWindow(browserWindow);

        return;
    }


    // -------------------------------------
    // IMAGE
    // -------------------------------------

    if (fileName === "wallpaper.jpg") {

        alert(
            "wallpaper.jpg\n\n" +
            "This image can be connected to your actual wallpaper later."
        );

        return;
    }


    // -------------------------------------
    // DEFAULT
    // -------------------------------------

    alert(
        "Opening: " + fileName
    );

}


// =========================================
// DOCK INTERACTION
// =========================================

const dockItems =
    document.querySelectorAll(".dock-item");


dockItems.forEach(function (dockItem) {

    dockItem.addEventListener("click", function () {

        const app =
            dockItem.getAttribute("data-app");


        // -------------------------------------
        // FINDER
        // -------------------------------------

        if (app === "finder") {

            openWindow(finderWindow);

        }


        // -------------------------------------
        // BROWSER
        // -------------------------------------

        else if (app === "browser") {

            openWindow(browserWindow);

        }


        // -------------------------------------
        // PROJECTS
        // -------------------------------------

        else if (app === "projects") {

            openWindow(projectsWindow);

        }


        // -------------------------------------
        // TERMINAL
        // -------------------------------------

        else if (app === "terminal") {

            alert(
                "Terminal app coming soon!"
            );

        }


        // -------------------------------------
        // SETTINGS
        // -------------------------------------

        else if (app === "settings") {

            alert(
                "Settings app coming soon!"
            );

        }


        // -------------------------------------
        // TRASH
        // -------------------------------------

        else if (app === "trash") {

            alert(
                "Trash is empty."
            );

        }

    });

});


// =========================================
// WINDOW DRAGGING
// =========================================

windows.forEach(function (windowElement) {

    const header =
        windowElement.querySelector(".window-header");


    if (!header) {
        return;
    }


    let isDragging = false;

    let offsetX = 0;
    let offsetY = 0;


    // -----------------------------------------
    // MOUSE DOWN
    // -----------------------------------------

    header.addEventListener("mousedown", function (event) {

        // Don't drag when clicking buttons

        if (
            event.target.closest(".window-controls")
        ) {

            return;

        }


        // Don't drag maximized window

        if (
            windowElement.classList.contains("maximized")
        ) {

            return;

        }


        isDragging = true;


        const rect =
            windowElement.getBoundingClientRect();


        offsetX =
            event.clientX - rect.left;

        offsetY =
            event.clientY - rect.top;


        // Bring to front

        highestZIndex++;

        windowElement.style.zIndex =
            highestZIndex;


        // Remove center transform

        windowElement.style.transform =
            "none";


        // Set exact current position

        windowElement.style.left =
            rect.left + "px";

        windowElement.style.top =
            rect.top + "px";


        document.body.style.userSelect =
            "none";

    });


    // -----------------------------------------
    // MOUSE MOVE
    // -----------------------------------------

    document.addEventListener("mousemove", function (event) {

        if (!isDragging) {
            return;
        }


        let newLeft =
            event.clientX - offsetX;

        let newTop =
            event.clientY - offsetY;


        // Keep window inside screen

        const maxLeft =
            window.innerWidth -
            windowElement.offsetWidth;


        const maxTop =
            window.innerHeight -
            80;


        newLeft =
            Math.max(
                0,
                Math.min(newLeft, maxLeft)
            );


        newTop =
            Math.max(
                30,
                Math.min(newTop, maxTop)
            );


        windowElement.style.left =
            newLeft + "px";

        windowElement.style.top =
            newTop + "px";

    });


    // -----------------------------------------
    // MOUSE UP
    // -----------------------------------------

    document.addEventListener("mouseup", function () {

        isDragging = false;

        document.body.style.userSelect =
            "";

    });

});


// =========================================
// DESKTOP BACKGROUND CLICK
// =========================================

document
    .querySelector(".desktop")
    .addEventListener("click", function (event) {

        // Only if directly clicking desktop

        if (
            event.target.classList.contains("desktop")
        ) {

            desktopIcons.forEach(function (icon) {

                icon.classList.remove("selected");

            });

        }

    });


// =========================================
// CLOCK
// =========================================

function updateClock() {

    const timeElement =
        document.getElementById("menu-time");


    if (!timeElement) {
        return;
    }


    const now =
        new Date();


    let hours =
        now.getHours();


    let minutes =
        now.getMinutes();


    // Add leading zero

    minutes =
        minutes.toString().padStart(2, "0");


    // 12-hour format

    const ampm =
        hours >= 12 ? "PM" : "AM";


    hours =
        hours % 12;


    hours =
        hours || 12;


    timeElement.textContent =
        `${hours}:${minutes} ${ampm}`;

}


// Update immediately

updateClock();


// Update every minute

setInterval(
    updateClock,
    60000
);


// =========================================
// ESCAPE KEY
// =========================================

document.addEventListener("keydown", function (event) {

    // Press ESC to close active window

    if (event.key === "Escape") {

        if (activeWindow) {

            closeWindow(activeWindow);

        }

    }

});


// =========================================
// STARTUP MESSAGE
// =========================================

console.log(
    "macOS-style desktop loaded successfully!"
);